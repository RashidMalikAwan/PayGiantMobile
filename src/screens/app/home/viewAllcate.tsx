import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useTheme } from "../../../hooks";
import { Header } from "../../../components";
import { responsiveFontSize, responsiveWidth } from "react-native-responsive-dimensions";
import  Entypo from 'react-native-vector-icons/Entypo'
const ViewAllcate = ({ navigation, route }: any) => {
  const {
    Layout,
    Colors,
    Images,
    Gutters,
    Fonts,
    iosSafeAreaTPadding,
    NavigationColors,
  } = useTheme();

  const [data, setdata] = useState([
    {
      id: 1,
      tile: "Money Transfer",
      options: [
        { id: 1, title: "Bank Transfer", icon: Images.icons.bank_thin },
        { id: 1, title: "Paygiant mobile account", icon: Images.icons.mobile },
      ],
    },
    {
      id: 2,
      tile: "Pay Bills",
      options: [
        { id: 1, title: "Electricity", icon: Images.icons.electricity },
        { id: 2, title: "Water", icon: Images.icons.water },
        { id: 3, title: "Telephone", icon: Images.icons.telephone },
        { id: 4, title: "Gas", icon: Images.icons.flame },
        { id: 5, title: "Internet", icon: Images.icons.wifi },
        { id: 5, title: "Solar", icon: Images.icons.solar },
        { id: 5, title: "Education", icon: Images.icons.education },
        { id: 5, title: "Investment", icon: Images.icons.investment },
        { id: 5, title: "Housing Societies", icon: Images.icons.city },
      ],
    },
    {
      id: 3,
      tile: "Bullk Payment",
      options: [
        { id: 1, title: "Select group", icon: Images.icons.light_user },
      ],
    },
    {
      id: 4,
      tile: "Local Transfer",
      options: [{ id: 1, title: "Send Money", icon: Images.icons.send }],
    },
    {
      id: 5,
      tile: "Collections",
      options: [
        { id: 1, title: "Government payments", icon: Images.icons.building },
        { id: 2, title: "Passport Fee", icon: Images.icons.passport },
      ],
    },
    {
      id: 6,
      tile: "Remittance",
      options: [
        { id: 1, title: "Send Money", icon: Images.icons.send },
        { id: 2, title: "Receive Money", icon: Images.icons.receive },
      ],
    },
    {
      id: 7,
      tile: "Salary Disbursements",
      options: [
        { id: 1, title: "Individual employee", icon: Images.icons.user },
        { id: 2, title: "Employee group", icon: Images.icons.dark_users },
      ],
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
      <Header
        title="View All Categories"
        goBack
        navigation={navigation}
        hideNotificationsicon
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[Gutters.smallMargin]}
      >
        {data &&
          data.map((e: any) => {
            return (
              <View key={e.id}>
                <Text style={[Fonts.textSmall,Gutters.tinyTMargin, {color:Colors.black}]}>{e.tile}</Text>
                <View>
                  <FlatList
                    scrollEnabled={false}
                    data={e.options}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }: any) => {
                      return (
                        <TouchableOpacity
                          style={[
                            Layout.fullWidth,
                            // Gutters.tinyVMargin,
                            Gutters.tinyPadding,
                            Layout.row,
                            Layout.alignItemsCenter,
                            Layout.justifyContentBetween,
                            {
                              backgroundColor: "white",
                              borderRadius: 15,
                              marginTop:10
                            },
                          ]}
                        >
                          <View style={[Layout.row, { alignItems: "center" }]}>
                            <View
                              style={{
                                width: responsiveWidth(12),
                                height: responsiveWidth(12),
                                borderRadius: responsiveWidth(12),
                                backgroundColor: "#f3f3f3",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Image
                                source={item.icon}
                                style={{
                                  width: responsiveWidth(6),
                                  height: responsiveWidth(6),
                                  resizeMode:"contain"
                                }}
                              />
                            </View>
                            <Text
                              style={[
                                Fonts.textTiny,
                                Gutters.tinyHPadding,
                                { color: "black" },
                              ]}
                            >
                              {item.title}
                            </Text>
                          </View>
                          <Entypo
                          name="chevron-right"
                          size={responsiveFontSize(2.6)}
                          color={Colors.textGray400}
                          />
                        </TouchableOpacity>
                      );
                    }}
                  />
                </View>
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default ViewAllcate;

const styles = StyleSheet.create({});
