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

| Versão | Data       | Comentários                             | Autor(es)                                                                      |
| ------ | ---------- | --------------------------------------- | ------------------------------------------------------------------------------ |
| 0.1    | 29/09/2021 | Abertura do documento                   | Giovanna B Bottino                                                             |
| 0.2    | 29/09/2021 | Adiciona introdução                     | Giovanna B Bottino                                                             |
| 0.2.1  | 29/09/2021 | Adiciona finalidade                     | Roberto Martins da Nóbrega e Giovanna B Bottino                                |
| 0.2.2  | 30/09/2021 | Adiciona escopo                         | Roberto Martins da Nóbrega e Giovanna B Bottino                                |
| 0.2.3  | 30/09/2021 | Adiciona acrônimos                      | Roberto Martins da Nóbrega e Giovanna B Bottino                                |
| 0.2.4  | 30/09/2021 | Adiciona visão geral                    | Roberto Martins da Nóbrega e Giovanna B Bottino                                |
| 0.2.5  | 30/09/2021 | Adiciona Tecnologias                    | Samuel Nogueira, Matheus Gabriel, Pedro Henrique e Giovanna B Bottino          |
| 0.2.6  | 30/09/2021 | Adiciona Representação Arquitetural     | Pedro Henrique e Giovanna B Bottino                                            |
| 0.3    | 30/09/2021 | Adiciona Metas e Restrições             | Samuel Nogueira e Giovanna Bottino                                             |
| 0.4    | 01/10/2021 | Adiciona Visão de Casos de Uso          | Igor Lima e Giovanna B Bottino                                                 |
| 0.4.1  | 01/10/2021 | Adiciona Especificação dos Casos de Uso | Igor Lima e Giovanna B Bottino                                                 |
| 0.4.2  | 01/10/2021 | Adiciona Visão do Processo              | Giovanna B, Matheus, Igor Lima, Samuel, Pedro, Eduardo Picolo e Kess Jhones    |
| 0.5    | 03/10/2021 | Adiciona Introdução Visão lógica        | Matheus e Giovanna                                                             |
| 0.5.1  | 03/10/2021 | Adiciona Visão geral da Visão lógica    | Matheus e Giovanna                                                             |
| 0.5.2  | 03/10/2021 | Adiciona Diagrama de Pacotes            | João Gabriel de Matos, Samuel Nogueira e Giovanna                              |
| 0.6    | 03/10/2021 | Adiciona Diagrama de Componentes        | João Gabriel de Matos, Samuel Nogueira e Giovanna                              |
| 0.6.1  | 03/10/2021 | Correções ortográficas                  | Igor Q Lima, Kess Jhones e Pedro Henrique                                      |
| 0.7    | 05/10/2021 | Adiciona Visão de implantação           | João Gabriel de Matos e Giovanna B Bottino                                     |
| 0.8    | 05/10/2021 | Adiciona Tamanho e desempenho           | João Gabriel de Matos e Giovanna B Bottino                                     |
| 0.9    | 14/10/2021 | Adiciona qualidade                      | Matheus e Giovanna                                                             |

## 1. Introdução

