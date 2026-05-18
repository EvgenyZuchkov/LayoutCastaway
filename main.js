const burger = document.querySelector('.burger-menu')
const mobileMenu = document.querySelector('.mobile-menu')

burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active')

    if (mobileMenu.classList.contains('active')) {
        burger.src = 'assets/close.png'
    } else {
        burger.src = 'assets/burger-menu.png'
    }

    if (mobileMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = ''
    }
})

mobileLinks = document.querySelectorAll('.mobile-navbar a')

mobileLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault()

        // Закрываем меню
        mobileMenu.classList.remove('active')
        burger.src = 'assets/burger-menu.png'
        document.body.style.overflow = ''

        // Получаем ID секции из атрибута href
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    })
})