const MENU = document.getElementById('menu')
const TABS = document.getElementById('tabs')
const SLIDER = document.getElementById('slider')
const BTN_NEXT = document.getElementById('btn_next')
const BTN_PREV = document.getElementById('btn_prev')
const BTN_PHONE1 = document.getElementById('b-phone1')
const BTN_PHONE2 = document.getElementById('b-phone2')
const FORM = document.getElementById('form')
const SUBMIT = document.getElementById('fsubmit')
const CLOSE_BTN = document.getElementById('close-btn')


/* menu */
MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('.menu__link').forEach(el => el.classList.remove('active'))
    event.target.classList.add('active')
})

/* tabs */
TABS.addEventListener('click', (event) => {
    TABS.querySelectorAll('.tabs__title').forEach(el => el.classList.remove('active'))
    event.target.classList.add('active')
})

/* slider */
BTN_NEXT.addEventListener('click', (event) => {
    BTN_PREV.style.display = "block"
    let slides = SLIDER.querySelectorAll('.slider__item')
    let i = 0;
    slides.forEach((el, index) => {
        if (el.classList.contains('active') && index == slides.length - 2) {
            BTN_NEXT.style.display = 'none'
        }
        if (el.classList.contains('active')) {
            el.classList.remove('active')
            el.style.left = '-100%'
            i = index;
        }
    })
    slides[i + 1].style.left = '0'
    slides[i + 1].classList.add('active')
})

BTN_PREV.addEventListener('click', () => {
    let slides = SLIDER.querySelectorAll('.slider__item')
    let i = 0;
    if (BTN_NEXT.style.display == 'none') {
        BTN_NEXT.style.display = 'block'
    }
    slides.forEach((el, index) => {

        if (el.classList.contains('active') && index == 1) {
            BTN_PREV.style.display = 'none'
        }
        if (el.classList.contains('active')) {
            el.classList.remove('active')
            el.style.left = '100%'
            i = index;
        }
    })
    slides[i - 1].style.left = '0'
    slides[i - 1].classList.add('active')
})

/* phone button */
BTN_PHONE1.addEventListener('click', () => {
    document.querySelectorAll('.slide1__img')[0].classList.toggle('active')
})
BTN_PHONE2.addEventListener('click', () => {
    document.querySelectorAll('.slide1__img')[1].classList.toggle('active')
})

/* form */
FORM.addEventListener('submit', (event) => {
    event.preventDefault()
    const subject = document.getElementById('fsubject').value
    const descr = document.getElementById('fdescr').value

    if (subject.length == 0) {
        document.getElementById('subject').innerText = 'Без темы'
    } else {
        document.getElementById('subject').innerText = 'Тема: ' + subject
    }

    if (descr.length == 0) {
        document.getElementById('descr').innerText = 'Без описания'
    } else {
        document.getElementById('descr').innerText = 'Описание: ' + descr
    }

    if (subject.length == 0) {
        document.getElementById('subject').innerText = 'Без темы'
    } else {
        document.getElementById('subject').innerText = 'Тема: ' + subject
    }

    document.getElementById('result').innerText = 'Форма отправлена'
    document.getElementById('dialog-block').classList.remove('hidden')
    document.querySelector('body').classList.add('overflow-hidden')
    FORM.reset()
})

CLOSE_BTN.addEventListener('click', () => {
    document.querySelector('body').classList.remove('overflow-hidden')
    document.getElementById('dialog-block').classList.add('hidden')

})