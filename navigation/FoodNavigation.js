import {
    createStackNavigator,
    createBottomTabNavigator,
    createDrawerNavigator,
    createAppContainer
  } from 'react-navigation';
import React from 'react';
import { CategoriesScreen } from "../screens/CategoriesScreen";
import { CategoryMealsScreen } from "../screens/CategoryMealsScreen";
import { MealDetailsScreen } from "../screens/MealDetailsScreen";
import { FavoritesScreen } from '../screens/FavoritesScreen';
import { FiltersScreen } from '../screens/FiltersScreen';

import {Ionicons} from '@expo/vector-icons';

import { Colors } from '../constants/colors';

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Colors.primary
    },
    headerTintColor: Colors.lightFont
}

const HomeNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Main Categories'
        }
    },
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetails: {
        screen: MealDetailsScreen
    },
    Filters: {
        screen: FiltersScreen,
        navigationOptions: {
            headerTitle: 'Filters'
        }
    }
},
   {
    defaultNavigationOptions: defaultStackNavOptions
   }
);

const FavNavigator = createStackNavigator({
    Favorites: {
        screen: FavoritesScreen,
        navigationOptions: {
            headerTitle: 'Favorite Items'
        }
    },
    MealDetails: {
        screen: MealDetailsScreen
    }
},
{
    defaultNavigationOptions: defaultStackNavOptions
}
)

const TabNavigator = createBottomTabNavigator({
    Meals: {
        screen: HomeNavigator,
        navigationOptions: {
            tabBarLabel: 'Categories',
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="restaurant" size={25} color={tabInfo.tintColor} />
            }
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarLabel: 'Favorites',
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="heart" size={25} color={tabInfo.tintColor} />
            }
        }
    }
},{
    tabBarOptions: {
        activeTintColor: Colors.primary
      }
})

const FilterNavigator = createStackNavigator({
    Filters: {
        screen: FiltersScreen,
        navigationOptions: {
            headerTitle: 'Filters'
        }
    }
},
{
    defaultNavigationOptions: defaultStackNavOptions
})

const MainNavigator = createDrawerNavigator({
    Home: {
        screen: TabNavigator
    },
    // Filters: {
    //     screen: FilterNavigator
    // }
},{
    contentOptions: {
        activeTintColor: Colors.primary,
    }
})

export default createAppContainer(MainNavigator);