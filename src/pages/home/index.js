import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Actions from "../../components/Actions";
import Balance from "../../components/Balance";
import Header from "../../components/Header";
import Movements from "../../components/Movements";

const list = [
  {
    id: 1,
    label: "Boleto conta de luz",
    value: "300,90",
    date: "17/09/2022",
    type: 0, //despesa
  },
  {
    id: 2,
    label: "Pix Futebol das quartas",
    value: "20,90",
    date: "19/09/2022",
    type: 0, //despesa
  },
  {
    id: 3,
    label: "Salário",
    value: "2400,00",
    date: "15/09/2022",
    type: 1, //receita
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Fernando T. Frantz" />
      <Balance gains="5,645,45" expenses="2,645,12" />

      <Actions />

      <Text style={styles.title}>Últimas movimentações </Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item}/> }
      />


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  title: {
    margin: 14,
    fontSize: 18,
    fontWeight: "bold",
  },
  list: {
    marginEnd: 14,
    marginStart: 14
  }
});
