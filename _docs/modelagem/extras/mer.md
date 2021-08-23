---
layout: default
title: Modelo Entidade-Relacionamento
grand_parent: Módulo Desenho de Software (Modelagem)
parent: Extras
nav_order: 1
---

ME-R
{: .fs-9}
Modelo Entidade-Relacionamento
{: .fs-9}

#### Versionamento
{: .no_toc}

| Versão | Data       | Comentários                   | Autor(es)                                      |
| ------ | ---------- | ----------------------------- | ---------------------------------------------- |
| 0.1    | 19/08/2021 | Criação do Modelo Entidade-Relacionamento  | Roberto Nóbrega, Pedro Henrique e Samuel Nogueira |
| 1.0    | 22/08/2021 | Revisão  | João Gabriel de Matos |


## Introdução

Bons projetos de engenharia de software possuem documentados seus bancos de dados para facilitar o desenvolvimento e manutenção de um sistema, com isso trazemos o Modelo Entidade-Relacionamento ou apenas ME-R que tem como propósito documentar e elicitar o banco de dados de maneira descritiva, expondo suas entidades, seus respectivos atributos e como essas entidades se relacionam umas com as outras.

## Metodologia

Os participantes dessa entrega fazendo uso de reunião via Discord e utilizando do Google Docs para trabalhar em conjunto com os demais membros do grupo, criaram esse ME-R seguindo os padrões adotados na disciplina de Banco de Dados da UnB(FGA).

## ME-R Modelo Entidade-Relacionamento


### Entidades

* USER
* CATEGORY
* PRODUCT

### Atributos

* USER (<u>userId</u>, email, password, name, phone, phone, cpf, isAdm, createdAt, updatedAt, {address(cep, city, state, street, number, complement)})

* CATEGORY (<u>categoryId</u>, name, description)

* PRODUCT (<u>productId</u>, name, description, lastMaintenance, price, status, image, createdAt, updatedAt)

### Relacionamentos

* USER - rent - PRODUCT 
    * Um USER pode alugar um ou vários PRODUCT mas cada PRODUCT pode ser alugado por um e apenas um USER por vez.
    * Cardinalidade: 1:N


* PRODUCT - has - CATEGORY
    * Um PRODUCT possui uma e apenas uma CATEGORY mas CATEGORY pode pertencer a nenhum, um ou vários PRODUCT.
    * Cardinalidade: N:1


## Referências

RODRIGUES, J. MER e DER: Modelagem de Bancos de Dados. Disponível em: <https://www.devmedia.com.br/modelo-entidade-relacionamento-mer-e-diagrama-entidade-relacionamento-der/14332>. Acesso em: 19 ago. 2021.
