window.onload = function () { 
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