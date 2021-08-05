---
layout: default
title: Guia de Estilo
grand_parent: Desenho de Software (Base)
parent: Projeto Não Orientado a Abordagens Específicas
nav_order: 11
---

Iniciativa extra
{: .label .label-purple }

Guia de Estilo
{: .fs-9}

#### Versionamento

|Versão | Data | Comentários | Autor(es) |
|-------|------|-------------|-----------|
|0.1|04/08/2021| Criação do Guia de Estilo| Roberto Martins da Nóbrega|
|1.0|05/08/2021| Revisão | Eduardo Picolo e Kess Jhone |


## 1. Introdução

Guia de estilo como o nome se propõe serve como guia para a equipe de design e a equipe de desenvolvimento para registrar as principais decisões tornando-as de fácil consulta e utilização por todas as equipes. Com isso mantém-se o padrão de design em extensões e futuras versões do produto (Barbosa e Silva, 2010).

### 1.1 Objetivo do guia de estilo

Esse guia tem como objetivo documentar as características de design que deverão ser utilizados como padrão em todo o sistema.

### 1.2 Organização e Conteúdo

Este guia de estilo seguirá o padrão Marcus e Mayhew onde será separado por seis tópicos.

### 1.3 Público Alvo

O público alvo deste guia são os membros da nossa equipe que desejam criar uma aplicação com foco em empresas da área da construção civil que buscam um sistema automatizado para oferecer seus produtos para aluguel.

### 1.4 Como utilizar o guia

Este guia servirá como base para a elaboração do sistema de aluguel de equipamentos, a cada etapa dentro do ciclo de Mayhew deve-se aplicar o guia de estilo ao projeto.

### 1.5 Como manter o guia

Como sugerido por Mayhew o guia deve ser atualizado ao final de cada fase, tornando-se assim possível a sua evolução no decorrer do projeto.

## 2. Interface do usuário

### 2.1 Descrição do ambiente de trabalho do usuário

Ao acessar o sistema o usuário se depara com uma banner com a logo da empresa e uma barra de buscas para facilitar a pesquisa de um produto em específico, logo abaixo estará uma barra de menu com categorias de produtos ofertados e logo abaixo alguns cards com exemplos de produtos e/ou promoções disponíveis.

## 3. Elementos de  interface

### 3.1 Disposição espacial no grid

A disposição de layout do site com elementos dipostos lado a lado com rolagem infinita e automática.

<br/>
Segue abaixo o protótipo elaborado:
<br/>

<a href="{{ site.baseurl }}/assets/images/prototipo-baixaFidelidade.png" data-toggle="lightbox">
  <img src="{{ site.baseurl }}/assets/images/prototipo-baixaFidelidade.png" style="height: 650px; width: 500px;">
</a>

### 3.2 Janelas

Ao selecionar alguma categoria de produto as janelas seguirão o seguinte padrão de grid:

<a href="{{ site.baseurl }}/assets/images/prototipo-baixaFidelidade-busca.png" data-toggle="lightbox">
  <img src="{{ site.baseurl }}/assets/images/prototipo-baixaFidelidade-busca.png" style="height: 650px; width: 500px;">
</a>

### 3.3 Tipografia

Em relação à tipografia, o site utiliza as seguintes fontes:

 * Títulos

 <a href="{{ site.baseurl }}/assets/images/titulos.PNG" data-toggle="lightbox">
  <img src="{{ site.baseurl }}/assets/images/titulos.PNG">
</a>

 * Menus

 <a href="{{ site.baseurl }}/assets/images/menus.PNG" data-toggle="lightbox">
  <img src="{{ site.baseurl }}/assets/images/menus.PNG">
</a>

 * Confirmações

 <a href="{{ site.baseurl }}/assets/images/confirmacoes.PNG" data-toggle="lightbox">
  <img src="{{ site.baseurl }}/assets/images/confirmacoes.PNG">
</a>

### 3.4 Símbolos não tipográficos

O site apresentará os seguintes icones não tipográficos:

 <a href="{{ site.baseurl }}/assets/images/icones.PNG" data-toggle="lightbox">
  <img src="{{ site.baseurl }}/assets/images/icones.PNG">
</a>

Esses símbolos representam, respectivamente, os seguintes itens:

- Linkedin
- Twitter
- Facebook
- Youtube
- Instagram

### 3.5 Cores

As cores base do site serão:

* <div style="width: 20px; height: 20px; background-color: #004a90; float: left; margin-right: 5px"></div><span>Azul</span>
* <div style="width: 20px; height: 20px; background-color: #ffa500; float: left; margin-right: 5px"></div><span>Laranja</span>
* <div style="width: 20px; height: 20px; background-color: #ffcb31; float: left; margin-right: 5px"></div><span>Amarelo</span>
* <div style="width: 20px; height: 20px; background-color: #fff; float: left; border: 1px solid; margin-right: 5px"></div><span>Branco</span>
### 3.6 Animações

Efeitos de zoom ao passar o mouse sobre os pordutos nos cards.

## 4. Elementos de interação {#elementos-de-interacao}

### 4.1 Estilos de interação

Estilos de interação utilizados no sistema:

* Menus: possibilitando navegação do usuário pelo site;
* Barra de pesquisa: facilitando encontrar determinado produto;
* Linguagem natural: situando o usuário e o que pode fazer;


### 4.2 Seleção de um estilo

O estilo de utilização mais presente no sistema será o de menus em conjunto com cards dos produtos.

### 4.3 Aceleradores

Não será utilizado nenhuma tecla de atalho no sistema.

## 5. Elementos de ação

### 5.1 Preenchimento de campos

O sistema oferece sugestão de auto preenchimento nas barras de pesquisa e de campos de cadastro/corfirmação.

### 5.2 Seleção

O usuário pode selecionar qualquer texto ou elemento no site.

### 5.3 Ativação

Seguindo os fundamentos de usabilidade, uma vez dentro do site o usuário tem total liberdade.

## 6. Vocabulário e padrões

### 6.1 Terminologia

A linguagem utilizada é em sua maior parte de fácil entendimento para qualquer usuário.

### 6.2 Tipos de tela

O site utiliza da tela padrão na maior parte de suas páginas o que dá ao usuário mais conforto e facilidade de aprendizado e interação, mantendo a navbar e o padrão de organização dos cards.

### 6.3 Sequências de diálogos

Devem ser apresentados diálogos de confirmação ao cadastrar-se no sistema, ao selecionar produtos para por no carrinho e para confirmar o pedido de aluguel.