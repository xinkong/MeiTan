/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar,Image} from 'react-native';

import Main from '../Main'


var Dimensions = require('Dimensions')
var {width, height} = Dimensions.get('window');

export default class Luancher extends Component<Props> {

    componentDidMount(): void {
        setTimeout(()=>{
            this.props.navigator.replace({
                component:Main
            });
            }
        ,3000);
    }

    render() {
        return (
            <View>
                <StatusBar hidden={true}/>
                <Image source={require("../../res/images/luancher.png")} style={styles.luancherImage}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    luancherImage:{
        width:width,
        height:height,
        resizeMode: 'cover',
        //祛除内部元素的白色背景
        backgroundColor:'rgba(0,0,0,0)',

    }
});
