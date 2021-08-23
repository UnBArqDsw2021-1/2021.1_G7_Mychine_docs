---
layout: default
title: Diagrama Entidade-Relacionamento
grand_parent: Módulo Desenho de Software (Modelagem)
parent: Extras
nav_order: 2
---

DE-R
{: .fs-9}
Diagrama Entidade-Relacionamento
{: .fs-9}

#### Versionamento
{: .no_toc}

| Versão | Data       | Comentários                   | Autor(es)                                      |
| ------ | ---------- | ----------------------------- | ---------------------------------------------- |
| 0.1    | 19/08/2021 | Criação do Diagrama Entidade-Relacionamento  | Roberto Nóbrega, Pedro Henrique e Igor Lima |
| 1.0    | 19/08/2021 | Revisão  | Kess Jhones, Samuel Nogueira |
| 1.1   | 21/08/2021 | Correção do diagrama  | Roberto Nóbrega, Pedro Henrique e Igor Lima |
| 2.0   | 21/08/2021 | Revisão  | Kess Jhones, Samuel Nogueira |
| 2.1   | 23/08/2021 | Adição de legenda  | Roberto Nóbrega, Pedro Henrique |

## Introdução

O propósito do Diagrama Entidade-Relacionamento é de facilitar na implementação do banco de dados, abstraindo o ME-R - Modelo Entidade-Relacionamento em um diagrama de fácil visualização e interpretação o modelo conceitual do projeto.[[1]](#ref1)

## Metodologia

O grupo em pleno acordo e utilizando da ferramenta <a href="https://app.diagrams.net/">draw.io</a>,  decidiu utilizar da notação Diagrama Pé de Galinha em detrimento da Peter Chen por facilitar a compreensão e em um mesmo documento exibir as informações que seriam obtidas tanto no DE-R - Diagrama Entidade-Relacionamento como no DLD - Diagrama Lógico de Dados, facilitando a observação da documentação do projeto para o banco de dados.


Tabelas:

Caixa alta representa entidade

Minusculo relacionamento

PK - Chave Primária

FK - Chave Estrangeira

Cardinalidade:

<img src="{{ site.baseurl }}/assets/images/um.png" width="200px"> Um

<img src="{{ site.baseurl }}/assets/images/muitos.png" width="200px"> Muitos

<img src="{{ site.baseurl }}/assets/images/umeapenasum.png" width="200px"> Um e apenas um

<img src="{{ site.baseurl }}/assets/images/umoumuitos.png" width="200px"> Um ou muitos

<img src="{{ site.baseurl }}/assets/images/zeromuitos.png" width="200px"> Zero ou muitos

<img src="{{ site.baseurl }}/assets/images/zeroum.png" width="200px"> Zero ou um



## DER - Diagrama Entidade Relacionamento

Utilizando do Diagrama Pé de Galinha que pode ser observado logo abaixo podemos observar todas as tabelas presentes no banco de dados bem como suas chaves, seus atributos e seus relacionamentos.

<a href="{{ site.baseurl }}/assets/images/DER.svg" data-toggle="lightbox">
  <img src="{{ site.baseurl }}/assets/images/DER.svg" width="500px">
</a>

<h5>Feito por Pedro Henrique, Roberto Nóbrega e Igor Lima utilizando o <a href="https://app.diagrams.net/">draw.io</a> </h5> 


## Referências

[1] RODRIGUES, J. MER e DER: Modelagem de Bancos de Dados. Disponível em: <https://www.devmedia.com.br/modelo-entidade-relacionamento-mer-e-diagrama-entidade-relacionamento-der/14332>. Acesso em: 19 ago. 2021.
{: #ref1}