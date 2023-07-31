
/*Seleciona somente os links da pagina que tenham o #*/
const menulinks = document.querySelectorAll('.menu-desktop a[href^="#"]')

/*Calcula a distancia da section do topo*/
function getDistanceFromTheTop(element){    
    const id = element.getAttribute("href")
    return document.querySelector(id).offsetTop
}

 /*Essa funçaõ nos da acesso ao evento*/
function scrollToSection(event){   
    event.preventDefault()   
    const distanceFromTheTop = getDistanceFromTheTop(event.target) /*se o menu tivesse uma altura esse valor seria subtraido aqui - 70 por exemplo */
    // nativeScroll(distanceFromTheTop)
    smoothScrollTo(0, distanceFromTheTop, 4500) /*Esse valor determina a velocidade do scroll*/
}

/*Identificar o click do usuario em cada click*/
menulinks.forEach((link)=>{
    /*link.addEventListener("click", () => console.log("Clicado"))
    agora vamos substituir por uma função chamada scrollToSection*/
    link.addEventListener("click", scrollToSection)
})

function smoothScrollTo(endX, endY, duration){
    const startX    = window.scrollX || window.pageXOffset
    const startY    = window.scrollY || window.pageYOffset
    const distanceX = endX - startX
    const distanceY = endY - startY
    const startTime = new Date().getTime()

    duration = typeof duration !== "undefined" ? duration : 400

    const easeInOutQuart = (time, from, distance, duration) => {
        if ((time /= duration / 2) < 1)
          return (distance / 2) * time * time * time * time + from;
          return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
    }

    const timer = setInterval(() => {
        const time = new Date().getTime() - startTime;
        const newX = easeInOutQuart(time, startX, distanceX, duration);
        const newY = easeInOutQuart(time, startY, distanceY, duration);
        if (time >= duration) {
        clearInterval(timer);
        }
        window.scroll(newX, newY);
    }, 1000 / 60);
}