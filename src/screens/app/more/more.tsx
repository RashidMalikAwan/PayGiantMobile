import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useTheme } from "../../../hooks";
import { Button, Header } from "../../../components";
import { Icon } from "react-native-elements";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../../../store/auth";
import NavigationService from "../../../navigators/NavigationService";
import { responsiveWidth } from "react-native-responsive-dimensions";

const More = ({ navigation, route }: any) => {
  const {
    Layout,
    Colors,
    Images,
    Gutters,
    Fonts,
    iosSafeAreaTPadding,
    NavigationColors,
  } = useTheme();
  const dispatch = useDispatch();
  const data = [
    {
      id: 1,
      title: "Profile",
      icon: Images.icons.user,
      page: "",
    },
    {
      id: 2,
      title: "Beneficiaries",
      icon: Images.icons.users,
      page: "",
    },
    {
      id: 3,
      title: "My identification",
      icon: Images.icons.identificationBadge,
      page: "",
    },
    {
      id: 4,
      title: "Favourites",
      icon: Images.icons.star,
      page: "",
    },
    {
      id: 5,
      title: "Trusted devices",
      icon: Images.icons.device,
      page: "",
    },
    {
      id: 6,
      title: "Customer service",
      icon: Images.icons.customerSupport,
      page: "",
    },
    {
      id: 7,
      title: "Log Out",
      icon: Images.icons.signuout,
      page: "",
    },
  ];

  const renderFlatList = ({ item, index }: any) => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (item.title == "Log Out") {
            dispatch(setToken(""));
            NavigationService.reset("Auth");
          }
        }}
        style={[
          Gutters.tinyBMargin,
          Layout.fullWidth,
          {
            backgroundColor: "white",
            borderRadius: 10,
          },
        ]}
      >
        <View
          style={[
            Layout.row,
            Layout.justifyContentBetween,
            Layout.alignItemsCenter,
            Gutters.tinyVMargin,
            {
              width: "90%",
              alignSelf: "center",
            },
          ]}
        >
          <View style={[Layout.row, Layout.alignItemsCenter, {}]}>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: Colors.colorback,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image source={item.icon} style={{ width: 20, height: 20 }} />
            </View>
            <Text
              style={[
                Fonts.textSmall,
                Gutters.tinyLMargin,
                {
                  color: Colors.textGray400,
                },
              ]}
            >
              {item.title}
            </Text>
          </View>
          <Icon
            name="chevron-right"
            size={20}
            color={Colors.textGray400}
            type="entypo"
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={[
        Layout.fill,
        iosSafeAreaTPadding,
        { backgroundColor: Colors.colorback },
      ]}
    >
      <Header
        navigation={navigation}
        goBack={false}
        title={"Profile"}
        hideNotificationsicon
      />
      <View style={[Gutters.smallMargin, Gutters.tinyTMargin]}>
        <View
          style={[
            Layout.fullWidth,
            Gutters.tinyBMargin,
            { backgroundColor: Colors.inputBackground, borderRadius: 10 },
          ]}
        >
          <View style={[Gutters.smallPadding]}>
            <View
              style={[
                Layout.row,
                Layout.alignItemsCenter,
                Layout.justifyContentBetween,
              ]}
            >
              <View style={[Layout.row, Layout.alignItemsCenter]}>
                <Text
                  style={[
                    Fonts.textSmall,
                    { color: Colors.black, fontWeight: "bold" },
                  ]}
                >
                  Total Balance
                </Text>
                <Icon
                  name="eye"
                  size={18}
                  color={Colors.textGray400}
                  type="feather"
                  style={{ marginLeft: 10 }}
                />
              </View>
              <Text
                style={[
                  Fonts.textSmall,
                  { color: Colors.black, fontWeight: "bold" },
                ]}
              >
                GHS 0.00
              </Text>
            </View>
            <View
              style={[
                Layout.row,
                Layout.alignItemsCenter,
                Layout.justifyContentBetween,
                Gutters.smallTMargin
              ]}
            >
              <TouchableOpacity style={[Layout.row,Layout.alignItemsCenter,{
                width:'48%',
                backgroundColor: Colors.primary,
                borderRadius: 10,
                padding: 10,
                justifyContent:'center',
                alignItems:'center'
              }]}>
                <Image source={Images.icons.wallet_icon}style={{ width: 20, height: 20 }} />
                <Text style={[
                  Fonts.textSmall,
                  { color: Colors.white, fontWeight: "bold", marginLeft:responsiveWidth(2) },
                ]}>{'Deposit'}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[Layout.row,Layout.alignItemsCenter,{
                width:'48%',
                backgroundColor: Colors.primary,
                borderRadius: 10,
                padding: 10,
                justifyContent:'center',
                alignItems:'center'
              }]}>
                <Image source={Images.icons.withdraw}style={{ width: 20, height: 20 }} />
                <Text style={[
                  Fonts.textSmall,
                  { color: Colors.white, fontWeight: "bold", marginLeft:responsiveWidth(2) },
                ]}>{'Withdraw'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <FlatList
          data={data}
          scrollEnabled
          showsVerticalScrollIndicator={false}
          
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderFlatList}
        />
      </View>
    </View>
  );
};

export default More;

const styles = StyleSheet.create({});
