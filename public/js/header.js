window.onload = function () {
    /* DEPLOYABLE NAVIGATION BAR */
    let bar = document.querySelector(".container-navbar");
    let articleOne = document.querySelector(".header")

    articleOne.addEventListener("mouseover", function () {
        bar.classList.add("deployable");
    });
    articleOne.addEventListener("mouseout", function () {
        bar.classList.remove("deployable")
    })
    /* USER LOGIN IMAGE */
    let img = document.getElementById("img");
    let dropdown = document.querySelector(".dropdown")
    dropdown.style.display = "none";
    img.addEventListener("mouseover", () => {
        dropdown.style.display = "block";
    });
    img.addEventListener("mouseout", function () {
        dropdown.style.display = "none";
    });
}