---
layout: default
title: GRASPs Básicos
grand_parent: Desenho de Software (Padrões de Projeto)
parent: Módulo Padrões de Projeto GRASPs
nav_order: 1
---

GRASPs Básicos
{: .fs-9}

<br>
1. TOC
{:toc}

#### Versionamento
{: .no_toc }

| Versão | Data       | Comentários                        | Autor(es)          |
| ------ | ---------- | ---------------------------------- | ------------------ |
| 0.1    | 15/09/2021 | Abertura do documento              | Igor Q Lima        |
| 0.2    | 15/09/2021 | Adiciona introdução GRASP          | Giovanna B Bottino |
| 0.3    | 15/09/2021 | Adiciona introdução GRASPs Básicos | Giovanna B Bottino |
| 0.4    | 15/09/2021 | Adiciona GRASP Criador             | Igor Q Lima        |
| 0.4.1  | 15/09/2021 | Adiciona GRASP Especialista        | Igor Q Lima        |
| 0.4.2  | 15/09/2021 | Adiciona GRASP Alta Coesão         | Igor Q Lima        |
| 0.4.3  | 15/09/2021 | Adiciona GRASP Baixo acoplamento   | Igor Q Lima        |
| 0.4.4  | 15/09/2021 | Adiciona GRASP Controlador         | Igor Q Lima        |
| 0.5    | 18/09/2021 | Revisão                            | Roberto M Nóbrega  |

## Introdução

