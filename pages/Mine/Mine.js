/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import MineBottonItem from './MineBottonItem'
import MineCenterItem from './MineCenterItem'
import MineTopItem from './MineTopItem'

export default class Mine extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>

                <ScrollView>

                    <MineTopItem/>

                    <MineCenterItem/>

                    <View style={{marginTop: 20}}>
                        <MineBottonItem
                            leftIcon={require("../../res/images/draft.png")}
                            leftName="XINKONG的钱包"
                            rightName="88888888.00"
                        />
                        <MineBottonItem
                            leftIcon={require('../../res/images/like.png')}
                            leftName='抵用券'
                            rightName='10张'
                        />
                    </View>

                    <View style={{marginTop: 20}}>
                        <MineBottonItem
                            leftIcon={require('../../res/images/card.png')}
                            leftName='积分商城'
                        />
                    </View>
                    <View style={{marginTop: 20}}>
                        <MineBottonItem
                            leftIcon={require('../../res/images/new_friend.png')}
                            leftName='今日推荐'
                            rightIcon={require('../../res/images/me_new.png')}
                        />
                    </View>
                    <View style={{marginTop: 20}}>
                        <MineBottonItem
                            leftIcon={require('../../res/images/card.png')}
                            leftName='我要合作'
                            rightName='轻松开店，招财进宝'
                        />
                    </View>

                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {},
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
