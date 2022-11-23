
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { colors } from './app/global/style';
import TrangChu from '@app/screen/TrangChu';
import MienBac from '@app/screen/MienBac';
import MienNam from '@app/screen/MienNam';
import MienTrung from '@app/screen/MienTrung';
import LichQuay from '@app/screen/LichQuay';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTab from '@app/screen/BottomTab';


const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor={colors.statusbar}></StatusBar>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'Trang chủ'} screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Trang Chủ" component={BottomTab} />
          <Stack.Screen name="Miền Bắc" component={MienBac} />
          <Stack.Screen name="Miền Nam" component={MienNam} />
          <Stack.Screen name="Miền Trung" component={MienTrung} />
          <Stack.Screen name="Lịch Quay" component={LichQuay} />
        </Stack.Navigator>

      </NavigationContainer>

    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
