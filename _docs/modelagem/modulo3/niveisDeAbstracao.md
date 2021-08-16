---
layout: default
title: Níveis de abstração
grand_parent: Módulo Desenho de Software (Modelagem)
parent: Módulo Modelagem Ágil
nav_order: 1
---

Níveis de abstração
{: .fs-9}

#### Versionamento

| Versão | Data       | Comentários                   | Autor(es)                                      |
| ------ | ---------- | ----------------------------- | ---------------------------------------------- |
| 0.1    | 16/08/2021 | Abertura do documento Níveis de abstração    | Matheus Gabriel |
| 0.2    | 16/08/2021 | Criação dos Épicos, Features e US    | Matheus Gabriel e Eduardo Picolo |

## Introdução

Neste documento iremos abordar assuntos relacionados a documentação dos requisitos levantados anteriormente 
usando técnicas como estórias de usuários, épicos, features.

## Épicos

| Código | Nome |
|--|--|
| EP1 | Acesso ao sistema |
| EP2 | Buscar produtos |
| EP3 | Agendar Aluguel |
| EP4 | Gerenciamento do sistema |

## Features

|Épicos | Código | Nome |
|--|--|--|
| EP1 | FE1 | Cadastro no sistema |
| EP1 | FE2 | Login sistema |
| EP1 | FE3 | Alterar senha |
| EP1 | FE4 | Gerenciar perfil do usuário |
| EP2 | FE5 | Buscar produtos utilizando busca literal |
| EP2 | FE6 | Buscar produtos utilizando filtros |
| EP3 | FE7 | Consultar dados do produto |
| EP3 | FE8 | Adicionar produtos no carrinho |
| EP3 | FE9 | Reservar aluguel de um produto |
| EP4 | FE10 | Cadastrar produtos |
| EP4 | FE11 | Gerenciar estoque |

## Estórias de usuários

Uma estória de usuário é uma curta e simples descrição de uma tarefa expressa na perspectiva da pessoa que 
deseja essa nova funcionalidade, normalmente um usuário ou cliente do sistema (Wiegers e Beatty, 2013).

Serão escritos da seguinte forma:

`Eu, como um < TIPO DE USUÁRIO >, desejo < OBJETIVO > para que eu consiga < UMA RAZÃO >`

| Código | Descrição | Critérios de aceitação |
|--|--|--|
| US1 | Eu, como usuário, desejo me cadastrar no sistema para que eu consiga usufruir de todas as funcionalidades do sistema | **A aplicação deve:** {::nomarkdown}</br> -  Mostrar o formulário de submissão{:/} |
| US2 | Eu, como usuário, desejo acessar o sistema com minha conta para que eu consiga utilizar todas as funcionalidades do sistema | **A aplicação deve:** {::nomarkdown}</br> - Mostrar o formulário de login</br> - Mostrar opção de esqueci a senha{:/} |
| US3 | Eu, como usuário, desejo recuperar a minha senha para que eu consiga recuperar o acesso ao sistema | **A aplicação deve:** {::nomarkdown}</br> - Mostrar o formulário de recuperação</br>{:/} **O usuário deve:** {::nomarkdown}</br> - Possuir acesso ao email cadastrado</br>{:/}|
| US4 | Eu, como usuário, desejo alterar dados do meu perfil para que eu consiga manter os meus dados atualizados | **A aplicação deve:** {::nomarkdown}</br> - Possibilitar a edição dos dados do usuários</br>{:/} **O usuário deve:** {::nomarkdown}</br> - Possuir conta cadastrada</br>{:/}|
| US5 | Eu, como usuário, desejo deletar a minha conta para que eu consiga deixar de usar a aplicação | **A aplicação deve:** {::nomarkdown}</br> - Possibilitar a deleção do usuários</br>{:/} **O usuário deve:** {::nomarkdown}</br> - Possuir conta cadastrada</br>{:/}|
| US6 | Eu, como usuário, desejo buscar produtos do meu interesse para que eu consiga encontrar os produtos de meu interesse | **A aplicação deve:** {::nomarkdown}</br> - Possibilitar a busca de produtos</br>{:/} |
| US7 | Eu, como usuário, desejo buscar produtos do meu interesse baseado em alguns filtros para que eu consiga encontrar os produtos de meu interesse | **A aplicação deve:** {::nomarkdown}</br> - Possibilitar a busca de produtos por filtros</br> - Alocar os produtos em categorias{:/} |
| US8 | Eu, como usuário, desejo acessar os dados de produtos do meu interesse para que eu consiga verificar os dados de um produto | **A aplicação deve:** {::nomarkdown}</br> - Possuir uma página para seus produtos</br>{:/} |
| US9 | Eu, como usuário, desejo visualizar a agenda de disponibilidade dos produtos do meu interesse para que eu consiga verificar a disponibilidade de um produto | **A aplicação deve:** {::nomarkdown}</br> - Possuir agenda de reservas para cada produto</br>{:/} |
| US10 | Eu, como usuário, desejo agendar a locação dos produtos do meu interesse para que eu consiga agendar o aluguel de um ou mais produtos | **A aplicação deve:** {::nomarkdown}</br> - Possuir agenda de reservas para cada produto</br> - adicionar marcação de reserva no produto</br> - Adicionar produtos no carrinho{:/} **O usuário deve:** {::nomarkdown}</br> - Possuir conta cadastrada</br>{:/} |
| US11 | Eu, como usuário, desejo renovar a locação dos produtos que estou atualmente alugando para que eu consiga prorrogar o aluguel de um ou mais produtos | **A aplicação deve:** {::nomarkdown}</br> - Possuir agenda de reservas para cada produto</br> - Permitir a renovação dos produtos{:/} **O usuário deve:** {::nomarkdown}</br> - Possuir conta cadastrada</br> - Possuir produtos alugados{:/} |
| US12 | Eu, como administrador, desejo adicionar produtos novos no catálogo do sistema de modo que eu consiga incluir novos produtos junto ao sistema | **A aplicação deve:** {::nomarkdown}</br> - Possuir usuários administradores</br> - Possuir página para criação de produtos{:/} |
| US13 | Eu, como administrador, desejo editar produtos do sistema de modo que eu consiga manter o sistema atualizado | **A aplicação deve:** {::nomarkdown}</br> - Possuir usuários administradores</br> - Possuir página para edição de produtos{:/} |
| US13 | Eu, como administrador, desejo editar quantidades e disponibilidade de produtos do sistema de modo que eu consiga manter o sistema atualizado com meu estoque | **A aplicação deve:** {::nomarkdown}</br> - Possuir usuários administradores</br> - Possuir página para edição de produtos{:/} |

## Referências

NUNES, Daniel. O QUE SÃO ÉPICOS, TEMAS E ESTÓRIAS DE USUÁRIOS?. ERPAgile. Disponível em: http://erpagile.com.br/EAP/o-que-sao-epicos-temas-e-estorias-de-usuarios/. Acesso em: 31 de março de 2021.

REHKOPF, Max. Histórias de usuários com exemplos e template. Atlassian. Disponível em: https://www.atlassian.com/br/agile/project-management/user-stories. Acesso em: 31 de março de 2021.

VENTURA, Plínio. Epic, Feature e User Story (Épico, Funcionalidade e História de Usuário). Até o momento. Disponível em: https://www.ateomomento.com.br/epic-feature-e-user-story/. Acesso em: 31 de março de 2021.
