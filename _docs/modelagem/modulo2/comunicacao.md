---
layout: default
title: Diagrama de Comunicação
grand_parent: Módulo Desenho de Software (Modelagem)
parent: Módulo Notação UML – Diagramas Dinâmicos
nav_order: 2
---

Diagrama de Comunicação
{: .fs-9}

#### Versionamento

|Versão | Data | Comentários | Autor(es) |
|-------|------|-------------|-----------|
|0.1|19/08/2021| Abertura do documento Diagrama de Comunicação| Giovanna B Bottino|
|0.2|19/08/2021| Adiciona descrição do diagrama de comunicação| Giovanna B Bottino|
|0.3|19/08/2021| Adiciona diagrama de comunicação| Giovanna B Bottino|
|1.0|19/08/2021| Revisão | Kess Jhones|
|1.1|20/08/2021| Revisão | João Gabriel de Matos|
|1.2|23/08/2021| Arruma referencia | Giovanna B Bottino|



## O Diagrama de Comunicação

Conforme apresentado na Disciplina de Arquitetura e Desenho de Software do curso de engenharia de software da UnB, FGA, o diagrama de comunicação é um diagrama dinâmico. Ele mostra as interações entre objetos usando mensagens sequenciadas de forma livre, com ênfase na ordem das mensagens e geralmente com um cenário de uso [[1]](#ref1). 

Segundo as especificações do _OMG™ Unified Modeling Language™ (OMG UML®)_  corresponde a um diagrama de sequência simples sem mecanismos de estruturação, como usos de interação e fragmentos combinados. É composto pelos principais elementos: quadro, linha de vida e mensagem [[2]](#ref2).

Além de usar o diagrama de sequência nossa equipe decidiu utilizar esse modelo para aprendizagem e uma demostração mais genérica.

## Diagrama de Comunicação - Mychine V1

Utilizamos da ferramenta [Drawio](https://app.diagrams.net/) para desenvolver o diagrama e também usamos o UML Communication Diagrams Overview diagrama de comunicação como guia [[2]](#ref2). Foi feito um rascunho e validado durante chamada de voz.

Esse diagrama apresenta o ator usuário e seu aluguel no Mychine. Tem duas sequencias, a de visualizar produtos e a de finalizar. Na de visualizar é possível visualizar uma lista de produtos, apenas um produto e adicionar ele ao carrinho. Na de finalizar o sistema deve alugar os itens no carrinho.

<a href="{{ site.baseurl }}/assets/images/comunicacao/comunicacao.png" data-toggle="lightbox">
  <img src="{{ site.baseurl }}/assets/images/comunicacao/comunicacao.png" class="img-fluid" />
</a>

##### Feito por: Giovanna B, Matheus Gabriel, Igor Q. Lima e Samuel Nogueira

## Referências

[1] SERRANO, Milene. 5W2H, 2021. Material apresentado na Disciplina de Arquitetura e Desenho de Software do curso de engenharia de software da UnB, FGA. Acesso em: 27 de julho de 2021.
{: #ref1}

[2] UML Communication Diagrams Overview. Disponível em: <https://www.uml-diagrams.org/communication-diagrams.html>. Acesso em: 19 de agosto de 2021.
{: #ref2}
