import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./style";

const Button = ({label, onPress}) => (
    <TouchableOpacity style = {styles.Button} onPress = {onPress}>
        <Text style={styles.Button}>{label}</Text>
    </TouchableOpacity>

);
export default Button;