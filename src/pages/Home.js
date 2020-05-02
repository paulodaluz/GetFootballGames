import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

const Home = (props) => {
  const { navigation } = props;
  const [campetonatos, setCampeonatos] = useState([]);

  const getChampionships = () => {
    axios
      .get("https://api.api-futebol.com.br/v1/campeonatos", {
        headers: {
          Authorization: `Bearer live_8521dc4093c0350144130ab7488d0e`,
        },
      })
      .then((retorno) => {
        setCampeonatos(retorno.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  useEffect(() => {
    getChampionships();
  }, []);

  return (
    <View style={styles.container}>
      <Text> Seja Bem-Vindo </Text>
      <FlatList
        data={campetonatos}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.replace("Fases", { campeonatoId: item.campeonato_id })
            }
          >
            <View style={styles.tabela}></View>
            <Text style={styles.item}>{item.nome}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.email}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
  },
  item: {
    borderWidth: 1,
    borderColor: "gray",
    width: "90%",
    marginLeft: "5%",
    marginTop: 10,
    padding: 3,
    textAlign: "center",
  },
});
