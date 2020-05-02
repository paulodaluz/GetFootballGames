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
          Authorization: `Bearer live_8521dc4093c0350144130ab7488d0e`,
        },
      })
      .then((retorno) => {
        const allFases = retorno.data.fases;
        if (allFases.length < 1) {
          setMensagem("Campeonado não Iniciado");
        } else {
          setMensagem("Fases já ocorridas: ");
          const fasesFinalizadas = [];
          allFases.map((fase) => {
            if (fase.status === "finalizado") {
              fasesFinalizadas.push(fase);
            }
          });
          setFases(fasesFinalizadas);
          console.log("aaaaaaaaaaaaaaaaaaaaaaaa", fasesFinalizadas);
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
          <TouchableOpacity
            onPress={() =>
              navigation.replace("Jogos", {
                campeonatoId,
                faseId: item.fase_id,
              })
            }
          >
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
