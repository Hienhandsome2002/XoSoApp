import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Homepage from './homepage';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: 'white' }}>
      <Text style={styles.textHeader}>Welcome {"\n"}Back.</Text>
      <View>
        <Text style={{ marginLeft: 20, marginTop: 20, marginBottom: 5, fontSize: 14, color: '#3B3B3B', fontWeight: '700', fontFamily: 'Helvetica Neue' }}>Email</Text>
        <View style={{ marginHorizontal: 20 }}>
          <TextInput placeholder='Email' style={styles.input} ></TextInput>
        </View>
      </View>
      <View>
        <Text style={{ marginLeft: 20, marginTop: 20, marginBottom: 5, fontSize: 14, color: '#3B3B3B', fontWeight: '700', fontFamily: 'Helvetica Neue' }}>Password</Text>
        <View style={{ marginHorizontal: 20 }}>
          <TextInput placeholder='Password' secureTextEntry={true} style={styles.input}></TextInput>
        </View>
      </View>
      <View>
        <Text style={{ marginRight: 20, marginTop: 20, fontSize: 15,textAlign:'right' }}>Forgot Password</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Homepage")} >
          <Text style={{ display: 'flex', textAlign: 'center', fontSize: 17, fontWeight: '500',color:"white" }}>Sign in</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 40, marginVertical: 20 }}>
        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
        <View>
          <Text style={{ width: 150, textAlign: 'center', fontSize: 15 }}>  Or continue with  </Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
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
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 55 }}>
        <Text style={{ fontSize: 15,color:'#3B3B3B',fontWeight:"700",fontFamily:'Helvetica Neue' }}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={{ color: '#5577CF', fontSize: 15,fontFamily:'Helvetica Neue',fontWeight:'700' }}>Register now</Text>
        </TouchableOpacity>
      </View>
      <Text></Text>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textHeader: {
    fontFamily: 'Helvetica Neue',
    fontSize: 36,
    marginLeft: 20,
    marginTop: 20,
    fontWeight: '700',
    color: '#3B3B3B'
  },
  input: {
    borderColor:'#F5F5F5',
    backgroundColor:'#F5F5F5',
    width: "100%",
    borderWidth: 1,
    borderRadius: 30,
    padding: 10,
    background: '#F5F5F5',
  },
  button: {
    backgroundColor: "#3AC5C9",
    marginHorizontal: 30,
    borderRadius: 30,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20
  },
  containerIcon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10
  },
})
export default HomeScreen;
