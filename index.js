const pessoa = []

const sectionPessoas = document.getElementById('sectionPessoas')
const nome = document.getElementById('nome').value
const email = document.getElementById('email').value
const dataNasc = document.getElementById('dataNasc').value
const cpf = document.getElementById('cpf').value
const form = document.querySelector('form')

const preencherFormulario = (endereco) => {
  document.getElementById('estado').value = endereco.estado;
  document.getElementById('cidade').value = endereco.localidade;
}


const pesquisaCep = async () => {
  try {
    const cep = document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`

    const dados = await fetch(url);
    if (!dados.ok) throw new Error(`Erro HTTP: ${dados.status}`);

    const endereco = await dados.json();
    preencherFormulario(endereco);
    console.log(endereco);

  } catch (error) {
    console.error('Erro ao pesquisar CEP:', error);
  }
}

document.getElementById('cep').addEventListener('focusout', pesquisaCep);


// const btn = document.getElementById('btn');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (
    document.getElementById('estado').value === '' ||
    document.getElementById('cidade').value === ''
  ) {
    alert('Preencha o formulário corretamente!');
    return
  } else {
    alert('Formulário preenchido com sucesso!')
    const dadosForm = new FormData(form)
    const novoObjeto = Object.fromEntries(dadosForm.entries())
    pessoa.push(novoObjeto)
    form.reset()

    console.log(pessoa)
  }
})

const renderPessoas = (pessoasList) => {
  const div = document.createElement('div')
  div.className = 'divPessoa'
  div.innerHTML = `
      <h3>${pessoasList.nome}</h3>
      <div class="edit">
        <p><em>${pessoasList.dataNasc}</em></p>
      </div>
      <div class="edit">
        <p>${pessoasList.cidade}, <strong>${pessoasList.estado}</strong> </p>
      </div>
      `
  sectionPessoas.appendChild(div)
}
