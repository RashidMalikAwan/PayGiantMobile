import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import LinearGradient from "react-native-linear-gradient"; // Gradient background
import { useTheme } from "../../hooks";
import { Icon } from "react-native-elements";
import { responsiveWidth } from "react-native-responsive-dimensions";

const BalanceCard = () => {
  const {
    Layout,
    Colors,
    Images,
    Gutters,
    Fonts,
    iosSafeAreaTPadding,
    NavigationColors,
  } = useTheme();
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  const handleUpgradeAccount = () => {
    Alert.alert("Upgrade Account", "Redirecting to upgrade...");
  };

  const handleAddCash = () => {
    Alert.alert("Add Cash", "Redirecting to add cash...");
  };

  return (
    <LinearGradient
      colors={["#00A65380", "#1077C280"]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}
      style={[
        Layout.fullWidth,
        Gutters.tinyPadding,
        Gutters.smallTMargin,
        styles.card,
      ]}
    >
      <View
        style={[
          Layout.row,
          Layout.alignItemsCenter,
          Layout.justifyContentBetween,
          Gutters.smallVMargin,
        ]}
      >
        <View style={styles.balanceContainer}>
          <Text
            style={[
              Fonts.textSmall,
              {
                color: Colors.white,
              },
            ]}
          >
            Available Balance
          </Text>
          <View style={styles.balanceRow}>
            <Text
              style={[Fonts.textBold, { color: Colors.white, fontSize: 25 }]}
            >
              {isBalanceVisible ? "GH₵ 2800.000" : "••••••••"}
            </Text>
            <TouchableOpacity onPress={toggleBalanceVisibility}>
              <Icon
                name={isBalanceVisible ? "eye-off" : "eye"}
                type={"feather"}
                size={18}
                color={Colors.white}
                style={{ marginLeft: responsiveWidth(3) }}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={toggleBalanceVisibility}>
            <Text style={[{ color: Colors.white, fontSize: 13 }]}>
              Tap to {isBalanceVisible ? "hide" : "show"} balance
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{width:"35%"}}>
          <TouchableOpacity
            style={styles.upgradeButton}
            onPress={handleUpgradeAccount}
          >
            <Text style={styles.upgradeButtonText}>Upgrade account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.addCashButton}
            onPress={handleAddCash}
          >
            <Text style={styles.addCashButtonText}>Add Cash</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Balance Section */}

      {/* Buttons Section */}
      {/* <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.upgradeButton}
          onPress={handleUpgradeAccount}
        >
          <Text style={styles.upgradeButtonText}>Upgrade account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addCashButton} onPress={handleAddCash}>
          <Text style={styles.addCashButtonText}>Add Cash</Text>
        </TouchableOpacity>
      </View> */}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    // shadowColor: "#000",
    // shadowOpacity: 0.1,
    // shadowOffset: { width: 0, height: 4 },
    // shadowRadius: 10,
    // elevation: 5,
  },
  balanceContainer: {
    marginBottom: 20,
  },
  label: {},
  balanceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  balance: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
    flex: 1,
  },
  eyeIcon: {
    fontSize: 20,
    marginLeft: 8,
    color: "#555",
  },
  tapText: {},
  buttonsContainer: {},
  upgradeButton: {
    backgroundColor: "transparent",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
  },
  upgradeButtonText: {
    color: "#fff",
    fontSize:13
  },
  addCashButton: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
    marginTop:10
  },
  addCashButtonText: {
    color: "#1077C2",
    fontWeight: "600",
  },
});

export default BalanceCard;
