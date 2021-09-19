---
layout: default
title: GoFs Estruturais
grand_parent: Desenho de Software (Padrões de Projeto)
parent: Módulo Padrões de Projeto GoFs
nav_order: 2
---

GoFs Estruturais
{: .fs-9}

<br>
1. TOC
{:toc}

#### Versionamento
{: .no_toc }

| Versão | Data       | Comentários                                     | Autor(es)                                                       |
| ------ | ---------- | ----------------------------------------------- | --------------------------------------------------------------- |
| 0.1    | 09/09/2021 | Abertura do documento                           | Igor Lima, Samuel Nogueira, Matheus Rodrigues e Roberto Nóbrega |
| 0.2    | 10/09/2021 | Adicionando o Adapter                           | Matheus Gabriel                                                 |
| 1.0    | 10/09/2021 | Revisão                                         | Pedro Henrique                                                  |
| 1.1    | 13/09/2021 | Adicionando Composite                           | Samuel Nogueira                                                 |
| 1.2    | 13/09/2021 | Adicionando referências e revisão               | Matheus Gabriel                                                 |
| 1.3    | 15/09/2021 | Revisão Composite                               | Eduardo Picolo                                                  |
| 1.4    | 16/09/2021 | Adicionando conceito de Decorator e referências | João Gabriel de Matos                                           |
| 1.5    | 16/09/2021 | Adicionando exemplo de codigo para Decorator    | João Gabriel de Matos                                           |
| 2.0    | 18/09/2021 | Revisão Decorator                               | Igor Q Lima, Roberto M da Nóbrega                                                     |

## Adapter

Se trata de um padrão de projeto que auxilia na comunicação entre interfaces incompatíveis entre si, de maneira que possibilita que essa interação ocorra por meio de uma classe adaptadora.

