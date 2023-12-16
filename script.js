let menu = document.getElementById("menu");
let menu_list = document.querySelectorAll(".menu-list")
let flag = 0;
function toggleMenu(){
    // let toggle = document.getElementById("toggle");
    if(flag == 0){
        menu.classList.add('menu-block');
        flag = 1;
    }
    else{
        menu.classList.remove('menu-block');
        flag = 0;
    }
}

function nonedisplay(){
    menu.classList.remove('menu-block')
}