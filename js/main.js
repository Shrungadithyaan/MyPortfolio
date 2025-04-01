// Navbar new start
// $(document).ready(function () {

//     $('#menu').click(function () {
//         $(this).toggleClass('fa-times');
//         $('.navbar').toggleClass('nav-toggle');
//     });

//     $(window).on('scroll load', function () {
//         $('#menu').removeClass('fa-times');
//         $('.navbar').removeClass('nav-toggle');

//         if (window.scrollY > 60) {
//             document.querySelector('#scroll-top').classList.add('active');
//         } else {
//             document.querySelector('#scroll-top').classList.remove('active');
//         }

//         // scroll spy
//         $('section').each(function () {
//             let height = $(this).height();
//             let offset = $(this).offset().top - 200;
//             let top = $(window).scrollTop();
//             let id = $(this).attr('id');

//             if (top > offset && top < offset + height) {
//                 $('.navbar ul li a').removeClass('active');
//                 $('.navbar').find(`[href="#${id}"]`).addClass('active');
//             }
//         });
//     });
// });

// Navbar new end






/* -----------------navigation menu------------- */
// (() =>{
//     const hamburgerBtn = document.querySelector(".hamburger-btn"),
//     navMenu = document.querySelector(".nav-menu"),
//     closeNavBtn = navMenu.querySelector(".close-nav-menu");

//     hamburgerBtn.addEventListener("click", showNavMenu);
//     closeNavBtn.addEventListener("click", hideNavMenu );

//     function showNavMenu(){
//         navMenu.classList.add("open");
//         bodyScrollingToggle();
//     }

//     function hideNavMenu(){
//         navMenu.classList.remove("open");
//         fadeOutEffect();
//         bodyScrollingToggle();

//     }

//     function fadeOutEffect(){
//         document.querySelector(".fade-out-effect").classList.add("active");
//         setTimeout(()=>{
//             document.querySelector(".fade-out-effect").classList.remove("active");
//         },300)
//     }
//     //attach an event handler to document
//     document.addEventListener("click",(event)=>{
//         if(event.target.classList.contains('link-item')){
//             // console.log(event.target.hash);

//             if(event.target.hash !== ""){
//                 //prevent default achor click behavior
//                 event.preventDefault();
//                 const hash = event.target.hash;
                
//                 // deactivate existing active section
//                 document.querySelector(".section.active").classList.add("hide");
//                 document.querySelector(".section.active").classList.remove("active");
//                 // active new 'section'
//                 document.querySelector(hash).classList.add("active");
//                 document.querySelector(hash).classList.remove("hide");
                
                
//                 // deactivate existing active navigation menu 'link-item'
//                 navMenu.querySelector(".active").classList.add("outer-shadow","hover-in-shadow");
//                 navMenu.querySelector(".active").classList.remove("active","inner-shadow");

//                 // If click "link-item is contained withing the navigation menu"
//                 if(navMenu.classList.contains("open")){
//                 //active new navigation menu 'link-item'
//                 event.target.classList.add("active","inner-shadow");
//                 event.target.classList.remove("outer-shadow","hover-in-shadow");

//                 //hide navigation menu
//                 hideNavMenu();
//                 // console.log(" If click 'link-item is contained withing the navigation menu'");

//                 }else{
//                 // console.log(" If click 'link-item is not contained withing the navigation menu'");
//                 let navItems = navMenu.querySelectorAll(".link-item");
//                 navItems.forEach((item) => {
//                     if(hash === item.hash){
//                 //active new navigation menu 'link-item'
//                 item.classList.add("active","inner-shadow");
//                 item.classList.remove("outer-shadow","hover-in-shadow");
//                     }
//                 })
//                 fadeOutEffect();

//                 }

//                 window.location.hash = hash;
//             }
//         }
//     })
    
// }) ();



/*-- About section tab--------*/

//immediatly invoked function expression using arrow functions

