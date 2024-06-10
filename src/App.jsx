import React from 'react';
// Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Screens
import Gallery from './Screens/Gallery';
import Notification from './Screens/Notifications';
import Profile from './Screens/Profile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Home from './Screens/Home';
import { IconButton } from 'react-native-paper';
import Details from './Screens/Details';
import Contact from './Screens/Contact';

export const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#2980b9', },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' }
    }}>
      <Stack.Screen name="Home" component={Home} options={{
        title: 'Welcome, User',
      }} />
    </Stack.Navigator>
  )
};

const GalleryStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#2980b9', },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' }
    }}>
      <Stack.Screen name="Gallery" component={Gallery} options={{ title: 'Gallery' }} />
      <Stack.Screen name='Details' component={Details} options={({ route }) => ({ title: `${route?.params?.hotelData?.item?.name}` })} />
    </Stack.Navigator>
  )
};

const NotificationStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#2980b9', },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' }
    }}>
      <Stack.Screen name="Notification" component={Notification} options={{ title: 'Notifications' }} />
    </Stack.Navigator>
  )
};

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#2980b9', },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' }
    }}>
      <Stack.Screen name="Profile" component={Profile} options={{ title: 'Profile' }} />
      <Stack.Screen name="Contact" component={Contact} options={{ title: 'Contact us' }} />
    </Stack.Navigator>
  )
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name='Home' component={HomeStack}
          options={{
            tabBarLabel: 'Home', tabBarIcon: ({ color, size }) => {
              return <Icon name="home" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen name='Gallery' component={GalleryStack}
          options={{
            tabBarLabel: 'Gallery', tabBarIcon: ({ color, size }) => {
              return <Icon name="view-gallery" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen name='Notification' component={NotificationStack}
          options={{
            tabBarLabel: 'Notifications', tabBarIcon: ({ color, size }) => {
              return <Icon name="bell" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen name='Profile' component={ProfileStack}
          options={{
            tabBarLabel: 'Profile', tabBarIcon: ({ color, size }) => {
              return <Icon name="account" size={size} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
};