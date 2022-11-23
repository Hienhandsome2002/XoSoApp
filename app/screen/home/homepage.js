import Item from '@app/components/Header';
import { Scope } from '@babel/traverse';
import { size } from 'lodash';
import { defaultFormat } from 'moment/moment';
import React from 'react';
import { View, Text, StyleSheet, TextInput,TouchableOpacity, ImageBackground, FlatList, Image, ScrollView } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import { color } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Data from './dataHomepage';
const renderDataItem = ({ item, navigation }) => {
    return (
        <View style={{ flexDirection: 'row', marginTop: 20, alignItems: 'center', marginLeft: 20, }}>
            <TouchableOpacity>
                <View>
                    <Image source={{ uri: item.img }}
                        style={{ width: 100, height: 100, borderRadius: 20 }
                        }></Image>
                </View>
            </TouchableOpacity>
            <View style={{ marginHorizontal: 20, justifyContent: 'space-around' }}>
                <Text style={styles.titleText}>{item.name}</Text>
                <Text style={styles.address}>{item.address}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name='star' color={'#F6D133'} size={17} style={{ marginRight: 10 }}></Icon>
                    <Text style={styles.rate}>{item.rate}</Text>
                    <Text style={styles.rate}>{item.distance}</Text>
                </View>
            </View>
        </View>
    )
}
const Homepage = ({ navigation }) => {
    return (
        <ScrollView>
            <View>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate("Home")}>
                        <Icon name='arrow-left' size={20} color="white"></Icon>
                    </TouchableOpacity>
                    <View>
                        <Image source={require('@app/assets/images/Human.png')} style={{
                            position: 'absolute',
                            // width: 125,
                            // height: 186,
                            left: 235,
                            marginHorizontal: 20
                            // top: 72,
                        }}></Image>
                    </View>
                    <View>
                        <Text style={{
                            fontFamily: 'iCiel Cadena',
                            fontWeight: '900',
                            fontSize: 36,
                            color: 'white',
                            fontStyle: 'normal',
                            marginTop: 70,
                            marginHorizontal: 20
                        }}>
                            TOP BEST {"\n"}RESTAURANT
                        </Text>
                    </View>
                </View>
                <View>
                    <FlatList
                        data={Data}
                        renderItem={renderDataItem}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
        maxWidth: 660,
        height: 284,
        left: 0,
        top: 0,
        backgroundColor: '#3AC5C9',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
    },
    icon: {
        marginStart: 20,
        marginTop: 20,
    },
    titleText: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '700',
        fontSize: 16,
        color: "#3B3B3B",
        marginVertical: 5
    },
    address: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '400',
        fontSize: 15,
        color: '#3B3B3B',
        marginVertical: 5
    },
    rate: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '400',
        fontSize: 14,
        color: '#3B3B3B',
        marginVertical: 5
    }
})
export default Homepage;