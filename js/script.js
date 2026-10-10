const header = document.querySelector(".contenedor_header");

window.addEventListener("scroll", scrollFunction)

function scrollFunction() {

    if(window.scrollY > 50){
        header.classList.add("Contenedor_header_move")
    }else{
        header.classList.remove("Contenedor_header_move")
    }
}

const Estado = {
    Burguer: false
}
const nav = document.querySelector(".nav") 
const navResponsive = document.querySelector(".nav-responsive")

navResponsive.addEventListener("click", addRemoveNav)


function addRemoveNav() {

    Estado.Burguer = !Estado.Burguer

    nav.classList.toggle(
        "nav-appear",
        Estado.Burguer,
        console.log(Estado.Burguer)
        
    )

}

function RemoveNav() {

    nav.classList.remove("nav-appear")
    Estado.Burguer = false

}

const observerEntrada = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("visible");
        }
    })
})

document.querySelectorAll(".oculto").forEach(element => {
    observerEntrada.observe(element)
})