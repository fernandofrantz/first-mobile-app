import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MotiText } from "moti";

export default function Movements({ data }) {
  const [showValue, setShowValue] = useState(false);

  return (
    <TouchableOpacity style={StyleSheet.container} onPress={ () => setShowValue(!showValue) }>
      <Text style={styles.date}>{data.date}</Text>
      <View style={styles.content}>
        <Text style={styles.label}>{data.label}</Text>

        {showValue ? (
          <MotiText style={data.type === 1 ? styles.gains : styles.expenses}
            from={{
                translateX: 300,
                opacity: 1
            }}
            animate={{
                translateX: 0,
                opacity: 1
            }}
            transition={{
                type: 'timing',
                delay: 0,
                duration: 150
            }}
          
          >
            {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
          </MotiText>
        ) : (
          <View style={styles.skeleton}>

          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: "#373342",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
    marginBottom: 8,
  },
  date: {
    color: "#767082",
    fontWeight: "bold",
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
  },
  gains: {
    fontSize: 16,
    color: "#2ecc71",
    fontWeight: "bold",
  },
  expenses: {
    fontSize: 16,
    color: "#e74c3c",
    fontWeight: "bold",
  },
  skeleton: {
    marginTop: 6,
    width: 80,
    height: 10,
    backgroundColor: "#dadada",
    borderRadius: 8
  }
});
