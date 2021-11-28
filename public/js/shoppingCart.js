window.onload = function () {
    let data = document.querySelector(".data");
    let formEdit = document.querySelector(".form-edit");
    let editView = document.querySelector(".edit-view");

    editView.addEventListener('click', function () {
        data.classList.toggle('none');
        data.classList.toggle('block');
        formEdit.classList.toggle('none');
        formEdit.classList.toggle('block');
    })
}