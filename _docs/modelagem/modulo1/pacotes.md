---
layout: default
title: Diagrama de Pacotes
grand_parent: Desenho de Software (Modelagem)
parent: Módulo Notação UML – Diagramas Estáticos
nav_order: 2
---

Diagrama de Pacotes
{: .fs-9}

#### Versionamento

| Versão | Data       | Comentários                        | Autor(es)                              |
| ------ | ---------- | ---------------------------------- | -------------------------------------- |
| 0.1    | 22/08/2021 | Abertura do documento              | João Gabriel de Matos                  |
| 0.2    | 22/08/2021 | Atualização do diagrama de pacotes | João Gabriel de Matos, Samuel Nogueira |
| 1.0    | 22/08/2021 | Revisão                            | Matheus Gabriel                        |
| 1.1    | 23/08/2021 | Revisão                            | Igor Queiroz Lima                      |
| 1.2    | 23/08/2021 | Adição de legenda                  | João Gabriel de Matos, Samuel Nogueira |

## Introdução

Neste diagrama contido abaixo, está representada de forma genérica as camadas do sistema - conforme a arquitetura escolhida (Cliente-servidor) - e a relação com as regras de negócio.

### Diagrama

#### Descrição

* Dentro de "Aplication <<model>>" tem se as camadas tipicas da arquitetura Cliente-servidor.
  * Web-client é o cliente que consumirá a api.
  * Server é o servidor que contem a api a ser consumida pelo web-client.
  * Database é o banco de dados
* Business contem as regras e entidades definidos em outros documentos.
  * Business logic são as regras e escopos definidos no Documento de Visão.
  * Busness entities são as entidades definidas no Diagrama de Classe.

<a href="{{ site.baseurl }}/assets/images/diagramaDePacotes.svg" data-toggle="lightbox">
    <img src="{{ site.baseurl }}/assets/images/diagramaDePacotes.svg">
</a>

##### Feito por: João Gabriel de Matos, Samuel Nogueira.



## Referência

The Unified Modeling Language. Disponível em: <https://www.uml-diagrams.org/package-diagrams-overview.html>. Acesso em: 21 de agosto de 2021.
