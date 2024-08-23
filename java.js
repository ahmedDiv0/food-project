'use strict'

// to add click to nav bar in small phone
const header = document.querySelector('.header')
const btns = document.querySelectorAll('.icon-mobile-nav')

btns.forEach((e) => {
  e.addEventListener('click', function (e) {
    header.classList.toggle('nav-open')
  })
})
///////////////////////////////
const box = document.querySelectorAll('.step-img-box')

window.addEventListener('scroll', () => {
  const tiggerBottom = (window.innerHeight / 5) * 4
  //console.log(tiggerBottom)

  box.forEach((e) => {
    const boxTop = e.getBoundingClientRect().top
    if (boxTop < tiggerBottom) {
      e.classList.add('show')
    } else {
      e.classList.remove('show')
    }
  })
})

// scrolling for btn ((learn more))
const btnScroll = document.querySelector('.btn--outline')
const section1 = document.querySelector('.section-how')

btnScroll.addEventListener('click', function () {
  section1.scrollIntoView({ behavior: 'smooth' })
})

// scrolling for links ((nav-bar))
/* const ul = document.querySelectorAll('.main-nav-link')
ul.addEventListener('click', function (e) {
  e.preventDefault()
}) */
const list = document.querySelectorAll('.main-nav-link')
list.forEach((el) => {
  el.addEventListener('click', () => {
    document.querySelector('.nav-cta')?.classList.remove('nav-cta')
    el.classList.add('nav-cta')
  })
})

document
  .querySelector('.main-nav-list')
  .addEventListener('click', function (e) {
    e.preventDefault()

    if (e.target.classList.contains('main-nav-link')) {
      const id = e.target.getAttribute('href')
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
    }
  })

//NICE FEAD IN FOR EACH SECTION
const allSection = document.querySelectorAll('.section')

const revealSection = function (entries, observer) {
  const [entry] = entries

  if (!entry.isIntersecting) return
  entry.target.classList.remove('section-hidden')
  observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
})

allSection.forEach(function (section) {
  sectionObserver.observe(section)
  section.classList.add('section-hidden')
})

//to make nav bar fixed in top page after the header or the hero section desappear
const headerObs = document.querySelector('.headerObserver')
const navUl = document.querySelector('.main-nav-list')

const theMentality = function (entries) {
  const [entry] = entries

  if (!entry.isIntersecting) {
    navUl.classList.add('sticky')
  } else {
    navUl.classList.remove('sticky')
  }
}

const fixedNav = new IntersectionObserver(theMentality, {
  root: null,
  threshold: 0,
})

fixedNav.observe(headerObs)

// try to add nav-cta to all classes by using observer
