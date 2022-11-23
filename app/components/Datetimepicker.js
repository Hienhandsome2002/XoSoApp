import { StyleSheet, Modal, Text, View, Image, ScrollView, TouchableOpacity, RecyclerViewBackedScrollView, TouchableHighlight } from 'react-native'
import DatePicker from 'react-native-date-picker';
import React, { useState } from 'react'
import moment from 'moment';
import { values } from 'lodash';
import { onChange } from 'react-native-reanimated';

const Datetimepicker = () => {
    const [date, setDate] = useState(moment())
    const [show, setShow] = useState(false)
    const onChange = (e,selectedDate) => {
        setDate(moment(selectedDate))
    }
    
    return (
        <TouchableOpacity
            onPress={() => setShow(true)}
        >
            <Text style={{ paddingVertical: 15, paddingHorizontal: 10, borderColor: 'gray', borderWidth: 1,textAlign:'center' }}>{date.format('DD-MM-YYYY')}</Text>
            <Modal
                transparent={true}
                animationType="slide"
                visible={show}
                supportedOrientations={['portrait']}
                onRequestClose={() => setShow(false)}
            >
                <View style={{ flex: 1 }}>
                    <TouchableHighlight
                        style={{ flex: 1, alignItems: 'flex-end', flexDirection: 'row' }}
                        activeOpacity={1}
                        visible={show}
                        onPress={() => setShow(false)}
                    >
                        <TouchableHighlight
                            underlayColor={'#FFFFF'}
                            style={{ flex: 1, borderTopColor: '#E9E9E9', borderTopWidth: 1 }}
                            onPress={() => console.log('datepicker clicked')}
                        >
                        <View style = {{backgroundColor: '#FFFFFF',height:256,overflow:'hidden'}}>
                            <View style = {{marginTop:20}}>
                                <DatePicker 
                                timeZoneOffsetInMinutes={0}
                                values = {new Date(date)}
                                mode = "date"
                                minimumDate={new Date(moment().subtract(120,'years').format('DD-MM-YYYY'))}                                    
                                maximumDate={new Date(moment().format('DD-MM-YYYY'))}
                                onDateChange = {onChange}
                                ></DatePicker>
                            </View>
                            <TouchableHighlight
                                underlayColor={'transparent'}
                                onPress = {onCancelPress}
                                style = {[styles.btnTxt,styles.btnCancel]}
                            >
                            <Text>Cancel</Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                underlayColor={'transparent'}
                                onPress = {onDonePress}
                                style = {[styles.btnTxt,styles.btnCancel]}
                            >
                            <Text>Done</Text>
                            </TouchableHighlight>
                        </View>
                     

                        </TouchableHighlight>

                    </TouchableHighlight>
                </View>
            </Modal>
        </TouchableOpacity>
    )
}

export default Datetimepicker

const styles = StyleSheet.create({
    btnTxt:{
        position:'absolute',
        top:0,
        height:42,
        paddingHorizontal:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    btnCancel:{
        left:0
    },
    btnDone:{

    }
})
