# Cadastro de Livros

Este projeto foi gerado utilizando [Angular CLI](https://github.com/angular/angular-cli) version 16.1.5.

## Banco
Utilizado um banco MySQL 8.0.35
As configurações de banco, estão no arquivo application.properties do back-end

## Back
O Back-End foi desenvolvido em Java com Spring. Basta efetuar o clone do projeto "books-be" e depois rodar o comando abaixo, dentro do diretório do projeto:
- mvn clean install

Antes de inicializar a aplicação, abra o arquivo "scripts.sql" da pasta "resources" e execute o script no banco. Ele serve para criar view requisitada no desafio.


## Front

Efetue o clone do projeto "books-fe", entre no diretório do projeto e rode o comando `ng serve`. Depois disso, abra o browser de sua preferência e digite o seguinte endereço `http://localhost:4200/`. 

## Teste Unitários

Foram criados alguns testes unitários para validação do crud de Livros no Back-End.
