---
layout: default
title: GRASPs Avançados
grand_parent: Desenho de Software (Padrões de Projeto)
parent: Módulo Padrões de Projeto GRASPs
nav_order: 2
---

GRASPs Avançados
{: .fs-9}

<br>
1. TOC
{:toc}

#### Versionamento
{: .no_toc }

| Versão | Data | Comentários | Autor(es) |
| ------ | ---- | ----------- | --------- |
|   0.1  | 13/09/2021  | Abertura do documento | Giovanna B Bottino |
|   0.2  | 13/09/2021  | Adiciona introdução GRASP | Giovanna B Bottino |
|   0.3  | 13/09/2021  | Adiciona introdução GRASPs Avançados | Giovanna B Bottino |
|   0.4  | 13/09/2021  | Adiciona referencia da introducao | Giovanna B Bottino |
|   0.5  | 13/09/2021  | Adiciona padrão de polimorfismo | Giovanna B Bottino |


## GRASP

General Responsability Assignment Software Patterns (GRASP) são diretrizes para atribuição de responsabilidade a classes e objetos em projetos orientados a objetos. É um padrão de projeto baseado em princípios e boas praticas usadas durante a criação do software, que descreve o problema e a solução adotada [[2]](#ref2). 

Os Padrões de Software para Atribuição de Responsabilidade Geral utilizam princípios baseados na Orientação a Objetos. Isso para tornar o código mais flexível, de facil manutenção e a extensibilidade [[1]](#ref1). 

Os padrões estão sendo amplamente utilizados, a seguir pode encontrar alguns que foram documentados aqui de forma representativa. 

### GRASPs Avançados

Como GRASP exploram principios fundamentais de orientação a objetos, 5 padrões fundamentais e 4 padrões avançados, ele pode ser dividido em GRASPs básicos e avançados [[1]](#ref1). Aqui iremos apontar o 4 padrões avançados:

- Polimorfismo
- Indireção
- Fabricação ou Invenção Pura
- Variações Protegidas

Como alguns padrões GRASP ocorrem na implementação de padrões GoF recomendamos a leitura dos podrões GoF.
 
## Polimorfismo

<br/>

**Problema:** É preciso substituir um componente por outro sem afetar o cliente. Como desenvolver componentes de software plugaveis? Como lidar com alternativas baseadas no tipo? Evitando variação condicional pouco extensível [[1]](#ref1).

**Solução:**  Atribua responsabilidades ao comportamento usando operações polimórficas. Elas devem ser atribuídas a abstrações e não a objetos concretos, permitindo que eles possam variar conforme a necessidade. Não use lógica condicional para realizar alternativas diferentes baseadas em tipo [[1]](#ref1).

**Justificativa:** Polimorfismo no GRASP refere-se a responsabilidade geral ser distribuída a um conjunto de classes ou interfaces. Ou seja, nesse caso o sistema que possui classes com métodos parecidos cria uma classe generalista com um nível de abstração mais alto [[1]](#ref1).

**Utilização no projeto:**

No caso do nosso projeto vamos citar quando padronizamos nossas classes _User_, _Admn_ e _Client_. A _User_ é responsavel por _createUser_, _recuperatePassword_, _logIn_ e _logOut_, onde as classes derivadas _Admn_ e _Client_ podem utilizar de acordo com a necessidade. Pode-se observar no nosso diagrama de classe a seguir.

<a href="{{ site.baseurl }}/assets/images/diagramaDeClasseV1.svg" data-toggle="lightbox">
    <img src="{{ site.baseurl }}/assets/images/diagramaDeClasseV1.svg">
</a>

##### Feito por Igor Q, Pedro H, Matheus G, Eduardo P, Samuel N, Giovanna B, Roberto.

<hr/>

## Indireção

Não Utilizado
{: .label .label-red }

<br/>

**Problema:**

**Solução:**

**Justificativa:**

**Utilização no projeto:**

<hr/>

## Fabricação ou Invenção Pura

Não Utilizado
{: .label .label-red }

<br/>

**Problema:**

**Solução:**

**Justificativa:**

**Utilização no projeto:**

<hr/>

## Variações Protegidas

<br/>

**Problema:**

**Solução:**

**Justificativa:**

**Utilização no projeto:**

<hr/>

## Referências

[1] ROCHA, Helder. Padrões Design de com aplicações em Java, 2005. Disponível em: [<https://www.inf.ufpr.br/andrey/ci163/Design_Patterns.pdf>](https://www.inf.ufpr.br/andrey/ci163/Design_Patterns.pdf). Acesso em: 13 de setembro de 2021.
{: #ref1}

[2] SERRANO, Milene. GRASP Complementar, 2021. Material apresentado na Disciplina de Arquitetura e Desenho de Software do curso de engenharia de software da UnB, FGA. Acesso em: 13 de setembro de 2021.
{: #ref2}