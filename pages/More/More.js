/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView} from 'react-native';
import TopNavigator from '../common/TopNavigator'

import MoreItem from './MoreItem'
export default class More extends Component<Props> {
    render() {
        return (
            <View>
                <TopNavigator
                    isCanBack={false}
                    title="更多"
                    rightIcon={require('../../res/images/icon_homepage_scan.png')}
                />
                <ScrollView style={styles.scrollViewStyle}>

                    <View style={{marginTop:10}}>
                        <MoreItem  leftTitle="扫一扫" leftIcon={require('../../res/images/jrxd.png')}/>
                    </View>

                    <View style={{marginTop:10}}>
                        <MoreItem  leftTitle="省流量提示" isSwitch={true} leftIcon={require('../../res/images/jrxd.png')}/>
                        <MoreItem  leftTitle="消息提醒" leftIcon={require('../../res/images/jrxd.png')}/>
                        <MoreItem  leftTitle="邀请好友使用码团" leftIcon={require('../../res/images/jrxd.png')}/>
                        <MoreItem  leftTitle="清空缓存" rightTitle="1.99M" leftIcon={require('../../res/images/jrxd.png')}/>
                    </View>

                    <View style={{marginTop:10}}>
                        <MoreItem  leftTitle="问卷调查" leftIcon={require('../../res/images/jrxd.png')}/>
                        <MoreItem  leftTitle="支付帮助" leftIcon={require('../../res/images/jrxd.png')}/>
                        <MoreItem  leftTitle="网络诊断" leftIcon={require('../../res/images/jrxd.png')}/>
                        <MoreItem  leftTitle="我要应聘" leftIcon={require('../../res/images/jrxd.png')}/>
                    </View>
                    <View style={{marginTop:10}}>
                        <MoreItem  leftTitle="精品应用" leftIcon={require('../../res/images/jrxd.png')}/>
                    </View>

                    <View style={{marginTop:10}}>
                        <MoreItem  leftTitle="问卷调查" leftIcon={require('../../res/images/jrxd.png')}/>
                        <MoreItem  leftTitle="支付帮助" leftIcon={require('../../res/images/jrxd.png')}/>
                        <MoreItem  leftTitle="网络诊断" leftIcon={require('../../res/images/jrxd.png')}/>
                        <MoreItem  leftTitle="我要应聘" leftIcon={require('../../res/images/jrxd.png')}/>
                    </View>

                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    scrollViewStyle:{
        backgroundColor:'#e8e8e8',
    },
    itemStyle:{
       marginTop:15
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
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
