import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { MotiView } from 'moti';

export default function Balance({ gains, expenses }) {
  return (
    <MotiView style={styles.container}
      from={{
        rotateX: '-100deg',
        opacity: 0
      }}
      animate={{
        rotateX: '0deg',
        opacity: 1
      }}
      transition={{
        type: 'timing',
        delay: 300,
        duration: 900
      }}
    >
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
    </MotiView>
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
     color: "#767082"
  },
  content: {
    flexDirection: "row",
    alignItems: "center"
  },
  currencySymbol: {
    marginRight: 6,
    fontSize: 18,
    color: "##767082"
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
