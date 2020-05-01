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
  const { campeonatoId } = route.params;

  const [fases, setFases] = useState([]);
  const [mensagem, setMensagem] = useState([]);

  const getChampionshipStages = () => {
    axios
      .get(`https://api.api-futebol.com.br/v1/campeonatos/${campeonatoId}`, {
        headers: {
          Authorization: `Bearer live_77d309636a6cb48a45b7d36746a68c`,
        },
      })
      .then((retorno) => {
        const fases = retorno.data.fases;
        if (fases.length < 1) {
          setMensagem("Campeonado não Iniciado");
        } else {
          setMensagem("Fases já ocorridas: ");
          const fasesFinalizadas = [];
          fases.map((fase) => {
            if (fase.status === "finalizado") {
              fasesFinalizadas.push(fase);
            }
          });
          setFases(fasesFinalizadas);
        }
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
        data={fases}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => console.log(item)}>
            <Text style={styles.item}>{item.nome}</Text>
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
