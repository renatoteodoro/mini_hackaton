# 🎬 Apresentação – Colaboração no GitHub com 6 Participantes  

---

## 1 – **Objetivo do Projeto**
👥 6 participantes  
📂 1 repositório no GitHub  
🌿 1 branch por pessoa (HTML individual)  
🎨 Arquivos **CSS e JS compartilhados**  

---

## 2 – **Estrutura de Branches**
🌱 Branches principais:
- `main` → versão estável (produção)  
- `dev` → integração das funcionalidades  

🌱 Branches individuais:
- `feature/matheus`  
- `feature/bruno`  
- `feature/renato`  
- `feature/gustavo`  
- `feature/hudson`  
- `feature/aristoteles`  

---

## 3 – **Organização de Arquivos**
📂 Projeto:
```
📂mini_hackaton
│── 📂css
│    └── 📄style.css   (compartilhado)
│── 📂js
│    └── 📄script.js   (compartilhado)
│── 📂static
│    └── 📄?
│── 📂templates
│    │── 📄aristoteles.html
│    │── 📄base.html
│    │── 📄bruno.html
│    │── 📄gustavo.html
│    │── 📄hudson.html
│    │── 📄index.html
│    │── 📄matheus.html
│    └── 📄renato.html
│── 📄.gitattributes
│── 📄.gitignore
│── 📄LICENCE
│── 📄README.md
└── 📄roteiro_colaborativo_github.md
    
```

---

## 4 – **Fluxo de Trabalho (Passo a Passo)**
1️⃣ Clonar o repositório:  
```bash
git clone https://github.com/renatoteodoro/mini_hackaton.git
```

2️⃣ Criar sua branch:  
```bash
git checkout -b feature/seu-nome
```

3️⃣ Editar HTML pessoal + CSS/JS compartilhado  

4️⃣ Commitar e enviar:  
```bash
git add .
git commit -m "Adiciona HTML [seu-nome] + ajustes CSS/JS"
git push origin feature/seu-nome
```

---

## 5 – **Integração**
🔄 Pull Request → da sua branch para `dev`  
✅ Revisão → outro participante ou revisor aprova  
🧩 Resolver conflitos → especialmente no CSS/JS  
🚀 Após testes → merge de `dev` → `main`  

---

## 6 – **Regras de Colaboração**
✔️ Commits pequenos e descritivos  
✔️ Sempre atualizar sua branch antes de continuar:  
```bash
git checkout feature/seu-nome
git pull origin dev
git merge dev
```  
✔️ Respeitar padrões no CSS e JS  
✔️ Usar **Issues** para discutir mudanças  

---

## 7 – **Boas Práticas**
🌟 Pulls frequentes → menos conflitos  
🌟 Revisar PRs dos colegas  
🌟 Comentar o código CSS/JS  
🌟 Combinar convenções (nomes, funções, estilos)  
