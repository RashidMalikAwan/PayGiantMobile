import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useTheme } from "../../hooks";
import { responsiveWidth } from "react-native-responsive-dimensions";

const Transactioncomp = ({ data }: any) => {
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
    <View style={[Gutters.tinyVMargin]}>
      <View
        style={[
          Layout.row,
          Layout.justifyContentBetween,
          Layout.alignItemsCenter,
          Gutters.tinyHPadding,
        ]}
      >
        <Text style={[Fonts.textSmall, Fonts.textBold, { color: "black" }]}>
          Transactions
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={[Fonts.textTiny, { color: Colors.blue }]}>View all</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => {
            <View
              style={{
                height: 10,
              }}
            ></View>;
          }}
          renderItem={({ item, index }: any) => {
            return (
              <View style={[
                Gutters.tinyVMargin,
                Layout.row,
                Layout.justifyContentBetween,
                Layout.alignItemsCenter,
                Gutters.smallPadding,
                {
                    backgroundColor:'white',
                    borderRadius:15
                }
              ]}>
                <View style={[
                    Layout.row,
                    Layout.alignItemsCenter,
                ]}>
                <View
                  style={{
                    width: responsiveWidth(12),
                    height: responsiveWidth(12),
                    borderRadius: responsiveWidth(6),
                    backgroundColor: "#F3F3F3",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={item.icon}
                    style={{
                      width: responsiveWidth(6),
                      height: responsiveWidth(6),
                      resizeMode: "contain",
                    }}
                  />
                </View>
                <View style={[Gutters.tinyHMargin]}>
                    <Text style={[Fonts.textSmall,{color:'black'}]}>{item.title}</Text>
                    <Text style={{fontSize:12, color: Colors.textGray200, marginTop:5}}>{item.purpose}</Text>
                </View>
                </View>
                <View  style={{alignItems:'flex-end'}}>
                    <Text style={[Fonts.textSmall,{color: 'black'}]}>{item.amount} GHS</Text>
                    <Text style={{fontSize:12,color: Colors.textGray200}}>{item.time}</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Transactioncomp;

const styles = StyleSheet.create({});
