---
layout: default
title: Diagrama de Sequência
grand_parent: Módulo Desenho de Software (Modelagem)
parent: Módulo Notação UML – Diagramas Dinâmicos
nav_order: 1
---

Diagrama de Sequência
{: .fs-9}

#### Versionamento

|Versão | Data | Comentários | Autor(es) |
|-------|------|-------------|-----------|
|0.1|15/08/2021| Abertura do documento| Giovanna B Bottino|
|0.2|15/08/2021| Adiciona introdução ao diagrama de sequência| Giovanna B Bottino|
|0.3|19/08/2021| Adiciona diagrama de sequência - Feed de Produtos| Giovanna B Bottino|
|0.4|19/08/2021| Adiciona diagrama de sequência - Visualizar Produto| Giovanna B Bottino|
|0.5|19/08/2021| Adiciona diagrama de sequência - Buscar Produto| Giovanna B Bottino|
|0.6|19/08/2021| Adiciona diagrama de sequência - Manter Produto| Giovanna B Bottino|
|0.7|21/08/2021| Adiciona diagrama de sequência - Cadastrar Cliente| Kess Jhones |
|0.8|22/08/2021| Adiciona diagrama de sequência - Login/Logout| Kess Jhones |

## O Diagrama de Sequência

Segundo o vídeo "Curso de UML - O que é um Diagrama de Sequência" do Bóson Treinamentos o Diagrama de sequência é uma categoria de UML dinâmica que mostra uma sequência de eventos. Isso é, enfatiza a ordenação temporal das mensagens ao mostrar interações na ordem em que ocorrem. Baseia-se no Caso de Uso relacionado e utiliza o Diagrama de Classes para definir os objetos envolvidos. 

Essa categoria de Diagrama auxilia a entender os requisitos de um sistema e mostrar detalhes em Casos de Uso. Além disso, mostra como mensagens são trocadas entre os componentes. 

Conforme o material apresentado pela professora Milene é um diagrama complexo composto por diversos elementos que normalmente contem: 
- Atores
- Objetos que participam da interação 
- Mensagens trocadas 
- Linha de vida e Caixa de Ativação 
- Operadores de Controle Estruturado 
- Foco de Controle 
- Gate

Escolhemos utilizar esse diagrama nos permite um melhor entendimento do projeto e aplicação. Com ele pode-se identificar como os objetos no sistema interagem uns com os outros para implementar nossas funcionalidades.

## Diagrama de Sequência - Mychine 

Utilizamos da ferramenta [Drawio](https://app.diagrams.net/) para desenvolver o diagrama e também usamos do tutorial de diagrama de sequência como guia. Foi feito um rascunho e validado durante chamada de voz.

### Cadastro Cliente V0.1

O diagrama de sequência do cadastro de clientes apresenta a seguência que o ator usuário faz para criar uma conta na plataforma.

<a href="{{ site.baseurl }}/assets/images/sequencia/cadastrov01.jpg" data-toggle="lightbox">
  <img src="{{ site.baseurl }}/assets/images/sequencia/cadastrov01.jpg" class="img-fluid" />
</a>

##### Feito por: Giovanna B Bottino

### Cadastro Cliente V1

<a href="{{ site.baseurl }}/assets/images/sequencia/cadastrov1.png" data-toggle="lightbox">
  <img src="{{ site.baseurl }}/assets/images/sequencia/cadastrov1.png" class="img-fluid" />
</a>

##### Feito por: Kess Jhones

### Realizar Login/Logout V1

O diagrama de sequência do Login/Logout de clientes apresenta a seguência que o ator usuário faz para realizar login e logout na plataforma.

<a href="{{ site.baseurl }}/assets/images/sequencia/login_logout.png" data-toggle="lightbox">
  <img src="{{ site.baseurl }}/assets/images/sequencia/login_logout.png" class="img-fluid" />
</a>

##### Feito por: Kess Jhones

### Feed de Produtos V1

O diagrama de sequência do feed de produtos apresenta a sequência que o ator usuário faz para listar todos os produtos, o usuário tem a opção de filtrar ou ordenar os produtos. 

<a href="{{ site.baseurl }}/assets/images/sequencia/feed.png" data-toggle="lightbox">
  <img src="{{ site.baseurl }}/assets/images/sequencia/feed.png" class="img-fluid" />
</a>

##### Feito por: Giovanna B, Matheus Gabriel, Igor Q. Lima, Samuel Nogueira, Pedro e Eduardo Picolo

### Visualizar Produto V1

O diagrama de sequência de visualizar produto apresenta a sequência que o ator usuário faz para visualizar um único produto.

<a href="{{ site.baseurl }}/assets/images/sequencia/visualizar.png" data-toggle="lightbox">
  <img src="{{ site.baseurl }}/assets/images/sequencia/visualizar.png" class="img-fluid" />
</a>

##### Feito por: Giovanna B, Matheus Gabriel, Igor Q. Lima, Samuel Nogueira, Pedro e Eduardo Picolo
 
### Buscar Produto V1

O diagrama de sequência de buscar produto apresenta a sequência que o ator usuário faz para procurar um produto pelo nome.

<a href="{{ site.baseurl }}/assets/images/sequencia/buscar.png" data-toggle="lightbox">
  <img src="{{ site.baseurl }}/assets/images/sequencia/buscar.png" class="img-fluid" />
</a>

##### Feito por: Giovanna B, Matheus Gabriel, Igor Q. Lima, Samuel Nogueira, Pedro e Eduardo Picolo

### Manter Produto

Para o manter o produto, decidimos dividir em três diagramas diferentes: Criar, Editar e Deletar. 

Os três diagramas visam mostrar a sequência onde o ator admin cria ou edita, ou deleta um produto. A seguir é possível observar esses diagramas. 

#### Criar Produto V1

<a href="{{ site.baseurl }}/assets/images/sequencia/criar.png" data-toggle="lightbox">
  <img src="{{ site.baseurl }}/assets/images/sequencia/criar.png" class="img-fluid" />
</a>

##### Feito por: Giovanna B, Matheus Gabriel, Igor Q. Lima, Samuel Nogueira, Pedro e Eduardo Picolo

#### Editar Produto V1

<a href="{{ site.baseurl }}/assets/images/sequencia/editar.png" data-toggle="lightbox">
  <img src="{{ site.baseurl }}/assets/images/sequencia/editar.png" class="img-fluid" />
</a>

##### Feito por: Giovanna B, Matheus Gabriel, Igor Q. Lima, Samuel Nogueira, Pedro e Eduardo Picolo

### Deletar Produto V1

<a href="{{ site.baseurl }}/assets/images/sequencia/deletar.png" data-toggle="lightbox">
  <img src="{{ site.baseurl }}/assets/images/sequencia/deletar.png" class="img-fluid" />
</a>

##### Feito por: Giovanna B, Matheus Gabriel, Igor Q. Lima, Samuel Nogueira, Pedro e Eduardo Picolo

## Referências

BÓSON Treinamentos. Curso de UML - O que é um Diagrama de Sequência. Disponível em: https://www.youtube.com/watch?v=UVkj3ed0ZuM&t=991s. Acesso em: 15 de agosto de 2021.

BLOG Creately. Sequence Diagram Tutorial – Complete Guide with Examples, Dispovível em: https://creately.com/blog/diagrams/sequence-diagram-tutorial/. Acesso em: 19 agosto de 2021.

SERRANO, Milene. 5W2H, 2021. Material apresentado na Disciplina de Arquitetura e Desenho de Software do curso de engenharia de software da UnB, FGA. Acesso em: 15 de agosto de 2021.