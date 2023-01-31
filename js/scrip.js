

window.addEventListener('DOMContentLoaded', ()=>{
    //PORTFOLIO TABS
    const tabs = document.querySelectorAll('.portfolio__list-item');
    const tabsContents = document.querySelectorAll('.portfolio__tab');
    
    tabs.forEach((tab, i) => {
        tab.addEventListener('mouseover', (e) => {
    
            tabsContents.forEach(tabContent => {
                tabContent.classList.remove('active');
    
            })
    
            tabsContents[i].classList.add('active');
            tabs.forEach(tab => {
                  tab.classList.remove('active');
              })

            e.target.classList.add("active");
              
        })
        tab.addEventListener('mouseout', ()=>{
            tabsContents[i].classList.remove('active');
        })
    })

    // MODAL
    const hamburger = document.querySelectorAll('.hamburger');
    const menu = document.querySelectorAll('.mobile__menu')
    const body = document.querySelectorAll('body')

    hamburger.forEach((item, i) =>{
        item.addEventListener('click', ()=>{
            menu[i].classList.toggle('active');
            body.classList.toggle('active');
            console.log(1)
        })
    })


    // SCROLL ANIMATION
	const scrollItems = document.querySelectorAll('.scroll-item');

	const scrollAnimation = () => {
		let windowCenter = (window.innerHeight / 2) + window.scrollY;
		scrollItems.forEach(el => {
			let scrollOffset = el.offsetTop + (el.offsetHeight / 2);
			if (windowCenter >= scrollOffset) {
				el.classList.add('animation-class');
			} else {
				el.classList.remove('animation-class');
			}
		});
	};

    const imgScroll = document.querySelectorAll('.img-scroll')

    const scrollAnimationImg = () =>{
		let windowCenter = (window.innerHeight / 2) + window.scrollY;
		imgScroll.forEach(el => {
			let scrollOffset = el.offsetTop;
			if (windowCenter >= scrollOffset) {
				el.classList.add('animation-class');
			} else {
				el.classList.remove('animation-class');
			}
		});
    }

	scrollAnimation();
	window.addEventListener('scroll', () => {
		scrollAnimation();
        scrollAnimationImg();
	});

    // COUSOR

    const links = document.querySelectorAll('a')
    const buttons = document.querySelectorAll('button')
    const cursor = document.querySelector('#cursor')


    document.addEventListener('mousemove', e =>{
        cursor.setAttribute('style', `transform: translate3d(${e.clientX}px, ${e.clientY}px, 0)`)
    })

    addListener(links)
    addListener(buttons)

    function addListener(arr){
        arr.forEach(a =>{
            a.addEventListener('mouseover', ()=>{
                cursor.classList.add('active')
            })
            a.addEventListener('mouseout', ()=>{
                cursor.classList.remove('active')
            })
        })
    }

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
})



