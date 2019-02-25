/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home/Home'
import Find from './Find/Find'
import More from './More/More'
import Mine from './Mine/Mine'

import {Navigator} from "react-native-deprecated-custom-components"

export default class Main extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home'  //默认选中主页
        }
    }

    render() {
        return (

            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="首页"
                    renderIcon={() => <Image source={require('../res/images/icon_tabbar_homepage.png')}
                                             style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require('../res/images/icon_tabbar_homepage_selected.png')}
                                                     style={styles.iconStyle}/>}
                    onPress={() => this.setState({selectedTab: 'home'})}>
                    <Navigator
                        initialRoute={{
                            name: "首页",
                            component: Home
                        }
                        }
                        renderScene={
                            (router, navigator) => {
                                let Component = router.component;
                                return <Component {...router.params} navigator={navigator}/>
                            }

                        }/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'find'}
                    title="发现"
                    renderIcon={() => <Image source={require("../res/images/icon_tabbar_merchant_normal.png")}
                                             style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require("../res/images/icon_tabbar_merchant_selected.png")}
                                                     style={styles.iconStyle}/>}
                    onPress={() => this.setState({selectedTab: 'find'})}>
                    <Navigator
                        initialRoute={{
                            name: "发现",
                            component: Find
                        }
                        }
                        renderScene={
                            (router, navigator) => {
                                let Component = router.component;
                                return <Component {...router.params} navigator={navigator}/>
                            }

                        }/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'mine'}
                    title="我的"
                    renderIcon={() => <Image source={require("../res/images/icon_tabbar_mine.png")}
                                             style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require("../res/images/icon_tabbar_mine_selected.png")}
                                                     style={styles.iconStyle}/>}
                    onPress={() => this.setState({selectedTab: 'mine'})}>
                    <Navigator
                        initialRoute={{
                            name: "我的",
                            component: Mine
                        }
                        }
                        renderScene={
                            (router, navigator) => {
                                let Component = router.component;
                                return <Component {...router.params} navigator={navigator}/>
                            }

                        }/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'more'}
                    title="更多"
                    renderIcon={() => <Image source={require("../res/images/icon_tabbar_misc.png")}
                                             style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require("../res/images/icon_tabbar_misc_selected.png")}
                                                     style={styles.iconStyle}/>}
                    onPress={() => this.setState({selectedTab: 'more'})}>
                    <Navigator
                        initialRoute={{
                            name: "更多",
                            component: More
                        }
                        }
                        renderScene={
                            (router, navigator) => {
                                let Component = router.component;
                                return <Component {...router.params} navigator={navigator}/>
                            }

                        }/>
                </TabNavigator.Item>
            </TabNavigator>

        );
    }
}

const styles = StyleSheet.create({
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
    iconStyle: {
        width: Platform.OS === 'ios' ? 30 : 25,
        height: Platform.OS === 'ios' ? 30 : 25
    }
});
