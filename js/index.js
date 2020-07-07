// Your code goes here
let imageBorder = document.querySelector('.destination:nth-of-type(1) .btn');
console.log(imageBorder)

imageBorder.addEventListener('dblclick', (event) => {
    event.stopPropagation()
    imageBorder.style.backgroundColor = 'red'
})

let imageBorder1 = document.querySelector('.destination:nth-of-type(2) .btn');
console.log(imageBorder)

imageBorder1.addEventListener('dblclick', (event) => {
    event.stopPropagation()
    imageBorder1.style.backgroundColor = 'green'
})
let imageBorder2 = document.querySelector('.destination:nth-of-type(3) .btn');
console.log(imageBorder)

imageBorder2.addEventListener('dblclick', (event) => {

    event.stopPropagation()
    imageBorder2.style.backgroundColor = 'yellow'
})

let navlink = document.querySelector('.nav-link:nth-of-type(1)');
navlink.addEventListener('click', (event) => {
    event.preventDefault()
    if (navlink.textContent === 'how'){
        navlink.textContent = 'Home'
    }else{
        navlink.textContent = 'how'
    }
    navlink.style.textDecoration = 'underline'
   
})

let navlink2 = document.querySelector('.nav-link:nth-of-type(2)');
navlink2.addEventListener('click', (event) => {
    if (navlink2.textContent === 'bout'){
        navlink2.textContent = 'About Us'
    }else{
        navlink2.textContent = 'bout'
    }
    navlink2.style.textDecoration = 'underline'
})
let navlink3 = document.querySelector('.nav-link:nth-of-type(3)');
navlink3.addEventListener('click', (event) => {
    if (navlink3.textContent === 'that'){
        navlink3.textContent = 'Blog'
    }else{
        navlink3.textContent = 'that'
    }
    navlink3.style.textDecoration = 'underline'
   
})
let navlink4 = document.querySelector('.nav-link:nth-of-type(4)');
navlink4.addEventListener('click', (event) => {
    if (navlink4.textContent === '(;'){
        navlink4.textContent = 'Contact'
    }else{
        navlink4.textContent = '(;'
    }
    navlink4.style.textDecoration = 'underline'
    
})
//let navLink = document.querySelectorAll

//imageBorder1.addEventListener()
let image = document.querySelector('.intro img');
console.log(image)
image.addEventListener('mousemove', (event) => {
    image.style.boxShadow = '10px 10px  grey'
})
image.addEventListener('mouseleave', (event) => {
    image.style.boxShadow = '15px 15px red'
})
let picture = document.querySelector('.img-content img')
console.log(picture)
picture.addEventListener('drag', (event) => {
    picture.style.border = '20px solid pink'
})
picture.addEventListener('dragleave', (event) => {
    picture.style.border = '5px solid black'
})
let words = document.querySelector('.intro p');
console.log(words)
words.addEventListener('resize', (event) => {
    words.style.textDecoration = 'bold'
})
let content = document.querySelector('.content-destination img')
console.log(content)
content.addEventListener('click', (event) => {
    content.style.border = '5px solid green'
})
let bottom = document.querySelector('.footer');
console.log(bottom)
bottom.addEventListener('click', (event) => {
    
    bottom.style.backgroundColor = 'white'
    
})
let contentText = document.querySelector('.content-section p');
contentText.addEventListener('mouseover', (event) => {
contentText.style.fontSize = '2rem'
contentText.addEventListener('mouseout', (event) => {
    contentText.style.fontSize = '1.5rem'
})
})
let header = document.querySelector('.container');
header.addEventListener('mouseenter', (event) => {
    header.style.backgroundColor = 'blue'
    header.addEventListener('mouseleave', (event) => {
        header.style.backgroundColor = 'pink'
    })
})

/*imageBorder.addEventListener('dblclick', (boom) => {
    navBar.style.backgroundColor = 'pink'
})*/