---
layout: default
title: Diagrama de Atividade
grand_parent: Módulo Desenho de Software (Modelagem)
parent: Módulo Notação UML – Diagramas Dinâmicos
nav_order: 3
---

Diagrama de Atividade
{: .fs-9}

| Versão | Data       | Comentários                                     | Autor(es)                          |
| ------ | ---------- | ----------------------------------------------- | ---------------------------------- |
| 0.1    | 22/08/2021 | Abertura do documento Diagrama de Atividades    | Igor Q Lima                        |
| 0.2    | 22/08/2021 | Criação do Diagrama de Atividades               | Igor Q Lima, Matheus G, Giovanna B |
| 0.2    | 22/08/2021 | Criação do Diagrama de Atividades - Nova versão | Igor Q Lima, Matheus G, Giovanna B |

## Introdução

Diagramas de atividade ajuda a reunir as pessoas nas áreas de negócios e desenvolvimento de uma organização para entender os mesmos processos e comportamentos. [[1]](#ref1)

Para o nosso diagrama consideramos os seguintes símbolos para serem utilizados:

| Símbolo | Descrição |
| ------- | --------- |
|  <img src="{{ site.baseurl }}/assets/images/diagrama-de-atividades/ponto-inicial.png"/> | Representa o começo de um processo ou fluxo de trabalho em um diagrama de atividade. [[1]](#ref1) |
|  <img src="{{ site.baseurl }}/assets/images/diagrama-de-atividades/seta.png"/> | Representa o fluxo de direção. |
|  <img src="{{ site.baseurl }}/assets/images/diagrama-de-atividades/atividade.png"/> | Representa uma atividade que compõem um processo, são os principais componentes de um diagrama de atividade. [[1]](#ref1) |
|  <img src="{{ site.baseurl }}/assets/images/diagrama-de-atividades/condicional.png"/> | Representa uma decisão e sempre tem pelo menos dois caminhos ramificados e com texto de condição (Exemplos: \"[sim]\", \"[se não]\"). [[1]](#ref1) |
|  <img src="{{ site.baseurl }}/assets/images/diagrama-de-atividades/junção.png"/> | Representa a combinação de duas atividades simultâneas e as reintroduz em um fluxo onde apenas uma atividade ocorre por vez. [[1]](#ref1) |
|  <img src="{{ site.baseurl }}/assets/images/diagrama-de-atividades/garfo.png"/> | Representa a divisão de um único fluxo de atividade em duas atividades simultâneas. [[1]](#ref1) |
|  <img src="{{ site.baseurl }}/assets/images/diagrama-de-atividades/ponto-final.png"/> | Representa a conclusão de todos os fluxos de um processo. [[1]](#ref1) |

### Primeira verão do Diagrama de Atividades

Utilizando da ferramenta <a href="https://app.diagrams.net/">draw.io</a>, realizamos o diagrama de atividades que demonstram a lógica algorítmica do processo para o usuário realizar alugueis de produtos na aplicação.

<a href="{{ site.baseurl }}/assets/images/diagrama-de-atividades.svg" data-toggle="lightbox">
    <img src="{{ site.baseurl }}/assets/images/diagrama-de-atividades.svg" class="img-fluid" />
</a>

### Diagrama de Atividades - Nova versão

Após análises notamos que deveríamos especificar melhor algumas etapas de finalização do processo, com isso foi gerado um novo diagrama:

<a href="{{ site.baseurl }}/assets/images/diagrama-de-atividades-v2.svg" data-toggle="lightbox">
    <img src="{{ site.baseurl }}/assets/images/diagrama-de-atividades-v2.svg" class="img-fluid" />
</a>

## Referências

[1] O que é diagrama de atividades UML?. Disponível em: <https://www.lucidchart.com/pages/pt/o-que-e-diagrama-de-atividades-uml>. Acesso em: 22 de agosto de 2021.
{: #ref1}
