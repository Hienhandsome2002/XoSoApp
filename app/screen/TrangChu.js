
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { Header } from '@app/components';
const TrangChu = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header title="Trang Chủ"></Header>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 30 }}>
                <TouchableOpacity onPress={() => navigation.navigate("Miền Bắc")}>
                    <View>
                        <Image style={{ width: 100, height: 100, borderRadius: 60 }} source={require('../assets/images/MienBac.png')}></Image>
                        <Text style={{ marginTop: 10 }}>Xổ số Miền Bắc</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Miền Nam")}>
                    <View>
                        <Image style={{ width: 100, height: 100, borderRadius: 60 }} source={require('../assets/images/MienNam.png')}></Image>
                        <Text style={{ marginTop: 10 }}>Xổ số Miền Nam</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Miền Trung")}>
                    <View>
                        <Image style={{ width: 100, height: 100, borderRadius: 60 }} source={require('../assets/images/MienTrung.png')}></Image>
                        <Text style={{ marginTop: 10 }}>Xổ số Miền Trung</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Lịch Quay")}>
                    <View>
                        <Image style={{ width: 100, height: 100, borderRadius: 60 }} source={require('../assets/images/MienTrung.png')}></Image>
                        <Text style={{ marginTop: 10,textAlign:'center' }}>Lịch quay</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default TrangChu;
