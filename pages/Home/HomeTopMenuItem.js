/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, FlatList} from 'react-native';

var Dimensions = require('Dimensions')
var {width, height} = Dimensions.get('window');

export default class HomeTopMenuItem extends Component<Props> {

    constructor(Props) {
        super(Props);
        // 创建datasource数据源
        // var ds=new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
        this.state = {
            // dataSource :ds.cloneWithRows(this.props.dataArr),
            dataSource2: this.props.dataArr,

        }
    }
    // _keyExtractor = (item, index) => item.title;
    render() {
        return (
            <View style={styles.container}>
                {/*<ListView*/}
                {/*dataSource={this.state.dataSource}*/}
                {/*contentContainerStyle={styles.contentContainerStyle}*/}
                {/*renderRow={(rowData) => <View style={styles.cellStyle}>*/}
                {/*<Image style={{width: 60, height: 60}} source={rowData.image}/>*/}
                {/*<Text>{rowData.title}</Text></View>}*/}
                {/*/>*/}

                <FlatList
                    horizontal={false}
                    numColumns={5}
                    data={this.state.dataSource2}
                    keyExtractor={(item) => item.title}
                    renderItem={({item}) => <View style={styles.cellStyle}>
                        <Image style={{width: 60, height: 60}} source={item.image}/>
                        {console.log("===" + item.title)}
                        <Text>{item.title}</Text>

                    </View>}
                />
            </View>
        )
            ;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    cellStyle: {
        width: width / 5,
        height: width / 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,

    },
    contentContainerStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: width,
    }

});
