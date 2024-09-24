// App.js

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import { AppProvider } from './AppContext';
// Import screens
import LandingScreen from "./LandingScreen";
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";
import SplashScreenComponent from "./SplashScreen";
import WelcomeScreen from "./WelcomeScreen";
import DashboardScreen from "./DashboardScreen";
import StatScreen from "./StatScreen";
import TrainingScreen from "./Training";
import Training2Screen from "./Training2";
import ProfileScreen from "./Profile";
import SearchScreen from "./Search";
import EditTrainingScreen from "./EditTraining";
import TrainingDetailScreen from "./TrainingDetailScreen";
import AllCoursesScreen from "./AllCorsesScreen";
import DetailInfoScreen from './DetailInfoScreen';
// Import custom drawer content
import CustomDrawerContent from "./CustomDrawerContent";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Mat = createMaterialTopTabNavigator();

const screenIcons = {
  HomeTab: "home-outline",
  ProfileTab: "person-outline",
  SearchTab: "search-outline",
  EditTab: "ellipsis-horizontal-outline",
};

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const iconName = screenIcons[route.name];
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: [{ display: "flex" }, null],
      })}
    >
      <Tab.Screen name="HomeTab" component={WelcomeScreen} />
      <Tab.Screen name="ProfileTab" component={ProfileScreen} />
      <Tab.Screen name="SearchTab" component={SearchScreen} />
      <Tab.Screen name="EditTab" component={EditTrainingScreen} />
    </Tab.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="HomeDrawer"
        component={BottomTabs}
        options={{ headerShown: false }}
      />
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="Statistics" component={StatScreen} />
      <Drawer.Screen name="Training" component={MaterialTabs} />
      <Drawer.Screen name="AllCourses" component={AllCoursesScreen} />
    </Drawer.Navigator>
  );
}

function MaterialTabs() {
  return (
    <Mat.Navigator
      screenOptions={() => ({
        tabBarLabelStyle: { fontSize: 16 },
        tabBarIndicatorStyle: { backgroundColor: "tomato" },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: true,
        headerShown: false,
      })}
    >
      <Mat.Screen name="MasterTab" component={TrainingScreen} />
      <Mat.Screen name="SkillTab" component={Training2Screen} />
    </Mat.Navigator>
  );
}

const App = () => {
  return (
    <AppProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreenComponent}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LandingScreen"
          component={LandingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SigninScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DashboardScreen"
          component={DashboardScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StatScreen"
          component={StatScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TrainingDetailScreen"
          component={TrainingDetailScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Training"
          component={TrainingScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Training2"
          component={Training2Screen}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="DetailInfoScreen"
          component={DetailInfoScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </AppProvider>
  );
};

export default App;
