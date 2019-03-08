import React from 'react';
import{
	View,
	StyleSheet,
	Platform
} from 'react-native'
import {
    createStackNavigator,
    createBottomTabNavigator,
	createAppContainer
} from 'react-navigation'
import Home from './screens/home';
import Discover from './screens/discover';
import Player from './screens/player';
import Library from './screens/library';
import Profile from './screens/profile';
import Icon from 'react-native-vector-icons/FontAwesome';



class PlayIcon extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Icon name={this.props.focused ?'play-circle': 'play-circle'}
					size={40}
					style={{ color: this.props.tintColor ,bottom:-10,zIndex:99,position:'absolute'}}/>	
		);
	}
}

let tabNavRouteConfig = {
	HomeTab: {
		screen: Home,
		path: '/',
		navigationOptions: {
			tabBarLabel: 'Home',
			tabBarIcon: ({ tintColor, focused }) => (
				<Icon
					name={focused ? 'home' : 'home'}
					size={21}
					style={{ color: tintColor }}
				/>
			),
		},
	},
	DiscoverTab: {
		screen: Discover,
		path: '/discover',
		navigationOptions: {
			tabBarLabel: 'Discover',
			tabBarIcon: ({ tintColor, focused }) => (
				<Icon
					name={focused ? 'lemon-o' : 'lemon-o'}
					size={22}
					style={{ color: tintColor }}
				/>
			),
		},
	},

	PlayerTab: {
		screen: Player,
		path: '/player',
		navigationOptions: {
			tabBarLabel: ' ',
			tabBarIcon: ({ tintColor, focused }) => (
				<PlayIcon tintColor={tintColor} focused={focused} />
			),
			
			
		},
	},

	LibraryTab: {
		screen: Library,
		path: '/CategoryApp',
		navigationOptions: {
			tabBarLabel: 'Library',
			tabBarIcon: ({ tintColor, focused }) => (
				<Icon
					name={focused ? 'book' : 'book'}
					size={22}
					style={{ color: tintColor }}
				/>
			),
		},
	},


	ProfileTab: {
		screen: Profile,
		path: '/profile',
		navigationOptions: {
			tabBarLabel: 'Profile',
			tabBarIcon: ({ tintColor, focused }) => (
				<Icon
					name={focused ? 'user' : 'user'}
					size={22}
					style={{ color: tintColor }}
				/>
			),
		},
	},
};

const TabNav = createBottomTabNavigator(tabNavRouteConfig,
	{
		animationEnabled: false,
		swipeEnabled: false,
		lazy: true,
		tabBarOptions: {
			showIcon: true,
			activeTintColor: '#ff6f6b',
			inactiveTintColor: '#999',
			labelStyle: {
				fontSize: 12,
				marginTop: Platform.OS === 'android' ? 3 : 4,
			},
			style: {
				backgroundColor: '#fff',
				height: 72,
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

};

const AppNavigator = createStackNavigator(routes, { headerMode: "none" });

export default createAppContainer(AppNavigator)
// export default class extends React.Component {
// 	constructor(props: Readonly<{}>) {
// 		super(props);
// 	}
// 	render() {
// 		return (
// 			<AppNavigator />
// 		);
// 	}

// 	componentDidMount() {
// 		// net.init();
// 	}
// }

const style = StyleSheet.create({
	circle: {
		position: 'absolute',
		top: 0,
		right: 0,
		color: '#ff6f6b',
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
