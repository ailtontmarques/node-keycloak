# oAuth2 com Keycloak

## Descrição

Este projeto consiste em demonstrar como criar um ambiente oAuth2 usando <a href='www.keycloak.org'>Keycloak</a> em TypeScript de forma simples e produtiva.

## Instalação

* Faça o clone do projeto
* Inicie o Docker e execute o docker-compose.yaml para criar o servidor Keycloak
* Execute o comando ```npm install```

## Rodar o projeto

* Antes de abrir a aplicação, acesse o servidor virtual Keycloak e que deve estar rodando em http://localhost:8080.

```sh
Efetue a seguinte configuração:
1- Acesse o Administration Console e adicione um novo realm > Add realm
2- Na opção User, crie um novo usuário ```Add user``` e preencha as informações de account e e-mail, selecionando email verified to off
3- Na Aba Credentials, acessar manage credentials e selecione password (informar a nova palavra-chave)
4- Na opção Clients, crie um novo client ```Add client``` e preencha com o nome express-web, selecione o atributo client protocol e informe openid-connect. Informe o root url: http://localhost:3000

IMPORTANTE:
Ao informar access Type, escolha entre public ou confidential.

confidential para aplicações que requeiram client secret habilitado.


```

* ```npm run start``` - Executa a aplicação com nodemon e roda um servidor em http://localhost:3000 para testar o projeto.