O documento de Arquitetura de Software fornece uma visão geral de todo a arquitetura do sistema de software. Deve ser usado para a documentação e comunicação entre os participantes do projeto sobre questões arquiteturais [[5]](#ref5). 

Esse documento tem como objetivo fornecer a arquitetura do projeto Mychine. Mychine é uma aplicação web que visa ser uma plataforma de que facilite o aluguel de equipamentos para construção civil. A seguir pode encontrar uma visão arquitetural de caso de uso, lógica e outras. Assim poderemos representar sobre diferentes perspectivas e comunicar as decisões arquiteturais que foram tomadas.

### 1.1 Finalidade

Este documento tem como finalidade especificar e documentar as decisões arquiteturais do software Mychine, usando diferentes visões arquiteturais para detalhar diferentes aspectos do sistema.

Está estruturado de forma que iniciamos com uma introdução geral, em seguida explicamos a representação arquitetural, as metas e restrições de arquitetura, os requisitos de software e outros objetivos importantes. Explicamos cada visão utilizada nesse projeto para avançar com a descrição do tamanho e do desempenho. Finalizamos com as características de qualidade do projeto [[5]](#ref5).

### 1.2 Escopo

Mychine é uma aplicação que visa facilitar o gerenciamento de uma empresa de aluguel de equipamentos para construção civil. Nessa aplicação é possível fazer cadastro e agendar o aluguel de equipamentos.

A aplicação permite que o cliente consulte as categorias de equipamentos, seus respectivos preços, os dias disponíveis e agende um aluguel.

Esse documento de arquitetura descreve como a aplicação funciona, quais são os requisitos para o funcionamento correto, quais são as restrições do sistema, as tecnologias utilizadas e etc. Serve de guia ao abordar os principais pontos desenvolvidos na arquitetura do projeto [[4]](#ref4). 

### 1.3 Definições, Acrônimos e Abreviações

| Sigla  | Descrição                                                                  |
| ------ | -------------------------------------------------------------------------- |
| DAS    | Documento de Arquitetura de Software                                       |
| UML    | Unified Modeling Language(Linguagem de modelagem unificada)                |
| ME-R   | Modelo Entidade-Relacionamento                                             |
| DE-R   | Diagrama Entidade Relacionamento                                           |
| AWS    | Amazon Web Services                                                        |
| RDS    | Amazon Relational Database Service                                         |

### 1.4  Referências Bibliográficas

[1] DOCKER, About Docker. Disponível em: [https://www.docker.com/company](https://www.docker.com/company)
{: #ref1}

[2] MYSQL, About MySQL. Disponível em: [https://www.mysql.com/](https://www.mysql.com/)
{: #ref2}

[3] NEXT, The React Framework for Production. Disponível em: [https://nextjs.org/](https://nextjs.org/)
{: #ref3}

[4] SERRANO, Milene. DAS, 2021. Material apresentado na Disciplina de Arquitetura e Desenho de Software do curso de engenharia de software da UnB, FGA. Acesso em: 29 de setembro de 2021.
{: #ref4}

[5] SERRANO, Milene. Template - DAS, 2021. Material apresentado na Disciplina de Arquitetura e Desenho de Software do curso de engenharia de software da UnB, FGA. Acesso em: 29 de setembro de 2021.
{: #ref5}

[6] AWS, About AWS RDS. Disponível em: [https://aws.amazon.com/pt/rds/](https://aws.amazon.com/pt/rds/)
{: #ref6}

[7] DEVMEDIA, Qualidade de Software - Engenharia de Software. Disponível em: [https://www.devmedia.com.br/qualidade-de-software-engenharia-de-software-29/18209](https://www.devmedia.com.br/qualidade-de-software-engenharia-de-software-29/18209). Acesso em: 14 de outubro de 2021.
{: #ref6}

### 1.5 Visão Geral

O projeto trata de uma aplicação web que tem como objetivo ser uma plataforma de que facilite o aluguel de equipamentos para construção civil, tendo como principal diferencial o gerenciamento da agenda dos equipamentos diretamente na plataforma. Para isso o projeto contará com uma solução web responsiva disponível para diversas plataformas. Utilizando Node Js e o framework React Js.

O documento de arquitetura está organizado em tópicos da seguinte maneira:

- Introdução: fornece uma visão geral de todo o Documento de Arquitetura de Software. Inclui a finalidade, o escopo, as definições, os acrônimos, as abreviações, as referências e a visão geral do Documento de Arquitetura de Software  [[4]](#ref4).
- Representação Arquitetural: descreve qual arquitetura de software é para o sistema atual e como ela é representada. Das Visualizações de Caso de Uso, Lógica, de Processo, de Implantação e de Implementação, enumera as visualizações que são necessárias e, para cada visualização, explica quais tipos de elementos de modelo ela contém [[4]](#ref4).
- Metas Arquiteturais e Restrições: descreve os requisitos e objetivos de software que têm algum impacto significativo na arquitetura; por exemplo, proteção, segurança, privacidade, uso de um produto de prateleira, portabilidade, distribuição e reutilização. Ele também captura as restrições especiais que podem ser aplicadas: estratégia de design e implementação, ferramentas de desenvolvimento, estrutura de equipe, cronograma, código legado e assim por diante [[4]](#ref4).
- Visão de Caso de Uso: lista casos de uso ou cenários do modelo de caso de uso se eles representam alguma funcionalidade central significativa do sistema final, ou se eles têm uma grande cobertura arquitetônica - eles exercem muitos elementos arquitetônicos ou se enfatizam ou ilustram um específico, ponto delicado da arquitetura [[4]](#ref4).
- Visão Lógica: descreve as partes significativas do ponto de vista da arquitetura do modelo de design, como sua decomposição em subsistemas e pacotes. E para cada pacote significativo, sua decomposição em classes e utilitários de classe. Apresenta classes significativas do ponto de vista da arquitetura e descreve suas responsabilidades, bem como alguns relacionamentos, operações e atributos muito importantes [[4]](#ref4).
- Visão de Processos: descreve a decomposição do sistema em processos leves (threads simples de controle) e processos pesados ​​(agrupamentos de processos leves). Os principais modos de comunicação entre os processos, como passagem de mensagens, interrupções e encontros [[4]](#ref4).
- Visão de Deploy: descreve uma ou mais configurações de rede física (hardware) nas quais o software é implantado e executado. É uma visão do modelo de implantação. No mínimo para cada configuração deve indicar os nós físicos (computadores, CPUs) que executam o software e suas interconexões (barramento, LAN, ponto a ponto, e assim por diante) [[4]](#ref4).
- Visão de Implementação: descreve a estrutura geral do modelo de implementação, a decomposição do software em camadas e subsistemas no modelo de implementação e quaisquer componentes arquitetonicamente significativos [[4]](#ref4).
- Visão de dados: descrição da perspectiva de armazenamento de dados persistentes do sistema [[4]](#ref4).
- Tamanho e Desempenho: descrição das principais características de dimensionamento do software que afetam a arquitetura, bem como as restrições de desempenho de destino [[4]](#ref4).
- Qualidade: descrição de como a arquitetura do software contribui para todos os recursos (exceto funcionalidade) do sistema: extensibilidade, confiabilidade, portabilidade e assim por diante. Se essas características tiverem um significado especial, como implicações de segurança, proteção ou privacidade, elas devem ser claramente delineadas] [[4]](#ref4).

## 2. Representação Arquitetural

A representação arquitetural serve para descrever qual arquitetura de software é para o sistema atual e como ela é representada.  Com isso podemos ter uma sobre todo processo que envolve todas essas camadas de software [[4]](#ref4).

O diagrama a seguir apresenta de forma geral como o software final irá trabalhar. Mostra que o usuário irá interagir com a arquitetura monolítica em NextJS e banco de dados MySQL, virtualizados pelo Docker.

<a href="{{ site.baseurl }}/assets/images/representacao-arquitetural.jpg" data-toggle="lightbox">
  <img src="{{ site.baseurl }}/assets/images/representacao-arquitetural.jpg"/>
</a>

##### Feito por: Pedro Henrique e Giovanna B Bottino

### 2.1 Tecnologias

Para o Front e Back utilizamos de NextJS, para o banco de dados MySQL e para virtualização usamos docker e docker-compose.  A escolha dessas tecnologias foi baseada nos benefícios da curva de aprendizado e experiência da equipe. Podemos visualizar uma descrição das tecnologias a seguir.

#### Front e Back

NextJS: oferece a melhor experiência de desenvolvedor com todos os recursos para produção: renderização híbrida estática e de servidor, suporte a TypeScript, agrupamento inteligente, pré-busca de rota sem precisar de nenhuma configuração necessária. Uma estrutura da web de desenvolvimento front-end React de código aberto [[3]](#ref3).

#### Banco de Dados

MySQL: um Sistema de Gerenciamento de Banco de Dados baseado na linguagem SQL [[2]](#ref2).

#### Virtualização

Docker: ajuda os desenvolvedores a dar vida a suas ideias, conquistando a complexidade do desenvolvimento de aplicativos. Usa de virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres. É possível isolar os contêineres são uns dos outros que agrupam suas soluções [[1]](#ref1).

## 3. Metas Arquiteturais e Restrições

As metas arquiteturais e restrições servem para descrever os requisitos e objetivos de software que têm algum impacto significativo na arquitetura e as restrições que são aplicadas [[4]](#ref4). Temos as restrições de idioma, conectividade, prazo e tecnologia. Para as metas temos portabilidade, usabilidade, manutenibilidade e escalabilidade. 

### 3.1 - Restrições

| Restrição     | Descrição                                                                  |
| ------------- | -------------------------------------------------------------------------- |
| Idioma        | A interface deve ser voltada para a linguagem Português-Brasil.            | 
| Conectividade | Para utilizar o software é necessário ter internet                         | 
| Prazo         | Deve ser concluído até o final da disciplina.                              | 
| Tecnologias   | Deve ser utilizado usando de NextJS, MySQL e Docker                        | 

### 3.2 - Metas

| Meta             | Descrição                                                                  |
| ---------------- | -------------------------------------------------------------------------- |
| Portabilidade    | Deve ser possível utilizar a plataforma em qualquer navegador web          | 
| Usabilidade      | O software deve possuir alta aprendibilidade e inteligibilidade            | 
| Manutenibilidade | Deve permitir manutenção e melhorias sem grande custo                      | 
| Escalabilidade   | Deve ser possível a evolução e manutenção do software                      |

## 4. Visão de Casos de Uso

Na visão de casos de uso iremos lista casos de uso que representam alguma funcionalidade central significativa do sistema final. Isso é, descrever cenários para o sistema. 

Os casos de uso usados no projeto estão listados abaixo.

- UC01 - Realizar Cadastro
- UC02 - Realizar Login
- UC03 - Recuperar Senha
- UC04 - Gerenciar perfil
- UC05 - Criar produto
- UC06 - Editar Produto
- UC07 - Excluir Produto
- UC08 - Visualizar produtos
- UC09 - Visualizar Produto
- UC10 - Manter carrinho
- UC11 - Alugar produto

Para o nosso projeto, criamos 3 diagramas para o usuário usuario, admin e cliente. 

<a href="{{ site.baseurl }}/assets/images/casos-uso/caso-uso-user.svg" data-toggle="lightbox">
  <img src="{{ site.baseurl }}/assets/images/casos-uso/caso-uso-user.svg"/>
</a>

##### Feito por: Igor Lima e Giovanna B Bottino


<a href="{{ site.baseurl }}/assets/images/casos-uso/caso-uso-admin.svg" data-toggle="lightbox">
  <img src="{{ site.baseurl }}/assets/images/casos-uso/caso-uso-admin.svg"/>
</a>

##### Feito por: Igor Lima e Giovanna B Bottino


<a href="{{ site.baseurl }}/assets/images/casos-uso/caso-uso-cliente.svg" data-toggle="lightbox">
  <img src="{{ site.baseurl }}/assets/images/casos-uso/caso-uso-cliente.svg"/>
</a>

##### Feito por: Igor Lima e Giovanna B Bottino


### 4.1 Especificação dos Casos de Uso

#### Atores
- **Admin**: São os funcionários da empresa responsáveis por manter os produtos e suas informações.
- **Cliente**: São os clientes da empresa, interessados e responsáveis por visualizar e alugar produtos. 
- **Usuário**: São a junção do ator admin e cliente, ações que ambos funcionários e clientes são capazes de fazer.

#### Casos de Uso

- **UC01 - Realizar Cadastro** ação realizada pelo usuário para ter possibilidade de acesso a funcionalidades do sistema.

  - Atores: Usuário 
  - Requisitos: RF1

- **UC02 - Realizar Login** ação realizada pelo usuário para ter acesso a funcionalidades do sistema.

  - Atores: Usuário
  - Requisitos: RF1

- **UC03 - Recuperar Senha** ação realizada pelo usuário para ter controle do acesso a funcionalidades do sistema.

  - Atores: Usuário
  - Requisitos: RF3

- **UC04 - Gerenciar perfil** ação realizada pelo usuário para gerenciar o próprio perfil no sistema.

  - Atores: Usuário
  - Requisitos: RF3

- **UC05 - Criar produto** ação realizada pelo admin para criar produto no sistema.

  - Atores: Admin
  - Requisitos: RF7

- **UC06 - Editar Produto** ação realizada pelo admin para editar produto no sistema.

  - Atores: Admin
  - Requisitos: RF11

- **UC07 - Excluir Produto**  ação realizada pelo admin para excluir produto no sistema.

  - Atores: Admin
  - Requisitos: RF11

- **UC08 - Visualizar produtos**  ação realizada pelo cliente para visualizar o painel de produtos no sistema.

  - Atores: Cliente
  - Requisitos: RF4

- **UC09 - Visualizar Produto** ação realizada pelo cliente para visualizar o produto desejado no sistema.

  - Atores: Cliente
  - Requisitos: RF4

- **UC10 - Manter carrinho** ação realizada pelo cliente para adicionar ou retirar o produto no sistema.

  - Atores: Cliente 
  - Requisitos: RF8, RF9, RF10

- **UC11 - Alugar produto** ação realizada pelo cliente para alugar o produto no sistema.

  - Atores: Cliente
  - Requisitos: RF5,RF6

## 5. Visão Lógica

Dentro das visões de arquitetura temos a visão lógica. Essa visão descreve as partes significativas do ponto de vista da arquitetura do modelo de design, como por exemplo sua decomposição em classes, em subsistemas e em pacotes. Assim fornece um resumo de como o sistema é estruturado [[4]](#ref4).

### 5.1 Visão geral

Usaremos o Diagrama de Classes para representar a decomposição em classes. Apresentamos os principais objetos e interações. Uma melhor explicação do diagrama pode ser encontrado na sessão de Diagrama de Classes do projeto.

A versão 3 é a mais recente.

#### Diagrama de Classe V3

<a href="{{ site.baseurl }}/assets/images/diagramaClasses/diagramaDeClasseV3.svg" data-toggle="lightbox">
    <img src="{{ site.baseurl }}/assets/images/diagramaClasses/diagramaDeClasseV3.svg">
</a>

##### Feito por  Pedro Henrique, Giovanna B

### 5.2  Pacotes de projeto com significado arquitetônico

Usaremos o Diagrama de Pacotes para representar a decomposição em pacotes. Apresentamos as principais as interações lógicas entre os módulos do sistema, de maneira simplificada como a aplicação se comunica. Uma melhor explicação do diagrama pode ser encontrado na sessão de Diagrama de Pacotes do projeto.

A versão 1 é a mais recente.

#### Diagrama de Pacotes V1

<a href="{{ site.baseurl }}/assets/images/diagramaDePacotes.svg" data-toggle="lightbox">
    <img src="{{ site.baseurl }}/assets/images/diagramaDePacotes.svg">
</a>

##### Feito por: João Gabriel de Matos, Samuel Nogueira.

## 6. Visão do Processo

A visão do processo decompõe o sistema em processos leves, apresenta os principais modos de comunicação, como passagem de mensagens, interrupções e encontros [[4]](#ref4). Sabendo disso, utilizamos do diagrama de sequência para ilustrar os principais fluxos de comunicações do sistema. Isso porque é uma UML que explica dinamicamente o ciclo de vida do sistema em desenvolvimento. A seguir, temos os diagramas de painel de produtos e login. 

### 6.1 Diagrama de sequência 

#### Realizar Login/Logout V1

O diagrama de sequência do Login/Logout de clientes apresenta a sequência que o ator usuário faz para realizar login e logout na plataforma.

<a href="{{ site.baseurl }}/assets/images/sequencia/login_logout.png" data-toggle="lightbox">
  <img src="{{ site.baseurl }}/assets/images/sequencia/login_logout.png" class="img-fluid" />
</a>

##### Feito por: Kess Jhones

#### Feed de Produtos V1

O diagrama de sequência do feed de produtos apresenta a sequência que o ator usuário faz para listar todos os produtos, o usuário tem a opção de filtrar ou ordenar os produtos. 

<a href="{{ site.baseurl }}/assets/images/sequencia/feed.png" data-toggle="lightbox">
  <img src="{{ site.baseurl }}/assets/images/sequencia/feed.png" class="img-fluid" />
</a>

##### Feito por: Giovanna B, Matheus Gabriel, Igor Q. Lima, Samuel Nogueira, Pedro e Eduardo Picolo

## 7. Visão de implantação

A visão de implantação descreve as configurações de rede física nas quais o projeto é implantado e executado [[4]](#ref4).

Em nosso projeto escolhemos a ferramenta Amazon Relational Database Service, um serviço que oferece um serviço gratuito que é redimensionável e automatiza tarefas como provisionamento de hardware, configuração de bancos de dados, aplicação de patches e backups. O Amazon RDS está disponível em vários tipos de instância de banco de dados – com otimização para memória, performance ou E/S – em nosso projeto iremos utilizar para o MySQL Server [[6]](#ref6).

## 8. Visão de implementação

A visão de implementação apresenta a estrutura decomposta em componentes arquitetonicamente significativos. Descreve a estrutura geral de implementação o software em camadas e subsistemas no modelo de implementação [[4]](#ref4).  

Usaremos o Diagrama de Componentes para representar a em componentes arquitetonicamente significativos. Apresentamos a estrutura de implementação como organização dos arquivos, dependências e pacotes em diferentes camadas e subcamadas. Uma melhor explicação do diagrama pode ser encontrado na sessão de Diagrama de Componentes do projeto.

A versão 1 é a mais recente.

#### Diagrama de componentes V1

<a href="{{ site.baseurl }}/assets/images/diagrama-de-componentes.svg" data-toggle="lightbox">
    <img src="{{ site.baseurl }}/assets/images/diagrama-de-componentes.svg" class="img-fluid" />
</a>

##### Feito por: Samuel Nogueira, João Gabriel.

## 9. Visão de dados

A visão de dados descreve como o sistema persiste informações. Usaremos o ME-R e o DE-R para representar nossas entidades, atributos e relacionamentos de dados [[4]](#ref4). 

### 9.1 ME-R

#### Entidades

- USER
- CATEGORY
- PRODUCT

#### Atributos

- USER (<u>userId</u>, email, password, name, phone, cpf, isAdm, createdAt, updatedAt, {address(cep, city, state, street, number, complement)})

- CATEGORY (<u>categoryId</u>, name, description)

- PRODUCT (<u>productId</u>, name, description, lastMaintenance, price, status, image, createdAt, updatedAt)

#### Relacionamentos

- USER - rent - PRODUCT
  - Um USER pode alugar um ou vários PRODUCT mas cada PRODUCT pode ser alugado por um e apenas um USER por vez.
  - Cardinalidade: 1:N

- PRODUCT - has - CATEGORY
  - Um PRODUCT possui uma e apenas uma CATEGORY mas CATEGORY pode pertencer a nenhum, um ou vários PRODUCT.
  - Cardinalidade: N:1

### 9.2 DE-R

<a href="{{ site.baseurl }}/assets/images/DER.svg" data-toggle="lightbox">
  <img src="{{ site.baseurl }}/assets/images/DER.svg" width="500px">
</a>

##### Feito por: Pedro Henrique, Roberto Nóbrega e Igor Lima

## 10. Tamanho e desempenho

Em Tamanho e desempenho iremos apresentar as principais características de dimensionamento do software, bem como as restrições de desempenho de destino [[4]](#ref4). Em nosso caso, estamos usando AWS RDS na versão gratuita que possui as seguintes configurações [[6]](#ref6). 

- db.t2.micro
- 1 vCPUs
- 1 GiB RAM
- 20 GiB

Caso a aplicação exija mais é possivel a aumento para a versão paga. 

O sistema foi desenvolvido com foco na otimização de resposta às requisições, por isso é esperado que o desempenho atenda às expectativas e à testes de Stress.

### 10.1 Requisitos Mínimos
- Possuir conexão com a internet;
- Navegador Web com suporte a HTML 5, CSS e JavaScript;

## 11. Qualidade

Para finalizar iremos avaliar a qualidade, verificar a extensibilidade, a confiabilidade, a portabilidade [[4]](#ref4). 

A qualidade de software pode ser interpretada como um conjunto de características a serem satisfeitas. Essas caracteristicas devem atender às necessidades dos usuários. Deve-se levar em conta que esse nível de satisfação nem sempre é alcançado de forma espontânea, por isso deve ser continuamente construído [[7]](#ref7). A seguir podemos ver alguns itens de qualidade que esse projeto alcança. 

* Usabilidade: A interface é simples e de fácil interação, o usuário é capaz de aprender rapidamente como se comporta o sistema. Isso porque ele segue padrões já estabelecidos no mercado.
* Manutenabilidade: Toda a documentação e programação do projeto foi guardada no repositório do grupo. Isso facilita a manutenibilidade do código.
* Portabilidade: Utilizamos do ambiente virtual Docker para garantir a portabildiade e criação de novos módulos do sistema. 
