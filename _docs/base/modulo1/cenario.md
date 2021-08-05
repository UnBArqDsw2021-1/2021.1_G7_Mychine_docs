---
layout: default
title: Cenários
grand_parent: Desenho de Software (Base)
parent: Projeto Não Orientado a Abordagens Específicas
---

Cenários
{: .fs-9}

1. TOC
{:toc}

#### Versionamento
{: .no_toc}

| Versão | Data       | Comentários                   | Autor(es)                                      |
| ------ | ---------- | ----------------------------- | ---------------------------------------------- |
| 0.1    | 05/08/2021 | Abertura do documento de cenários   | Igor Lima e Pedro Henrique |
| 0.2    | 05/08/2021 | Criação dos cenários | Igor Lima e Pedro Henrique|
| 1.0    | 05/08/2021 | Revisão  | Matheus Gabriel |

### Introdução

É uma narrativa textual rica em detalhes contextual, de uma situação de uso da aplicação, envolvendo usuários, processos e dados reais ou potenciais. Cenários são poderosos, requerem menos tempo quando comparados a modelos e protótipos complexos.

### Template

{: .no_toc}

| Elemento      | Resposta                                        |
| ------------- | ----------------------------------------------- |
| **Objetivo**  | Objetivo do cenário                             |
| **Contexto**  | Os detalhes em que se ocorre o cenário          |
| **Atores**    | Atores envolvidos                               |
| **Recursos**  | Recursos necessários para se realizar o cenário |
| **Exceção**   | Problemas que podem ocorrer                     |
| **Episódios** | Etapas para se realizar a ação                  |

### C1 - Logar

| Elemento      | Resposta                       |
| ------------- | ------------------------------ |
| **Objetivo**  | Logar na conta do sistema      |
| **Contexto**  | Estar conectado na internet<br>Não estar logado em outra conta |
| **Atores**    | Usuário                        |
| **Recursos**  | Internet                       |
| **Exceção**   | -                              |
| **Episódios** | Acessa a aplicação<br>Clica em “Entrar” |

### C2 - Deslogar

| Elemento      | Resposta                       |
| ------------- | ------------------------------ |
| **Objetivo**  | Deslogar da conta do sistema   |
| **Contexto**  | Estar conectado na internet<br>Estar logado na aplicação |
| **Atores**    | Usuário                        |
| **Recursos**  | Internet                       |
| **Exceção**   | -                              |
| **Episódios** | Acessa a aplicação<br>Clica em “Sair” |

### C3 - Agendar produto

| Elemento      | Resposta                                                        |
| ------------- | --------------------------------------------------------------- |
| **Objetivo**  | Determinar a data de início e termino de um produto para alugar |
| **Contexto**  | Estar conectado na internet                                     |
| **Atores**    | Usuário                                                         |
| **Recursos**  | Internet                                                        |
| **Exceção**   | -                                                               |
| **Episódios** | Acessa um produto<br>Seleciona data de início e data término    |

### C4 - Alugar produto

| Elemento      | Resposta                       |
| ------------- | ------------------------------ |
| **Objetivo**  | Alugar produtos da aplicação   |
| **Contexto**  | Estar conectado na internet<br>Estar logado na aplicação |
| **Atores**    | Usuário                        |
| **Recursos**  | Internet                       |
| **Exceção**   | -                              |
| **Episódios** | Acessa a aplicação<br>Adicionar produtos ao carrinho.<br>Confirmar pedido. |

### C5 - Pesquisar produto

| Elemento      | Resposta                                                                     |
| ------------- | ------------------------------                                               |
| **Objetivo**  | Procurar por equipamentos para alugar.                                       |
| **Contexto**  | Possuir conexão com a internet.<br>Estar com a aplicação aberta na homepage. |
| **Atores**    | Usuário                                                                      |
| **Recursos**  | Acesso a internet.                                                           |
| **Exceção**   | Pesquisa sem resultados.                                                     |
| **Episódios** | O usuário abre a aplicação.<br>Seleciona a barra de pesquisa.<br>Digita o nome do produto a ser procurado.<br>Pressiona enter.   |

### C6 - Recuperar senha

| Elemento      | Resposta                                                                     |
| ------------- | ------------------------------                                               |
| **Objetivo**  | Recuperar a senha da aplicação.                       |
| **Contexto**  | Possuir conexão com a internet.<br>Possuir cadastro na aplicação. |
| **Atores**    | Usuário                                                                      |
| **Recursos**  | Acesso a internet.<br>Cadastro na aplicação.<br>Um email valido.           |
| **Exceção**   | Nova senha ser igual a anterior.                                                     |
| **Episódios** | Clicar em "Esqueci minha senha".<br>Escrever o email cadastrado na aplicação.<br>Acessar o link enviado no email de recuperação.<br>Cadastrar uma nova senha.   |

## Referências

SAMPAIO. Júlio. Scenario inspections. Requirements Eng (2005). Disponível em: <http://www-di.inf.puc-rio.br/~julio/Slct-pub/req-insp.pdf>. Acesso em: 05 de agosto de 2021.
