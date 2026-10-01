const preencherFormulario = (endereco) => {
  document.getElementById('uf').value = endereco.uf;
  document.getElementById('estado').value = endereco.estado;
  document.getElementById('localidade').value = endereco.localidade;
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


const btn = document.getElementById('btn');
btn.addEventListener('click', (event) => {
  event.preventDefault();

  if (
    document.getElementById('uf').value === '' ||
    document.getElementById('estado').value === '' ||
    document.getElementById('localidade').value === ''
  ) {
    alert('Preencha o formulário corretamente!');
  } else (
    alert('Formulário preenchido com sucesso!')
  )
})
