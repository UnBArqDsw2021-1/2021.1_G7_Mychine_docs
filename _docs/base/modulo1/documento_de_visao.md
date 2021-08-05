---
layout: default
title: Documento de visão
grand_parent: Desenho de Software (Base)
parent: Projeto Não Orientado a Abordagens Específicas
nav_order: 9
---

Documento de visão
{: .fs-9}

## Versionamento

{: .no_toc}

| Versão | Data       | Comentários                   | Autor(es)                                      |
| ------ | ---------- | ----------------------------- | ---------------------------------------------- |
| 0.1    | 05/08/2021 | Abertura do documento de visão | Kess Jhones |
| 0.2    | 05/08/2021 | Adicionando documento de visão | Kess Jhones |
| 1.0    | 05/08/2021 | Revisão | Eduardo Picolo e Ceilandia |

## 1. Introdução

### 1.1 Finalidade: 

Este documento tem como finalidade manter uma visão comum para os envolvidos no projeto, Mychine, expondo as ideias necessárias para seu desenvolvimento.

### 1.2 Escopo:

Conterá nesse documento os elementos necessários para a elaboração da aplicação, de forma que que possam ser compreendidos sem o total conhecimento dos termos técnicos utilizados por desenvolvedores.

### 1.3 Visão Geral:

Produzido com base no processo RUP (Rational Unified Process), este documento é organizado com as ideias, recursos, descrição e posicionamento do produto. Apresentando uma visão geral do produto, seus requisitos e a relação com os envolvidos e usuários do produto.

## 2. Posicionamento

### 2.1 Oportunidade de Negócios:
A escolhas dos equipamentos certos na contrução civil é fundamental para a otimização das atividades, assim a escolha dos equipamentos deve visar a qualidade, suporte técnico e agilidade para manter a eficácia do projeto. Porém adquirir uma rede de maquinários pode está fora da realidade financeira do executor da obra e nesses casos o aluguel de equipamentos pode ser a melhor opção para a empreitada. 


### 2.2: Relato de Problema:
O aluguel de equipamentos para construção civil é oferecido por poucas empresas e a maioria realiza todo o procedimento de forma presencial, sendo necessário o contato por telefone ou rede social para fazer orçamentos e verificar disponibilidade do produto. Assim o Mychine visa descomplicar parte desse serviço, oferecendo agendamento de aluguel e orçamento, de um ou vários equipamentos, diretamente na plataforma de forma pratica.



## 3. Descrição dos Envolvidos e dos Usuários

### 3.1 Resumo  dos Envolvidos

Nome | Descrição | Responsabilidade
|:---|:---|:---|
Equipe de Desenvolvimento de Projeto | A equipe 7 da disciplina de Arquitetura e Desenho de Software do semestre de 2021/1. | Planejar e realizar o desenvolvimento, implantação e testes do produto.
Clientes | Empresa de aluguel de máquinas para construção civil | Informar os requisitos necessários , expor os erros, além de acompanhar o progresso da aplicação e validá-la

### 3.2 Resumo dos Usuários

|Nome| Descrição|
|:---|:---|
|Administrador| Responsável por gerir as máquinas a serem alugadas. |
|Locador| Empresa ou pessoa que realiza o aluguel de maquinário de construção civil.|

### 3.3 Ambiente do Usuário:
Será necessário ter acesso a um dispositivo com acesso à internet, com algum navegador como, por exemplo, Chrome, Firefox ou Safari.

### 3.4 Equipe de Desenvolvimento e Gestão do Projeto

|:---:|:---:|
| **Representantes** | Grupo 07 da disciplina Arquitetura e Desenho de Software|
| **Descrição** |Desenvolvedores e gestores do projeto |
| **Tipo** | Discentes da disciplina Arquitetura e Desenho de Software|
| **Critérios de Sucesso** | Realizar o que for proposto, cumprindo os prazos de entrega e mantendo a qualidade do produto.|
| **Envolvimento** | Alto |
| **Comentários ou Problemas** |Impossibilidade de se reunirem presencialmente.|

### 3.5 Perfil do Usuário

#### 3.5.1. Administrador

|:---:|:---:|
| **Representantes** | Funcionários da empresa|
| **Descrição** | Responsável por fazer o gerenciamento dos equipamentos disponíveis para aluguel|
| **Tipo** | - |
| **Critérios de Sucesso** | Organizar com facilidade o aluguel das máquinas|
| **Envolvimento** | Usuário especial do sistema|
| **Comentários ou Problemas** |-|

#### 3.5.2 Locatário

|:---:|:---:|
| **Representantes** | Pessoas ou empresas da construção civil |
| **Descrição** | Pessoas interessadas em alugar equipamentos para a construção civil|
| **Tipo** | - |
| **Critérios de Sucesso** | Conseguir alugar maquinário de forma fácil e acessível |
| **Envolvimento** | Usuário final do sistema |
| **Comentários ou Problemas** | Contato final para entrega|

### 3.6 Alternativas e concorrência

#### 3.6.1 Casa do Construtor

Rede de franquias focada em aluguel de equipamentos para construção civil, é possível visualizar os equipamentos e fazer o pedido de orçamento diretamente no site.

<a href="{{ site.baseurl }}/assets/images/casa-do-construtor.png" data-toggle="lightbox">
  <img src="{{ site.baseurl }}/assets/images/casa-do-construtor.png" class="img-fluid" />
</a>

## 4. Visão Geral do Produto

### 4.1 Perspectiva do Produto:
Ser uma plataforma de que facilite o aluguel de equipamentos para construção civil, tendo como principal diferencial o gerenciamento da agenda dos equipamentos diretamente na plataforma.

### 4.2 Resumo das Capacidades:

Benefícios para o cliente   | Recurso de suporte
:---: | :---:
Facilitar o aluguel do equipamento | A plataforma apresenta um  sistema exclusivo de chat, para que aprendizes e mentores possam se ajudar.
Gerenciamento dos equipamentos | Tutorial em etapas e com exercícios para prática e fixação.

## 5. Recursos

**Recursos** | **Descrição dos Recursos**
:---: | :---|
Cadastrar Usuário | Os usuários serão cadastrados na plataforma, para que possam alugar e fazer o acompanhamento dos seus alugueis.|
Carrinho | Os usuários poderão colocar um ou mais equipamentos em seu carrinho, e obter uma prévia do valor do aluguel.|
Agendamento | O usuário poderá agendar a locação do equipamento e realizar a renovação, quando possível.|
Gerenciamento | O administrador realizara a gestão do estoque, adicionando, retirando e verificando o agendamento das máquinas|


## 6. Restrições
- O projeto deverá ser desenvolvido ao decorrer da matéria de Arquitetura e Desenho de Software, da Faculdade do Gama, Universidade de Brasília, e o mesmo deve ser produzido pelos alunos(as) designados(as).
- O acesso á internet é obrigatório para o uso da plataforma.
- O cadastro é obrigatório para a locação de equipamento.
- Ser capaz de rodar nos principais navegadores.