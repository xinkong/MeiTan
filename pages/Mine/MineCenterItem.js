/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import MineBottonItem from './MineBottonItem'


export default class MineCenterItem extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <MineBottonItem
                    leftIcon={require("../../res/images/collect.png")}
                    leftName="我的订单"
                    rightName="查看全部订单"
                />

                <View style={styles.conetntStyle}>
                    {this.stuContentView()}
                </View>

            </View>
        );
    }

    stuContentView() {
        var imags = [require('../../res/images/order1.png'), require('../../res/images/order2.png'),
            require('../../res/images/order3.png'), require('../../res/images/order4.png')];
        var middleData=["待付款", "待使用", "待评价", "退款/售后"];
        var itemArr = [];
        for (var i = 0; i < 4; i++) {
            itemArr.push(<InnerView key={i} iconName={imags[i]} title={middleData[i]}/>)
        }
        return (itemArr);
    }
}

class InnerView extends Component<Props> {
    static defaultProps={
        iconName:undefined,
        title:'',
    }
    render(): React.ReactNode {
        return (<View style={{ alignItems:'center'}}>
            <Image source={this.props.iconName}  style={{width:30,height:20}}/>
            <Text>
                {this.props.title}
            </Text>

        </View>);
    }

}

const styles = StyleSheet.create({
    container: {

    },
    conetntStyle:{
        backgroundColor:'white',
        paddingTop:10,
        paddingBottom:10,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection:'row',
        alignItems: "center",
        justifyContent: 'space-between',
    }

});
