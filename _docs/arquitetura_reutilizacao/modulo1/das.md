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

| Versão | Data       | Comentários                          | Autor(es)                                                                        |
| ------ | ---------- | ------------------------------------ | -------------------------------------------------------------------------------- |
| 0.1    | 29/09/2021 | Abertura do documento                | Giovanna B Bottino                                                               |
| 0.2    | 29/09/2021 | Adiciona introdução                  | Giovanna B Bottino                                                               |
| 0.2.1  | 29/09/2021 | Adiciona finalidade                  | Roberto Martins da Nóbrega e Giovanna B Bottino                                  |
| 0.2.2  | 30/09/2021 | Adiciona escopo                      | Roberto Martins da Nóbrega e Giovanna B Bottino                                  |
| 0.2.3  | 30/09/2021 | Adiciona acrônimos                   | Roberto Martins da Nóbrega e Giovanna B Bottino                                  |
| 0.2.4  | 30/09/2021 | Adiciona visão geral                 | Roberto Martins da Nóbrega e Giovanna B Bottino                                  |
| 0.2.5  | 30/09/2021 | Adiciona Tecnologias                 | Samuel Nogueira, Matheus Gabriel, Pedro Henrique e Giovanna B Bottino            |
| 0.2.6  | 30/09/2021 | Adiciona Representação Arquitetural  | Pedro Henrique e Giovanna B Bottino            |

## 1. Introdução

