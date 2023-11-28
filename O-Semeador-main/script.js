//Menu Lateral 

var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
    menuItem.forEach((item) => 
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item) => 
    item.addEventListener('click', selectLink)
)

//Expandir o menu 

var btnExp = document.querySelector('#btn-exp')
menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})

// Final Menu Lateral


var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 50)

function proximaImg(){
    cont++

    if(cont > 4){
        cont = 1 
    }

    document.getElementById('radio'+cont).checked = true
}

document.getElementById('mobile-menu').addEventListener('click', function () {
    document.querySelector('.sidebar').classList.toggle('active');
});

