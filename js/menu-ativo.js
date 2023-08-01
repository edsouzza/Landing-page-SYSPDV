
// PEGA TODOS OS HREF E ADICIONA NA VARIAVEL
const linkesInternos = document.querySelectorAll('a[href^="#"]')

// função passada no call abaixo
function handleLink(event){
  event.preventDefault();

  // corre todos os links
  linkesInternos.forEach(function(link){
    // remove a classe de todos os link  
    link.classList.remove('ativo');
  })

  // Depois de remover de todos, adiciona a classe ao link de origem clicado
  // currentTarget ---> comando para executar função a onde foi clicado
  event.currentTarget.classList.add('ativo');
}

//  1 Função que reconhece o click do usuário e reconhece o click e executa a função passada no callback
linkesInternos.forEach (function(link){
  link.addEventListener('click', handleLink);
})
