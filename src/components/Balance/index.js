import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Balance({ gains, expenses }) {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>
            <View style={styles.content}>
                <Text style={styles.currencySymbol}>R$</Text>
                <Text style={styles.balance}>{gains}</Text>
            </View>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
            <View style={styles.content}>
                <Text style={styles.currencySymbol}>R$</Text>
                <Text style={styles.expenses}>{expenses}</Text>
            </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingEnd: 18,
    paddingStart: 18,
    marginTop: -24,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 4,
    paddingTop: 22,
    paddingBottom: 22,
    zIndex: 10
  },
  itemTitle: {
     fontSize: 20,
     color: "#dadada"
  },
  content: {
    flexDirection: "row",
    alignItems: "center"
  },
  currencySymbol: {
    marginRight: 6,
    color: "#dadada"
  },
  balance: {
    fontSize: 22,
    color: "#2ecc71"
  },
  expenses: {
    fontSize: 22,
    color: "#e74c3c"
  }
});
