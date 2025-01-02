import {
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useTheme } from "../../../hooks";
import DashHeader from "../../../components/appComp/dashheaderr";
import { useSelector } from "react-redux";
import { AuthState } from "../../../store/auth";
import BalanceCard from "../../../components/appComp/balanceCard";
import { Image } from "react-native-elements";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import QuickOptionComp from "../../../components/appComp/quickOptionComp";
import Transactioncomp from "../../../components/appComp/transactioncomp";

const Dashboard = ({ navigation, route }: any) => {
  const {
    Layout,
    Colors,
    Images,
    Gutters,
    Fonts,
    iosSafeAreaTPadding,
    NavigationColors,
  } = useTheme();
  const { user }: any = useSelector<any>(
    (state: { auth: AuthState }) => state.auth
  );
  const [main, setMain] = useState([
    {
      id: 1,
      title: "Send Money",
      icon: Images.icons.send,
    },
    {
      id: 2,
      title: "Receive Money",
      icon: Images.icons.receive,
    },
    {
      id: 3,
      title: "Bill Payment",
      icon: Images.icons.list_bill,
    },
  ]);
  const [quickOption, setQuickOption] = useState([
    {
      id: 1,
      title: "Pay Bills",
      icon: Images.icons.list_bill,
      text: "Settle your utility bills easily and securely online today.",
    },
    {
      id: 2,
      title: "Bulk Payment",
      icon: Images.icons.light_user,
      text: "Streamline your finances with easy and secure bulk payments.",
    },
    {
      id: 3,
      title: "Local Transfer",
      icon: Images.icons.reverse,
      text: "Instantly transfer funds locally with our secure and easy app.",
    },
    {
      id: 4,
      title: "Collections",
      icon: Images.icons.building,
      text: "Efficiently manage and track your collections with our app.",
    },
    {
      id: 5,
      title: "Remittance",
      icon: Images.icons.send,
      text: "Send & receive money globally with secure, fast, and easy remittance.",
    },
    {
      id: 6,
      title: "Salary Disturements",
      icon: Images.icons.dark_users,
      text: "Effortlessly manage salary disbursements with our easy solution.",
    },
  ]);

  const [tranaction, setTransaction] = useState([
    {
      id: 1,
      title: "Money Transfer",
      icon: Images.icons.send,
      purpose: "Paypal",
      time: "5 hour ago",
      amount: "$ 300.00",
    },
    {
      id: 2,
      title: "Electicity bill",
      icon: Images.icons.electricity,
      purpose: "Pacific Gas & Electric",
      time: "5 hour ago",
      amount: "$ 300.00",
    },
    {
      id: 3,
      title: "Bulk Payment",
      icon: Images.icons.light_user,
      purpose: "Hr group",
      time: "5 hour ago",
      amount: "$ 300.00",
    },
  ]);

  return (
    <View
      style={[
        Layout.fill,
        iosSafeAreaTPadding,
        { backgroundColor: Colors.colorback },
      ]}
    >
      <StatusBar
        backgroundColor={"transparent"}
        barStyle="light-content"
        translucent={true}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[Gutters.smallMargin]}
      >
        <DashHeader
          image={{
            uri: "https://cdn-icons-png.flaticon.com/128/15678/15678795.png",
          }}
          username={user.fullName}
        />
        <BalanceCard />
        <View style={[Layout.fullWidth, Gutters.smallTMargin]}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={main}
            contentContainerStyle={{
              paddingHorizontal: 10, // Add padding to the FlatList
            }}
            ItemSeparatorComponent={() => <View style={{ width: 10 }} />} // Maintain consistent spacing
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: responsiveWidth(25), // Adjust width for equal spacing
                  }}
                >
                  <TouchableOpacity
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      width: responsiveWidth(25), // Adjust width for equal spacing
                    }}
                  >
                    <View style={styles.imageView}>
                      <Image
                        source={item.icon}
                        style={{
                          width: responsiveWidth(7),
                          height: responsiveWidth(7),
                        }}
                      />
                    </View>
                    <Text
                      style={[
                        Fonts.textTiny,
                        ,
                        {
                          textAlign: "center",
                          marginTop: 10,
                          color: Colors.black,
                        },
                      ]}
                    >
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <QuickOptionComp data={quickOption} onPress={()=>{
          navigation.navigate('ViewAllcate')
        }}/>
        <Transactioncomp data={tranaction} />
        <View style={{ height: responsiveHeight(25) }} />
      </ScrollView>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  imageView: {
    backgroundColor: "white",
    width: responsiveWidth(12),
    height: responsiveWidth(12),
    borderRadius: responsiveWidth(25),
    justifyContent: "center",
    alignItems: "center",
  },
});
