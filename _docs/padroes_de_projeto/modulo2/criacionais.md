---
layout: default
title: GoFs Criacionais
grand_parent: Desenho de Software (Padrões de Projeto)
parent: Módulo Padrões de Projeto GoFs
nav_order: 1
---

GoFs Criacionais
{: .fs-9}

<br>
1. TOC
{:toc}

#### Versionamento
{: .no_toc }

| Versão |      Data      |                Comentários                |    Autor(es)    |
| ------ | -------------- | ----------------------------------------- | --------------- |
|        |   11/09/2021   |   Adicionando conteúdo sobre o prototype  | Pedro Henrique  |

## Abstract Factory

<hr/>

## Factory Method

<hr/>

## Prototype

### Introdução

Prototype é um padrão de projeto criacional que fornece uma maneira de copiar/clonar objetos que já existem, fazendo com que o mesmo seja independente de suas classes (não é necessário saber a classe concreta para que seja possível clonar o objeto).

<div style="display:flex; flex-direction:column; justify-content:center; ">
  <a href="{{ site.baseurl }}/assets/images/uml-prototype.png" data-toggle="lightbox" style="margin:0 auto;">
    <img src="{{ site.baseurl }}/assets/images/uml-prototype.png" class="img-fluid" />
  </a>
  <p style="text-align:center;">
  Imagem retirada de 
  <a href="https://medium.com/xp-inc/desing-patterns-parte-7-prototype-98962514728f">medium.com</a>
  </p>
</div>


### Exemplo em Typescript

```typescript
interface prototype{
    clone():prototype;
}

class materia implements prototype{
    
    constructor(public nome:string, private codigo:number){}

    public clone(): this {
        return Object.create(this);
    }

    getCodigo():number{
        return this.codigo;
    }
}

const m1 = new materia('ads', 1); // criando uma materia
const m2 = m1.clone(); // clonando a materia

console.log(m1.nome, m1.getCodigo(), m2.nome, m2.getCodigo());

m2.nome = 'ED1' 

console.log(m1.nome, m1.getCodigo(), m2.nome, m2.getCodigo());

console.log(m1 === Object.getPrototypeOf(m2)); //testando se m1 é o prototipo de m2
```
O código acima gera a seguinte saída:

```bash
"ads"  1  "ads"  1 
"ads"  1  "ED1"  1 
true 
```

### Vantagens

Esse tipo de processo de clonagem de objetos pode salvar uma grande quantidade de recursos computacionais, caso a criação do objeto seja muito custosa ou muito complexa.

Podem existir ainda, casos em que uma cópia direta (copiar uma a uma as propriedades de um objeto instanciado) é inviável, visto que o objeto pode possuir propriedades privadas (propriedades que não são visíveis para outros objetos além do próprio dono). 

Utilizar protótipos também reduz o número de subclasses pois não é necessário criar uma nova herança para que haja a adição ou modificação de novas características no objeto.

### Desvantagens

Clonar objetos que possuem referências circulares (referências de outros objetos) pode se tornar extremamente complexo.

## Referências

Prototype. refactoring.guru, “[2015?]”. Disponível em: <https://refactoring.guru/pt-br/design-patterns/prototype>. Acesso em: 11, set 2021.

Design Patterns — Parte 7 — Prototype. medium, “[2019]”. Disponível em: <https://medium.com/xp-inc/desing-patterns-parte-7-prototype-98962514728f>. Acesso em: 11, set 2021.

Miranda, Otavio. Prototype Teoria - Padrões de Projeto - Parte 8/45. Youtube, 10 de ago. de 2020.
Disponível em: <https://www.youtube.com/watch?v=Z-_smcjkdwM&list=LL&index=4&ab_channel=Ot%C3%A1vioMiranda>.