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
|   0.5.1  | 13/09/2021  | Adiciona introdução do padrão de indireção | Giovanna B Bottino |
|   0.5.2  | 13/09/2021  | Adiciona introdução do padrão de fabricação | Giovanna B Bottino |
|   0.5.3  | 13/09/2021  | Adiciona padrão de Variações Protegidas | Giovanna B Bottino |
|   0.5.4  | 13/09/2021  | Adiciona exemplo padrao de indirecao | Giovanna B Bottino |


## GRASP

General Responsability Assignment Software Patterns (GRASP) são diretrizes para atribuição de responsabilidade a classes e objetos em projetos orientados a objetos. É um padrão de projeto baseado em princípios e boas praticas usadas durante a criação do software, que descreve o problema e a solução adotada [[3]](#ref3). 

Os Padrões de Software para Atribuição de Responsabilidade Geral utilizam princípios baseados na Orientação a Objetos. Isso para tornar o código mais flexível, de facil manutenção e a extensibilidade [[2]](#ref2). 

Os padrões estão sendo amplamente utilizados, a seguir pode encontrar alguns que foram documentados aqui de forma representativa. 

### GRASPs Avançados

Como GRASP exploram principios fundamentais de orientação a objetos, 5 padrões fundamentais e 4 padrões avançados, ele pode ser dividido em GRASPs básicos e avançados [[2]](#ref2). Aqui iremos apontar o 4 padrões avançados:

- Polimorfismo
- Indireção
- Fabricação ou Invenção Pura
- Variações Protegidas

Como alguns padrões GRASP ocorrem na implementação de padrões GoF recomendamos a leitura dos podrões GoF.
 
## Polimorfismo

<br/>

**Problema:** É preciso substituir um componente por outro sem afetar o cliente. Como desenvolver componentes de software plugaveis? Como lidar com alternativas baseadas no tipo? Evitando variação condicional pouco extensível [[2]](#ref2).

**Solução:**  Atribua responsabilidades ao comportamento usando operações polimórficas. Elas devem ser atribuídas a abstrações e não a objetos concretos, permitindo que eles possam variar conforme a necessidade. Não use lógica condicional para realizar alternativas diferentes baseadas em tipo [[2]](#ref2).

**Justificativa:** Polimorfismo no GRASP refere-se a responsabilidade geral ser distribuída a um conjunto de classes ou interfaces. Ou seja, nesse caso o sistema que possui classes com métodos parecidos cria uma classe generalista com um nível de abstração mais alto [[1]](#ref1).

**Utilização no projeto:**

No caso do nosso projeto vamos citar quando padronizamos nossas classes _User_, _Admn_ e _Client_. A _User_ é responsavel por _createUser_, _recuperatePassword_, _logIn_ e _logOut_, onde as classes derivadas _Admn_ e _Client_ podem utilizar de acordo com a necessidade. Pode-se observar no nosso diagrama de classe a seguir.

<a href="{{ site.baseurl }}/assets/images/diagramaClasses/diagramaDeClasseV2.svg" data-toggle="lightbox">
    <img src="{{ site.baseurl }}/assets/images/diagramaClasses/diagramaDeClasseV2.svg">
</a>

##### Feito por Igor Q, Matheus G, Giovanna B

<hr/>

## Indireção

<br/>

**Problema:** Como suportar baixo acoplamento e manter elevado o potencial de reuso? [[2]](#ref2)

**Solução:** Atribua a responsabilidade a um objeto intermediário para mediar as mensagens entre outros para que não sejam diretamente acoplados. Ou seja esse objeto cria uma camada de indireção entre os dois componentes [[2]](#ref2).

**Justificativa:**  Indireção no GRASP refere-se a manter o baixo acoplamento, através de delegação de responsabilidades através de uma classe mediadora [[1]](#ref1).

**Utilização no projeto:**

No caso do nosso projeto vamos citar quando padronizamos o cadastro do cliente. Onde o Usuário se comunica com a Interface e a UserControler é responsavel por mediar as mensagens entre a Interface e a Usuer. Pode-se observar no nosso diagrama de sequencia a seguir.

<a href="{{ site.baseurl }}/assets/images/sequencia/cadastrov1.png" data-toggle="lightbox">
  <img src="{{ site.baseurl }}/assets/images/sequencia/cadastrov1.png" class="img-fluid" />
</a>

##### Feito por: Kess Jhones

<hr/>

## Fabricação ou Invenção Pura

Não Utilizado
{: .label .label-red }

<br/>

**Problema:** Atribuir responsabilidades apenas para classes do domínio conceitual pode levar a situações de maior acoplamento e menos coesão [[2]](#ref2).

**Solução:** Atribuir um conjunto altamente coesivo de responsabilidades a uma classe artificial que não representa um conceito do domínio do problema [[2]](#ref2).

**Justificativa:** Fabricação no GRASP refere-se a uma classe que não representa nenhum conceito no domínio do problema, apenas funciona como uma classe prestadora de serviços. Usada para ter um baixo acoplamento e alta coesão no sistema [[1]](#ref1).

**Utilização no projeto:**

<hr/>

## Variações Protegidas

<br/>

**Problema:** Como projetar objetos e sistemas para que as variações nesses elementos não tenha um impacto indesejável nos outros elementos? [[2]](#ref2)

**Solução:** Encapsulamento, interfaces, polimorfismo, indireção e padrões [[2]](#ref2).

**Justificativa:**  Protege o sistema, encapsulando o comportamento que realmente importa [[1]](#ref1).

**Utilização no projeto:** 

No caso do nosso projeto vamos citar o encapsulamento em nossas classes. Pode-se observar no nosso diagrama de classe a seguir.

<a href="{{ site.baseurl }}/assets/images/diagramaDeClasseV1.svg" data-toggle="lightbox">
    <img src="{{ site.baseurl }}/assets/images/diagramaDeClasseV1.svg">
</a>



<hr/>

## Referências

[1] BOAS, Leandro. Padrões GRASP — Padrões de Atribuir Responsabilidades, 2019. Disponível em: [<https://medium.com/@leandrovboas/padr%C3%B5es-grasp-padr%C3%B5es-de-atribuir-responsabilidades-1ae4351eb204>](https://medium.com/@leandrovboas/padr%C3%B5es-grasp-padr%C3%B5es-de-atribuir-responsabilidades-1ae4351eb204). Acesso em: 13 de setembro de 2021.
{: #ref1}

[2] ROCHA, Helder. Padrões Design de com aplicações em Java, 2005. Disponível em: [<https://www.inf.ufpr.br/andrey/ci163/Design_Patterns.pdf>](https://www.inf.ufpr.br/andrey/ci163/Design_Patterns.pdf). Acesso em: 13 de setembro de 2021.
{: #ref1}

[3] SERRANO, Milene. GRASP Complementar, 2021. Material apresentado na Disciplina de Arquitetura e Desenho de Software do curso de engenharia de software da UnB, FGA. Acesso em: 13 de setembro de 2021.
{: #ref2}