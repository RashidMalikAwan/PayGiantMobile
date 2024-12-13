import { NavigatorScreenParams } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

export type MainParamsList = {
  Home: undefined;
};

export type ApplicationStackParamList = {
  Startup: undefined;
  Auth?: NavigatorScreenParams<AuthParamsList>;
  AppStack?: NavigatorScreenParams<MainParamsList>;
  MainTabScreens?: NavigatorScreenParams<MainParamsList>;
  Home?: NavigatorScreenParams<MainParamsList>;
  History?: NavigatorScreenParams<MainParamsList>;
  Coupons?: NavigatorScreenParams<MainParamsList>;
  More?: NavigatorScreenParams<MainParamsList>;
  Stack?: NavigatorScreenParams<MainParamsList>;
  setupOrganization?: NavigatorScreenParams<setupOrganizationParamsList>;
  SelectBeneficiary?: NavigatorScreenParams<MainParamsList>;
  TransactionComplete?: NavigatorScreenParams<MainParamsList>;
  ViewReceipt?: NavigatorScreenParams<MainParamsList>;
  Dashboard?: NavigatorScreenParams<MainParamsList>;
};

export type ApplicationScreenProps =
  StackScreenProps<ApplicationStackParamList>;
