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
|        |      |             |           |

## Observer

<hr/>

## Strategy

<hr/>

## Template Method

### Conceito

Tem como intenção definir o esqueleto de um algoritmo em uma operação, postergando alguns passos para as subclasses. Permite que as subclasses redefinam certos passos de um algorítmo sem muda a estrutura do mesmo.

### Aplicabilidade

O padrão pode ser aplicado:
* para implementar partes invariantes de um algoritmo uma só vez e deixar para as subclasses a implementação do comportamento que pode variar.
* quando o comportamento comum entre subclasses deve ser fatorado e concentrado numa classes comum para evitar a duplicação de código.
* para controlar extensões de subclasses. sendo possível definir um **Template Method** que chama operações gancho(Hooks) em pontos específicos, desta forma permitindo extensões somente nesses pontos.

### Participantes

1. AbstractClass - Define operações primitivas abstratas que as subclasses concretas definem para implementar passos de um algoritmo. Implementa um Template Method que define o esqueleto de um algoritmo.
2. ConcreteClass - Implementa as operações primitivas para executarem os passos específicos do algorítmo da subclasse.


### Modelagem


### Código Exemplo

```typescript
```

<hr/>

## Referências
