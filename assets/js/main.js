

function change(x) {
    x.classList.toggle("change")
    document.querySelector('.menu').classList.toggle('menu-mobile');
    window.onclick = function (e) {
        if (e.target.matches('pro')) {
            let drop = document.querySelector('.nav_menu');
            if (drop.classList.contains('menu-mobile')) {
                drop.classList.remove('show')
            }
        }


    }

}


window.addEventListener('scroll', reveal)
function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {
        let windowheight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top
        let revealpoint = 150;


        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');

        } else {
            reveals[i].classList.remove('active');
        }

    }
}

let cursor = document.querySelector('.cursor');
let cursor2 = document.querySelector('.cursor2');

document.addEventListener("mousemove",function(e){
    cursor.Style.cssText =  cursor2.Style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

function shiftLeft() {
    const boxes = document.querySelectorAll(".box");
    const tmpNode = boxes[0];
    boxes[0].className = "box move-out-from-left";

    setTimeout(function () {
        if (boxes.length > 5) {
            tmpNode.classList.add("box--hide");
            boxes[5].className = "box move-to-position5-from-left";
        }
        boxes[1].className = "box move-to-position1-from-left";
        boxes[2].className = "box move-to-position2-from-left";
        boxes[3].className = "box move-to-position3-from-left";
        boxes[4].className = "box move-to-position4-from-left";
        boxes[0].remove();

        document.querySelector(".cards__container").appendChild(tmpNode);

    }, 500);

}

function shiftRight() {
    const boxes = document.querySelectorAll(".box");
    boxes[4].className = "box move-out-from-right";
    setTimeout(function () {
        const noOfCards = boxes.length;
        if (noOfCards > 4) {
            boxes[4].className = "box box--hide";
        }

        const tmpNode = boxes[noOfCards - 1];
        tmpNode.classList.remove("box--hide");
        boxes[noOfCards - 1].remove();
        let parentObj = document.querySelector(".cards__container");
        parentObj.insertBefore(tmpNode, parentObj.firstChild);
        tmpNode.className = "box move-to-position1-from-right";
        boxes[0].className = "box move-to-position2-from-right";
        boxes[1].className = "box move-to-position3-from-right";
        boxes[2].className = "box move-to-position4-from-right";
        boxes[3].className = "box move-to-position5-from-right";
    }, 500);

}

let btns = document.querySelectorAll('.btns')
let contenue = document.querySelectorAll('.tabcontent')

let index = 0

btns.forEach(onglet => {
    onglet.addEventListener('click', () => {
        if (onglet.classList.contains('active')) {
            return
        } else {
            onglet.classList.add('active')
        }

        index = onglet.getAttribute('data-anim')
        for (let i = 0; i < btns.length; i++) {
            if (btns[i].getAttribute('data-anim') != index) {
                btns[i].classList.remove('active')
            }

        }
        for (let j = 0; j < contenue.length; j++) {
            if (contenue[j].getAttribute('data-anim') == index) {
                contenue[j].classList.add('activecontent')
            } else {
                contenue[j].classList.remove('activecontent')
            }

        }
    })
})