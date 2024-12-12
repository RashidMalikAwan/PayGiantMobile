import { Alert, PermissionsAndroid, Platform, StatusBar } from "react-native";
import { showMessage } from "react-native-flash-message";
// import Geolocation from 'react-native-geolocation-service';
import ImagePicker from "react-native-image-crop-picker";
interface Coordinates {
  latitude: number;
  longitude: number;
  heading?: number | null;
}

const getCurrentLocation = (): Promise<Coordinates> =>
  new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      (position: any) => {
        const coords: Coordinates = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          heading: position.coords.heading,
        };
        resolve(coords);
      },
      (error) => {
        reject(error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  });

const locationPermission = (): Promise<string> =>
  new Promise(async (resolve, reject) => {
    if (Platform.OS === "ios") {
      try {
        const permissionStatus = await Geolocation.requestAuthorization(
          "whenInUse"
        );
        if (permissionStatus === "granted") {
          return resolve("granted");
        }
        reject("Permission not granted");
      } catch (error) {
        return reject(error);
      }
    }
    return PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    )
      .then((granted) => {
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          resolve("granted");
        }
        return reject("Location Permission denied");
      })
      .catch((error) => {
        console.log("Ask Location permission error: ", error);
        return reject(error);
      });
  });

const showError = (message: any, duration?: number): void => {
  showMessage({
    message: message || "Something went wrong",
    type: "danger",
    icon: "danger",
    titleStyle: { fontFamily: "Poppins-SemiBold" },
    style: { paddingTop: StatusBar.currentHeight },
    autoHide: true,
    duration: duration || 1850,
  });
};

const showSuccess = (message: string, duration?: number): void => {
  showMessage({
    message,
    type: "success",
    icon: "success",
    titleStyle: { fontFamily: "Poppins-SemiBold" },
    style: { paddingTop: StatusBar.currentHeight },
    autoHide: true,
    duration: duration || 1850,
  });
};

const showCustomAlert = (
  title: string,
  message: string,
  okAction?: () => void,
  cancelAction?: () => void,
  okText?: string | "OK"
): void => {
  const buttons = [{ text: okText || "OK", onPress: okAction }];

  if (cancelAction) {
    buttons.push({ text: "Cancel", onPress: cancelAction });
  }

  Alert.alert(title, message, buttons);
};

const formatingText = (number: any) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
const isValidEmail = (email: any) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidPassword = (password: any) => {
  // Check for at least 8 characters, a number or symbol
  const passwordRegex = /^(?=.*[0-9!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  return passwordRegex.test(password);
};
const pickImage = async() => {
  try {
    let image = await ImagePicker.openPicker({
      width: 1000,
      height: 800,
      cropping: true,
      includeBase64: false,
      compressImageQuality: 0.5,
      compressImageMaxWidth: 1500,
      compressImageMaxHeight: 1000,
    });
    if (image?.path) {
      return {
        uri:
          Platform.OS === "android"
            ? image?.path
            : image?.path.replace("file://", ""),
        name: image?.filename,
        type: image?.mime,
      };
    } else {
      throw "unknown error";
    }
  } catch (error) {
    // throw new Error(error);
    console.log("error while picking image", error);
  }
};

const takePhoto = async() => {
  try {
    let image = await ImagePicker.openCamera({
      width: 1000,
      height: 800,
      cropping: true,
      includeBase64: false,
      compressImageQuality: 0.5,
      compressImageMaxWidth: 1500,
      compressImageMaxHeight: 1000,
    });
    console.log({ image });
    return {
      uri:
        Platform.OS === "android"
          ? image?.path
          : image?.path.replace("file://", ""),
      name: image?.mime,
      type: image?.mime,
    };
  } catch (error) {
    console.log("error while camera image", error);
  }
};
export {
  // getCurrentLocation,
  // locationPermission,
  showCustomAlert,
  showError,
  showSuccess,
  formatingText,
  isValidEmail,
  isValidPassword,
  pickImage,
  takePhoto
};
