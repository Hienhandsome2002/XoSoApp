import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Appbar } from 'react-native-paper';

const Register = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: 'white' }}>
            <Text style={styles.textHeader}>Create {"\n"}Account.</Text>
            <View>
                <Text style={{ marginLeft: 20, marginTop: 20, marginBottom: 5, fontSize: 14, fontWeight: '700', color: '#3B3B3B', fontFamily: 'Helvetica Neue' }}>Full name</Text>
                <View style={{ marginHorizontal: 20 }}>
                    <TextInput placeholder='Full name' style={styles.input}></TextInput>
                </View>
            </View>
            <View>
                <Text style={{ marginLeft: 20, marginTop: 20, marginBottom: 5, fontSize: 14, fontWeight: '700', color: '#3B3B3B', fontFamily: 'Helvetica Neue' }}>Email address</Text>
                <View style={{ marginHorizontal: 20 }}>
                    <TextInput placeholder='Email address' secureTextEntry={true} style={styles.input}></TextInput>
                </View>
            </View>
            <View>
                <Text style={{ marginLeft: 20, marginTop: 20, marginBottom: 5, fontSize: 14, fontWeight: '700', color: '#3B3B3B', fontFamily: 'Helvetica Neue' }}>Password</Text>
                <View style={{ marginHorizontal: 20 }}>
                    <TextInput placeholder='Password' secureTextEntry={true} style={styles.input}></TextInput>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                <Text style={{ fontSize: 15 }}>I agree to the </Text>
                <Text style={{ color: '#3AC5C9', fontSize: 15 }}>Terms of Service </Text>
                <Text style={{ fontSize: 15 }}>and </Text>
                <Text style={{ color: '#3AC5C9', fontSize: 15 }}>Privacy Policy </Text>
            </View>

            <View>
                <TouchableOpacity style={styles.button}>
                    <Text style={{ display: 'flex', textAlign: 'center', fontSize: 17, fontWeight: '500', color: 'white' }}>Create Account</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerIcon}>
                <View style={{ backgroundColor: '#EEEEEE', paddingHorizontal: 20, paddingVertical: 15, borderRadius: 10, justifyContent: 'center' }}>
                    <Icon name='facebook' size={25} color="blue"></Icon>
                </View>
                <View style={{ backgroundColor: '#EEEEEE', paddingHorizontal: 20, paddingVertical: 15, borderRadius: 10, justifyContent: 'center' }} >
                    <Icon name='google' size={23} color="red"></Icon>
                </View>
                <View style={{ backgroundColor: '#EEEEEE', paddingHorizontal: 20, paddingVertical: 15, borderRadius: 10, justifyContent: 'center' }}>
                    <Icon name='apple' size={25}></Icon>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                <Text style={{ fontSize: 15, color: '#3B3B3B', fontWeight: "700", fontFamily: 'Helvetica Neue' }}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text style={{ color: '#5577CF', fontSize: 15, fontWeight: "700", fontFamily: 'Helvetica Neue' }}>Sign in</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    textHeader: {
        fontSize: 36,
        marginLeft: 20,
        marginTop: 20,
        fontWeight: '700',
        fontFamily: 'Helvetica Neue',
        color: '#3B3B3B'
    },
    input: {
        borderColor: '#F5F5F5',
        backgroundColor: '#F5F5F5',
        width: "100%",
        borderWidth: 1,
        borderRadius: 30,
        padding: 10,
    },
    button: {
        backgroundColor: "#3AC5C9",
        marginHorizontal: 30,
        borderRadius: 30,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    containerIcon: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 26
    },
    icon: {

    }
})
export default Register;
