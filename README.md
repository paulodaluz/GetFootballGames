# Get Football Games

Aplicativo acadêmico em React Native para consultar campeonatos, suas fases e os jogos retornados pela API Futebol. A atividade original utilizava dados da Copa do Brasil e do Brasileirão de 2020.

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![License MIT](https://img.shields.io/badge/License-MIT-blue)](LICENSE)

## 📋 Table of contents

- [✨ Features](#features)
- [🧪 Technologies](#technologies)
- [🛠️ Environment setup](#environment-setup)
- [🚀 Getting started](#getting-started)
- [🗂️ Project structure](#project-structure)
- [✅ Testing and quality](#testing-and-quality)
- [🔎 Troubleshooting](#troubleshooting)
- [🤝 Contributing](#contributing)
- [📜 License](#license)

<a id="features"></a>

## ✨ Features

- Listagem de campeonatos retornados por `/v1/campeonatos`.
- Navegação para as fases do campeonato selecionado com `status` igual a `finalizado`.
- Consulta dos jogos por campeonato e fase, exibindo o placar do primeiro jogo de ida de cada chave.
- Mensagem quando o campeonato não apresenta fases.

Os dados exibidos dependem da conta, do plano e das respostas atuais da API; o código não fixa um arquivo histórico offline de 2020.

<a id="technologies"></a>

## 🧪 Technologies

| Tecnologia | Versão declarada | Finalidade |
| --- | --- | --- |
| [Expo](https://docs.expo.dev/)  | ~37.0.3 | SDK mobile histórico |
| [React](https://react.dev/)  | ~16.9.0 | Componentes |
| [React Native](https://reactnative.dev/) | Arquivo `sdk-37.0.1.tar.gz` do fork Expo | Runtime nativo; não significa React Native 37.0.1 |
| [React Navigation](https://reactnavigation.org/) | ^5.2.3 | Navegação |
| [Axios](https://axios-http.com/) | ^0.19.2 | Cliente HTTP |

As versões/faixas vêm do `package.json`. Node.js não está fixado; a tentativa de reprodução usa Node.js 14.21.3 e npm 6.14.18.

<a id="environment-setup"></a>

## 🛠️ Environment setup

Requer Git, Node.js e npm. O projeto não fixa Node.js em `engines`, `.nvmrc` ou `.node-version`. **Node.js 14.21.3 com npm 6.14.18** foi escolhido para a reprodução da pilha histórica; não é uma versão declarada pelo repositório nem uma atualização de dependências.

```bash
nvm install 14.21.3
nvm use 14.21.3
git clone https://github.com/paulodaluz/GetFootballGames.git
cd GetFootballGames
npm install
```

Não há lockfile versionado: use `npm install`, não `npm ci`. Este guia adota npm, disponível com o Node.js, sem prometer uma resolução de dependências idêntica entre instalações. Não há Husky, hooks versionados ou script `prepare` para ativar.

O SDK Expo 37 antecede a CLI local dos SDKs atuais. O manifesto não declara `expo-cli`; o executável `expo` fornecido pelo SDK é um wrapper que chama `expo-cli`. É necessário um ambiente legado já preparado com essa CLI. Não presuma que o Expo Go atual abre esse SDK. Instalação global de CLI, SDKs de emulador e atualização do projeto não fazem parte desta entrega.

### API Futebol

É necessário um acesso próprio à [API Futebol](https://www.api-futebol.com.br/). As chamadas de `src/pages/Home.js`, `Fases.js` e `Jogos.js` enviam `Authorization: Bearer TOKEN_DA_SUA_CONTA`. Os valores estão diretamente nesses arquivos; o projeto não lê tokens de `.env`. Revise a configuração antes de executar, sem reutilizar nem publicar credenciais versionadas.

| Requisição externa | Uso |
| --- | --- |
| `GET https://api.api-futebol.com.br/v1/campeonatos` | Lista de campeonatos |
| `GET https://api.api-futebol.com.br/v1/campeonatos/{id}` | Fases disponíveis |
| `GET https://api.api-futebol.com.br/v1/campeonatos/{id}/fases/{faseId}` | Chaves e jogos |

O aplicativo é cliente dessa API; não oferece um servidor HTTP próprio.

<a id="getting-started"></a>

## 🚀 Getting started

Em um ambiente que já disponha da CLI e do cliente compatíveis com Expo SDK 37:

```bash
npm start
```

O comando chama `expo start`. Os scripts `npm run android`, `npm run ios` e `npm run web` acrescentam, respectivamente, `--android`, `--ios` e `--web`. Android/iOS dependem do dispositivo ou emulador preparado; o script web não comprova compatibilidade das dependências nativas. A URL/porta do servidor de desenvolvimento é apresentada pela CLI, sem porta fixa declarada no projeto.

O script `npm run eject` altera a estrutura nativa; não é necessário para esta documentação e não foi executado.

Validação com Node.js 14.21.3/npm 6.14.18: a instalação foi concluída após uma primeira tentativa interrompida por tempo limite. `npm start` chegou ao wrapper `expo`, que solicitou instalar `expo-cli` globalmente; a resposta foi `n`, mantendo o escopo autorizado. O comando encerrou com código 1. Não houve início do aplicativo, build nativo ou validação em dispositivo.

<a id="project-structure"></a>

## 🗂️ Project structure

| Caminho | Responsabilidade |
| --- | --- |
| `App.js` | Navegação entre telas |
| `src/pages/Home.js` | Consulta e seleção de campeonatos |
| `src/pages/Fases.js` | Consulta e seleção das fases |
| `src/pages/Jogos.js` | Leitura de chaves e placares |
| `app.json`, `babel.config.js` | Configuração Expo e Babel |
| `assets/` | Ícone e tela inicial |

<a id="testing-and-quality"></a>

## ✅ Testing and quality

Não há scripts de testes automatizados, lint, formatação ou build de distribuição no manifesto. A instalação de dependências não equivale a compilar o app nem verificar seus fluxos. A execução em dispositivo, a compilação nativa e a captura de tela ficam para revisão posterior. As imagens foram omitidas nesta entrega mobile.

<a id="troubleshooting"></a>

## 🔎 Troubleshooting

- `This command requires Expo CLI`: o wrapper `expo` não encontra `expo-cli` e oferece instalá-lo globalmente. Responda `n` se essa instalação não fizer parte do ambiente autorizado. A CLI não está declarada no manifesto. O bloqueio exige uma decisão posterior sobre o ambiente/atualização; nenhum CLI global foi instalado.
- Sem lockfile, as faixas podem resolver dependências transitivas incompatíveis com o SDK antigo.
- As credenciais da API ficam diretamente nos três componentes; configurar um `.env` não muda as chamadas.
- `Jogos.js` espera `chaves` e acessa `item.ida[0].placar`; respostas de fases com outro formato precisam de tratamento de código.
- Respostas, permissões do plano e jogos não foram verificados contra a API externa.

<a id="contributing"></a>

## 🤝 Contributing

Crie uma branch a partir de `master`, mantenha as instruções compatíveis com os arquivos do projeto e descreva a alteração em um pull request. Execute as verificações aplicáveis descritas acima; registre limitações de serviços externos e ambiente. Não inclua credenciais, dados pessoais, `node_modules` ou arquivos gerados na entrega.

<a id="license"></a>

## 📜 License

Este projeto está sob a licença **MIT**. Consulte [LICENSE](LICENSE); os avisos existentes foram preservados.

---

<p align="center">Made with 💜 by <a href="https://github.com/paulodaluz">Paulo da Luz</a></p>
