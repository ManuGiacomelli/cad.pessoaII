let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')

let telefone = document.querySelector('#telefone')
let labelTelefone = document.querySelector('#labelTelefone')

let profissao = document.querySelector('#profissao')
let labelProfissao = document.querySelector('#labelProfissao')

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')



function cadastrar(){
  alert('Cadastrado com Sucesso')
  
}

let listaUserUser = JSON.parse(localStorage.getItem('listaUser')) || '[]'

listaUser.push(
{
  nomeCad: nome.value,
  emailCad: email.value,
  telefoneCad: telefone.value,
  profissaoCad: profissao.value,
}
)

localStorage. setItem('listaUser', JSON.stringify(listUser))