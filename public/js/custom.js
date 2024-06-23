'use strict';

let hotels = new Swiper(".hotel-carousel", {
    init: false,
    centeredSlides: true,
    paginationClickable: true,
    initialSlide: 3,
    navigation: {
        nextEl: ".hotel-button-next",
        prevEl: ".hotel-button-prev",
    },
    pagination: {
        el: ".hotel-pagination",
        clickable: true,
    },
    loop: true,
    speed: 1000,
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1280: {
            slidesPerView: 5,
            spaceBetween: 30
        },
        1640: {
            slidesPerView: 5,
            spaceBetween: 47
        },
    }
});

const hotelsInArea = [
    {
        name: 'Villa, Kemah Tinggi',
        bedrood: 2,
        price: 990,
        image: 5,
        bg: '#',
    }, {
        name: 'Villa, Kemah Tinggi',
        bedrood: 2,
        price: 990,
        image: 1,
        bg: '#',
    }, {
        name: 'Villa, Kemah Tinggi',
        bedrood: 2,
        price: 990,
        image: 2,
        bg: '#',
    }, {
        name: 'Villa, Kuta Premiere',
        bedrood: 5,
        price: 920,
        image: 3,
        bg: '#',
    }, {
        name: 'Villa, Kuta Premiere',
        bedrood: 5,
        price: 920,
        image: 4,
        bg: '#',
    }, {
        name: 'Villa, Kemah Tinggi',
        bedrood: 2,
        price: 990,
        image: 5,
        bg: '#',
    }, {
        name: 'Villa, Kemah Tinggi',
        bedrood: 2,
        price: 990,
        image: 1,
        bg: '#',
    }
];

function generateHotels() {
    let markup = '';

    for (const hotel of hotelsInArea) {
        markup += `<div class="swiper-slide font-manrope max-md:text-center">
                        <div class="slide-inner-container max-md:max-w-[300px] max-md:m-auto">
                            <div class="mb-4 relative">
                                <img class="rounded-3xl drop-shadow-[0_4px_2px_rgb(0_0_0/0.3)]" src="img/hotel${hotel.image}.jpeg" alt="hotel">
                                <div class="flex absolute top-5 left-5 justify-between w-[calc(100%-40px)]">
                                    <div class="flex items-center rounded-full gap-2 py-1 px-2 relative">
                                        <div class="absolute w-full h-full rounded-full top-0 left-0 mix-blend-luminosity bg-golden z-10"></div>
                                        <img class="z-20" src="img/star.svg" alt="icon star"> <span class="text-white text-sm z-20">4.93</span>
                                    </div>
                                    <img src="img/heart.svg" alt="icon heart">
                                </div>
                            </div>
                            <div class="flex justify-between">
                                <div class="text-left">
                                    <h3 class="font-bold text-sm xl:text-[16px] 2xl:text-lg mb-1 3xl:mb-2">${hotel.name}</h3>
                                    <div class="flex md:hidden lg:flex text-golden-light font-medium text-xs 2xl:text-sm gap-[5px] 2xl:gap-[10px] 3xl:gap-5">
                                        <div class="flex gap-[6px] 3xl:gap-2">
                                            <img class="w-[16px] 2xl:w-5" src="img/bed.svg" alt="icon bed"> <span>${hotel.bedrood} bedrooms</span>
                                        </div>
                                        <div class="flex gap-[6px] 3xl:gap-3">
                                            <img class="w-[12px] 2xl:w-[14px]" src="img/square.svg" alt="icon"> <span>214m<sup class="-top-2">2</sup></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-right max-xl:w-[60px]">
                                    <span class="font-extrabold text-[16px] 2xl:text-lg text-golden leading-6">$ ${hotel.price}</span>
                                    <span class="text-[#A1A7B0] text-[10px] block">per month</span>
                                </div>
                            </div>
                            <div class="hidden md:flex lg:hidden justify-between text-golden-light font-medium text-xs 2xl:text-sm gap-[5px] 2xl:gap-[10px] 3xl:gap-5">
                                <div class="flex gap-[6px] 3xl:gap-2">
                                    <img class="w-[16px] 2xl:w-5" src="img/bed.svg" alt="icon bed"> <span>${hotel.bedrood} bedrooms</span>
                                </div>
                                <div class="flex gap-[6px] 3xl:gap-3">
                                    <img class="w-[12px] 2xl:w-[14px]" src="img/square.svg" alt="icon"> <span>214m<sup class="-top-2">2</sup></span>
                                </div>
                            </div>
                        </div>
                    </div>`;
    }
    
    document.querySelector('.hotels').innerHTML = markup;
    
    hotels.init();
}

let apartments = new Swiper(".apartments-carousel", {
    init: false,
    centeredSlides: true,
    paginationClickable: true,
    initialSlide: 3,
    navigation: {
        nextEl: ".apartments-button-next",
        prevEl: ".apartments-button-prev",
    },
    pagination: {
        el: ".apartments-pagination",
        clickable: true,
    },
    loop: true,
    speed: 1000,
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 16
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 16
        },
        1280: {
            slidesPerView: 5,
            spaceBetween: 16
        },
        1640: {
            slidesPerView: 5,
            spaceBetween: 16
        },
    }
});

const apartmentsData = [
    {
        type: 'Cottages',
        image: 5
    }, {
        type: 'Hotels',
        image: 1
    }, {
        type: 'Apartments',
        image: 2
    }, {
        type: 'Resorts',
        image: 3
    }, {
        type: 'Villas',
        image: 4
    }, {
        type: 'Cottages',
        image: 5
    }, {
        type: 'Hotels',
        image: 1
    }
];

function generateApartments() {
    let markup = '';

    for (const apartment of apartmentsData) {
        markup += `<div class="swiper-slide text-center">
                    <div class="max-md:max-w-[300px] max-md:m-auto">
                        <h3 class="gradient-text text-[28px] font-bold tracking-[0.3px] mb-[12px]">${apartment.type}</h3>
                        <img class="rounded-[15px]" src="img/apartment${apartment.image}.png" alt="apartment photo">
                    </div>
                </div>`;
    }

    document.querySelector('.apartments').innerHTML = markup;

    apartments.init();
}

generateHotels();
generateApartments();

let menuIcon = document.querySelector('.menu-icon');
let body = document.querySelector('body');
let html = document.querySelector('html');

menuIcon.addEventListener('click', function() {
    body.classList.toggle('menu-open');
    html.classList.toggle('menu-open');
});