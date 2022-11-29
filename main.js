let nav2 = document.querySelector('.nav2');
// scroll nav
onscroll = function(){
    if(scrollY > 19.200000762939453){
        nav2.classList.add('white')
    }
    if(scrollY < 19.200000762939453){
        nav2.classList.remove('white')
    }
}
if(scrollY > 19.200000762939453){
    nav2.classList.add('white')
}
// btn search

let cl = document.getElementById('btn-search')


cl.onclick = function(){
    document.querySelector('.serach').classList.toggle('aperr')
    document.querySelector('.serach').focus()
    cl.classList.toggle('bc')
}
// back ground change
let landingpage = document.querySelector('.landing-page')



//get array of images

let imgesArray = ['imgs/slide-01.jpg.webp','imgs/slide-02.jpg.webp','imgs/slide-03.jpg.webp']


//get random number //

setInterval(function(){
    //get random number //
    let randomN = Math.floor(Math.random() * imgesArray.length)

     //change background url
    landingpage.style.backgroundImage = 'url("'+ imgesArray[randomN] +'")'
},4000)



//nav3

let open1 = document.getElementById('bar')
let nav3 = document.querySelector('.nav3')
let wrong = document.getElementById('wrong')


open1.onclick = function(){
    nav3.classList.toggle('left')
}
wrong.onclick = function(){
    nav3.classList.remove('left')
}




// chooese links

let women2 = document.getElementById('women2')
let men2 = document.getElementById('men2')
let bag2 = document.getElementById('bag2')
let shoes2 = document.getElementById('shoes2')
let watch2 = document.getElementById('watch2')



let men1 = document.getElementById('men1')
let men4 = document.getElementById('men4')
let men3 = document.getElementById('men3')



let shoes1 = document.getElementById('shoes1')




let watch3 = document.getElementById('watch3')
let watch1 = document.getElementById('watch1')



let girl3 = document.getElementById('girl3')
let girl2 = document.getElementById('girl2')
let girl4 = document.getElementById('girl4')
let girl5 = document.getElementById('girl5')
let girl6 = document.getElementById('girl6')
let girl7 = document.getElementById('girl7')
let girl8 = document.getElementById('girl8')
let girl9 = document.getElementById('girl9')
let girl10 = document.getElementById('girl10')
let girl1 = document.getElementById('girl1')


let line = document.getElementById('line')



women2.onclick = function(){
    men1.style.display = 'none'
    men4.style.display = 'none'
    men3.style.display = 'none'


    shoes1.style.display = 'none'

    document.getElementById('load').style.display = 'none'
    watch1.style.display = 'none'
    watch3.style.display = 'none'







    girl1.style.display = 'block'
    girl2.style.display = 'block'
    girl3.style.display = 'block'
    girl4.style.display = 'block'
    girl4.style.display = 'block'
    girl5.style.display = 'block'
    girl6.style.display = 'block'
    girl7.style.display = 'block'
    girl8.style.display = 'block'
    girl9.style.display = 'block'
    girl10.style.display = 'block'
}


men2.onclick = function(){
    girl1.style.display = 'none'
    girl2.style.display = 'none'
    girl3.style.display = 'none'
    girl4.style.display = 'none'
    girl4.style.display = 'none'
    girl5.style.display = 'none'
    girl6.style.display = 'none'
    girl7.style.display = 'none'
    girl8.style.display = 'none'
    girl9.style.display = 'none'
    girl10.style.display = 'none'
    document.getElementById('load').style.display = 'none'





    men1.style.display = 'block'
    men4.style.display = 'block'
    men3.style.display = 'block'
   


    shoes1.style.display = 'none'

    watch1.style.display = 'none'
    watch3.style.display = 'none'
}


shoes2.onclick = function(){
    girl1.style.display = 'none'
    girl2.style.display = 'none'
    girl3.style.display = 'none'
    girl4.style.display = 'none'
    girl4.style.display = 'none'
    girl5.style.display = 'none'
    girl6.style.display = 'none'
    girl7.style.display = 'none'
    girl8.style.display = 'none'
    girl9.style.display = 'none'
    document.getElementById('load').style.display = 'none'
    girl10.style.display = 'none'





    men1.style.display = 'none'
    men4.style.display = 'none'
    men3.style.display = 'none'
   


    shoes1.style.display = 'block'

    watch1.style.display = 'none'
    watch3.style.display = 'none'
}
bag2.onclick = function(){
    girl1.style.display = 'none'
    girl2.style.display = 'none'
    girl3.style.display = 'none'
    girl4.style.display = 'none'
    girl4.style.display = 'none'
    girl5.style.display = 'none'
    girl6.style.display = 'none'
    girl7.style.display = 'none'
    girl8.style.display = 'none'
    girl9.style.display = 'none'
    girl10.style.display = 'none'
    document.getElementById('load').style.display = 'none'





    men1.style.display = 'none'
    men4.style.display = 'none'
    men3.style.display = 'none'
   


    shoes1.style.display = 'none'

    watch1.style.display = 'none'
    watch3.style.display = 'none'
}
watch2.onclick = function(){
    girl1.style.display = 'none'
    girl2.style.display = 'none'
    girl3.style.display = 'none'
    girl4.style.display = 'none'
    girl4.style.display = 'none'
    girl5.style.display = 'none'
    girl6.style.display = 'none'
    girl7.style.display = 'none'
    girl8.style.display = 'none'
    girl9.style.display = 'none'
    girl10.style.display = 'none'
    document.getElementById('load').style.display = 'none'





    men1.style.display = 'none'
    men4.style.display = 'none'
    men3.style.display = 'none'
   


    shoes1.style.display = 'none'

    watch1.style.display = 'block'
    watch3.style.display = 'block'
}
line.onclick = function(){
    girl1.style.display = 'block'
    girl2.style.display = 'block'
    girl3.style.display = 'block'
    girl4.style.display = 'block'
    girl4.style.display = 'block'
    girl5.style.display = 'block'
    girl6.style.display = 'block'
    girl7.style.display = 'block'
    document.getElementById('load').style.display = 'none'
    girl8.style.display = 'block'
    girl9.style.display = 'block'
    girl10.style.display = 'block'





    men1.style.display = 'block'
    men4.style.display = 'block'
    men3.style.display = 'block'



    shoes1.style.display = 'block'

    watch1.style.display = 'block'
    watch3.style.display = 'block'
}
document.getElementById('load').onclick = function(){
    girl8.style.display = 'block'
    girl9.style.display = 'block'
    girl10.style.display = 'block'
    watch3.style.display = 'block'
    document.getElementById('load').style.display = 'none'
}


//heart





function change(){
    document.getElementById('heart').innerHTML = 1;
}

let img6 = document.querySelector('.img6')
let img4 = document.querySelector('.img4')


img4.onclick = function(){
    img6.classList.toggle('op')
    change()
}

let set = document.getElementById('heart')

document.querySelector('.a').onclick = function(){
    let num = 1;
    document.getElementById('a2').classList.toggle('opp')
    change()
}

