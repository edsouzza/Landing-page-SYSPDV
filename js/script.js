
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)
})

document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', function(event) {
        // Remove a classe 'ativo' de todos os links
        document.querySelectorAll('.link').forEach(link => link.classList.remove('ativo'));
        
        // Adiciona a classe 'ativo' ao link clicado
        event.currentTarget.classList.add('ativo');
    });
});