Uma analogia frequentemente feita é a com o adaptador de tomada que possibilita a interação entre duas interfaces que são incompatíveis entre si. [[1]](#ref1)

### Modelagem

<a href="{{ site.baseurl }}/assets/images/AdapterDiagrama.svg" data-toggle="lightbox">
    <img src="{{ site.baseurl }}/assets/images/AdapterDiagrama.svg" class="img-fluid" />
</a>

### Código Exemplo

O código a seguir mostra uma aplicação do padrão Adapter fazendo a conversão de datas para diferentes formatos definidos a partir de templates pré existentes.

```typescript
export type dateFormats = 'numeric' | 'long';

const dateAdapter = (date: Date, format: dateFormats = 'long'): string => {
  const formatMap = {
    numeric: {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    },
    long: {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    },
  };

  try {
    const formatedDate = new Intl.DateTimeFormat('pt-BR', formatMap[format] as Intl.DateTimeFormatOptions).format(
      new Date(date)
    );

    return formatedDate;
  } catch (error) {
    return '-';
  }
};

export default dateAdapter;
```

<hr/>

## Composite

O padrão Composite é um padrão estrutural de objetos que tem como intenção compor objetos em estruturas de árvore para representarem hierarquias partes-todo. Permitindo aos clientes tratarem de maneira uniforme objetos individuais e composições de objetos.[[2]](#ref2)

### Aplicabilidade

Deve ser usado quando:

- quiser representar hierarquias partes-todo de objetos.
- quiser que os clientes sejam capazes de ignorar a diferença entre composições de objetos e objetos individuais. Todos os objetos na estrutura composta serão tratados de maneira uniforme.

### Participantes

1. Component - Declara e implementa o comportamento padrão para os objetos na composição, fornecendo uma interface para acessar e gerenciar os seus componentes-filhos.
2. Leaf - representa objetos-folha, as quais não possuem filhos.
3. Composite - define o comportamento para componentes que têm filhos, além de armazenar os componentes filhos.
4. Client - O responsável por manipular objetos na composição através da interface Component.

### Modelagem

Modelo básico de um Composite

<a href="{{ site.baseurl }}/assets/images/Composite.png" data-toggle="lightbox">
<img src="{{ site.baseurl }}/assets/images/Composite.png" class="img-fluid" />
</a>

### Código Exemplo

O padrão **Composite** pode ser utilizado back-end do projeto para generalizar a forma como os Produtos são armazenados. No exemplo de código abaixo um classe abstrata `Product` é criada e herdada por `SimpleProduct` e `CompositeProduct`. `SimpleProduct` representa um produto simples que contem os atributos descritos na classe. Já `CompositeProduct` representa uma coleção de `SimpleProducts` e `CompositeProducts`. abaixo temos o diagrama do esquema de composite do exemplo.

<a href="{{ site.baseurl }}/assets/images/ProductComposite.svg" data-toggle="lightbox">
<img src="{{ site.baseurl }}/assets/images/Composite.png" class="img-fluid" />
</a>

Um exemplo de CompositeProduct dentro do escopo do projeto seria a criação de um Combo de produtos, comercializados como um, ou até mesmo um andaime(que é composto por painel, diagonal, escada, rodizio, etc).

```typescript
class Product {
  products: Product[];
  add(child: Product): void {}
  remove(child: Product): void {}
  getChild(i) {
    return this.products[i];
  }
  totalPrice() {}
}

class SimpleProduct extends Product {
  private id: Number;
  private name: String;
  private description: String;
  private lastMaintenance: Date;
  private price: Number;
  private idCategory: Number;
  constructor(id, name, description, lastMaintenance, price, idCategory) {
    super();
    this.id = id;
    this.name = name;
    this.description = description;
    this.lastMaintenance = lastMaintenance;
    this.price = price;
    this.idCategory = idCategory;
  }

  public totalPrice() {
    return this.price;
  }
}

class CompositeProduct extends Product {
  products: Product[] = [];

  id: Number;
  name: String;
  constructor(id, name) {
    super();
    this.id = id;
    this.name = name;
  }

  public add(child) {
    this.products.push(child);
  }

  public remove(child) {
    for (let product, i = 0; (product = this.getChild(i)); i++) {
      if (product === child) {
        this.products.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  totalPrice() {
    let result = 0;
    for (let product, i = 0; (product = this.getChild(i)); i++) {
      result += product.totalPrice();
    }

    return result;
  }
  discountPrice(percentage: any): Number {
    if (percentage > 1 && percentage < 0) {
      throw new Error('percentage value must be between 0 and 1');
    }
    const total: any = this.totalPrice();
    const discount = total * percentage;
    return total - discount;
  }
}

function main() {
  const comboBasico = new CompositeProduct(7, 'Combo de construção básico');

  const betoneira = new SimpleProduct(1, 'betoneira', '', new Date(), 220.0, 1);
  const carrinhoDeMao = new SimpleProduct(2, 'Carrinho de mão', '', new Date(), 100.0, 1);

  const andaime = new CompositeProduct(3, 'Conjunto de andaime simples');
  const painel = new SimpleProduct(4, 'painel', 'painel simples de andaime', new Date(), 9, 1);
  const diagonal = new SimpleProduct(5, 'diagonal', 'diagonal de andaime simples', new Date(), 5, 1);
  const escada = new SimpleProduct(6, 'Escada', 'Escada para andaime', new Date(), 8, 1);

  andaime.add(painel);
  andaime.add(painel);
  andaime.add(painel);
  andaime.add(painel);
  andaime.add(diagonal);
  andaime.add(escada);

  comboBasico.add(betoneira);
  comboBasico.add(carrinhoDeMao);
  comboBasico.add(andaime);
  const total = comboBasico.totalPrice();
  console.log(total);
}
main();
```

<hr/>

## Decorator

É um padrão de projeto usado quando se deseja alterar o comportamento de um objeto, mas se prefere evitar as inconveniências do uso de herança (não poder alterar o comportamento de um objeto durante o tempo de execução — podendo apenas substitui-lo por outro criado de outra subclasse, e normalmente não ser possivel uma classe herdar o comportamento de múltiplas outras). Neste modelo se resolve este problema com o uso de "envoltórios", sendo um objeto que implementa a mesma interface que o objeto alvo e delega para ele todos os pedidos/chamadas que recebe, mas fazendo alguma alteração antes ou após passar o pedido para o alvo.[[3]](#ref3)

### Código exemplo

Um exemplo de possivel uso de decorators, seria alterar o comportamento do metodo 'validate' da classe 'Address', quando o endereço ja se encontrar validado.

```typescript

function validation(){
  return ( target: any,propertyKey: string,propertyDescriptor: PropertyDescriptor,)=>{
    if(!target["isValidated"]){
      descriptor.value.apply(this);
    }

  }
};

class Address{

  street:String;
  city:String;
  state:String;
  cep:Number;
  number:Number;
  complement:String;
  isValidated:Boolean;

  constructor(street,city,state,cep,number,complement,isValidated){
    this.street=street;
    this.city=city;
    this.state=state;
    this.cep=cep;
    this.number=number;
    this.complement=complement;
    this.isValidated=isValidated;
    validate();

}
  @validation
  validate(){
    //Validation logic
    ...
  }
  
}
```

<hr/>

## Referências

Gamma, Erich. Padrões de projeto: soluções reutilizáveis de software orientado a objetos. 2007. Open WorldCat, http://site.ebrary.com/id/10824586.

[1] JavaScript Adapter Design Pattern - Dofactory. https://www.dofactory.com/javascript/design-patterns/adapter. Acessado 15 de setembro de 2021.
{: #ref1}

Refactoring Guru - Adapter. https://refactoring.guru/pt-br/design-patterns/adapter. Acessado 15 de setembro de 2021.

[2] JavaScript Composite Design Pattern - Dofactory. https://www.dofactory.com/javascript/design-patterns/composite. Acessado 14 de setembro de 2021.
{: #ref2}

JavaScript Decorator Design Pattern - Dofactory. https://www.dofactory.com/javascript/design-patterns/decorator. Acessado 16 de setembro de 2021.

[3] Refactoring Guru - Decorator. https://refactoring.guru/pt-br/design-patterns/decorator. Acessado 16 de setembro de 2021.
{: #ref3}

Typescript Handbook - Decorators. https://www.typescriptlang.org/docs/handbook/decorators.html. Acessado 16 de setembro de 2021.
