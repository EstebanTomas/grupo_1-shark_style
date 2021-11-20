window.onload = function () {
    let image = document.getElementById("imagen-principal");
    let p1 = document.getElementById("p3");

    function copy() {
        var copyText = document.querySelector("#input");
        copyText.select();
        document.execCommand("copy");
    }
    document.querySelector("#copy").addEventListener("click", copy);
}