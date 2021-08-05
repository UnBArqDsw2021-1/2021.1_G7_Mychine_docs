---
layout: default
title: Política de Contribuição
parent: Extras
nav_order: 1
---

Como Contribuir
{: .fs-9}

## Versionamento

|Versão | Data | Comentários | Autor(es) |
|-------|------|-------------|-----------|
|0.1|30/07/2021| Abertura do documento | Giovanna B Bottino |
|1.0|30/07/2021| Revisão | Igor Q Lima |

## Issues

Verifique se já não existe uma issue que trata do mesmo problema.
A issue deve ser clara no título e descrição.
Adicione labels que representam o tipo de artefato que deve ser desenvolvido.
As issues devem apresentar a estrutura segundo o template.

`<título da tarefa>`

## Branchs

As branchs devem ser criadas a partir da branch principal e corresponder a alguma das issues.
Devem ser nomeadas, sem acentos e underlines (_) ao invés de espaço seguindo a estrutura:

`<numero_da_issue>`_`<título simplificado da issue fonte>`

## Commits

Os commits devem ter títulos significativos.
Com a seguinte estrutura:

`<descrição pequena e concisa>`

Se o commit teve mais de um autor deve possuir co-autor.

```bash
$ git commit -m "<descrição pequena e concisa>.


Co-authored-by: name <name@example.com>
Co-authored-by: another-name <another-name@example.com>"
```

## Pull requests

O título e o comentário devem ser claros.
O pull request deve ser relacionado a alguma issue.
Adicione labels que representem o tipo de artefato.
Cada pull request deve possuir ao menos dois revisores.
Cada revisor deve comentar uma checklist com seus critérios de revisão e se foram aprovados.

`#<número_da_issue>` `<título da issue fonte>`.
