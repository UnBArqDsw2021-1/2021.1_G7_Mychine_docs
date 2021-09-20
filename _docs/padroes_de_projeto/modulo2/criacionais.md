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

| Versão | Data       | Comentários                            | Autor(es)                                           |
| ------ | ---------- | -------------------------------------- | --------------------------------------------------- |
| 0.1    | 11/09/2021 | Adicionando conteúdo sobre o prototype | Pedro Henrique                                      |
| 1.0    | 12/09/2021 | Revisão ortográfica                    | Samuel Nogueira                                     |
| 1.1    | 13/09/2021 | Revisão de conteúdo                    | Matheus Gabriel e Igor Queiroz                      |
| 1.2    | 15/09/2021 | Adicionando Abstract Factory           | Roberto Martins da Nóbrega, Samuel Nogueira Bacelar |
| 2.0    | 15/09/2021 | Revisão de conteúdo                    | Igor Q Lima, Samuel Nogueira Bacelar                |
| 2.1    | 15/09/2021 | Adicionando as referências de Abstract Factory | Roberto Martins da Nóbrega|
| 2.1    | 15/09/2021 | Adicionando Factory Method | Kess Jhones |


## Abstract Factory

O Abstract Factory é um padrão de projeto criacional que permite que você produza famílias de objetos relacionados ou dependentes por meio de uma única interface e sem a necessidade de especificar uma classe concreta.

A ideia principal desse padrão é a de fornecer uma interface para criar familias de produtos e criar uma hierarquia que engloba várias fábricas para a construção de diversos produtos de uma mesma familia.

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

### Exemplo em TypeScript

O padrão abstract factory pode ser utilizado para separar a instanciação do uso, dos controllers em múltiplas views em um projeto de padrão MVC.

```typescript
interface BaseController {
    get(db: any, args: object) 
    list(db: any, args: object)
    create(db: any, input: object)
    update(db: any, id: Number, update: object)
    delete(db: any, id: Number)
}

class ProductController implements BaseController{
    constructor() {}
    
    public get(db: any, args: object):any {
        return db.Product.getOne(args);
    }
    public list(db: any, args: object): any {
        return db.Product.getAll(args);
    }
    public create(db: any, input: object): any {
        return db.Product.create(input);
    } 
    public update(db: any, id: Number, update: object): any {
        return db.Product.update(update, id);
    } 
    public delete(db: any, id: Number): any {
        return db.Product.delete(id);
    }  

}

class UserController implements BaseController{
    constructor() {

    }
    public get(db: any, args: object):any {
        return db.User.getOne(args);
    }
    public list(db: any, args: object): any {
        return db.User.getAll(args);
    }
    public create(db: any, input: object): any {
        return db.User.create(input);
    } 
    public update(db: any, id: Number, update: object): any {
        return db.User.update(update, id);
    } 
    public delete(db: any, id: Number): any {
        return db.User.delete(id);
    }  
}
 

class ControllerFactory {
    public createUser(): UserController {
        return new UserController();
    }
    public createProduct(): ProductController {
        return new ProductController();
    }
    // ...
}

function main() {
    const factory = new ControllerFactory();
    const userController = factory.createUser();
    const productController = factory.createProduct();
    //...
}
```

### Vantagens

Você evita estabelecer conexões fortes entre produtos específicos e códigos de cliente.

Princípio da responsabilidade única. Você pode extrair o código de construção do produto para um local para facilitar a manutenção do código.

Princípio de abertura e fechamento. Você pode introduzir novas variantes de produto sem quebrar o código de cliente existente.

### Desvantagens

* O código pode se tornar mais complexo do que deveria, porque muitas novas interfaces e classes são introduzidas junto com o padrão.

<hr/>

## Factory Method

Factory method é um padrão de projeto criacional que define uma interface para a criação de um objeto deixando que subclasses decidam qual classe instanciar.  

O Factory method é composto pelos seguintes elementos: 

 
**Creator** (criador abstrato): responsável pela criação de um Factory method. 

**ConcreteCreator**(Criador concreto): implementa o Factory method informando qual produto será retornado. 

**Product**(Produto abstrato): interface para produtos finais, classes que implementam Factory method retornam produtos com essa interface. 

**ConcreteProduct**(Produto concreto): produtos concretos retornados pelas classes que implementam o Factory method. [[1]](#ref1) 

<div style="display:flex; flex-direction:column; justify-content:center; ">
  <a href="{{ site.baseurl }}/assets/images/FactoryMethod.png" data-toggle="lightbox" style="margin:0 auto;">
    <img src="{{ site.baseurl }}/assets/images/FactoryMethod.png" class="img-fluid" />
  </a>
  <p style="text-align:center;">
  Imagem exemplo retirada de 
  <a href="https://pt.wikipedia.org/wiki/Factory_Method">wikipedia.org</a>
  </p>
</div>

### Exemplo em TypeScript

```typescript
  interface product{
    sayHi():void;
  }

  class concretePorcuct implements product{
    sayHi():void{
      console.log('Hi');
    }
  }

  abstract class creator{
    abstract factoryMethod(): product;

    createAndShow() void {
      const product = this.concretePorcuct();
      console.log(product);
    }
  }

  class concreteCreator extends creator{
    factoryMethod(): product{
      return new concreteProduct();
    }
  }

  const creator = new concreteCreator();
  const product = creator.factoryMethod();
  product.sayHi();
  creator.createAndShow();
```
### Vantagens
* Facilita a introdução de novos tipos de produtos sem a necessidade de quebrar o código existente 

* Separa o código que cria do código que usa o objeto, auxiliando na manutenção do código. 

* Ajuda no desacoplamento do código. 

### Desvantagens
* Se usado de forma equivocada pode aumentar o nível de complexidade do código, já que necessita da criação de muitas subclasses para a implementação do padrão. 
<hr/>

## Prototype

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

Abstract Factory. Refactoring.guru. Disponível em: <https://refactoring.guru/pt-br/design-patterns/abstract-factory>. Acesso em: 15 Sep. 2021.

‌ROBERTO, Jones. Design Patterns - Parte 4 – Abstract Factory - XP Inc. - Medium. Medium. Disponível em: <https://medium.com/xp-inc/design-patterns-abstract-factory-da6b7057abce>. Acesso em: 15 Sep. 2021.

MIRANDA, Otávio. Abstract Factory Prática - Padrões de Projeto - Parte 13/45. Disponível em: <https://www.youtube.com/watch?v=36SzKmNnXdM&ab_channel=Ot%C3%A1vioMiranda>. Acesso em: 16 Sep. 2021.

[1] Factory Method. Refactoring.guru. Disponível em: <https://refactoring.guru/design-patterns/factory-method>. Acesso em: 20 Sep. 2021.
{: #ref1} 