O documento de Arquitetura de Software fornece uma visão geral de todo a arquitetura do sistema de software. Deve ser usado para a documentação e comunicação entre os participantes do projeto sobre questões arquiteturais [[5]](#ref). 

Esse documento tem como objetivo fornecer a arquitetura do projeto Mychine. Mychine é uma aplicação web que visa ser uma plataforma de que facilite o aluguel de equipamentos para construção civil. A seguir pode encontrar uma visão arquitetural de caso de uso, lógica e outras. Assim poderemos representar sobre diferentes perpectivas e comunicar as decisões arquiteturais que foram tomadas.

### 1.1 Finalidade

Este documento tem como finalidade especificar e documentar as decisões arquiteturais do software Mychine, usando diferentes visões arquiteturais para detalhar diferentes aspectos do sistema.

Está estruturado de forma que iniciamos com uma introdução geral, em seguida explicamos a representação arquitetural, as metas e restrições de arquitetura, os requisitos de software e outros objetivos importantes. Explicamos cada visão utilizada nesse projeto para avançar com a descrição do tamanho e do desempenho. Finalizamos com as características de qualidade do projeto [[5]](#ref).

### 1.2 Escopo

Mychine é uma aplicação que visa facilitar o gerenciamento de uma empresa de aluguel de equipamentos para construção civil. Nessa aplicação é possivel fazer cadastro e agendar o aluguel de equipamentos.

A aplicação permite que o cliente consulte as categorias de equipamentos, seus respectivos preços, os dias disponiveis e agende um aluguel.

Esse documento de arquitetura descreve como a aplicação funciona, quais são os requisitos para o funcionamento correto, quais são as restrições do sistema, as tecnologias utilizadas e etc. Serve de guia ao abordar os principais pontos desenvolvidos na arquitetura do projeto [[4]](#ref). 

### 1.3 Definições, Acrônimos e Abreviações

| Sigla  | Descrição                                                                  |
| ------ | -------------------------------------------------------------------------- |
| DAS    | Documento de Arquitetura de Software                                       |
| MVC    | Model-View-Controller(Modelo-Visão-Controle)                               |
| UML    | Unified Modeling Language(Linguagem de modelagem unificada)                |
| REST   | Representational State Transfer(Transferência Representacional de Estado)  |

### 1.4  Referências Bibliográficas

[1] DOCKER, About Docker. Disponível em: [https://www.docker.com/company](https://www.docker.com/company)
{: #ref3}

[2] MYSQL, About MySQL. Disponível em: [https://www.mysql.com/](https://www.mysql.com/)
{: #ref4}

[3] NEXT, The React Framework for Production. Disponível em: [https://nextjs.org/](https://nextjs.org/)
{: #ref4}

[4] SERRANO, Milene. DAS, 2021. Material apresentado na Disciplina de Arquitetura e Desenho de Software do curso de engenharia de software da UnB, FGA. Acesso em: 29 de setembro de 2021.
{: #ref1}

[5] SERRANO, Milene. Template - DAS, 2021. Material apresentado na Disciplina de Arquitetura e Desenho de Software do curso de engenharia de software da UnB, FGA. Acesso em: 29 de setembro de 2021.
{: #ref2}

### 1.5 Visão Geral

O projeto trata de uma aplicação web que tem como objetivo ser uma plataforma de que facilite o aluguel de equipamentos para construção civil, tendo como principal diferencial o gerenciamento da agenda dos equipamentos diretamente na plataforma. Para isso o projeto contará com uma solução web responsiva disponível para diversas plataformas. Utilizando Node Js e o framework React Js.

O documento de arquitetura está organizado em tópicos da seguinte maneira:

- Introdução: fornece uma visão geral de todo o Documento de Arquitetura de Software. Inclui a finalidade, o escopo, as definições, os acrônimos, as abreviações, as referências e a visão geral do Documento de Arquitetura de Software  [[4]](#ref).
- Representação Arquitetural: descreve qual arquitetura de software é para o sistema atual e como ela é representada. Das Visualizações de Caso de Uso, Lógica, de Processo, de Implantação e de Implementação, enumera as visualizações que são necessárias e, para cada visualização, explica quais tipos de elementos de modelo ela contém [[4]](#ref).
- Metas Arquiteturais e Restrições: descreve os requisitos e objetivos de software que têm algum impacto significativo na arquitetura; por exemplo, proteção, segurança, privacidade, uso de um produto de prateleira, portabilidade, distribuição e reutilização. Ele também captura as restrições especiais que podem ser aplicadas: estratégia de design e implementação, ferramentas de desenvolvimento, estrutura de equipe, cronograma, código legado e assim por diante [[4]](#ref).
- Visão de Caso de Uso: lista casos de uso ou cenários do modelo de caso de uso se eles representam alguma funcionalidade central significativa do sistema final, ou se eles têm uma grande cobertura arquitetônica - eles exercem muitos elementos arquitetônicos ou se enfatizam ou ilustram um específico, ponto delicado da arquitetura [[4]](#ref).
- Visão Lógica: descreve as partes significativas do ponto de vista da arquitetura do modelo de design, como sua decomposição em subsistemas e pacotes. E para cada pacote significativo, sua decomposição em classes e utilitários de classe. Apresenta classes significativas do ponto de vista da arquitetura e descrever suas responsabilidades, bem como alguns relacionamentos, operações e atributos muito importantes [[4]](#ref).
- Visão de Processos: descreve a decomposição do sistema em processos leves (threads simples de controle) e processos pesados ​​(agrupamentos de processos leves). Organize a seção por grupos de processos que se comunicam ou interagem. Descreve os principais modos de comunicação entre os processos, como passagem de mensagens, interrupções e encontros [[4]](#ref).
- Visão de Deploy: descreve uma ou mais configurações de rede física (hardware) nas quais o software é implantado e executado. É uma visão do modelo de implantação. No mínimo para cada configuração deve indicar os nós físicos (computadores, CPUs) que executam o software e suas interconexões (barramento, LAN, ponto a ponto, e assim por diante) [[4]](#ref).
- Visão de Implementação: descreve a estrutura geral do modelo de implementação, a decomposição do software em camadas e subsistemas no modelo de implementação e quaisquer componentes arquitetonicamente significativos [[4]](#ref).
- Visão de dados: descrição da perspectiva de armazenamento de dados persistentes do sistema [[4]](#ref).
- Tamanho e Desempenho: descrição das principais características de dimensionamento do software que afetam a arquitetura, bem como as restrições de desempenho de destino [[4]](#ref).
- Qualidade: descrição de como a arquitetura do software contribui para todos os recursos (exceto funcionalidade) do sistema: extensibilidade, confiabilidade, portabilidade e assim por diante. Se essas características tiverem um significado especial, como implicações de segurança, proteção ou privacidade, elas devem ser claramente delineadas] [[4]](#ref).

## 2. Representação Arquitetural

O diagrama a seguir apresenta de forma geral como o software final irá trabalhar. Mostra como o usuário irá interagir com a arquitetura monolitica em NextJS e banco de dados MySQL, virtualizados pelo Docker.

<a href="{{ site.baseurl }}/assets/images/representacao-arquitetural.png" data-toggle="lightbox">
  <img src="{{ site.baseurl }}/assets/images/representacao-arquitetural.png" class="img-fluid" />
</a>

### 2.1 Tecnologias

#### Front e Back

NextJS: oferece a melhor experiência de desenvolvedor com todos os recursos para produção: renderização híbrida estática e de servidor, suporte a TypeScript, agrupamento inteligente, pré-busca de rota sem precisar de nenhuma configuração necessária. Uma estrutura da web de desenvolvimento front-end React de código aberto [[3]](#ref).

#### Banco de Dados

MySQL: um Sistema de Gerenciamento de Banco de Dados baseado na linguagem SQL [[2]](#ref).

#### Virtualização

Docker: O Docker ajuda os desenvolvedores a dar vida a suas ideias, conquistando a complexidade do desenvolvimento de aplicativos. Usa de virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres. É possivel isolar os contêineres são uns dos outros que agrupam suas soluções [[1]](#ref).

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

## 9. Visão de dados

## 10. Tamanho e desempenho

## 11. Qualidade