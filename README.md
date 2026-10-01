# 📮 Consulta de CEP com ViaCEP

Formulário simples que **consome a API pública [ViaCEP](https://viacep.com.br/)**: você digita um CEP e os campos de **UF**, **Estado** e **Localidade** são preenchidos automaticamente.

Projeto desenvolvido para fins acadêmicos, com foco em praticar **requisições HTTP com `fetch`** e **manipulação do DOM** usando JavaScript puro.

<div align="center">
  <img alt="JAVASCRIPT" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E">
  <img alt="HTML" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white">
  <img alt="CSS" src="https://img.shields.io/badge/css-%23663399.svg?style=for-the-badge&logo=css&logoColor=white">
</div>

<br>

<div align="center">
  <img src="https://github.com/user-attachments/assets/8c91db80-cc26-4335-9829-a76c4961ff1a" width="400px" height="225px">
  <img src="https://github.com/user-attachments/assets/fd326739-27c8-413d-91c1-9d8dd054d8ac" width="400px" height="225px">
</div>

---

## ✨ Funcionalidades

- Busca automática do endereço assim que o usuário **sai do campo de CEP**.
- Preenchimento dos campos **UF**, **Estado** e **Localidade** com os dados retornados pela API.
- Validação ao clicar em **Enviar**: se algum campo estiver vazio, um alerta pede para preencher o formulário.
- Layout centralizado, com campos arredondados e botão roxo com efeito de *hover*.

---

## 🔄 Como funciona

1. O usuário digita o CEP e clica fora do campo (evento `focusout`).
2. A função `pesquisaCep()` monta a URL e faz a requisição com `fetch`.
3. Se a resposta for válida, o JSON é lido e a função `preencherFormulario()` coloca os dados nos campos.
4. Ao clicar em **Enviar**, o script confere se UF, Estado e Localidade estão preenchidos e exibe um alerta de sucesso ou de erro. O formulário não é enviado de verdade (`event.preventDefault()`).

| Função / trecho | O que faz |
| --- | --- |
| `pesquisaCep()` | Consulta a API ViaCEP com o CEP digitado e trata erros HTTP. |
| `preencherFormulario(endereco)` | Preenche os campos `uf`, `estado` e `localidade`. |
| Listener do botão `#btn` | Valida os campos e mostra o alerta correspondente. |

---

## 🌐 API utilizada

**[ViaCEP](https://viacep.com.br/)**: serviço gratuito e sem necessidade de chave de acesso.

**Formato da requisição:**

```text
GET https://viacep.com.br/ws/{CEP}/json/
```

**Exemplo de resposta resumida** para o CEP `01001000`:

```json
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
  "estado": "São Paulo"
}
```

Este projeto utiliza apenas os campos `uf`, `estado` e `localidade`.

---

## 🛠️ Tecnologias

- **HTML5**: estrutura do formulário
- **CSS3**: estilização (Flexbox)
- **JavaScript (ES6+)**: `async/await`, `fetch` e eventos do DOM

---

## 📁 Estrutura do projeto

```text
viaCep/
├── index.html   # Estrutura da página e do formulário
├── style.css    # Estilos visuais
└── index.js     # Consumo da API e lógica do formulário
```

---

## 🚀 Como executar

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/isacarrd/viaCep.git
   cd viaCep
   ```

2. **Abra com um servidor local.** O `index.html` carrega o script por `/index.js` (caminho a partir da raiz do servidor), então abrir o arquivo com duplo clique pode não funcionar. Escolha uma das opções:

   - **VS Code:** instale a extensão **Live Server**, clique com o botão direito em `index.html` e escolha **Open with Live Server**.
   - **Python:**

     ```bash
     python -m http.server 5500
     ```

     Depois acesse `http://localhost:5500` no navegador.

---

## 🧪 Como testar

1. Abra a página no navegador.
2. Digite um CEP válido com 8 números, por exemplo `01001000`.
3. Clique fora do campo e veja **UF**, **Estado** e **Localidade** serem preenchidos.
4. Clique em **Enviar** para ver a mensagem de validação.

> 💡 Abra o console do navegador (`F12`) para ver o JSON completo retornado pela API e eventuais mensagens de erro.

---

## 🔧 Ideias de melhoria

- [ ] Tratar CEPs inexistentes: nesses casos a API responde com um JSON de `erro` e os campos podem acabar exibindo `undefined`.
- [ ] Trocar a URL da API para `https://` (a atual usa `http://`, que pode ser bloqueada em páginas servidas via HTTPS).
- [ ] Usar o caminho relativo `./index.js` no `index.html`, para funcionar também no GitHub Pages.
- [ ] Validar o formato do CEP (8 dígitos) e adicionar máscara no campo.
- [ ] Exibir mensagens de erro na própria tela, em vez de apenas no console.
- [ ] Preencher também **logradouro** e **bairro**.

---

## 👩‍💻 Autor

Feito por [@isacarrd](https://github.com/isacarrd).
