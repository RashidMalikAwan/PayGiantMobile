import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "../../../hooks";

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
  return (
    <View>
      <Text>More</Text>
    </View>
  );
};

export default More;

const styles = StyleSheet.create({});
