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

export default class MineTopItem extends Component<Props> {
    render() {

        return (
            <View style={styles.container}>
                {this.stuTopView()}
                {this.stuBottomView()}
            </View>
        );
    }

    stuTopView() {
        return (<View style={styles.topStyle}>

            <Image style={{width:52,height:52}} source={require("../../res/images/icon_tabbar_mine_selected.png")}/>

            <Text style={{marginLeft:10,color:'#ffffff',fontSize:18}}>XINKONG</Text>

            <Image style={{width:18,height:18,marginLeft:10}} source={require("../../res/images/avatar_vip.png")}></Image>

        </View>)
    }

    stuBottomView() {
        return (<View style={styles.bottomStyle}>

            <View style={{alignItems:'center'}}>

                <Text style={styles.textStyle}>100</Text>
                <Text style={styles.textStyle}>美团券</Text>
            </View>

            <View style={{backgroundColor:'white',width:1,height:20}}/>

            <View style={{alignItems:'center'}}>

                <Text style={styles.textStyle}>12</Text>
                <Text style={styles.textStyle}>评价</Text>
            </View>

            <View style={{backgroundColor:'white',width:1,height:20}}/>

            <View style={{alignItems:'center'}}>

                <Text style={styles.textStyle}>50</Text>
                <Text style={styles.textStyle}>收藏</Text>
            </View>

        </View>);
    }
}

const styles = StyleSheet.create({
    container:{

    },
    textStyle:{
        color: '#ffffff',
        fontSize: 18,
        marginTop:2
    },
    topStyle:{
        backgroundColor:'rgba(255,96,0,1.0)',
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:20,
        paddingTop:25,
        paddingBottom:25
    },
    bottomStyle:{
        backgroundColor:'rgba(255,96,0,0.7)',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingLeft:20,
        paddingRight:20,
        paddingTop:6,
        paddingBottom:8
    }
});
