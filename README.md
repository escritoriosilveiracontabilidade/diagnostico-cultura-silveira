# Diagnóstico de Cultura Organizacional — Layout (v2)

Este pacote contém um arquivo **index.html** pronto para publicar (Vercel, GitHub Pages, Netlify ou pasta local).

## O que mudou
- 8 perguntas atualizadas
- Layout moderno com azul escuro + dourado (Silveira)
- Classificação automática (Alta, Média, Baixa) — **somente texto**, sem exibir contagem de "Sim"
- Botão de WhatsApp no final
- Envio para Google Apps Script (aba **Respostas**)

## Como apontar para SUA URL do Apps Script
1. Abra `index.html` e procure pela seção **CONFIGURAR AQUI A URL DO APP SCRIPT**.
2. Substitua o valor de `ENDPOINT_URL` pela **mesma URL** da implantação Web App que você já usa (a do seu print).

```js
const ENDPOINT_URL = "https://script.google.com/macros/s/SEU_ID/exec";
```

> Dica: após substituir, salve e publique o arquivo. Não é necessário alterar nada no restante do HTML.

## Publicação
- **Vercel**: arraste o projeto ou selecione o diretório ao criar o projeto. Ele já tem apenas um `index.html`.
- **GitHub Pages**: crie um repositório e envie o `index.html`. Ative Pages na branch principal.
- **Local**: abra o arquivo `index.html` no navegador (duplo clique).

## Suporte
Se quiser que eu integre a versão com PDF automático do resultado, cabeçalho com logo em PNG/SVG, métricas históricas e página de relatório, posso gerar os arquivos complementares também.
