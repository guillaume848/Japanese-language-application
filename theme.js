import { Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');

export const COLORS = {
    primary: "#9B9B9B",
    secondary: '#9B9B9B',
    accent: '#349DA4',
    
    success: '#00C851',
    error: '#ff4444',

    black: "#171717",
    white: "#FFFFFF",
    background: "#252C4A"
}


export const SIZES = {
    base: 10,
    width,
    height
}