General Responsability Assignment Software Patterns (GRASP) são diretrizes para atribuição de responsabilidade a classes e objetos em projetos orientados a objetos. É um padrão de projeto baseado em princípios e boas praticas usadas durante a criação do software, que descreve o problema e a solução adotada [[3]](#ref3).

Os Padrões de Software para Atribuição de Responsabilidade Geral utilizam princípios baseados na Orientação a Objetos. Isso para tornar o código mais flexível, de facil manutenção e a extensibilidade [[2]](#ref2).

Os padrões estão sendo amplamente utilizados, a seguir pode encontrar alguns que foram documentados aqui de forma representativa.

### GRASPs Básicos
{: .no_toc }

Como GRASP exploram principios fundamentais de orientação a objetos, 5 padrões fundamentais e 4 padrões avançados, ele pode ser dividido em GRASPs básicos e avançados [[2]](#ref2). Aqui iremos apontar o 5 padrões básicos:

- Criador
- Especialista
- Alta Coesão
- Baixo acoplamento
- Controlador

Como alguns padrões GRASP ocorrem na implementação de padrões GoF recomendamos a leitura dos podrões GoF.

## Criador

<br/>

**Problema:** Quem deve ser responsável por criar uma nova instância de uma
classe [[1]](#ref1)?

**Solução:** Dê a responsabilidade de criação para B, se uma ou mais das situações abaixo for válida [[1]](#ref1):

- B contém A
- B registra A
- B usa A
- B tem os dados necessários para a inicialização de A

**Justificativa**:

**Utilização no projeto**:

Podemos notar o uso da solução na classe Cliente agrega instâncias de Address.

<a href="{{ site.baseurl }}/assets/images/diagramaClasses/diagramaDeClasseV2.svg" data-toggle="lightbox">
    <img src="{{ site.baseurl }}/assets/images/diagramaClasses/diagramaDeClasseV2.svg">
</a>

##### Feito por Igor Q, Matheus G, Giovanna B
{: .no_toc }

<hr/>

## Especialista

<br/>

**Problema:** Precisa-se de um princípio geral para atribuir responsabilidades a objetos [[1]](#ref1).

Essas Responsabilidades podem ser descritas como essas obrigações [[1]](#ref1):

- Obrigações de fazer algo [[5]](#ref5)
  - Fazer algo a si mesmo [[5]](#ref5)
  - Iniciar ações em outros objetos [[5]](#ref5)
  - Controlar ou coordenar atividades em outros objetos [[5]](#ref5)
  
- Obrigações de conhecer algo [[5]](#ref5)
  - Conhecer dados encapsulados [[5]](#ref5)
  - Conhecer objetos relacionados [[5]](#ref5)
  - Conhecer coisas que se pode calcular [[5]](#ref5)

**Solução:** Atribuir uma responsabilidade de especialista a classe que possui a informação necessária para cumpri-la [[1]](#ref1).

**Justificativa**: Escolher como distribuir as responsabilidades entre as classes é fundamental para um projeto. A má distribuição produz componentes frágeis e difíceis de entender, manter, reusar e estender [[1]](#ref1).

**Utilização no projeto**:

Podemos notar essas soluções no nosso Diagrama de Classe onde possui experts parciais.

<a href="{{ site.baseurl }}/assets/images/diagramaClasses/diagramaDeClasseV2.svg" data-toggle="lightbox">
    <img src="{{ site.baseurl }}/assets/images/diagramaClasses/diagramaDeClasseV2.svg">
</a>

##### Feito por Igor Q, Matheus G, Giovanna B
{: .no_toc }

<hr/>

## Alta Coesão

<br/>

**Problema:** Como manter os objetos focados, compreensíveis, gerenciáveis e, em consequência, com Baixo Acoplamento [[1]](#ref1)?

**Solução:** Atribua responsabilidades de modo que a coesão da classe permaneça alta. Use os critérios [[1]](#ref1):

- A é coeso se tem apenas métodos relacionadas ao A [[1]](#ref1).
- A é coeso se tem um número relativamente pequeno de métodos [[1]](#ref1).

**Justificativa**: Alta coesão evita classes que realizam muitas tarefas não relacionadas, tornando mais difíceis de entender, de manter e de reutilizar.

**Utilização no projeto**:

Podemos notar essas soluções no nosso Diagrama de Classe.

<a href="{{ site.baseurl }}/assets/images/diagramaClasses/diagramaDeClasseV2.svg" data-toggle="lightbox">
    <img src="{{ site.baseurl }}/assets/images/diagramaClasses/diagramaDeClasseV2.svg">
</a>

##### Feito por Igor Q, Matheus G, Giovanna B
{: .no_toc }

<hr/>

## Baixo acoplamento

<br/>

**Problema:** Como prover baixa dependência entre classes, reduzir o impacto de mudanças e obter alta reutilização [[1]](#ref1)?

**Solução:** Atribua as responsabilidades de modo que o acoplamento entre classes permaneça baixo. Use este princípio para avaliar alternativas [[1]](#ref1).

- Medida de quanto um elemento está conectado a, ou depende de outros elementos [[1]](#ref1).
- Uma classe com acoplamento forte depende de muitas outras classes: tais classes podem ser indesejáveis [[1]](#ref1).
- O acoplamento está associado à coesão: maior coesão, menor acoplamento e vice-versa [[1]](#ref1).

**Justificativa**: Juntamente com a Alta coesão são essenciais para uma arquitetura madura e sustentável [[4]](#ref4).

**Utilização no projeto**:

Podemos notar essas soluções no nosso Diagrama de Classe.

<a href="{{ site.baseurl }}/assets/images/diagramaClasses/diagramaDeClasseV2.svg" data-toggle="lightbox">
    <img src="{{ site.baseurl }}/assets/images/diagramaClasses/diagramaDeClasseV2.svg">
</a>

##### Feito por Igor Q, Matheus G, Giovanna B
{: .no_toc }

<hr/>

## Controlador

<br/>

**Problema:** Quem deve ser o responsável por lidar com um evento de uma interface de entrada [[1]](#ref1)?

**Solução:** Atribuir a responsabilidade de receber ou lidar com um evento do sistema para uma classe que representa todo o sistema (controlador de fachada – front controller), um subsistema e um cenário de casos de uso (controlador de caso de uso ou sessão) [[1]](#ref1).

**Justificativa**: Padrão bastante utilizado no MVC (Model-View-Controller, em português: Arquitetura Modelo-Visão-Controle), padrão de projeto que também estamos utilizando [[6]](#ref6).

**Utilização no projeto**:

1. **Front controller:** Em nosso diagrama de sequência 'Buscar Produto V1' podemos notar como exemplo o product controller.

    <a href="{{ site.baseurl }}/assets/images/sequencia/visualizar.png" data-toggle="lightbox">
    <img src="{{ site.baseurl }}/assets/images/sequencia/visualizar.png" class="img-fluid" />
    </a>

##### Feito por: Giovanna B, Matheus Gabriel, Igor Q. Lima, Samuel Nogueira, Pedro e Eduardo Picolo
{: .no_toc }

2. **Controlador de caso de uso ou sessão:** Nesse diagrama de sequência 'Realizar Login/Logout V1' podemos notar como exemplo o login controller.

    <a href="{{ site.baseurl }}/assets/images/sequencia/login_logout.png" data-toggle="lightbox">
    <img src="{{ site.baseurl }}/assets/images/sequencia/login_logout.png" class="img-fluid" />
    </a>

##### Feito por: Kess Jhones
{: .no_toc }

<hr/>

## Referências

[1] BACAlÁ. Sílvio. **Página do Professor Sílvio Bacalá Júnior:** Padrões GRASP. Uberlândia, 18 ago. 2012. Disponível em: <http://www.facom.ufu.br/~bacala/ESOF/05a-Padr%C3%B5es%20GRASP.pdf>. Acesso em 13 de Setembro de 2021.
{: #ref1}

[2] ROCHA, Helder. Padrões Design de com aplicações em Java, 2005. Disponível em: [<https://www.inf.ufpr.br/andrey/ci163/Design_Patterns.pdf>](https://www.inf.ufpr.br/andrey/ci163/Design_Patterns.pdf). Acesso em: 13 de setembro de 2021.
{: #ref2}

[3] SERRANO, Milene. GRASP Complementar, 2021. Material apresentado na Disciplina de Arquitetura e Desenho de Software do curso de engenharia de software da UnB, FGA. Acesso em: 13 de setembro de 2021.
{: #ref3}

[4] Entendendo Coesão e Acoplamento. DEVMEDIA. Disponível em: <https://www.devmedia.com.br/entendendo-coesao-e-acoplamento/18538>. Acesso em: 13 setembro 2021.
{: #ref4}

[5] Expert (padrão de projeto de software). Wikipédia: a enciclopédia livre. Disponível em: <https://pt.wikipedia.org/wiki/Expert_(padr%C3%A3o_de_projeto_de_software)>. Acesso em: 13 setembro 2021.
{: #ref5}

[6] GRASP (padrão orientado a objetos). Wikipédia: a enciclopédia livre. Disponível em: <https://pt.wikipedia.org/wiki/GRASP_(padr%C3%A3o_orientado_a_objetos)>. Acesso em: 13 setembro 2021.
{: #ref6}

Padrão para atribuir responsabilidades: Expert. Disciplinas ministradas pelo Professor Jacques Sauvé. Disponível em: <http://www.dsc.ufcg.edu.br/~jacques/cursos/map/html/pat/expert.htm>. Acesso em: 13 setembro 2021.
