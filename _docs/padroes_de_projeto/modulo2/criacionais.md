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
|  1.0   |   12/09/2021   |   Revisão ortográfica                     | Samuel Nogueira  |
|  1.1   |   13/09/2021   |   Revisão de conteúdo                     | Matheus Gabriel e Igor Queiroz  |
|  1.2   |   15/09/2021   |   Adicionando Abstract Factory            | Roberto Martins da Nóbrega  |


## Abstract Factory

O Abstract Factory é um padrão de projeto criacional que permite que você produza famílias de objetos relacionados ou dependentes por meio de uma única interface e sem a necessidade de especificar uma classe concreta.

A idéia principal desse padrão é a de fornecer uma interface para criar familias de produtos e criar uma hierarquia que engloba várias fábricas para a contrução de diversos produtos de uma mesma familia.

<div style="display:flex; flex-direction:column; justify-content:center; ">
  <a href="{{ site.baseurl }}/assets/images/abstractFactory.png" data-toggle="lightbox" style="margin:0 auto;">
    <img src="{{ site.baseurl }}/assets/images/abstractFactory.png" class="img-fluid" />
  </a>
  <p style="text-align:center;">
  Imagem exemplo retirada de 
  <a href="https://refactoring.guru/pt-br/design-patterns/abstract-factory">refactoring.guru</a>
  </p>
</div>

A Abstract Factory define uma interface para criar todos os produtos diferentes, mas deixa a criação real do produto para a classe fábrica concreta. Cada tipo de fábrica corresponde a um determinado tipo de produto.

O código do cliente chama o método de criação do objeto de fábrica em vez de criar diretamente o produto por meio da chamada do construtor (usando o operador new). Como uma fábrica corresponde a uma variante de produto, todos os seus produtos serão compatíveis.

O código do cliente trabalha apenas com fábricas e produtos por meio de suas interfaces abstratas. Ele permite que o mesmo código de cliente seja usado para produtos diferentes. Você só precisa criar uma nova classe de fábrica concreta e passá-la para o código do cliente.


### Exempolo em TypeScript

```typescript 
/**
 * Primeiro Cria-se a classe abstrata que servirá de molde para as fábricas concretas
 */
interface AbstractFactory {
    createProdutoA(): ProdutoAbstratoA;

    createProdutoB(): ProdutoAbstratoB;
}

/**
 * fábricas concretas produzem familias de produtos, essas fábricas garantem a 
 * compatibilidade entre os produtos de uma mesma fábrica.
 * A assinatura de uma fábrica concreta retorna um produto abstrato que possui 
 * um produto concreto instanciado.
 */
class FabricaConcreta1 implements AbstractFactory {
    public createProdutoA(): ProdutoAbstratoA {
        return new ProdutoConcretoA1();
    }

    public createProdutoB(): ProdutoAbstratoB {
        return new ProdutoConcretoB1();
    }
}

/**
 * Cada fábrica concreta corresponde a uma variação do produto.
 */
class FabricaConcreta2 implements AbstractFactory {
    public createProdutoA(): ProdutoAbstratoA {
        return new ProdutoConcretoA2();
    }

    public createProdutoB(): ProdutoAbstratoB {
        return new ProdutoConcretoB2();
    }
}

/**
 * Cada produto distindo de uma familia deve ter sua interface base que será 
 * usada em todos os produtos de um mesmo tipo.
 */
interface ProdutoAbstratoA {
    funcaoUtilA(): string;
}

/**
 * Cada produto concreto é criado por sua fábrica concreta correspondente.
 */
class ProdutoConcretoA1 implements ProdutoAbstratoA {
    public funcaoUtilA(): string {
        return 'O resultado do produto A1.';
    }
}

class ProdutoConcretoA2 implements ProdutoAbstratoA {
    public funcaoUtilA(): string {
        return 'O resultado do produto A2.';
    }
}

/**
 * Aqui fica a interface base de outro produto e todos os produtos podem interagir
 * entre eles desde que estejam na mesma familia de produtos concretos.
 */
interface ProdutoAbstratoB {

    funcaoUtilB(): string;

    /**
     * Mas nada impede que um produto possa contribuir com os produtos de outra familia
     * a abstract factory garante que sejam compatíveis entre si por serem da mesma variação
     */
    outraFuncaoUtilB(collaborator: ProdutoAbstratoA): string;
}

/**
 * Produtos concretos são criados para corresponder as fabricas concretas.
 */
class ProdutoConcretoB1 implements ProdutoAbstratoB {

    public funcaoUtilB(): string {
        return 'O resultado do produto B1.';
    }

    /**
     * O produto B1 só funciona corretamente com o produto A1, porém ele aceita 
     * qualquer instância do produto abstrato A como um argumento.
     */
    public outraFuncaoUtilB(collaborator: ProdutoAbstratoA): string {
        const result = collaborator.funcaoUtilA();
        return `O resultado de B1 colaborando com (${result})`;
    }
}

class ProdutoConcretoB2 implements ProdutoAbstratoB {

    public funcaoUtilB(): string {
        return 'O resultado do produto B2.';
    }

    public outraFuncaoUtilB(collaborator: ProdutoAbstratoA): string {
        const result = collaborator.funcaoUtilA();
        return `O resultado de B2 colaborando com (${result})`;
    }
}

function clientCode(factory: AbstractFactory) {
    const produtoA = factory.createProdutoA();
    const produtoB = factory.createProdutoB();

    console.log(produtoB.funcaoUtilB());
    console.log(produtoB.outraFuncaoUtilB(produtoA));
}

/**
 * O codigo do cliente pode trabalhar com qualquer classe concreta.
 */
console.log('Client: Testando o cliente com a primeira fabrica ...');
clientCode(new FabricaConcreta1());

console.log('');

console.log('Client: Testando o mesmo cliente com a segunda fabrica...');
clientCode(new FabricaConcreta2());
```

O código acima gera a seguinte saída:

```bash
Client: Testando o cliente com a primeira fabrica ...
O resultado do produto B1.
O resultado de B1 colaborando com (O resultado do produto A1.)

Client: Testando o mesmo cliente com a segunda fabrica...
O resultado do produto B2.
O resultado de B2 colaborando com (O resultado do produto A2.)
```



### Vantagens

Você pode ter certeza de que os produtos que obtém de fábrica são compatíveis entre si.

Você evita estabelecer conexões fortes entre produtos específicos e códigos de cliente.

Princípio da responsabilidade única. Você pode extrair o código de construção do produto para um local para facilitar a manutenção do código.

Princípio de abertura e fechamento. Você pode introduzir novas variantes de produto sem quebrar o código de cliente existente.

### Desvantagens

* O código pode se tornar mais complexo do que deveria, porque muitas novas interfaces e classes são introduzidas junto com o padrão.



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

<div style="display:flex; flex-direction:column; justify-content:center; margin:20px ">
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
