/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,Switch} from 'react-native';

export default class MoreItem extends Component<Props> {

    constructor(props) {
        super(props);
        this.state={
            isOn:false
        }

    }

    //组件传值设置用的
    static defaultProps = {
        leftIcon: undefined,
        leftTitle: undefined,
        isSwitch: false,
        rightTitle: undefined
    }

    render() {
        return (
            <View style={styles.container}>
                {/*左边*/}
                {this.leftView()}
                {/*右边*/}
                {this.rightSubView()}
            </View>
        );
    }

    leftView() {
        return (
            <View style={styles.leftView}>
                <Image source={this.props.leftIcon} style={styles.leftIcon}></Image>
                <Text style={{marginLeft:10}}>{this.props.leftTitle}</Text>
            </View>);
    }

    rightSubView() {
        if(this.props.isSwitch){
            return <Switch value={this.state.isOn} onValueChange={(isOn)=>{this.setState({isOn:isOn})}}/>
        }else if(this.props.rightTitle == undefined){
            return <Image source={require('../../res/images/icon_cell_rightarrow.png')}
                   style={{width: 8, height: 13, marginRight: 10,marginLeft: 8}}/>
        }else {
            return (<View style={{flexDirection:'row', alignItems:'center'}}>
                <Text style={{}}>{this.props.rightTitle}</Text>
                <Image source={require('../../res/images/icon_cell_rightarrow.png')}
                       style={{width: 8, height: 13, marginRight: 10,marginLeft: 8}}/>
            </View>)
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
    leftView: {
        flexDirection:'row',
        alignItems:'center',
        marginLeft:8,
    },
    leftIcon: {
        width: 30,
        height: 30
    }
});


