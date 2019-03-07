import React from 'react';
import{
    View
} from 'react-native'
import {
    createStackNavigator,
    createBottomTabNavigator,
    createMaterialTopTabNavigator
} from 'react-navigation'
import Home from './screens/home';
import Discover from './screens/discover';



class TabPlayerIcon extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View>
		       
			</View>
		);
	}
}

// function tabOptions(title, iconName, focusedIcon) {
// 	focusedIcon = focusedIcon || iconName;
// 	return ({ navigation }) => {
// 		return {
// 			tabBarLabel: title,
// 			tabBarIcon: ({ tintColor, focused }) => (
// 				<YIcon
// 					name={focused ? focusedIcon : iconName}
// 					size={26}
// 					style={{ color: tintColor }}
// 				/>
// 			),
// 		};
// 	};
// }
let tabNavRouteConfig = {
	HomeTab: {
		screen: Home,
		path: '/',
		navigationOptions: {
			tabBarLabel: 'Home',
			tabBarIcon: ({ tintColor, focused }) => (
				<YIcon
					name={focused ? 'home' : 'home'}
					size={21}
					style={{ color: tintColor }}
				/>
			),
		},
	},
	CategoryTab: {
		screen: Discover,
		path: '/CategoryArticle',
		navigationOptions: {
			tabBarLabel: '趣文',
			tabBarIcon: ({ tintColor, focused }) => (
				<YIcon
					name={focused ? 'classification' : 'classification'}
					size={24}
					style={{ color: tintColor }}
				/>
			),
		},
	},

	DiscoverTab: {
		screen: Discover,
		path: '/discover',
		navigationOptions: {
			tabBarLabel: '发现',
			tabBarIcon: ({ tintColor, focused }) => (
				<YIcon
					name={focused ? 'find' : 'find'}
					size={23}
					style={{ color: tintColor }}
				/>
			),
		},
	},

	CategoryAppTab: {
		screen: CategoryApp,
		path: '/CategoryApp',
		navigationOptions: {
			tabBarLabel: '应用',
			tabBarIcon: ({ tintColor, focused }) => (
				<YIcon
					name={focused ? 'block-circle' : 'block-circle'}
					size={22}
					style={{ color: tintColor }}
				/>
			),
		},
	},


	ProfileTab: {
		screen: ProfileScreen,
		path: '/profile/:id',
		navigationOptions: ({ navigation }) => ({
			tabBarLabel: '我的',
			tabBarIcon: ({ tintColor, focused }) => (
				<TabUserIcon tintColor={tintColor} focused={focused} />
			),
		}),
	},

	
	ReleaseTab: {
		screen: () => null,
		navigationOptions: ({ navigation }) => ({
			tabBarOnPress: (e) => {
				if (sign.isIn()) {
					let component = <SmallVideo />;
					modal.show({ component });
					return null;
				}
				sign.in();
			},
			tabBarLabel: () => () => null,
			iconStyle: { height: 36, width: 36 },
			tabBarIcon: ({ tintColor, focused }) => (
				<YIcon
					name={focused ? 'release' : 'release'}
					size={36}
					style={[{ color: '#ff6f6b' }, style.releaseicon]}
				/>
			),
		})

	}
};
const tabNavRoute = platform.tabs.reduce((result, tabName) => {
	return Object.assign(result, {
		[tabName]: tabNavRouteConfig[tabName]
	});
}, {});

if (__DEV__) {
	tabNavRoute.DemoTab = {
		screen: DemoScreen,
		path: '/demo',
		navigationOptions: ({ navigation }) => ({
			tabBarLabel: 'Demo',
			tabBarIcon: ({ tintColor, focused }) => (
				<Icon
					name="ios-basket"
					size={21}
					style={{ color: tintColor }}
				/>
			),
		}),
	};
}

// const tabNavRoute = {};
// for (let tab of tabBarConfig) {
// 	if (allTabs[tab]) {
// 		tabNavRoute[tab] = allTabs[tab]
// 	}
// }
const TabNav = TabNavigator(tabNavRoute,
	{
		tabBarPosition: 'bottom',
		animationEnabled: false,
		swipeEnabled: false,
		getLabel: () => { Toast.show({ text: 's' }); },
		lazy: true,
		tabBarComponent: Platform.OS === 'android' ? TabBarBottom : TabBarTop,
		tabBarOptions: {
			showIcon: true,
			activeTintColor: styles.themeColor,
			inactiveTintColor: '#999',
			labelStyle: {
				fontSize: 12,
				marginTop: Platform.OS === 'android' ? 3 : 4,
			},
			style: {
				backgroundColor: '#fff',
				height: styles.homeTabBottonHeight,
				borderTopColor: '#e8e8e8',
				borderTopWidth: 1,
				elevation: 0,
				paddingBottom: 4,
			},
			tabStyle: {
				padding: 0,
				// margin: 0,
				paddingTop: 4,
				justifyContent: 'center',
			},
			indicatorStyle: { backgroundColor: "transparent" },
		}
	}
);

let routes = {
	Root: {
		screen: TabNav,
	},
	Personal: {
		screen: PersonalScreen,
		navigationOptions: (navigation, screenProps) => ({
			title: `个人主页`
		}),
	},
	...HomeRoute,
	...actRoutes,
	...categoryRoutes,
	...discoverRoutes,
	...searchRoutes,
	...profileRoutes,
	...appRoutes,
	...YWebViewRoutes,
	...personalRoutes,
};

const prefix = Platform.OS === 'android' ? 'yryzapp://open/' : 'yryzapp://';
const AppNavigator = StackNavigator(routes, { headerMode: "none" });
AppNavigator.router.getStateForAction = withDoubleClick.withNavigationPreventDuplicate(
	AppNavigator.router.getStateForAction
);
export default class extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<AppNavigator onNavigationStateChange={onNavigationStateChange}
				ref={(nav) => { setNavigator(nav); }}
				uriPrefix={prefix} />
		);
	}

	componentDidMount() {
		net.init();
	}
}

const style = StyleSheet.create({
	circle: {
		position: 'absolute',
		top: 0,
		right: 0,
		color: styles.themeColor,
		zIndex: 2,
		backgroundColor: 'transparent'
	},
	// releaseicon: {
	// 	marginTop: platform === 'ios' ? -2 : -2,
	// 	height: 38,
	// 	width: 38,
	// 	justifyContent: 'flex-start',
	// 	color: '#ff6f6b',
	// }
});
