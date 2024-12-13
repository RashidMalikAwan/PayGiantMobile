import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "../../hooks";
import { responsiveWidth } from "react-native-responsive-dimensions";

const DashHeader = ({image, username}: any) => {
    const {
        Layout,
        Colors,
        Images,
        Gutters,
        Fonts,
        iosSafeAreaTPadding,
        NavigationColors,
      } = useTheme();
  return (
    <View style={[Layout.fullWidth]}>
     <View style={[Layout.row, Layout.alignItemsCenter, Layout.justifyContentBetween]}>
        <View  style={[Layout.row, Layout.alignItemsCenter]}>
            <Image   
            source={image}
            style={{
                width: responsiveWidth(10),
                height: responsiveWidth(10),
                borderRadius: responsiveWidth(5),
                backgroundColor: Colors.white,
            }}
            />
            <View>
                <Text>Welcome back</Text>
                <Text>{username}</Text>
            </View>
        </View>
     </View>
    </View>
  );
};

export default DashHeader;

const styles = StyleSheet.create({});
