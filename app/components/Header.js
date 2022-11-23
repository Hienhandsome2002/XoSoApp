import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Fontisto'
import { colors, parameters } from "../global/style";
import TrangChu from "@app/screen/TrangChu";
function Header({ title, type, navigation }) {
    return (
        <View style={styles.header}>
            <Icon name={type} size={20} color="white" style={{ marginLeft: 20 }} onPress={() => navigation.goBack()}></Icon>
            <Text style={styles.headertext}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.buttons,
        height: parameters.headerHeight,
        flexDirection: 'row',
        alignItems: 'center',
    },
    headertext: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: 30
    }
})

export default Header;