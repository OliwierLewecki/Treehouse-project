const navLinks = document.querySelectorAll(`.header_links`)
const arrowUp = document.querySelector(`.page_arrow`);
const scrollToElement = e => {
    e.preventDefault();
    document.querySelector(e.target.getAttribute('href')).scrollIntoView({behavior: "smooth"})
}

const barButton = document.querySelector('#bar_button');
const logo = document.querySelector('#logo');
const headerLinks = document.querySelector('#header_links');
const headerItems = document.querySelectorAll('#header_links li');

logo.style.display = 'block';


barButton.addEventListener('click', () => {

    if(logo.style.display === 'block'){
        logo.style.display = 'none';
        headerLinks.style.display = 'block';
        headerItems.forEach(el => el.style.marginTop = '5px');
    }
    else {
        logo.style.display = 'block';
        headerLinks.style.display = 'none';
    }

})
// const showScroll = () => {
//     if (window.scrollY > 350) {
//         arrowUp.style.display = `block`;
//     }
//     else{
//         arrowUp.style.display = `none`;
//     }
// }
//
//
// const detectElementInViewport = el => {
//     const rect = el.getBoundingClientRect();
//     return rect.top >= 0 && rect.bottom <= window.innerHeight;
// }

// const slides = e => {
//     document.querySelectorAll('[data-animate]').forEach(element => {
//        if(detectElementInViewport(element)){
//            element.style.animationName = element.dataset.animate;
//            element.style.opacity = 1;
//        }
//     })
// }

// let timeout;
//
//
// window.addEventListener('scroll', () => {
//     showScroll();
//
//     clearTimeout(timeout);
//     timeout = setTimeout(slides, 100);
//     slides()
// });




const arrowScroll = e => {
    document.querySelector(`.header`).scrollIntoView({ behavior: "smooth"});
}
navLinks.forEach(link => {
    link.addEventListener(`click`,scrollToElement);
})

arrowUp.addEventListener('click', arrowScroll);

