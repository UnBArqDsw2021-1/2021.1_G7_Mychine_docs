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

## Diagrama de Sequência - Mychine V1

Utilizamos da ferramenta [Drawio](https://app.diagrams.net/) para desenvolver o diagrama e também usamos do tutorial de diagrama de sequência como guia. 
### Feed de Produtos
O diagrama de sequência do feed de produtos apresenta a sequência que o ator usuário faz para listar todos os produtos, o usuário tem a opção de filtrar ou ordenar os produtos. 

<a href="{{ site.baseurl }}/assets/images/sequencia/feed.png" data-toggle="lightbox">
  <img src="{{ site.baseurl }}/assets/images/sequencia/feed.png" class="img-fluid" />
</a>

##### Feito por: Giovanna B

### Manter Produto

## Referências

BÓSON Treinamentos. Curso de UML - O que é um Diagrama de Sequência. Disponível em: https://www.youtube.com/watch?v=UVkj3ed0ZuM&t=991s. Acesso em: 15 de agosto de 2021.

BLOG Creately. Sequence Diagram Tutorial – Complete Guide with Examples, Dispovível em: https://creately.com/blog/diagrams/sequence-diagram-tutorial/. Acesso em: 19 agosto de 2021.

SERRANO, Milene. 5W2H, 2021. Material apresentado na Disciplina de Arquitetura e Desenho de Software do curso de engenharia de software da UnB, FGA. Acesso em: 15 de agosto de 2021.