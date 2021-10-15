---
layout: default
title: Reutilização de Software
grand_parent: Arquitetura de Software & Reutilização
parent: Módulo Reutilização de Software
nav_order: 1
---

Reutilização de Software
{: .fs-9}

<br>
1. TOC
{:toc}

#### Versionamento

|Versão | Data     | Comentários                        | Autor(es)                               |
|-------|----------|------------------------------------|-----------------------------------------|
|0.1    |03/10/2021| Abertura do documento Reutilização | Giovanna B Bottino                      |
|0.2    |06/10/2021| Adiciona introdução                | Samuel Nogueira e    Giovanna B Bottino |
|0.3    |06/10/2021| Adiciona Framework                 | Samuel Nogueira e    Giovanna B Bottino |
|0.3.1  |06/10/2021| Adiciona bibliotecas               | Samuel Nogueira e    Giovanna B Bottino |
|0.3.2  |06/10/2021| Adiciona imagens exemplo framework e bibliotecas | Samuel Nogueira e    Giovanna B Bottino |
|0.4    |06/10/2021| Reorganiza documento               | Giovanna B Bottino |
|0.5    |07/10/2021| Adiciona Object–relational mapping | Matheus Gabriel e Giovanna B Bottino |

## Reutilização de Software

A Reutilização de software é utilizada durante o desenvolvimento para reutilizar componentes, objetos, funções, algoritmos, bibliotecas e configurações. Essa abordagem visa agilizar e deixar mais eficiente o desenvolvimento. Reusar significa poder reutilizar partes, ou o todo, de um sistema em um novo software [[1]](#ref1).

A seguir iremos apresentar como utilizados da reutilização.

## Framework

#### Next.js
Next.js é um framework para React, oferece a melhor experiência de desenvolvedor com todos os recursos para produção: renderização híbrida estática e de servidor, suporte a TypeScript, agrupamento inteligente, pré-busca de rota sem precisar de nenhuma configuração necessária. Uma estrutura da web de desenvolvimento front-end React de código aberto [[3]](#ref3).

Pode-se observar a utilização através do componente Button. 

<a href="{{ site.baseurl }}/assets/images/reutilizavies/button.png" data-toggle="lightbox">
    <img src="{{ site.baseurl }}/assets/images/reutilizavies/button.png" class="img-fluid" />
</a>

## Bibliotecas

### React
React é uma biblioteca front-end criada em JavaScript, gratuita e de código aberto. É usada para construir interfaces de usuário, pode ser usada como base no desenvolvimento de aplicativos de página única ou móveis [[2]](#ref2).

### Axios

Axios é um cliente HTTP baseado em Promises para fazer requisições. Essa biblioteca intercepta requisições e respostas, cancela requisições, transforma os dados em JSON e possui uma configuração reutilizável. Foi usada para a comunicação [[4]](#ref4).

Pode-se observar a utilização a seguir. 

<a href="{{ site.baseurl }}/assets/images/reutilizavies/axios.png" data-toggle="lightbox">
    <img src="{{ site.baseurl }}/assets/images/reutilizavies/axios.png" class="img-fluid" />
</a>

## Object–relational mapping

### Prisma 

O Prisma é um Object–relational mapping que ajuda desenvolvedores a construir com um kit de ferramentas de banco de dados de código aberto. Possui uma maneira declarativa de definir os modelos de dados do seu aplicativo e suas relações [[5]](#ref5).

Pode-se observar a utilização a seguir. 

<a href="{{ site.baseurl }}/assets/images/reutilizavies/prisma.png" data-toggle="lightbox">
    <img src="{{ site.baseurl }}/assets/images/reutilizavies/prisma.png" class="img-fluid" />
</a>

## Referências

[1] Reutilização de Software - Revista Engenharia de Software Magazine 39. DEVMEDIA. Disponível em: <https://www.devmedia.com.br/reutilizacao-de-software-revista-engenharia-de-software-magazine-39/21956>. Acesso em: 06 de outubro de 2021.
{: #ref1}

[2] React WIKIPEDIA. Disponível em: <https://en.wikipedia.org/wiki/React_(JavaScript_library)#:~:text=React%20(also%20known%20as%20React,single%2Dpage%20or%20mobile%20applications.>. Acesso em: 06 de outubro de 2021.
{: #ref1}

[3] NEXT, The React Framework for Production. Disponível em: <https://nextjs.org/> . Acesso em: 06 de outubro de 2021.
{: #ref3}

[4] AXIOS, Getting Started. Disponível em: <https://axios-http.com/docs/intro> . Acesso em: 06 de outubro de 2021.
{: #ref4}

[5] PRISMA, Next-generation Node.js and TypeScript ORM. Disponível em: <https://www.prisma.io/> . Acesso em: 07 de outubro de 2021.
{: #ref5}