import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Header } from '@app/components'
import Icon from 'react-native-vector-icons/Fontisto'
import { colors } from '@app/global/style'
const LichQuay = ({ navigation }) => {
    return (
        <ScrollView>
            <View>
                <Header title='Lịch Quay' type='arrow-left' navigation={navigation}></Header>
                <View>
                    <View>
                        <Text style={{ color: colors.buttons, fontSize: 20, fontWeight: 'bold' }}>XỔ SỐ MIỀN BẮC - XSMB:</Text>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ fontSize: 17, color: 'black' }}>Xố số kiến thiết Việt Nam phân thành 3 thị trường tiêu thụ (Bắc, Trung, Nam), bộ vé liên kết các tỉnh xổ số miền bắc quay số mở thưởng hàng ngày tại Công Ty Xổ Số Thủ Đô:</Text>
                    </View>
                    <View>
                        <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                            <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 17 }}>Thứ 2: </Text>
                            <Text style={{ color: '#111111', fontSize: 17 }}>Xổ số kiến thiết Hà Nội</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                            <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 17 }}>Thứ 3: </Text>
                            <Text style={{ color: '#111111', fontSize: 17 }}>Xổ số kiến thiết Quảng Ninh</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                            <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 17 }}>Thứ 4: </Text>
                            <Text style={{ color: '#111111', fontSize: 17 }}>Xổ số kiến thiết Bắc Ninh</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                            <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 17 }}>Thứ 5: </Text>
                            <Text style={{ color: '#111111', fontSize: 17 }}>Xổ số kiến thiết Hà Nội</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                            <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 17 }}>Thứ 6: </Text>
                            <Text style={{ color: '#111111', fontSize: 17 }}>Xổ số kiến thiết Hải Phòng</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                            <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 17 }}>Thứ 7: </Text>
                            <Text style={{ color: '#111111', fontSize: 17 }}>Xổ số kiến thiết Nam Định</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                            <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 17 }}>Chủ nhật: </Text>
                            <Text style={{ color: '#111111', fontSize: 17 }}>Xổ số kiến thiết Thái Bình</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 17, color: 'black' }}>Cơ cấu thưởng của xố số miền bắc gồm 27 lô(27 lần quay số), có tổng cộng 81 giải thưởng.Giải Đặc Biệt 200.000.000đ/ vé 5 chữ số loại 10.000đ</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: colors.grey3 }} />
                    <View>
                        <Text style={{ width: 70, textAlign: 'center', color: colors.grey3 }}>Quảng cáo</Text>
                    </View>
                    <View style={
                        { flex: 1, height: 1, backgroundColor: colors.grey3 }} />
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
                        <Text style={{ color: colors.buttons, fontSize: 20, fontWeight: 'bold' }}>XỔ SỐ MIỀN NAM - XSMN:</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 17, color: 'black' }}>Xổ số kiến thiết Việt Nam phân thành 3 trị trường tiêu thụ (Bắc, Trung, Nam), bộ vé liên kết các tỉnh xổ số miền Nam gồm 21 tỉnh từ Bình Thuận đến Cà Mau gồm:</Text>
                    </View>
                    <View style={{ marginTop: 10, flexWrap: 'wrap', flexDirection: 'row' }}>
                        <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 17 }}>Thứ 2: </Text>
                        <Text style={{ color: '#111111', fontSize: 17 }}>(1) TP. HCM(xshcm),(2) Đồng Tháp(xsdt),(3) Cà Mau (xscm)</Text>
                    </View>
                    <View style={{ marginTop: 10, flexWrap: 'wrap', flexDirection: 'row' }}>
                        <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 17 }}>Thứ 3: </Text>
                        <Text style={{ color: '#111111', fontSize: 17 }}>(1) Bến Tre(xsbt),(2) Vũng Tàu(xsvt),(3) Bạc Liêu (xsbl)</Text>
                    </View>
                    <View style={{ marginTop: 10, flexWrap: 'wrap', flexDirection: 'row' }}>
                        <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 17 }}>Thứ 4: </Text>
                        <Text style={{ color: '#111111', fontSize: 17 }}>(1) Đồng Nai(xsdn),(2) Cần thơ(xsct),(3) Sóc Trăng (xsst)</Text>
                    </View>
                    <View style={{ marginTop: 10, flexWrap: 'wrap', flexDirection: 'row' }}>
                        <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 17 }}>Thứ 5: </Text>
                        <Text style={{ color: '#111111', fontSize: 17 }}>(1) Tây Ninh(xstn),(2) An Giang(xsag),(3) Bình Thuận (xsbth)</Text>
                    </View>
                    <View style={{ marginTop: 10, flexWrap: 'wrap', flexDirection: 'row' }}>
                        <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 17 }}>Thứ 6: </Text>
                        <Text style={{ color: '#111111', fontSize: 17 }}>(1) Vĩnh Long(xsvl),(2) Bình Dương(xsbd),(3) Trà Vinh (xstrv)</Text>
                    </View>
                    <View style={{ marginTop: 10, flexWrap: 'wrap', flexDirection: 'row' }}>
                        <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 17 }}>Thứ 7: </Text>
                        <Text style={{ color: '#111111', fontSize: 17 }}>(1) TP. HCM(xshcm),(2) Long An(xsla),(3) Bình Phước (xsbp), (4) Hậu Giang (xshg)</Text>
                    </View>
                    <View style={{ marginTop: 10, flexWrap: 'wrap', flexDirection: 'row' }}>
                        <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 17 }}>Chủ nhật: </Text>
                        <Text style={{ color: '#111111', fontSize: 17 }}>(1) Tiền Giang(xstg),(2) Kiên Giang(xskg),(3) Đà Lạt (xsdl)</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 17, color: 'black' }}>Cơ cấu giải thưởng của xổ số miền nam gồm 18 lô(18 lần quay số), Giải Đặc Biệt gồm 2.000.000.000VNĐ/ vé 6 chữ số loại 10.000đ</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 17, color: 'black' }}>*(1) = Đài 1, (2) = Đài 2, (3) = Đài 3 hay còn gọi là đài chính, đài phụ và đài phụ 3 trong cùng ngày căn cứ theo lượng tiêu thụ và có tính tương đối tùy từng khu vực. Trong tuần mỗi tỉnh phát hành 1 kỳ vé riêng TP.HCM phát hành 2 kỳ. Từ "Đài" là do người dân quen gọi từ sau 1975 mỗi chiều có 3 đài radio phát kết quả xố số của 3 tỉnh, thứ 7 có 4 tỉnh phát hành</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ color: 'black', fontSize: 17 }}>* Phân vùng thị trường tiêu thụ khác với phân vùng địa giới hành chính, ví dụ như Bình Thuận thuộc Miền Trung nhưng lại thuộc bộ vé liên kêt Xổ Số Miền Nam</Text>
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <View>
                        <Text style={{ color: colors.buttons, fontSize: 20, fontWeight: 'bold' }}>XỔ SỐ MIỀN TRUNG - XSMT:</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 17, color: 'black' }}>Xổ số kiến thiết Việt Nam phân thành 3 trị trường tiêu thụ (Bắc, Trung, Nam), bộ vé liên kết các tỉnh xổ số miền Trung gồm các tỉnh Miền Trung và Tây Nguyên:</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 17 }}>Thứ 2: </Text>
                        <Text style={{ color: '#111111', fontSize: 17 }}>(1) Thừa T.Huế(xstth),(2) Phú Yên(xspy)</Text>
                    </View>
                    <View style={{ marginTop: 10, }}>
                        <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 17 }}>Thứ 3: </Text>
                        <Text style={{ color: '#111111', fontSize: 17 }}>(1) ĐắK LắK(xsdlk),(2) Quảng Nam(xsqn)</Text>
                    </View>
                    <View style={{ marginTop: 10, }}>
                        <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 17 }}>Thứ 4: </Text>
                        <Text style={{ color: '#111111', fontSize: 17 }}>(1) Đà Nẵng(xsdng),(2) Khánh Hòa(xskh)</Text>
                    </View>
                    <View style={{ marginTop: 10, }}>
                        <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 17 }}>Thứ 5: </Text>
                        <Text style={{ color: '#111111', fontSize: 17 }}>(1) Bình Định(xsbđ),(2) Quảng Trị(xsqt),(3) Quảng Bình (xsqb)</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 17 }}>Thứ 6: </Text>
                        <Text style={{ color: '#111111', fontSize: 17 }}>(1) Ninh Thuận(xsnt),(2) Gia Lai(xsgl)</Text>
                    </View>
                    <View style={{ marginTop: 10, }}>
                        <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 17 }}>Thứ 7: </Text>
                        <Text style={{ color: '#111111', fontSize: 17 }}>(1) Đà Nẵng(xsdn),(2) Quảng Ngãi(xsqng),(3) Đắc Nông(xsdn)</Text>
                    </View>
                    <View style={{ marginTop: 10, }}>
                        <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 17 }}>Chủ nhật: </Text>
                        <Text style={{ color: '#111111', fontSize: 17 }}>(1) Khánh Hòa(xskh),(2) Kon Tum(xskt)</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 17, color: 'black' }}>Cơ cấu giải thưởng của xổ số miền nam gồm 18 lô(18 lần quay số), Giải Đặc Biệt gồm 2.000.000.000VNĐ/ vé 6 chữ số loại 10.000đ</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default LichQuay

const styles = StyleSheet.create({})