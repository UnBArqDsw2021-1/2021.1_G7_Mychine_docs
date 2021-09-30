---
layout: default
title: Documento de Arquitetura
grand_parent: Arquitetura de Software & Reutilização
parent: Módulo Estilos e Padrões Arquiteturais
nav_order: 1
---

Documento de Arquitetura
{: .fs-9}

<br>
1. TOC
{:toc}

#### Versionamento
{: .no_toc }

| Versão | Data       | Comentários                  | Autor(es)                                       |
| ------ | ---------- | ---------------------------- | ----------------------------------------------- |
| 0.1    | 29/09/2021 | Abertura do documento        | Giovanna B Bottino                              |
| 0.2    | 29/09/2021 | Adiciona introdução          | Giovanna B Bottino                              |
| 0.2.1  | 29/09/2021 | Adiciona finalidade          | Roberto Martins da Nóbrega e Giovanna B Bottino |
| 0.2.2  | 30/09/2021 | Adiciona escopo              | Roberto Martins da Nóbrega e Giovanna B Bottino |
| 0.2.3  | 30/09/2021 | Adiciona acrônimos           | Roberto Martins da Nóbrega e Giovanna B Bottino |

## 1. Introdução

O documento de Arquitetura de Software fornece uma visão geral de todo a arquitetura do sistema de software. Deve ser usado para a documentação e comunicação entre os participantes do projeto sobre questões arquiteturais [[2]](#ref). 

Esse documento tem como objetivo fornecer a arquitetura do projeto Mychine. Mychine é uma aplicação web que visa ser uma plataforma de que facilite o aluguel de equipamentos para construção civil. A seguir pode encontrar uma visão arquitetural de caso de uso, lógica e outras. Assim poderemos representar sobre diferentes perpectivas e comunicar as decisões arquiteturais que foram tomadas.

### 1.1 Finalidade

Este documento tem como finalidade especificar e documentar as decisões arquiteturais do software Mychine, usando diferentes visões arquiteturais para detalhar diferentes aspectos do sistema.

Está estruturado de forma que iniciamos com uma introdução geral, em seguida explicamos a representação arquitetural, as metas e restrições de arquitetura, os requisitos de software e outros objetivos importantes. Explicamos cada visão utilizada nesse projeto para avançar com a descrição do tamanho e do desempenho. Finalizamos com as características de qualidade do projeto [[2]](#ref).

### 1.2 Escopo

Mychine é uma aplicação que visa facilitar o gerenciamento de uma empresa de aluguel de equipamentos para construção civil. Nessa aplicação é possivel fazer cadastro e agendar o aluguel de equipamentos.

A aplicação permite que o cliente consulte as categorias de equipamentos, seus respectivos preços, os dias disponiveis e agende um aluguel.

Esse documento de arquitetura descreve como a aplicação funciona, quais são os requisitos para o funcionamento correto, quais são as restrições do sistema, as tecnologias utilizadas e etc. Serve de guia ao abordar os principais pontos desenvolvidos na arquitetura do projeto [[1]](#ref). 

### 1.3 Definições, Acrônimos e Abreviações

| Sigla  | Descrição                                                                  |
| ------ | -------------------------------------------------------------------------- |
| DAS    | Documento de Arquitetura de Software                                       |
| MVC    | Model-View-Controller(Modelo-Visão-Controle)                               |
| UML    | Unified Modeling Language(Linguagem de modelagem unificada)                |
| REST   | Representational State Transfer(Transferência Representacional de Estado)  |

### 1.4  Referências Bibliográficas

[1] SERRANO, Milene. DAS, 2021. Material apresentado na Disciplina de Arquitetura e Desenho de Software do curso de engenharia de software da UnB, FGA. Acesso em: 29 de setembro de 2021.
{: #ref1}

[2] SERRANO, Milene. Template - DAS, 2021. Material apresentado na Disciplina de Arquitetura e Desenho de Software do curso de engenharia de software da UnB, FGA. Acesso em: 29 de setembro de 2021.
{: #ref2}

### 1.5 Visão Geral

## 2. Representação Arquitetural

## 3. Metas Arquiteturais e Restrições

## 4. Visão de Casos de Uso

### 4.1 Especificação dos Casos de Uso

## 5. Visão Lógica

### 5.1 Visão geral

### 5.2  Pacotes de projeto com significado arquitetônico

## 6. Visão do Processo

## 7. Visão de implantação

## 8. Visão de implementação

## 8.1 Visão geral

## 8.2 Camadas

## 9. Visualização de dados

## 10. Tamanho e desempenho

## 11. Qualidade