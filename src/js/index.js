// Get the slides
const btnNext = document.getElementById("btn-next")
const btnBack = document.getElementById("btn-back")
const slides = document.querySelectorAll(".slide")
let currentImage = 0;

//

function changeButtonsOpacity(slideNumber){
    const isNotTheFirst = slideNumber !== 0;
    if(isNotTheFirst){
        btnBack.classList.remove("btn-opacity")
    }else{
        btnBack.classList.add("btn-opacity")
    }

    const isTheEnd = slideNumber !== 0 && slideNumber === slides.length -1
    if(isTheEnd){
        btnNext.classList.add("btn-opacity")
    }else{
        btnNext.classList.remove("btn-opacity")
    }
}

function hideSelectedSlide(){
    const selectedSlide = document.querySelector(".selected")
    selectedSlide.classList.remove("selected")
}

function showSlide(slideIndex){
    slides[slideIndex].classList.add("selected")
}
 

btnNext.addEventListener("click", ()=>{
    if(currentImage === slides.length - 1)return{}
    
        hideSelectedSlide()
        currentImage++;
        showSlide(currentImage)
        changeButtonsOpacity(currentImage)
    
})

btnBack.addEventListener("click", ()=> {
    if(currentImage === 0)return{}

        hideSelectedSlide()
        currentImage--;
        showSlide(currentImage)
        changeButtonsOpacity(currentImage)
})





















// const btnNext = document.getElementById('btn-next')
// const btnBack = document.getElementById('btn-back')
// const slides = document.querySelectorAll('.slide')
// let currentImage = 0;

// function hideSelectedSlide(){
//     const selectedSlide = document.querySelector('.selected')
//     selectedSlide.classList.remove('selected')
// }

// function showSlide(slideIndex){
//     slides[slideIndex].classList.add('selected')
// }

// // FORMA QUE O PROFESSOR MOSTROU

// function changeButtonsOpacity(slideNumber){
//     const isNotTheFirst = slideNumber !== 0;
//     if(isNotTheFirst){
//         btnBack.classList.remove("btn-opacity")
//     }else{
//         btnBack.classlist.add("btn-opacity")
//     }

//     const isTheEnd = slideNumber !== 0 && slideNumber === slides.length - 1;
//     if(isTheEnd){
//         btnNext.classList.add("btn-opacity")
//     }else{
//         btnBack.classlist.remove("btn-opacity")
//     }
// }

// FORMA QUE EU FIZ DA PRIMEIRA VER

// function changeRightButtonOpacity (slideNumber){
//     if(slideNumber === 3){
//         btnNext.classList.add('btn-opacity')
//     }else if(slideNumber < 3){
//         btnNext.classList.remove('btn-opacity')
//     }
// }

// function changeLeftButtonOpacity (slideNumber){
//     if(slideNumber === 0){
//         btnBack.classList.add('btn-opacity')
//     }else if(slideNumber >= 0){
//         btnBack.classList.remove('btn-opacity')
//     }
// }


// btnNext.addEventListener('click', () =>{
//     if (currentImage === slides.length - 1) return

//     hideSelectedSlide()
//     currentImage++;
//     showSlide(currentImage)
//     changeButtonsOpacity(currentImage)
//     console.log(currentImage)
// })

// btnBack.addEventListener('click', () =>{
//     if (currentImage === 0) return

//     hideSelectedSlide()
//     currentImage--;
//     showSlide(currentImage)
//     changeButtonsOpacity(currentImage)
    
// })

