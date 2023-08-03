let lgpdUrl  = 'https://jsonplaceholder.typicode.com/posts'
let lgpdHtml = 
`
    <div class="lgpd container">
        <div class="lgpd--left">
            <p>
                Nós utilizamos cookies para melhorar sua experiência de usuário.
                Para maiores esclarecimentos, leia nossa <a href="assets/politicas.pdf" target="_blank" rel="noopener noreferrer" class="link">Política de Privacidade</a>
            </p>
        </div>
        <div class="lgpd--right">
            <button>Aceitar</button>
        </div>
        </div>
    <link rel="stylesheet" href="/css/lgpd.css">
`

let lsContent = localStorage.getItem('lgpd')

if(!lsContent){
    document.body.innerHTML += lgpdHtml

    let lgpdArea   = document.querySelector('.lgpd')
    let lgpdButton = lgpdArea.querySelector('button')

    lgpdButton.addEventListener('click', async()=>{
        lgpdArea.remove()

        let result = await fetch(lgpdUrl)
        let json   = await result.json()
        
        if(json.error != ''){
            let id = json.id 
            localStorage.setItem('lgpd', id)
        }              
    })
}