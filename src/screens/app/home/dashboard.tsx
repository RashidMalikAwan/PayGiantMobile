import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "../../../hooks";
import DashHeader from "../../../components/appComp/dashheaderr";
import { useSelector } from "react-redux";
import { AuthState } from "../../../store/auth";

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
  console.log(user)
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
      <View style={[Gutters.smallMargin]}>
        <DashHeader
          image={{
            uri: "https://cdn-icons-png.flaticon.com/128/15678/15678795.png",
          }}
          username={user.fullName}
        />
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
