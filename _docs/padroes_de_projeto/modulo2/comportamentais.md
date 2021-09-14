---
layout: default
title: GoFs Comportamentais
grand_parent: Desenho de Software (Padrões de Projeto)
parent: Módulo Padrões de Projeto GoFs
nav_order: 3
---

GoFs Comportamentais
{: .fs-9}

<br>
1. TOC
{:toc}

#### Versionamento
{: .no_toc }

| Versão | Data | Comentários | Autor(es) |
| ------ | ---- | ----------- | --------- |
|   0.1 | 12/09/2021 | Adicionando conteúdo sobre o padrão strategy | Pedro Henrique |
|   1.0 | 13/09/2021 | Revisão Ortográfica | Samuel Nogueira |
|   1.1 | 13/09/2021 | Revisão | Matheus Gabriel e Igor Queiroz |

## Observer

<hr/>

## Strategy

### Introdução

O padrão de projeto strategy é um padrão de projeto comportamental. Esse padrão de projeto vem da necessidade de se ter diversas variações de um algoritmo em uma classe única. Porém centralizar esses algoritmos em apenas uma classe poderia aumentar grandemente as chances de bugs aparecerem em correções ou modificações de qualquer um desses algoritmos. O padrão de projeto strategy sugere que todos os algoritmos centralizados nesta classe sejam separados em outras classes (também chamados de estratégias).

### Exemplo

Exemplo de uma possível aplicação deste padrão em nosso projeto:

<div style="display:flex; flex-direction:column; justify-content:center; ">
  <a href="{{ site.baseurl }}/assets/images/Diagrama-strategy.svg" data-toggle="lightbox" style="margin:0 auto;">
    <img src="{{ site.baseurl }}/assets/images/Diagrama-strategy.svg" class="img-fluid" />
  </a>
</div>

Implementação em typescript:

```typescript
interface produto{
    nome:string;
    preco:number;
    data:Date;
}

interface estrategia{
    order(arr: Array<produto>):Array<produto>;
}

interface produtos{
    arr:Array<produto>;
    stg:estrategia;
}

// criando estrategia que ordena por nome

class orderByName implements estrategia{

    order( arr: Array<produto> ){
        /*
            inserir aqui codigo para orderar nome
        */
        console.log('Ordenando pela propriedade NOME do objeto');
        return arr;
    }
}

// criando estrategia que ordena por preco

class orderByPrice implements estrategia{

    order( arr: Array<produto> ){
        /*
            inserir aqui codigo para orderar por preço
        */
        console.log('Ordenando pela propriedade PRECO do objeto');
        return arr;
    }
}

// criando estrategia que ordena por data

class orderByDate implements estrategia{

    order( arr: Array<produto> ){
        /*
            inserir aqui codigo para orderar por data
        */
        console.log('Ordenando pela propriedade DATA do objeto');
        return arr;
    }
}

// criando objeto que comporta lista de produtos

class produtos {
    constructor(arr:Array<produto>){
        this.arr = arr;
    }    

    defEstrategia(estrategia:estrategia){
        this.stg = estrategia;
    }

    orderWithStg(){
        const orderredArr = this.stg.order(this.arr)
        return orderredArr;
    }
}

// codigo exemplo da utilização

// Criando a lista de produtos manualmente
const listaProdutos = new produtos(
    [
        {
            nome : "Produto1",
            preco: 200.99,
            data: new Date(1995,11,17)
        },
        {
            nome : "Produto2",
            preco: 200.98,
            data: new Date(1995,12,18)
        },
        {
            nome : "Produto3",
            preco: 200.97,
            data: new Date(2005,5,5)
        },
        {
            nome : "Produto4",
            preco: 200.96,
            data: new Date(2021,1,7)
        }
    ]
);

// definindo lista de propriedades para faciltar no teste

const properties = ['nome', 'preco', 'data'];

//laço para passar por todas as propriedades acima, alterar a estrategia e utiliza-la.

for (let orderProperty of properties){

    switch(orderProperty){

        case 'nome':{
            listaProdutos.defEstrategia(new orderByName()); // definindo estrategia a ser utilizada
            break;
        }
        case 'preco':{
            listaProdutos.defEstrategia(new orderByPrice()); // definindo estrategia a ser utilizada
            break;
        }
        case 'data':{
            listaProdutos.defEstrategia(new orderByDate()); // definindo estrategia a ser utilizada
            break;
        }
        default:{
            console.log('ué');
        }
    }

    listaProdutos.orderWithStg(); // utilizando a estratégia que foi definida
}
```
O código acima gera a seguinte saída:

```bash
"Ordenando pela propriedade NOME do objeto" 
"Ordenando pela propriedade PRECO do objeto" 
"Ordenando pela propriedade DATA do objeto" 
```
Vantagens: 
- Reutilização de código
- Maior manutenibilidade do código;
- Maior dinamismo (possível mudar a estratégia em tempo de execução);
- Maior legibilidade do código.

Desvantagens:
- Podem existir casos em que fazer herança é mais simples.
- Aumento considerável no número de classes do projeto.



## Template Method

<hr/>

## Referências

Strategy. refactoring.guru, “[2015?]”. Disponível em: <https://refactoring.guru/pt-br/design-patterns/strategy>. Acesso em: 12, set 2021.

Estudo e Aplicação do Padrão de Projeto Strategy. DevMedia, “[2018?]”. Disponível em: <https://www.devmedia.com.br/estudo-e-aplicacao-do-padrao-de-projeto-strategy/25856>. Acesso em: 12, set 2021.

Padrão de Projeto: Strategy (Estratégia).thiengo, “[2018?]”. Disponível em: <https://www.thiengo.com.br/padrao-de-projeto-strategy-estrategia>
