if(!localStorage.nossoCooke){
    document.querySelector('.box-cookies').classList.remove('hide')
}
const acceptCookies = () => {
    document.querySelector('.box-cookies').classList.add('hide')
    localStorage.setItem("nossoCooke", "accept")
}

const btnCookies = document.querySelector(".btn-cookies")

btnCookies.addEventListener('click', acceptCookies)