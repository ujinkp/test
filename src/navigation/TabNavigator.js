import * as React from 'react';
import {Image, StyleSheet} from "react-native"
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack"; 
import { Routes } from './Routes';
import {w} from  "../utils/Layout";

// MAIN TAB NAVIGATOR
const TabNavigator = createBottomTabNavigator( 
    {
        [Routes.Todo]: {
            screen: require("../screens/todo-screen").default,
            navigationOptions:  {
                tabBarIcon: ({ focused }) => (
					<Image
						resizeMode='contain'
						source={focused ? require("../assets/icon/home2.png") : require("../assets/icon/home.png")}
						style={{ ...styles.icon, flex: 1 }}
					/>
				)
            }
        }, 
        [Routes.Swapi]: {
                screen: require("../screens/swapi-screen").default,
                navigationOptions:  {
                    tabBarIcon: ({ focused }) => (
                        <Image
                            resizeMode='contain'
                            source={focused ? require("../assets/icon/safety2.png") : require("../assets/icon/safety.png")}
                            style={{ ...styles.icon, flex: 1 }}
                        />
                    )
                }
        },
        [Routes.History]: {
            screen: require("../screens/history-screen").default,
            navigationOptions:  {
                tabBarIcon: ({ focused }) => (
					<Image
						resizeMode='contain'
						source={focused ? require("../assets/icon/history2.png") : require("../assets/icon/history.png")}
						style={{ ...styles.icon, flex: 1 }}
					/>
				)
            }
        }
    }, {
        initialRouteName: Routes.Todo,
        tabBarOptions: {
            showLabel: false,
			showIcon: true,
			style: { backgroundColor: "#fff" },
			tabStyle: {
				backgroundColor: '#fff',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column'
			},
			labelPosition: 'below-icon',
			allowFontScaling: true,
			adaptive: false,
			keyboardHidesTabBar: false 
        }
    }
)

const styles = StyleSheet.create({
    icon: {
        width: w(7),
        height:  w(7)
    }
});

export default TabNavigator;