document.addEventListener("DOMContentLoaded", () => {

    //menu show & hide

    const navLinks = document.querySelectorAll(".nav_link");
    const dropdown = document.querySelector(".nav_dropdown");

    for (let link of navLinks) {
        if (link.nextElementSibling != null) {
            link.addEventListener("click", function (e) {
                e.stopPropagation(); //this stops the event from bubbling up to the body
                dropdown.classList.toggle("active");
            });
            link.addEventListener("keydown", function (e) {
                if (e.keyCode.toString() === "27" && dropdown.classList.contains("active")) {
                    dropdown.classList.toggle("active");
                }
            });
        }
    }

    window.addEventListener("click", function (e) {
        dropdown.classList.remove("active");
    });

    // sticky menu

    window.onscroll = function () {
        stickyMenu();
    };

    const header = document.querySelector(".header");
    let sticky = header.offsetTop;

    function stickyMenu() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }

});