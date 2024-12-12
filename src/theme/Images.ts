import { ThemeVariables } from "../../@types/theme";

export default function ({}: ThemeVariables) {
  return {
    logo: require("./assets/images/logo.png"),
    arrow: require("./assets/images/arrow.png"),
    bank: require("./assets/images/bank.png"),
    money: require("./assets/images/Money.png"),
    trash: require("./assets/images/trash.png"),

    logo_white: require("./assets/images/logo-white.png"),
    card: require("./assets/images/card.png"),
    wallet: require("./assets/images/wallet.png"),
    icon: require("./assets/images/icon.png"),
    line: require("./assets/images/line.png"),
    chip: require("./assets/images/card-chip.png"),
    icons: {
      signuout: require("./assets/images/signOut.png"),
      device: require("./assets/images/deviceMobile.png"),
      star: require("./assets/images/star.png"),
      user: require("./assets/images/user.png"),
      users: require("./assets/images/users.png"),
      customerSupport: require("./assets/images/customerSupport.png"),
      identificationBadge: require("./assets/images/IdentificationBadge.png"),
      wallet_icon: require("./assets/images/wallet-icon.png"),
      withdraw: require("./assets/images/Withdraw.png"),
    },
  };
}
