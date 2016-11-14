 
    var press = document.querySelector(".btn-item");

    var openModal = document.querySelector(".modal-content");

    var close = openModal.querySelector(".modal-content-close");
    
    var form = openModal.querySelector("form");
    var userName = openModal.querySelector("[name=userName]");
    var userEmail = openModal.querySelector("[name=userEmail]");

    var storage = localStorage.getItem("userName");
      
      press.addEventListener("click", function(event) {
      event.preventDefault();
      openModal.classList.add("modal-content-show");
      
      if (storage) {
        userName.value = storage;
        userEmail.focus(); 
      }else {
        userName.focus();
      }

    });

      close.addEventListener("click", function(event) {
        event.preventDefault();
        openModal.classList.remove("modal-content-close");
        openModal.classList.remove("modal-error");
    });

    form.addEventListener("submit", function(event) {
      if (!userName.value || !userEmail.value);
          event.preventDefault();
          openModal.classList.remove("modal-error");
          openModal.offsetWidth = openModal.offsetWidth
          openModal.classList.add("modal-error");
          console.log("Нужно ввести имя и email");
      }else {
          localStorage.setItem ("userName", userName.value);
      }
    });

    window.addEventListener ("keydown", function(event);
      { if (event.keyCode ===27) {
          if (openModal.classList.contains("modal-content-show");
            openModal.classList.remove("modal-error");
       }

      }
      );
    }
  }
  }
    
