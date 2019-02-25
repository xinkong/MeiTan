/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * 界面顶部导航
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View ,StatusBar,Image} from 'react-native';


export default class TopNavigator extends Component<Props> {

    static defaultProps = {
        isCanBack:true,
        title:undefined,
        rightIcon:undefined
    }

    render() {
        return (
            <View style={styles.navViewStyle}>

                <StatusBar
                    backgroundColor='rgba(255,96,0,1.0)'
                    barStyle="light-content"
                />

                {this.isCanBackView()}

                <Text style={{fontSize:16,color:'#ffffff'}}>{this.props.title}</Text>

                {this.rightView()}
            </View>
        );
    }

    isCanBackView() {
        if(this.props.isCanBack){
            return <Image style={styles.leftStyle} source={require('../../res/images/icon_camera_back_highlighted.png')}></Image>
        }
    }

    rightView() {
        if(this.props.rightIcon != undefined){
            return <Image style={styles.rightStyle} source={this.props.rightIcon}/>
        }
    }
}

const styles = StyleSheet.create({
    navViewStyle:{
        height: 60,
        backgroundColor: 'rgba(255,96,0,1.0)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        top: -10
    },
    rightStyle:{
        width:30,
        height: 30,
        position: 'absolute',
        right:15
    },
    leftStyle:{
        width:20,
        height: 20,
        position: 'absolute',
        left:15
    }
});
