import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useTheme } from "../../hooks";
import { showError } from "../../utils/HelperFuctions";
import { useNavigation } from "@react-navigation/native";
import { responsiveWidth } from "react-native-responsive-dimensions";

const QuickOptionComp = ({ data, onPress }: any) => {
  const {
    Layout,
    Colors,
    Images,
    Gutters,
    Fonts,
    iosSafeAreaTPadding,
    NavigationColors,
  } = useTheme();

  const navigation = useNavigation();

  const Card = ({ item }: any) => {
    return (
      <TouchableOpacity
        key={item.id}
        onPress={() => {
          if (item.navigateTo ?? "") {
            navigation.navigate(item?.navigateTo);
          } else {
            showError("Work in progress", 3000);
          }
        }}
        style={[
          Gutters.tinyHPadding,
          Gutters.smallVPadding,
        //   Gutters.tinyMargin,
          {
            width: 183,
            backgroundColor: Colors.inputBackground,
            borderRadius: 20,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            alignItems:'center',
            margin:5
          },
        ]}
      >
        <View
          style={[
            {
              backgroundColor: "#F3F3F3",
              width: responsiveWidth(12),
              height: responsiveWidth(12),
              borderRadius:responsiveWidth(12),
              alignItems: "center",
              justifyContent: "center",
              marginBottom:5
            },
          ]}
        >
          <Image
            source={item.icon}
            // tintColor={darkMode ? Colors.golden : ''}
            style={{
              height: responsiveWidth(7),
              width: responsiveWidth(7),
            //   marginBottom: 10,
              alignSelf: "center",
              resizeMode:'contain'
            }}
          />
        </View>

        
        <Text
          style={{
            color: Colors.black,
            fontSize: 14,
            fontFamily: "Poppins-SemiBold",
            textAlign: "center",
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            color: Colors.textGray200,
            fontSize: 10,
            // fontFamily: "Poppins-SemiBold",
            textAlign: "center",
            marginTop: 5
          }}
        >
          {item.text}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[Gutters.smallTMargin]}>
      <View
        style={[
          Layout.row,
          Layout.justifyContentBetween,
          Layout.alignItemsCenter,
          Gutters.tinyHPadding,
        ]}
      >
        <Text style={[Fonts.textSmall, Fonts.textBold, { color: "black" }]}>
          Quick options
        </Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={[Fonts.textTiny, { color: Colors.blue }]}>View all</Text>
        </TouchableOpacity>
      </View>
      <View
        style={[
          Layout.row,
          Layout.justifyContentCenter,
          Gutters.tinyTMargin,
          { flexWrap: "wrap" },
        ]}
      >
        {data.map((item: any, index: number) => (
          <Card item={item} key={index} />
        ))}
      </View>
    </View>
  );
};

export default QuickOptionComp;

const styles = StyleSheet.create({});
