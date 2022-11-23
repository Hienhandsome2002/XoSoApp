import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native'
import { Header } from '@app/components'
import React, { useEffect, useState } from 'react'
import { colors } from '@app/global/style';
import DatePicker from 'react-native-date-picker';
import { ActivityIndicator, RadioButton } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Fontisto'
const MienNam = ({ navigation }) => {
    const [checked, setChecked] = React.useState('first');
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [data, setData] = useState([])
    const [dataHead, setDataHead] = useState([])
    const [dataTail, setDataTail] = useState([])
    const [type, setType] = useState('dayDu');
    const getAPI = () => {
        const url = `https://api.xoso.me/app/json-kq-miennam?name=KQXS&v=2&ngay_quay=${moment(date).format('YYYY-MM-DD')}`
        fetch(url)
            .then((res) => res.json())
            .then((resJson) => {
                var a = []
                var b = []
                var c = []
                resJson.data.forEach(element => {
                    let dataProcess = handleData(element.lotData, element.provinceCode)
                    let dataHeadProcess = handleData(element.dau, element.provinceCode)
                    let dataTailProcess = handleData(element.duoi, element.provinceCode)
                    // console.log(dataHeadProcess);
                    // console.log(dataProcess);
                    a.push({ name: element.provinceName, dataProcess: dataProcess })
                    b.push({ name: element.provinceName, dataHeadProcess: dataHeadProcess })
                    c.push({ name: element.provinceName, dataTailProcess: dataTailProcess })
                })
                setData(a)
                setDataHead(b)
                setDataTail(c)
                // console.log(a);
                // console.log(b);
            })
            .catch((error) => {
                console.log('Error: ', error)
            })
    }
    useEffect(() => {
        getAPI();
        return () => {

        }
    }, [date])

    const handleData = (data, code) => {
        let dataSource = [];
        for (let item in data) {
            dataSource.push({
                code: code,
                rank: item,
                result: data[item].join(',        ')
            });
        }
        // console.log(dataSource)
        return dataSource
    }

    return (
        <ScrollView>
            <View>
                <Header title='Xổ Số Miền Nam' type='arrow-left' navigation={navigation}></Header>
                <View style={{ marginHorizontal: 20 }}>
                    <TouchableOpacity style={{ backgroundColor: 'white', borderRadius: 5 }} onPress={() => setOpen(true)} >
                        <Text style={{ textAlign: 'center', marginVertical: 10, color: colors.buttons, fontWeight: 'bold', fontSize: 17, }}>{moment(date).format('YYYY-MM-DD')}</Text>
                    </TouchableOpacity>
                    <DatePicker
                        modal
                        open={open}
                        date={date}
                        onConfirm={(date) => {
                            setOpen(false)
                            setDate(date)
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }}
                    />
                </View>
                <View>
                    {
                        data.length > 0 && data.map(item => (
                            <View>
                                {/* {console.log(item)} */}
                                <Text style={{ textAlign: 'center', marginVertical: 20, fontSize: 20, color: colors.buttons, fontWeight: 'bold' }}>{item.name}</Text>
                                {item.dataProcess.map(i => {
                                    var d = (i.result.split(",").map(e => parseInt(e) % 100).join(",       "));
                                    var e = (i.result.split(",").map(e => parseInt(e) % 1000).join(",      "));
                                    console.log(e);
                                    return (
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 12, alignItems: 'center', borderBottomWidth: 1, borderColor: '#EEEEEE', backgroundColor: i.rank % 2 != 0 ? '#F8F8FF' : 'white', }}>
                                            <Text style={{ fontSize: 20, color: 'black' }}>{i.rank}</Text>
                                            {/* {console.log(i)}*/}
                                            <Text style={{ width: '70%', textAlign: 'center', marginVertical: 5, fontSize: 20, color: i.rank == "DB" ? colors.buttons : 'black', fontWeight: i.rank == "DB" ? 'bold' : '400' }}>{type === 'dayDu' ? i.result : type === 'haiSo' ? d : e}</Text>
                                        </View>
                                    );
                                })}

                                <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-evenly' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <RadioButton
                                            value="first"
                                            status={checked === 'first' ? 'checked' : 'unchecked'}
                                            onPress={() => { setChecked('first'), setType('dayDu') }}
                                            color={colors.statusbar}
                                        />
                                        <Text style={{ color: 'black', fontSize: 17 }}>Đầy đủ</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <RadioButton
                                            value='haiSo'
                                            status={checked === 'haiSo' ? 'checked' : 'unchecked'}
                                            onPress={() => { setType('haiSo'), setChecked('haiSo') }}

                                            color={colors.statusbar}
                                        />
                                        <Text style={{ color: 'black', fontSize: 17 }}>2 số</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <RadioButton
                                            value='baSo'
                                            status={checked === 'baSo' ? 'checked' : 'unchecked'}
                                            onPress={() => { setChecked('baSo'), setType('baSo') }}
                                            color={colors.statusbar}
                                        />
                                        <Text style={{ color: 'black', fontSize: 17 }}>3 số</Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: colors.grey3 }} />
                    <View>
                        <Text style={{ width: 70, textAlign: 'center', color: colors.grey3 }}>Quảng cáo</Text>
                    </View>
                    <View style={{ flex: 1, height: 1, backgroundColor: colors.grey3 }} />
                </View>
                <View style={{ marginTop: 15, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, color: colors.grey1, marginLeft: 5 }}>Techcombank Mobile</Text>
                    <View style={{ flexDirection: 'row', marginLeft: 5, marginTop: 5 }}>
                        <Icon name='star' size={15} color={colors.statusbar}></Icon>
                        <Icon name='star' size={15} color={colors.statusbar}></Icon>
                        <Icon name='star' size={15} color={colors.statusbar}></Icon>
                        <Icon name='star' size={15} color={colors.statusbar}></Icon>
                        <Icon name='star' size={15} color={colors.statusbar}></Icon>
                    </View>
                    <View style={{ marginLeft: 5, marginTop: 10 }}>
                        <Image
                            source={require('@app/assets/images/5.png')}
                            style={{ width: '100%', height: 200 }}
                        ></Image>
                    </View>
                    <TouchableOpacity style={{ justifyContent: 'center', backgroundColor: colors.buttons, marginHorizontal: 40, marginTop: 20, borderRadius: 5, paddingVertical: 10 }}>
                        <Text style={{ textAlign: 'center', color: colors.cardbackground, fontSize: 17 }}>Visit Site</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ textAlign: 'center', color: colors.buttons, fontSize: 20, fontWeight: 'bold', marginTop: 15 }}>Thống kê đầu</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15, marginLeft: 8 }}>
                        <View style={{ alignItems: "center" }}>
                            <View>
                                <Text style={{ fontSize: 17, color: colors.buttons, fontWeight: 'bold' }}>Đầu</Text>
                            </View>
                            <Text style={{ fontSize: 17, color: 'black' }}>0</Text>
                            <Text style={{ fontSize: 17, color: 'black' }}>1</Text>
                            <Text style={{ fontSize: 17, color: 'black' }}>2</Text>
                            <Text style={{ fontSize: 17, color: 'black' }}>3</Text>
                            <Text style={{ fontSize: 17, color: 'black' }}>4</Text>
                            <Text style={{ fontSize: 17, color: 'black' }}>5</Text>
                            <Text style={{ fontSize: 17, color: 'black' }}>6</Text>
                            <Text style={{ fontSize: 17, color: 'black' }}>7</Text>
                            <Text style={{ fontSize: 17, color: 'black' }}>8</Text>
                            <Text style={{ fontSize: 17, color: 'black' }}>9</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            {
                                dataHead.length > 0 && dataHead.map(item => (
                                    <View style={{ marginHorizontal: 17, alignItems: 'center' }}>
                                        {/* {console.log(item)} */}
                                        <Text style={{ fontSize: 17, color: colors.buttons, fontWeight: 'bold' }}>{item.name}</Text>
                                        {item.dataHeadProcess.map(i => {
                                            return (
                                                <View>
                                                    <Text style={{ fontSize: 17, color: 'black' }}>{i.result}</Text>
                                                </View>
                                            );
                                        })}
                                    </View>
                                ))}
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: colors.grey3 }} />
                    <View>
                        <Text style={{ width: 70, textAlign: 'center', color: colors.grey3 }}>Quảng cáo</Text>
                    </View>
                    <View style={{ flex: 1, height: 1, backgroundColor: colors.grey3 }} />
                </View>
                <View style={{ marginTop: 15, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, color: colors.grey1, marginLeft: 5 }}>Techcombank Mobile</Text>
                    <View style={{ flexDirection: 'row', marginLeft: 5, marginTop: 5 }}>
                        <Icon name='star' size={15} color={colors.statusbar}></Icon>
                        <Icon name='star' size={15} color={colors.statusbar}></Icon>
                        <Icon name='star' size={15} color={colors.statusbar}></Icon>
                        <Icon name='star' size={15} color={colors.statusbar}></Icon>
                        <Icon name='star' size={15} color={colors.statusbar}></Icon>
                    </View>
                    <View style={{ marginLeft: 5, marginTop: 10 }}>
                        <Image
                            source={require('@app/assets/images/5.png')}
                            style={{ width: '100%', height: 200 }}
                        ></Image>
                    </View>
                    <TouchableOpacity style={{ justifyContent: 'center', backgroundColor: colors.buttons, marginHorizontal: 40, marginTop: 20, borderRadius: 5, paddingVertical: 10 }}>
                        <Text style={{ textAlign: 'center', color: colors.cardbackground, fontSize: 17 }}>Visit Site</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ textAlign: 'center', color: colors.buttons, fontSize: 20, fontWeight: 'bold', marginTop: 15 }}>Thống kê đuôi</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15, marginLeft: 8 }}>
                        <View style={{ alignItems: "center" }}>
                            <View>
                                <Text style={{ fontSize: 17, color: colors.buttons, fontWeight: 'bold' }}>Đuôi</Text>
                            </View>
                            <Text style={{ fontSize: 17, color: 'black' }}>0</Text>
                            <Text style={{ fontSize: 17, color: 'black' }}>1</Text>
                            <Text style={{ fontSize: 17, color: 'black' }}>2</Text>
                            <Text style={{ fontSize: 17, color: 'black' }}>3</Text>
                            <Text style={{ fontSize: 17, color: 'black' }}>4</Text>
                            <Text style={{ fontSize: 17, color: 'black' }}>5</Text>
                            <Text style={{ fontSize: 17, color: 'black' }}>6</Text>
                            <Text style={{ fontSize: 17, color: 'black' }}>7</Text>
                            <Text style={{ fontSize: 17, color: 'black' }}>8</Text>
                            <Text style={{ fontSize: 17, color: 'black' }}>9</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            {
                                dataTail.length > 0 && dataTail.map(item => (
                                    <View style={{ marginHorizontal: 17, alignItems: 'center' }}>
                                        {/* {console.log(item)} */}
                                        <Text style={{ fontSize: 17, color: colors.buttons, fontWeight: 'bold' }}>{item.name}</Text>
                                        {item.dataTailProcess.map(i => {
                                            return (
                                                <View>
                                                    <Text style={{ fontSize: 17, color: 'black' }}>{i.result}</Text>
                                                </View>
                                            );
                                        })}
                                    </View>
                                ))}
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default MienNam

const styles = StyleSheet.create({})