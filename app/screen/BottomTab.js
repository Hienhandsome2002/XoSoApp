import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TrangChu from './TrangChu';
import MienBac from './MienBac';
import MienNam from './MienNam';
import MienTrung from './MienTrung';
import LichQuay from './LichQuay';
import { colors } from '@app/global/style';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { color } from 'react-native-reanimated';
const BottomTab = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen options={{
                headerShown: false, tabBarLabel: 'Trang Chủ', tabBarLabelStyle: { color: colors.buttons, }, tabBarIcon: ({ focused, tintColor, size }) => (
                    <View>
                        <FontAwesome5Icon
                            name="home"
                            size={22}
                            color={focused ? colors.buttons : '#757E83'}
                            solid={focused ? true : false}
                        />
                    </View>
                ),
            }} name="Trang Chủ" component={TrangChu} />
            <Tab.Screen options={{
                headerShown: false, tabBarLabel: 'Miền Bắc', tabBarLabelStyle: { color: colors.buttons, }, tabBarIcon: ({ focused, tintColor, size }) => (
                    <View>
                        <FontAwesome5Icon
                            name="archway"
                            size={22}
                            color={focused ? colors.buttons : '#757E83'}
                            solid={focused ? true : false}
                        />
                    </View>
                ),
            }} name="Miền Bắc" component={MienBac} />
            <Tab.Screen options={{
                headerShown: false, tabBarLabel: 'Miền Nam', tabBarLabelStyle: { color: colors.buttons, }, tabBarIcon: ({ focused, tintColor, size }) => (
                    <View>
                        <FontAwesome5Icon
                            name="church"
                            size={22}
                            color={focused ? colors.buttons : '#757E83'}
                            solid={focused ? true : false}
                        />
                    </View>
                ),
            }} name="Miền Nam" component={MienNam} />
            <Tab.Screen options={{
                headerShown: false, tabBarLabel: 'Miền Trung', tabBarLabelStyle: { color: colors.buttons, }, tabBarIcon: ({ focused, tintColor, size }) => (
                    <View>
                        <FontAwesome5Icon
                            name="ethernet"
                            size={22}
                            color={focused ? colors.buttons : '#757E83'}
                            solid={focused ? true : false}
                        />
                    </View>
                ),
            }} name="Miền Trung" component={MienTrung} />
            <Tab.Screen options={{
                headerShown: false, tabBarLabel: 'Lịch quay', tabBarLabelStyle: { color: colors.buttons, }, tabBarIcon: ({ focused, tintColor, size }) => (
                    <View>
                        <Fontisto
                            name="calendar"
                            size={22}
                            color={focused ? colors.buttons : '#757E83'}
                            solid={focused ? true : false}
                        />
                    </View>
                ),
            }} name="Lịch Quay" component={LichQuay} />
        </Tab.Navigator>
    )
}

export default BottomTab

const styles = StyleSheet.create({})