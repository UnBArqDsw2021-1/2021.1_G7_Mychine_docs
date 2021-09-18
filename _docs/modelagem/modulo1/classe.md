---
layout: default
title: Diagrama de Classe
grand_parent: Desenho de Software (Modelagem)
parent: Módulo Notação UML – Diagramas Estáticos
nav_order: 1
---

Diagrama de Classe
{: .fs-9}

#### Versionamento

| Versão | Data       | Comentários                              | Autor(es)                                                            |
| ------ | ---------- | ---------------------------------------- | -------------------------------------------------------------------- |
| 0.1    | 19/08/2021 | Abertura do documento                    | Igor Q Lima                                                          |
| 0.2    | 19/08/2021 | Criação do Diagrama de Classe Preliminar | Igor Q, Pedro H, Matheus G, Eduardo P, Samuel N                      |
| 0.3    | 20/08/2021 | Criação do Diagrama de Classe            | Igor Q, Pedro H, Matheus G, Eduardo P, Samuel N, Giovanna B, Roberto |
| 1.0    | 20/08/2021 | Revisão                                  | João Gabriel de Matos                                                |
| 1.1    | 23/08/2021 | Revisão                                  | Kess Jhones                                                          |
| 1.2    | 23/08/2021 | Adicionado legenda                       | Kess Jhones                                                          |
| 1.3    | 23/08/2021 | Revisão                                  | João Gabriel de Matos                                                |
| 1.4    | 23/08/2021 | Revisão                                  | Matheus Gabriel                                                      |
| 1.5    | 13/09/2021 | Criação do Diagrama de Classe V2         | Igor Q, Matheus G, Giovanna B                                        |
| 1.6    | 15/09/2021 | Revisão                                  | Eduardo Picolo                                                       |
| 1.7    | 18/09/2021 | Revisão                                  | João Gabriel de Matos                                                |

## Introdução

O diagrama de classes é um diagrama de estrutura UML que mostra a estrutura do sistema projetado no nível de classes e interfaces (contendo seus recursos, restrições e relacionamentos/associações, generalizações, dependências, etc). [[1]](#ref1)

## Diagrama de Classe Preliminar

Primeiramente criamos um Diagrama de Classe preliminar para podermos realizar outros diagramas em paralelo e então realizar modificações conforme a necessidade, neste diagrama tivemos apenas a preocupação da criação das entidades.

<a href="{{ site.baseurl }}/assets/images/diagramaClasses/diagramaDeClassePreliminar.svg" data-toggle="lightbox">
    <img src="{{ site.baseurl }}/assets/images/diagramaClasses/diagramaDeClassePreliminar.svg">
</a>

##### Feito por Igor Q, Pedro H, Matheus G, Eduardo P, Samuel N.

## Diagrama de Classe V1

Conforme criamos outros artefatos ficou mais perceptível as alterações que deveriam ser feitas. Após uma reunião decidimos por este novo diagrama de classe.

<a href="{{ site.baseurl }}/assets/images/diagramaClasses/diagramaDeClasseV1.svg" data-toggle="lightbox">
    <img src="{{ site.baseurl }}/assets/images/diagramaClasses/diagramaDeClasseV1.svg">
</a>

##### Feito por Igor Q, Pedro H, Matheus G, Eduardo P, Samuel N, Giovanna B, Roberto.

## Diagrama de Classe V2

Com os feedbacks da segunda entrega e necessidade do artefatos de padrões de projetos foi necessario algumas mudanças. Como a adição de metodos e cardinalidades em todas as classes. Também transformamos a classe categoria em um ENUM.

<a href="{{ site.baseurl }}/assets/images/diagramaClasses/diagramaDeClasseV2.svg" data-toggle="lightbox">
    <img src="{{ site.baseurl }}/assets/images/diagramaClasses/diagramaDeClasseV2.svg">
</a>

##### Feito por Igor Q, Matheus G, Giovanna B

## Referência

[1] The Unified Modeling Language. Disponível em: <https://www.uml-diagrams.org/class-diagrams-overview.html>. Acesso em: 19 de agosto de 2021.
{: #ref1}
