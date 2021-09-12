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

<hr/>

## Decorator

<hr/>

## Referências
