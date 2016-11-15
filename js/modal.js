;(function () {

    var btnItem = document.querySelector('.btn-item');
    var btnClose = document.querySelector('.modal-content-close');
    var formModal = document.querySelector('.modal-content');
    var form = formModal.querySelector("form");
    var userName = formModal.querySelector("[name=userName]");
    var userEmail = formModal.querySelector("[name=userEmail]");
    var storage = localStorage.getItem("userName");

    btnItem.addEventListener('click', function (event) {
        event.preventDefault();
        formModal.classList.add('modal-content-show');
        if (storage) {
            userName.value = storage;
            userEmail.focus();
        }else {
            userName.focus();
        }
    });

    btnClose.addEventListener('click', function (event) {
        event.preventDefault();
        formModal.classList.remove('modal-content-show');
        formModal.classList.remove("modal-error");
    });
     form.addEventListener("submit", function(event) {
        if (!userName.value || !userEmail.value){
            event.preventDefault();
            formModal.classList.remove("modal-error");
        }else {
            localStorage.setItem("userName", userName.value);
        }
    });

    window.addEventListener ("keydown", function(event) {
        if (event.keyCode === 27) {
            if (formModal.classList.contains("modal-content-show")) {
                formModal.classList.remove("modal-content-show");

            }
        }
    })


}());
