# Diagnóstico de Cultura Organizacional — Layout 2.0 (CORS-safe)

Este pacote contém um `index.html` pronto para publicar (Vercel/Netlify/GitHub Pages/local).

## O que está pronto
- **Logo branca** na faixa azul (inline Base64).
- **8 perguntas** (versão nova).
- **Classificação automática** (Alta/Média/Baixa) — sem exibir a contagem de "Sim".
- **Envio para Apps Script** usando `Content-Type: text/plain` (evita preflight/CORS).
- **WhatsApp** no final.

## Endpoint configurado
```
https://script.google.com/macros/s/AKfycby7ajM5xkmuwzWIHfpk1MPEtNPIPyOzNM9WUxLxDnwRz1r_DQy7IddcPNap8O3iNoVn/exec
```

## Testes rápidos
1. Abra a URL do seu App Script `/exec` → deve mostrar `Webhook ativo.`
2. Abra `.../exec?action=test&nome=Teste&telefone=11999999999` → deve gravar uma linha na aba *Respostas*.
3. Publique o `index.html` e faça um envio real — confira a planilha.

Se quiser migrar para uma **nova planilha**, use o script "auto" que te enviei na conversa. Depois, troque a URL do seu App Script (caso crie outra implantação) e o site já funcionará.