(() =>{
    const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) => {
        /* if event.target contains 'tab-item' and not contain 'active' class*/
        if(event.target.classList.contains("tab-item") && !event.target.classList.contains("active")) {
            // console.log("event.target contains 'tab-item' class and not 'active' class");
            // console.log(event.target);
            const target = event.target.getAttribute("data-target");
            // console.log(target);
            // deeactive existing  active 'tab-items'
            tabsContainer.querySelector(".active").classList.remove("outer-shadow","active");

            //active new 'tab-items'
            event.target.classList.add("active","outer-shadow");
            // deactivate existing active 'tab-content'
            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            //active new 'tab-content'
            aboutSection.querySelector(target).classList.add("active");
        }
    })
})();

function bodyScrollingToggle(){
    document.body.classList.toggle("hidden-scrolling");
}

/* --------------------------- portfolio filter and popup --------------------- */

(() =>{
    const filterContainer = document.querySelector(".portfolio-filter"),
    portfolioItemsContainer = document.querySelector(".portfolio-items"),
    portfolioItems = document.querySelectorAll(".portfolio-item"),
    popup = document.querySelector(".portfolio-popup"),
    prevBtn = popup.querySelector(".pp-prev"),
    nextBtn = popup.querySelector(".pp-next"),
    closeBtn = popup.querySelector(".pp-close"),
    projectDetailsContainer = popup.querySelector(".pp-details"),
    projectDetailBtn = popup.querySelector(".pp-project-details-btn");

    let itemIndex, slideIndex, screenshots;

    /* filter portfolio item */
    filterContainer.addEventListener("click",(event)=>{
        // console.log(event.target);
        if(event.target.classList.contains("filter-item") && !event.target.classList.contains("active")){
            
            // deactivate existing active 'filter-item'
            filterContainer.querySelector(".active").classList.remove("outer-shadow","active");

            //activate new 'filter item'

            event.target.classList.add("active","outer-shadow");
            const target = event.target.getAttribute("data-target");
            // console.log(target);
            portfolioItems.forEach((item)=>{
                // console.log(item);
                // console.log(item.getAttribute("data-category"));

                if(target == item.getAttribute("data-category") || target == 'all'){
                    item.classList.remove("hide");
                    item.classList.add("show");
                }else{
                    item.classList.remove("show");
                    item.classList.add("hide");
                }

            })
        }
       
    })

    portfolioItemsContainer.addEventListener("click", (event) =>{
        if(event.target.closest(".portfolio-item-inner")){
            const portfolioItem = event.target.closest(".portfolio-item-inner").parentElement;
            // console.log(portfolioItem);

            // get the portfolioItem index

            itemIndex = Array.from(portfolioItem.parentElement.children).indexOf(portfolioItem);
            // console.log(itemIndex);

            screenshots = portfolioItems[itemIndex].querySelector(".portfolio-item-img img").getAttribute("data-screenshots");
            
            //convert screenshots into array
            screenshots=screenshots.split(",");
            if(screenshots.length === 1){
                prevBtn.style.display="none";
                nextBtn.style.display="none";

            }else{
                prevBtn.style.display="block";
                nextBtn.style.display="block";
            }
            slideIndex = 0;
            // console.log(screenshots);
            popupToggle();
            popupSlideshow();
            popupDetails();
        }
    })

    closeBtn.addEventListener("click",()=>{
        popupToggle();
        if(projectDetailsContainer.classList.contains("active")){
            popupDetailsToggle();
        }
    })

    function popupToggle(){
        popup.classList.toggle("open"); 
        bodyScrollingToggle();
    }

    function popupSlideshow(){
        const imgSrc = screenshots[slideIndex];
        const popupImg = popup.querySelector(".pp-img");


        popup.querySelector(".pp-loader").classList.add("active");
        popupImg.src = imgSrc;
        // console.log(imgSrc);

        popupImg.onload = () =>{
            // deactivate loader after the popupImg loader
            popup.querySelector(".pp-loader").classList.remove("active");
        }

        popup.querySelector(".pp-counter").innerHTML = (slideIndex+1)+" of "+ screenshots.length;

    }
        //next slide 
        nextBtn.addEventListener("click",() =>{
            if(slideIndex === screenshots.length-1) {
                slideIndex =0;
            }else{
                slideIndex ++;

            }
            popupSlideshow();
            // console.log("slideIndex :"+slideIndex);
        })

        //prev slide
        prevBtn.addEventListener("click",() =>{
        if(slideIndex === 0) {
            slideIndex =screenshots.length-1;
        }else{
            slideIndex --;

        }
        popupSlideshow();
        // console.log("slideIndex :"+slideIndex);
    })

    function popupDetails(){
        if(!portfolioItems[itemIndex].querySelector(".portfolio-item-details")){
            projectDetailBtn.style.display="none";
            return; 
        }
        projectDetailBtn.style.display="block";
        //get portfolio details
        const details = portfolioItems[itemIndex].querySelector(".portfolio-item-details").innerHTML;
        // set the project details
        popup.querySelector(".pp-project-details").innerHTML = details;
        // get the project title

        const title = portfolioItems[itemIndex].querySelector(".portfolio-item-title").innerHTML;
        // console.log(title);
        // set the project details

        popup.querySelector(".pp-title h2").innerHTML = title;

        // get the project category

        const category = portfolioItems[itemIndex].getAttribute("data-category");
        // console.log(category);

        // set the project category

        popup.querySelector(".pp-project-category").innerHTML = category.split("-").join(" ");
    }

    projectDetailBtn.addEventListener("click",()=>{
        popupDetailsToggle();
    })
    function popupDetailsToggle(){
        if(projectDetailsContainer.classList.contains("active")){
            projectDetailBtn.querySelector("i").classList.remove("fa-minus");
            projectDetailBtn.querySelector("i").classList.add("fa-plus");
            projectDetailsContainer.classList.remove("active");
            projectDetailsContainer.style.maxHeight = 0 + "px";
            // console.log("true");
        }else{
            projectDetailBtn.querySelector("i").classList.remove("fa-plus");
            projectDetailBtn.querySelector("i").classList.add("fa-minus");

            projectDetailsContainer.classList.add("active");
            projectDetailsContainer.style.maxHeight = projectDetailsContainer. scrollHeight + "px";

            popup.scrollTo(0,portfolioItemsContainer.offsetTop);
        }
    }
    
})();


