<h1 align="center">
  <img src="./.github/logo.svg" alt="Happy" />
<h1>
<h2 align="center">
  Leve amor e felicidade a várias crianças!
  <br>
  Desenvolvido no evento NLW #03 promovido pela <a href="https://rocketseat.com.br/">Rocketseat</a>
</h2>

---

## Sobre o projeto
O evento NLW é ministrado durante o decorrer de uma semana, nele, uma aplicação completa backend, web e mobile é construída do zero usando Typescript com as tecnologias Node, ReactJs e React Native.

Para acelerar o desenvolvimento do aplicativo mobile deste projeto, o mesmo foi criado utilizando o Expo. Esse projeto encontrasse em uma estrutura de monorepo feita com yarn, caso queira saber mais sobre o funcionamento de projetos expo em estruturas de monorepo consulte este [link](https://github.com/expo/expo/tree/master/packages/expo-yarn-workspaces).

O aplicativo batizado de Happy tem o objetivo de divulgar os centros de acolhimento institucional de crianças e adolescentes, a intenção é promover a existência desses locais em sua cidade e incentivar a população a visitar esses centros para conhecer o local e seu funcionamento. As pessoas que costumam visitar esses locais relatam que especialmente as crianças ficam muito felizes com visitantes, este é um meio de alegrar a vida de alguém!

<div align="center">
  <img src="./.github/happy.png" style="max-width: 100%" alt="Imagem do sistema Happy" />
</div>

As versões web e mobile desenvolvidas no evento possuem as mesmas funcionalidades, estas consistem em consultar por meio de um mapa as instituições cadastradas no sistema, assim como cadastrar novas instituições informando dados como a localização exatas selecionada diretamente em um mapa, e realizar uploads de imagens do centro para a visualização dos usuários.

## Get Started
Para executar este projeto é necessário que você possua as seguintes ferramentes instaladas em seu ambiente:
- node ^12.16.1
- yarn ^1.22.5

Clone este repositório para seu ambiente de trabalho.
Acesse o diretório do projeto pelo terminal e execute o comando `yarn install` para baixar as dependências.

### Executando o Backend
- Acesse o diretório *backend* por meio do terminal e execute o tomando `yarn typeorm migration:run` para criar o banco de dados
- Execute o comando `yarn dev` para iniciar o servidor

### Executando o ambiente web
- Acesse o diretório *web* por meio do terminal e execute o comando `yarn start`

### Executando o ambiente mobile
- Acesse o diretório *mobile* por meio do terminal e execute o comando `yarn postinstall`, isso é necessário dada a estrutura de monorepo com expo
- Execute o comando `yarn start`
- Abra o arquivo [api.ts](./mobile/src/services/api.ts) em [mobile/src/services/](./mobile/src/services)
- Edite o endereço ip do parâmetro **baseURL** copiado anteriormente
- Abra o arquivo [imagesView.ts](./backend/src/views/imagesView.ts) em [backend/src/views/](./backend/src/views/)
- Altere o nome localhost pelo endereço ip copiado
- Baixe o aplicativo Expo no seu smartphone por meio da loja de aplicativos do seu celular
- Use o leitor de código de barras do aplicativo para ler o código apresentado no browser (o seu computador e o seu smartphone precisam estar na mesma rede)

## Testando as rotas
Você pode testar as rotas do backend por meio de qualquer aplicativo que realiza testes a API REST, caso você esteja usando a IDE vs code, pode baixar a extensão REST Client e realizar os testes diretamente do seu IDE. Dentro da pasta [backend/client](./backend/client) estão disponíveis arquivos http que demonstram o funcionamento das rotas.

## Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

by Mauricio Redmerski André
