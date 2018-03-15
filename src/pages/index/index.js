import {createElement, Component, render} from 'rax';
import {StackNavigator, TabNavigator} from '@ali/rax-navigation';
import {genPath} from '../../mods/util';
import BottomBar from '../../mods/BottomBar';
import HomeScreen from '../../pages/home/index';
import SearchScreen from '../../pages/search/index';
import CartScreen from '../../pages/cart/index';
import WishListScreen from '../../pages/wishlist/index';
import AccountScreen from '../../pages/account/index';
import ItemDetailScreen from '../../pages/item_detail/index';
import CommentScreen from "../comment";

const INDEX_PATH = location.pathname + location.search;

// function loadPage(pageName) {
//   return new Promise((resolve, reject) => {
//     let loadFunc;
//     switch (pageName) {
//       case 'search':
//         loadFunc = require('bundle-loader?name=[folder]/[name]!../search/index.js');
//         break;
//       case 'cart':
//         loadFunc = require('bundle-loader?name=[folder]/[name]!../cart/index.js');
//         break;
//       case 'wishlist':
//         loadFunc = require('bundle-loader?name=[folder]/[name]!../wishlist/index.js');
//         break;
//       case 'account':
//         loadFunc = require('bundle-loader?name=[folder]/[name]!../account/index.js');
//         break;
//       case 'item_detail':
//         loadFunc = require('bundle-loader?name=[folder]/[name]!../item_detail/index.js');
//         break;
//     }
//     try {
//       loadFunc((Page) => {
//         resolve(Page);
//       });
//     } catch (e) {
//       reject();
//     }
//   });
// }


const tabRouterConfig = {
  Home: {
    screen: HomeScreen,
    path: INDEX_PATH
  },
  Search: {
    screen: SearchScreen,
    path: genPath('search'),
  },
  Cart: {
    screen: CartScreen,
    path: genPath('cart'),
  },
  wishlist: {
    screen: WishListScreen,
    path: genPath('wishlist')
  },
  Account: {
    screen: AccountScreen,
    path: genPath('account')
  }
};

const HomeNavigator = TabNavigator(tabRouterConfig, {
  navigationOptions: ({navigation}) => {
    return {
      header: null,
      headerTitle: navigation.state.routeName
    };
  },
  tabBarComponent: BottomBar
});


const stackRouterConfig = {
  Home: {
    screen: HomeNavigator,
    path: INDEX_PATH
  },
  ItemDetail: {
    screen: ItemDetailScreen,
    path: genPath('items/:itemId')
  },
  Comment: {
    screen: CommentScreen,
    path: genPath('items/:itemId/comment')
  }
};


const App = StackNavigator(stackRouterConfig);


render(<App/>);

