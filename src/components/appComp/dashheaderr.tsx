import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "../../hooks";
import { responsiveWidth } from "react-native-responsive-dimensions";
import { Icon } from "react-native-elements";
import Svg, { Defs, Path, Stop } from "react-native-svg";
import LinearGradient from "react-native-linear-gradient";

const DashHeader = ({ image, username }: any) => {
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
      <View
        style={[
          Layout.row,
          Layout.alignItemsCenter,
          Layout.justifyContentBetween,
        ]}
      >
        <View style={[Layout.row, Layout.alignItemsCenter]}>
          <Image
            source={image}
            style={{
              width: responsiveWidth(10),
              height: responsiveWidth(10),
              borderRadius: responsiveWidth(5),
              backgroundColor: Colors.white,
            }}
          />
          <View style={[Gutters.smallLMargin]}>
            <Text style={[Fonts.textTiny,{color:Colors.black}]}>Welcome back</Text>
            <Text style={[Fonts.textSmall, Fonts.textBold,{color:Colors.black}]}>{username}</Text>
          </View>
        </View>
        <View style={{
            width: responsiveWidth(10),
            height: responsiveWidth(10),
            borderRadius: responsiveWidth(5),
            backgroundColor: Colors.white,
            alignItems: "center",
            justifyContent: "center",
        }}>
          <Icon name="bell" type="feather" color={Colors.primary} size={18} />
        </View>
      </View>
    </View>
  );
};

export default DashHeader;

const styles = StyleSheet.create({});
