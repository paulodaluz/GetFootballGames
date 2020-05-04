# GetFootballGames
Este projeto foi desenvolvido com o intuito de atender aos requisitos de um trabalho da faculdade, condizente a matéria de Tópicos de Programação Mobile.

## Objetivo do Projeto
O objetivo do trabalho é criar um Aplicativo em React Native atendendo aos seguintes requisitos:

A proposta desta Atividade Avaliativa é desenvolver um mini aplicativo que apresente o histórico de partidas da Copa do Brasil2020, até o momento.
1) - Acesse a página https://www.api-futebol.com.br/ e faça um cadastro gratuito. Após validar o seu e-mail, acesse https://www.api-futebol.com.br/dashboard/e clique em API Keys. Devemos utilizar o token denominado "Live" para o correto funcionamento.
   - Será avaliado somente usabilidade do aplicativo.
   - Todas  as  requisições devem ser enviadas com um Header cabeçalho, denominado "Authorization" e  com o  valor "Bearer {aqui  vai  o  seu token}". Abaixo um exemplo de como enviar um Header com o Axios:
 ```
 axios
      .get(
        `https://api.api-futebol.com.br/v1/campeonatos/${campeonatoId}/fases/${faseId}`,
        {
          headers: {
            Authorization: `Bearer live_8521dc4093c0350144130ab7488d0e`,
          },
        }
      )
  ```

2) Para listar todos os campeonatos disponíveis API efetue um GET na URL: https://api.api-futebol.com.br/v1/campeonatos. A mesma retornará apenas a Copa do  Brasil  e  Brasileirão. Ambas as competições devem ser mostradas na tela do APP. Ao selecionar a Competição deve ser mostrado na tela as fases já ocorridas. Tal acesso se dá através da URL https://api.api-futebol.com.br/v1/campeonatos/2acessados o atributo Fases, que é uma lista.

3) Como até o momento não tivemos partidas do Brasileirão, se clicarmos em Brasileirão 2020, o atributo Fases vai estar vazio, portanto, deve ser apresentado na tela mensagem, ‘Campeonado não Iniciado’.

4) Ao selecionar Copa do Brasil -> Fase XX, o APP deve trazer os Jogos realizados, os quais  devem ser acessados através da seguinteURL: https://api.api-futebol.com.br/v1/campeonatos/2/fases/55.


## Tecnologias Utilizadas
A te  cnologia utilizada foi React Native.

## Bibliotecas utilizadas
* @react-native-community/masked-view versão 0.1.10,
* @react-navigation/native versão 5.2.3,
* @react-navigation/stack versão 5.2.18,
* axios versão 0.19.2,
* expo versão 37.0.3,
* react versão 16.9.0,
* react-dom versão 16.9.0,
* react-native versão 37.0.1,
* react-native-gesture-handler versão 1.6.1,
* react-native-reanimated versão 1.8.0,
* react-native-safe-area-context versão 0.7.3,
* react-native-screens versão 2.7.0,
* react-native-web versão 0.11.7,
* @babel/core versão 7.8.6,
* babel-preset-expo versão 8.1.0

## Como instalar a aplicação
- Haverá necessidade de rodar o comando `npm install expo-cli --global` para poder executar a aplicação.
- Após isso, basta apenas baixar o projeto, abrir a pasta local dele no terminal e digitar o comando `yarn install`, que ele ira instalar todas as bibliotecas.

## Como rodar a aplicação localmente
Para startar o projeto você pode digitar o comando `yarn start` no diretório do projeto.

Após isso ele irá abrir uma aba no seu navegador padrão com um QRCode, basta apenas escanear com seu smartphone que você poderá acessar o App.
Obs: 
  - Você precisa estar na mesma rede em seu smartphone e computador que a inicializou o projeto.
  - Você deve ter o Expo para rodar a aplicação.

## Desenvolvedor
[Paulo Ricardo da Luz Júnior](https://www.linkedin.com/in/paulo-ricardo-da-luz-j%C3%BAnior-5a3953164/)
