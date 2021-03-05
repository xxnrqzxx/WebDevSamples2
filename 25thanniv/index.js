const pageElement = document.querySelectorAll(".page");
const pages = pageElement.length;
const sideNav = document.querySelector(".sidenav");
const indicator = document.querySelector(".indicator");
const pageNo = document.querySelector(".pageno");
const headeranniv = document.querySelector(".headeranniv");
const silverconfetti = document.querySelector(".silverconfetti");
var dot;
var indicatorHide = setTimeout(function() {
                        indicator.classList.remove("show");
                    }, 3000);

var pageNoHide = setTimeout(function() {
                    pageNo.style.opacity = 0;
                }, 3000)
let page = 1;


window.addEventListener("DOMContentLoaded", function() {

    resizePage(pageElement);

    pageElement[0].classList.add("active");

    for(let i=0; i<pages; i++) {
        pageElement[i].style.zIndex = pageElement.length - i;
        console.log(pageElement[i].classList[0]);
        indicator.innerHTML += "<div class='dot "+(pageElement[i].classList[0])+"'></div>"
        
        dot = document.querySelectorAll(".dot");
        dot[0].classList.add("active");
    }


    window.addEventListener("wheel", event=> {

        var data;

        pageElement.forEach(pEl => {
            if(pEl.classList.contains("active")) {
                if(event.deltaY < 0) {
                    data = Number(pEl.dataset.pageno)-1;
                    if(data<=0) {
                        data = 1;
                    }
                } else {
                    data = Number(pEl.dataset.pageno)+1;
                    if(data>pages) {
                        data = pages;
                    }
                }

                scrollHandle(pEl, data, page);
                toggleSideNav();
            }
        });
    });

    sideNav.addEventListener("mouseover", toggleSideNav);

    indicator.addEventListener("mouseover", ()=>{
        dot.forEach(function(dotEl) {
            dotEl.classList.add("hover");
        });
    });
    indicator.addEventListener("mouseout", ()=>{
        dot.forEach(function(dotEl) {
            dotEl.classList.remove("hover");
        });
    });

});

window.addEventListener("resize", function() {
    resizePage(pageElement);
});

window.addEventListener("click", event=> {
    const element = event.target;
    
    if(element.classList.contains("dot") && !element.classList.contains("active")) {
        pageElement.forEach(function(pEl) {
            pEl.classList.remove("active");
            pEl.classList.add("hide");

            dot.forEach(function(dEl) {
                dEl.classList.remove("active");
            })

            if(element.classList.contains(pEl.classList[0])) {
                pEl.classList.remove("hide");
                setTimeout(function() {
                    pEl.classList.add("active");
                    element.classList.add("active");
                }, 300);

                page = pEl.dataset.pageno;
                togglePageNo(page);
            }
        });
    }
})

function resizePage(pageElement) {
    

    var winWidth = window.innerWidth+"px";
    var winHeight = window.innerHeight+"px";
    
    silverconfetti.width = window.innerWidth;
    headeranniv.width = window.innerWidth - 500;
    pageElement.forEach(function(pEl) {
        pEl.style.transition = "none";
        pEl.style.width = winWidth;
        pEl.style.height = winHeight;

        setTimeout(function() {
            pEl.style.transition = "all 1s ease";
        }, 300);
    })

}

function scrollHandle(pEl, data, page) {
    var nextPage = document.querySelector("[data-pageno='"+data+"']");
    var nextDot = document.querySelector(".dot."+(nextPage.classList[0])+"");
    var currentDot = document.querySelector(".dot."+(pEl.classList[0])+"");

    if(pEl.className === nextPage.className) {
        page = nextPage.dataset.pageno;
        return togglePageNo(page); 
    }

    pEl.classList.remove("active");
    currentDot.classList.remove("active");

    pEl.classList.add("hide");
    nextPage.classList.remove("hide");

    page = nextPage.dataset.pageno;

    setTimeout(()=>{
        nextPage.classList.add("active");
        nextDot.classList.add("active");
    }, 300);

    togglePageNo(page);    
}

function toggleSideNav() {
    
    indicator.classList.add("show");
    
    clearTimeout(indicatorHide);

    indicatorHide = setTimeout(function() {
        indicator.classList.remove("show")
    }, 3000)
}

function togglePageNo(page) {
    pageNo.innerHTML = page+" / "+pages;

    pageNo.style.opacity = 1;

    clearTimeout(pageNoHide);

    pageNoHide = setTimeout(function () {
                    pageNo.style.opacity = 0;
                }, 3000)
}