import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';

import HomeTopMenuItem from './HomeTopMenuItem'

var Dimensions =require('Dimensions')
var {width, height} = Dimensions.get('window');

export default class HomeTopMenu extends Component<Props> {

    constructor(Props) {
        super(Props);

        const data = [[
            {"title": "美食", "image": require('../../res/images/ms.png')},
            {"title": "电影", "image": require('../../res/images/dy.png')},
            {"title": "酒店", "image": require('../../res/images/jd.png')},
            {"title": "休闲娱乐", "image": require('../../res/images/xxyl.png')},
            {"title": "外卖", "image": require('../../res/images/wm.png')},
            {"title": "自助餐", "image": require('../../res/images/zzc.png')},
            {"title": "KTV", "image": require('../../res/images/ktv.png')},
            {"title": "火车票机票", "image": require('../../res/images/hcpjp.png')},
            {"title": "丽人", "image": require('../../res/images/lr.png')},
            {"title": "周边游", "image": require('../../res/images/zby.png')}], [
            {"title": "足疗按摩", "image": require('../../res/images/zlam.png')},
            {"title": "购物", "image": require('../../res/images/gw.png')},
            {"title": "今日新单", "image": require('../../res/images/jrxd.png')},
            {"title": "小吃快餐", "image": require('../../res/images/xckc.png')},
            {"title": "生活服务", "image": require('../../res/images/shfw.png')},
            {"title": "甜点饮品", "image": require('../../res/images/tdyp.png')},
            {"title": "美甲", "image": require('../../res/images/mj.png')},
            {"title": "景点门票", "image": require('../../res/images/jdmp.png')},
            {"title": "旅游", "image": require('../../res/images/ly.png')},
            {"title": "全部分类", "image": require('../../res/images/qbfl.png')}]
        ];
        this.state = {
            data,
            currenentPage: 0
        }

    }

    render() {
        return (
            <View style={styles.containStyle}>
                {/*ViewPager   ScrollView*/}
                <ScrollView horizontal={true}
                            pagingEnabled={true}
                            showsHorizontalScrollIndicator={false}
                            onMomentumScrollEnd={(e)=>{
                                console.log(e.nativeEvent.contentOffset.x/width)
                                console.log(e.nativeEvent.contentOffset.x)
                                console.log(width)
                                console.log("======")
                                var offSet = this.changeTwoDecimal_f(e.nativeEvent.contentOffset.x)
                                var widthInt =this.changeTwoDecimal_f(width)
                                console.log(offSet)
                                console.log(widthInt)

                                this.setState({currenentPage:(offSet/widthInt)})
                            }}

                >
                    {this.renderScrollItem()}
                </ScrollView>
                <View style={styles.indicatorStyle}>
                    {this.renderIndicator()}
                </View>
            </View>
        );
    }

    changeTwoDecimal_f(x) {
        try {
            let f_x1 = parseFloat(x);
            if (isNaN(f_x1)) {
                return x;
            }
            let f_x = Math.round(x * 100) / 100;
            let s_x = f_x.toString();
            let pos_decimal = s_x.indexOf('.');
            if (pos_decimal < 0) {
                pos_decimal = s_x.length;
                s_x += '.';
            }
            while (s_x.length <= pos_decimal + 2) {
                s_x += '0';
            }
            return s_x;
        } catch (e) {
            return '0.00';
        }
    }


    renderScrollItem() {
        var itemArr = [];
        for (var i = 0; i < this.state.data.length; i++) {
            itemArr.push(<HomeTopMenuItem key={i} dataArr={this.state.data[i]}/>)
        }
        return itemArr;
    }

    renderIndicator() {
        var indicatorArr=[];
        // var  number '10'   ==number2  10
        for (var i = 0; i < this.state.data.length; i++) {
            //== 一般等于  ====严格等于
            var style=(i== this.state.currenentPage)?{color:'red'}:{color:'gray'}
            indicatorArr.push(<Text  key={i} style={[{fontSize:25},style]}>&bull;</Text>)
        }
        return indicatorArr;
    }
}

const styles = StyleSheet.create({
    indicatorStyle:{
        flexDirection:'row',
        justifyContent:'center'
    },
    container: {}
});