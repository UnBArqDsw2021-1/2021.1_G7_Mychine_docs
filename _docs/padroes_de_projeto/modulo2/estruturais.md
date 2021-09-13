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

| Versão | Data | Comentários | Autor(es) |
| ------ | ---- | ----------- | --------- |
|0.1     |09/09/2021| Abertura do documento| Igor Lima, Samuel Nogueira, Matheus Rodrigues e Roberto Nóbrega|
|0.2     |10/09/2021| Adicionando o Adapter | Matheus Gabriel|
|1.0     |10/09/2021| Revisão | Pedro Henrique|

## Adapter

### Conceito

Se trata de um padrão de projeto que auxilia na comunicação entre interfaces incompatíveis entre si, de maneira que possibilita que essa interação ocorra por meio de uma classe adaptadora.

Uma analogia frequentemente feita é a com o adaptador de tomada que possibilita a interação entre duas interfaces que são incompatíveis entre si.

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
    const formatedDate = new Intl.DateTimeFormat(
      'pt-BR',
      formatMap[format] as Intl.DateTimeFormatOptions,
    ).format(new Date(date));

    return formatedDate;
  } catch (error) {
    return '-';
  }
};

export default dateAdapter;
```

<hr/>

## Composite

### Conceito

O padrão Composite é um padrão estrutural de objetos que tem como intenção comportobjetos em estruturas de árvore para representarem hierarquias partes-todo. Permitindo aos clientes tratarem de maneira uniforme objetos individuais e composições de objetos.

### aplicabilidade

Deve ser usado quando:
* quiser representar hierarquias partes-todo de objetos.
* quiser que os clientes sejam capazes de ignorar a diferença entre composições de objetos e objetos individuais. Todos os objetos na estrutura composta serão tratados de maneira uniforme.

### Participantes
1. Component - Declara e implementa o comportamento padrão para os objetos na composição, fornecendo uma interface para acessar e gerenciar os seus componentes-filhos.
2. Leaf - representa objetos-folha, as quais não possuem filhos.
3. Composite - define o comportamento para componentes que têm filhos, além de armazenar os componentes filhos.
4. Client - O responsável por manipular objetos na composição atravez da interface Component.

### Modelagem



### Código Exemplo

```typescript
```

<hr/>

## Decorator

<hr/>

## Referências
