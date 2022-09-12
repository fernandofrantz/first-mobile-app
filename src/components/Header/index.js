import react from "react";

import { View, StyleSheet, Text, StatusBar, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons"
const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({ name }) {


    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.username}>{name}</Text>
                <TouchableOpacity activeOpacity={0.8} style={styles.buttonUser}>
                    <Feather name="user" color="#fff" size={27}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{ 
        backgroundColor: "#8000ff",
        paddingTop: statusBarHeight,
        flexDirection: "row",
        paddingEnd: 16,
        paddingStart: 16,
        paddingBottom: 44
    },
    content: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row"
    },
    username: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFF"
    },
    buttonUser: {
        width: 44,
        height: 44,
        backgroundColor: "rgba(255,255,255, 0.5)",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 44/2
        
    }
})