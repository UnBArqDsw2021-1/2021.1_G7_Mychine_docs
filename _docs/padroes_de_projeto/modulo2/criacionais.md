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
|  0.1   |   11/09/2021   |   Adicionando conteúdo sobre o prototype  | Pedro Henrique  |

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
  Imagem exemplo retirada de 
  <a href="https://medium.com/xp-inc/desing-patterns-parte-7-prototype-98962514728f">medium.com</a>
  </p>
</div>


### Exemplo em Typescript

<div style="display:flex; flex-direction:column; justify-content:center; ">
  <a href="{{ site.baseurl }}/assets/images/Diagrama-prototype.svg" data-toggle="lightbox" style="margin:0 auto;">
    <img src="{{ site.baseurl }}/assets/images/Diagrama-prototype.svg" class="img-fluid" />
  </a>
</div>

```typescript
interface prototype{
    clone():prototype;
}

class produto implements prototype{
    
    constructor(public nome:string, private preco:number){}

    public clone(): this {
        return Object.create(this);
    }

    getPreco():number{
        return this.preco;
    }
    setPreco(newPreco:number){
        this.preco = newPreco;
    }
}

const p1 = new produto('Produto1', 30.99); // criando uma produto
const p2 = p1.clone(); // clonando a produto

console.log(p1.nome, p1.getPreco(), p2.nome, p2.getPreco());

p2.nome = 'Produto2'
p2.setPreco(40); 

console.log(p1.nome, p1.getPreco(), p2.nome, p2.getPreco());

console.log(p1 === Object.getPrototypeOf(p2)); //testando se p1 é o prototipo de p2
```
O código acima gera a seguinte saída:

```bash
"Produto1",  30.99,  "Produto1",  30.99 
"Produto1",  30.99,  "Produto2",  40 
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