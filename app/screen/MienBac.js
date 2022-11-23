import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableOpacity, RecyclerViewBackedScrollView, TouchableHighlight } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Header } from '@app/components'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import DatePicker from 'react-native-date-picker';
import { FlatList } from 'react-native-gesture-handler';
import { ActivityIndicator, RadioButton } from 'react-native-paper';
import { colors } from '@app/global/style';
import Icon from 'react-native-vector-icons/Fontisto'
import moment from 'moment';
import { RotateOutDownRight } from 'react-native-reanimated';
const MienBac = ({ navigation }) => {
  const [checked, setChecked] = React.useState('first');
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
  const [dataHead, setDataHead] = useState([])
  const [dataTail, setDataTail] = useState([])
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [type, setType] = useState('dayDu')
  const getAPI = () => {
    const url = `https://api.xoso.me/app/json-kq-mienbac?name=KQXS&v=2&ngay_quay=${moment(date).format('YYYY-MM-DD')}`;
    fetch(url)
      .then((res) => res.json())
      .then((resJson) => {
        setData(resJson.data.lotData);
        setDataHead(resJson.data.dau);
        setDataTail(resJson.data.duoi)
        // console.log(resJson);
        // console.log(dataHead);
      })
      .catch((error) => {
        console.log('Error: ', error)
      })

    // console.log(`https://api.xoso.me/app/json-kq-mienbac?name=KQXS&v=2&ngay_quay=${moment(date).format('YYYY-MM-DD')}`);
  }
  useEffect(() => {
    getAPI();
    return () => {

    }
  }, [date])

  const handleData = (data) => {
    let dataSource = [];
    for (let item in data) {
      dataSource.push({
        rank: item,
        result: data[item].join(',        ')
      });
    }
    // console.log(dataSource)
    return dataSource
  }
  let dataLotData = handleData(data)
  console.log(dataLotData);
  let dataHeadProcess = handleData(dataHead)
  let dataTailProcess = handleData(dataTail)
  return (
    <ScrollView>
      <View>
        <Header type='arrow-left' title='Xổ Số Miền Bắc' navigation={navigation} ></Header>
        <View style={{ marginHorizontal: 12 }}>
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
        <View style={{ marginTop: 20 }}>
          {dataLotData.map(i => {
            var d = (i.result.split(",").map(e => parseInt(e) % 100).join(",    "))
            var e = (i.result.split(",").map(e => parseInt(e) % 1000).join(",   "))
            return (
              <View style={{
                flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 12, alignItems: 'center', borderBottomWidth: 1, borderColor: '#EEEEEE', backgroundColor: (i.rank % 2 != 0 || i.rank == 'MaDb') ? '#F8F8FF' : 'white', shadowColor: '#171717',
                shadowOffset: { width: -2, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
              }}>
                <Text style={{ fontSize: 20, color: 'black' }}>{i.rank}</Text>
                <Text style={{ width: '57%', textAlign: 'center', marginVertical: 5, fontSize: 20, color: i.rank == "DB" ? colors.buttons : 'black', fontWeight: i.rank == "DB" ? 'bold' : '490', }}> {type == 'dayDu' ? i.result : type == 'haiSo' ? d : e}</Text>
              </View>
            )
          })}
        </View>
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
              value="second"
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => { setChecked('second'), setType('haiSo') }}
              color={colors.statusbar}
            />
            <Text style={{ color: 'black', fontSize: 17 }}>2 số</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <RadioButton
              value="third"
              status={checked === 'third' ? 'checked' : 'unchecked'}
              onPress={() => { setChecked('third'), setType('baSo') }}
              color={colors.statusbar}
            />
            <Text style={{ color: 'black', fontSize: 17 }}>3 số</Text>
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
            <Text style={{ textAlign: 'center', color: colors.buttons, fontSize: 20, fontWeight: 'bold', marginTop: 15 }}>Thống kê đầu</Text>
          </View>
          <View style={{ marginTop: 10, marginLeft: 30, flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: 20, color: colors.buttons, fontWeight: 'bold' }}>Đầu</Text>
              {dataHeadProcess.map(item => {
                return (
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 17, color: 'black' }}>{item.rank}</Text>
                  </View>
                )
              })}
            </View>
            <View style={{ marginLeft: 90 }}>
              <Text style={{ fontSize: 20, color: colors.buttons, fontWeight: 'bold' }}>Đuôi</Text>
              {dataHeadProcess.map(item => {
                return (
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 17, color: 'black' }}>{item.result}</Text>
                  </View>
                )
              })}
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
          <View style={{ marginTop: 10, marginLeft: 30, flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: 20, color: colors.buttons, fontWeight: 'bold' }}>Đuôi</Text>
              {dataTailProcess.map(item => {
                return (
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 17, color: 'black' }}>{item.rank}</Text>
                  </View>
                )
              })}
            </View>
            <View style={{ marginLeft: 90 }}>
              <Text style={{ fontSize: 20, color: colors.buttons, fontWeight: 'bold' }}>Đầu</Text>
              {dataTailProcess.map(item => {
                return (
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 17, color: 'black' }}>{item.result}</Text>
                  </View>
                )
              })}
            </View>
          </View>
        </View>
      </View>
    </ScrollView >
  )
}

export default MienBac

const styles = StyleSheet.create({
})