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

export default class MineBottonItem extends Component<Props> {

    static  defaultProps={
        leftIcon:undefined,
        leftName:undefined,
        rightIcon:undefined,
        rightName:undefined
    }

    render() {
        return (
            <View style={styles.container}>
                {this.stuLeftView()}

                <View style={{flexDirection: 'row', alignItems: 'center'}}>

                    {this.stuRightView()}
                    <Image source={require('../../res/images/icon_cell_rightarrow.png')}
                           style={{width: 8, height: 13, marginRight: 10,marginLeft: 8}}/>
                </View>
            </View>
        );
    }

    stuLeftView() {
        return (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image style={{width:30,height: 30,marginLeft:15}} source={this.props.leftIcon}/>
                <Text style={{marginLeft:10}}>{this.props.leftName}</Text>
            </View>
        )
    }

    stuRightView() {
        if(this.props.rightIcon != undefined){
            return <Image source={this.props.rightIcon}></Image>
        }else if(this.props.rightName != undefined){
            return <Text>{this.props.rightName}</Text>
        }
    }
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#e8e8e8',
        alignItems:'center',
        borderBottomWidth: 0.5,
    },

});
