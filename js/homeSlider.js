    // HOME SLIDER
    const sliderWrapper = document.querySelector('.third__section-slider');
    const sldies = document.querySelectorAll('.third__section-slide')
    const totalSlides = document.querySelectorAll('.third__section-slide').length;
    const btnPrev = document.querySelector('.home-slider-prev');
    const btnNext = document.querySelector('.home-slider-next');
    const contaier = document.querySelector('.slider__wrapper')

    const cursorArrowLeft = document.querySelector('#cursor-left-arrow')
    const cursorArrowRight = document.querySelector('#cursor-right-arrow')

    console.log(cursorArrowLeft)

    let slideWidth = contaier.clientWidth
    let sliderWidth = slideWidth * totalSlides;
    let move = 0;

    console.log()

    function letWidth(){
        sliderWrapper.style.width = `${sliderWidth}px`
        console.log(sliderWidth)
    }
    letWidth()

    btnNext.addEventListener('click', ()=>{
        move += slideWidth
        if(sliderWidth <= move){
            move = 0
        }
        sliderWrapper.style.transform = `translateX(-${move}px)`

        console.log(move)
    })

    function changeCursor(target, secondTarget) {
        target.addEventListener('mouseover', ()=>{
            secondTarget.classList.add('active')
        })
        target.addEventListener('mouseout', ()=>{
            secondTarget.classList.remove('active')
        })
    }
    changeCursor(btnPrev, cursorArrowLeft)
    changeCursor(btnNext, cursorArrowRight)

    btnPrev.addEventListener('click', ()=>{
        move -= slideWidth
        if(0 > move){
            move = slideWidth *( totalSlides -1)
        }
        console.log(move)
        sliderWrapper.style.transform = `translateX(-${move}px)`
    })

    sldies.forEach(item =>{
        item.style.width = `${contaier.clientWidth}px`
    })