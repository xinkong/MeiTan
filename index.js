/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import React, {Component} from 'react';
import App from './App';
import {name as appName} from './app.json';
import Main from './pages/Main'
import Luancher from './pages/Luancher/Luancher'

import {Navigator} from "react-native-deprecated-custom-components"

class MeiTanApp extends Component<Props> {

    render(): * {
        return (
            <Navigator
                initialRoute={
                    {
                        name: "启动页",
                        component:Luancher
                    }

                }
                renderScene={
                    (router, navigator) => {
                        let Component = router.component;
                        return <Component {...router.params} navigator={navigator}/>
                    }

                }
            />
        )
    }

}

AppRegistry.registerComponent(appName, () => MeiTanApp);
