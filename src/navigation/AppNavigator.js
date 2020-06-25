import { Routes } from './Routes';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

const AppNavigation = createSwitchNavigator({
    [Routes.Tabs]: require("./TabNavigator").default,
    [Routes.Login]: require("../screens/login-screen/index").default,
    [Routes.Todo]: require("../screens/todo-screen/index").default
},{
    initialRouteName: Routes.Login
});

export default createAppContainer(AppNavigation);