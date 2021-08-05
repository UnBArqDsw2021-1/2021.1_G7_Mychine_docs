---
layout: default
title: Léxico
grand_parent: Desenho de Software (Base)
parent: Projeto Não Orientado a Abordagens Específicas
---

Léxico
{: .fs-9}

1. TOC
{:toc}


| Versão | Data       | Comentários                   | Autor(es)                                      |
| ------ | ---------- | ----------------------------- | ---------------------------------------------- |
| 0.1    | 05/08/2021 | Abertura do documento de léxicos   | Igor Lima e Pedro Henrique |
| 0.2    | 05/08/2021 | Criação dos léxicos | Igor Lima e Pedro Henrique |

### Introdução

Léxicos consistem em símbolos compostos por palavras ou frases que representem termos particulares de um determinado domínio, podendo ser de quatro tipos: objeto, sujeito, verbo e estado. Têm como objetivo expressar a linguagem do universo de um problema sem levar em consideração o problema, e sim o seu contexto.

### Template
{: .no_toc}

| Classificação       | Noção     | Impacto   | Sinônimo(s) |
| ------------------- | --------- | --------- | ----------- |
| Objeto/Estado/Verbo | Denotação | Conotação | Sinônimo(s) |

### L1 - Usuário

| Classificação       | Noção     | Impacto   | Sinônimo(s) |
| ------------------- | --------- | --------- | ----------- |
| Objeto | Usuário identificado | Permite que pessoas possam alugar produtos na aplicação | Cliente, Locatário |

### L2 - Produto

| Classificação       | Noção     | Impacto   | Sinônimo(s) |
| ------------------- | --------- | --------- | ----------- |
| Objeto | Ferramentas e maquinários disponíveis para ser alugada na aplicação | Usuário poderá encontrar produtos para alugar | Maquinário, Ferramentas |

### L3 - Logar

| Classificação       | Noção     | Impacto   | Sinônimo(s) |
| ------------------- | --------- | --------- | ----------- |
| Verbo | Ação realizada pelo usuário, que consiste em acessar uma conta de usuário previamente cadastrada | Possibilita que o usuário efetue login em sua conta para realizar alugueis de produtos | Entrar, Sign in |

### L4 - Construção

| Classificação       | Noção     | Impacto   | Sinônimo(s) |
| ------------------- | --------- | --------- | ----------- |
| Estado | Ambiente onde destina os produtos | A aplicação conterá produtos relacionados ao ambiente de obras | Obra, Reforma |

### L5 - Categoria

| Classificação       | Noção     | Impacto   | Sinônimo(s) |
| ------------------- | --------- | --------- | ----------- |
| Objeto | Palavra(s) que definem o produto | Usuário poderá filtrar sua pesquisa por categoria | Etiqueta |

### L6 - Alugar

| Classificação       | Noção     | Impacto   | Sinônimo(s) |
| ------------------- | --------- | --------- | ----------- |
| Verbo | Ação realizada pelo usuário, que consiste em agendar um produto cadastrado na aplicação | Usuário poderá alugar produtos | - |

### L7 - Agendar

| Classificação       | Noção     | Impacto   | Sinônimo(s) |
| ------------------- | --------- | --------- | ----------- |
| Verbo | Ação realizada pelo usuário, que consiste em escolher um período de tempo que utilizará um produto | Usuário poderá alugar produtos por tempo determinado | - |

### L8 - Pesquisar

| Classificação       | Noção     | Impacto   | Sinônimo(s) |
| ------------------- | --------- | --------- | ----------- |
| Verbo | Ação realizada pelo usuário, que consiste em procurar produtos | Usuário poderá encontrar produto com mais facilidade | Buscar, Procurar |

### L9 - Administrator

| Classificação       | Noção     | Impacto   | Sinônimo(s) |
| ------------------- | --------- | --------- | ----------- |
| Objeto | Conta de usuário com privilégios | Poderar manter os produtos | Gerente |

### L10 - Carrinho

| Classificação       | Noção     | Impacto   | Sinônimo(s) |
| ------------------- | --------- | --------- | ----------- |
| Objeto | Mantem uma lista de produtos para serem alugados | Usuário poderá alugar mais de um produto, após confirmação | - |

### L11 - Email

| Classificação       | Noção     | Impacto   | Sinônimo(s) |
| ------------------- | --------- | --------- | ----------- |
| Objeto | Serviço de correio eletronico | Vínculo de cadastro da conta de usuário | Correio eletronico, Gmail, Hotmail, etc... |

### L12 - Conta de usuário

| Classificação       | Noção     | Impacto   | Sinônimo(s) |
| ------------------- | --------- | --------- | ----------- |
| Objeto | Meio de utilizar serviços da aplicação | Permite acesso à funcionalidades da aplicação | Cadastro, Registro|

### L13 - Deslogar

| Classificação       | Noção     | Impacto   | Sinônimo(s) |
| ------------------- | --------- | --------- | ----------- |
| Verbo | Ação realizada pelo usuário, que consiste em se desconectar de sua conta de usuário | Perda de funcionalidades | Sair, Logout  |

### L14 - Cadastrar

| Classificação       | Noção     | Impacto   | Sinônimo(s) |
| ------------------- | --------- | --------- | ----------- |
| Verbo | Ação realizada pelo usuário, que consiste em se criar uma conta de usuário na aplicação | Ganho de funcionalidades e recursos | Registro, Sign up  |

## Referências

SAMPAIO. Júlio. Scenario inspections. Requirements Eng (2005). Disponível em: <http://www-di.inf.puc-rio.br/~julio/Slct-pub/req-insp.pdf>. Acesso em: 05 de agosto de 2021.