//  -------------------------testimonial slider--------------------------------------- // 

(() => {
    // console.log("Hello");

    const sliderContainer = document.querySelector(".testi-slider-container"),
    slides = sliderContainer.querySelectorAll(".testi-item"),
    // console.log(slides);
    slideWidth = sliderContainer.offsetWidth,
    prevBtn = document.querySelector(".testi-slider-nav .prev"),
    nextBtn = document.querySelector(".testi-slider-nav .next");
    activeSlide = sliderContainer.querySelector(".testi-item.active");
    let slideIndex = Array.from(activeSlide.parentElement.children).indexOf(activeSlide);
    // console.log(slideIndex);

    // set width of all slides

    slides.forEach((slide) => {
        slide.style.width = slideWidth + "px";
    })

    //set width of sliderContainer
    sliderContainer.style.width = slideWidth * slides.length + "px";

    nextBtn.addEventListener("click", () => {
        if(slideIndex == slides.length-1){
            slideIndex = 0;
        }else{
            slideIndex++;

        }
        // console.log(slideIndex);
        // sliderContainer.style.marginLeft = - (slideWidth * slideIndex) + "px";
        slider();
    })

    prevBtn.addEventListener("click",()=>{
        if(slideIndex == 0){
            slideIndex = slides.length -1 ;
        }else{
            slideIndex--;
        }
        slider();

    })

    function slider(){
        // deactivate existing active slides

        sliderContainer.querySelector(".testi-item.active").classList.remove("active");

        // active new slide
        slides[slideIndex].classList.add("active");

        sliderContainer.style.marginLeft = - (slideWidth * slideIndex) + "px";

    }
    slider();
})();



/*-----------------hide all sections except active -------------*/
// (()=>{

//     const sections = document.querySelectorAll(".section");
//     sections.forEach((section)=>{
//         if(!section.classList.contains("active")){
//             section.classList.add("hide");
//         }
//     })

// })();


window.addEventListener("load", ()=>{
    //preloader

    document.querySelector(".preloader").classList.add("fade-out");
    setTimeout(()=>{
    document.querySelector(".preloader").style.display="none";

    })
})