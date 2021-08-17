---
layout: default
title: Priorização
grand_parent: Módulo Desenho de Software (Modelagem)
parent: Módulo Modelagem Ágil
nav_order: 2
---

Priorização
{: .fs-9}

#### Versionamento

| Versão | Data       | Comentários                   | Autor(es)                                      |
| ------ | ---------- | ----------------------------- | ---------------------------------------------- |
| 0.1    | 16/08/2021 | Abertura do documento Níveis de abstração    | Matheus Gabriel |
| 0.2    | 16/08/2021 | Modificando ordenação no sumário    | Matheus Gabriel e Eduardo Picolo |
| 0.3    | 17/08/2021 | Criação do MoSCoW    | Matheus Gabriel e Eduardo Picolo |
| 0.4    | 17/08/2021 | Criação do First Things First   | Matheus Gabriel e Eduardo Picolo |

## MoSCoW

Durante a elicitação vários requisitos são levantados, para ordenar o desenvolvimento, gerar valor 
desde o início e otimizar recursos, é necessário priorizar os requisitos. Para isso usaremos a técnica MosCoW.

A técnica é muito simples: para cada requisito ou item do seu backlog, você deverá atribuir uma 
das quatro palavras: Must (Tem que ter), Should (Deveria ter), Could (Poderia ter) ou Would (Interessante ter).

Resultados obtidos com o MoSCoW:

| ID do Requisito | Requisito | MoSCoW |
| RF1 | A aplicação deve permitir que o usuário efetue login mediante suas credenciais. | Must |
| RF2 | A aplicação deve permitir que o usuário efetue o logout de sua conta. | Would |
| RF3 | A aplicação deve permitir que o usuário possa mudar sua senha. | Should |
| RF4 | A aplicação deve permitir que o usuário possa buscar seu produto. | Must |
| RF5 | A aplicação deve permitir que o usuário marque o agendamento da sua locação no sistema. | Must |
| RF6 | A aplicação deve permitir que o usuário renove seu agendamento se possivel de acordo com a agenda do produto. | Could |
| RF7 | A aplicação deve permitir o cadastro de produtos por parte da empresa. | Must |
| RF8 | A aplicação deve permitir que o usuário adicione vários produtos ao seu carrinho. | Could |
| RF9 | A aplicação deve permitir que o usuário visualize a prévia do valor de seu aluguel. | Would |
| RF10 | A aplicação deve permitir que o usuário finalize seu agendamento. | Must |
| RF11 | A aplicação deve permitir o controle do estoque por parte da empresa. | Must |

## First Things First

O método First Things First permite quantificar os requisitos baseado na estimativa de beneficio, penalidade, custo e risco de cada item.

A técnica consiste em: para cada requisito ou item do seu backlog, deverá ser atribuido, em uma escala de 
1 a 9, o beneficio relativo ao cliente, a penalidade que a falta da funcionalidade causa ao cliente, 
o custo estimado de implementação e o risco ou dificuldade de implementação.

Foram usadas as Personas e as definições obtidas com o MoSCoW para definir as prioridades usadas na Matriz de prioridades.

#### Matriz de prioridades
<a href="{{ site.baseurl }}/assets/images/FIFO.jpg" data-toggle="lightbox">
  <img src="{{ site.baseurl }}/assets/images/FIFO.jpg" class="img-fluid" />
</a>

## Referências

C. Flavio. Técnica MoSCoW na Priorização dos Requisitos. Site Campus. 21 de jun. de 2018. Disponível aqui. Acesso em 17 de Agosto de 2021.

Karl E. Wiegers. First Things First: Prioritizing Requirements. Disponível aqui. Acesso em 17 de Agosto de 2021.
