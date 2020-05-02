import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Button,
} from "react-native";
import axios from "axios";

const Fases = (props) => {
  const { navigation } = props;
  const { route } = props;
  const { campeonatoId, faseId } = route.params;

  const [jogos, setJogos] = useState([]);
  const [mensagem, setMensagem] = useState([]);

  const getChampionshipStages = () => {
    axios
      .get(
        `https://api.api-futebol.com.br/v1/campeonatos/${campeonatoId}/fases/${faseId}`,
        {
          headers: {
            Authorization: `Bearer live_8521dc4093c0350144130ab7488d0e`,
          },
        }
      )
      .then((retorno) => {
        const chaves = retorno.data.chaves;
        const arrayChaves = [];

        for (var chave in chaves) {
          console.log("chave", chave, "chave");
          arrayChaves.push(chaves[chave]);
        }
        console.log("arrayChaves", arrayChaves, "arrayChaves");
        setJogos(arrayChaves);
        console.log("PAULERA", jogos, "PAULERA");
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  useEffect(() => {
    getChampionshipStages();
  }, []);

  return (
    <View style={styles.container}>
      <Text> {mensagem} </Text>
      <FlatList
        data={jogos}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => console.log(item)}>
            <Text style={styles.item}>{item.ida[0].placar}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.email}
      />
      <Button
        title="Voltar a página inicial"
        onPress={() => navigation.replace("Home")}
        color="red"
      />
    </View>
  );
};

export default Fases;

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
