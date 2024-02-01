function loading() {
    var tl = gsap.timeline()
    tl.to(".yellow1", {
        top: "-100%",
        delay: 0.5,
        duration: 0.7,
        ease: "expo.out"
    })
    tl.from(".yellow2", {
        top: "100%",
        delay: 0.6,
        duration: 0.7,
        ease: "expo.out"
    }, "anim")
    tl.to("#loader h1", {
        color: "black",
        delay: 0.6,
        duration: 0.7,
    }, "anim")
    tl.to("#loader", {
        opacity: 0
    })
    tl.to("#loader", {
        display: "none"
    })

}
loading();

function loco() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('.main'),
        smooth: true
    });
    document.querySelector(".footer h3").addEventListener("click", () => {
        scroll.scrollTo(0)
    })
}
loco();

function page2anim() {
    var elems = document.querySelectorAll(".elem")
    var page2 = document.querySelector(".page2")
    elems.forEach(function (ele) {
        ele.addEventListener("mouseenter", function () {
            var bgimg = ele.getAttribute("data-img")
            page2.style.backgroundImage = `url(${bgimg})`
        })
    })
}
page2anim();

function navAnim() {
    var p = document.querySelectorAll("#navr");
    var plus = document.querySelector(".plus");
    var page1 = document.querySelector(".page1");

    plus.addEventListener("click", function () {

        p.forEach(function (element) {
            if (element.style.display === "none" || element.style.display === "") {
                element.style.display = "block";
            } else {
                element.style.display = "none";
            }

            plus.style.transform = (plus.style.transform === "rotate(90deg)" || plus.style.transform === "") ? "rotate(0)" : "rotate(90deg)";
             
        });

    });
}

navAnim();