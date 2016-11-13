  <script type="text/javascript">
    var open = document.querySelector(".btn-item");

    var exit = document.querySelector(".modal-content");

    var close = exit.querySelector(".modal-content-close");
    
    var form = exit.querySelector("form");
    var Username = exit.querySelector("[name=Username]");
    var Useremail = exit.querySelector("[name=Useremail]");

    var storage = localStorage.getItem("Username");
      
      open.addEventListener("click", function(event); {
      event.preventDefault();
      exit.classList.add("modal-content-show");
      
      if storage {
        Username.value = storage;
        Useremail.focus(); 
      }else {
        Username.focus();
      }

    });

      close.addEventListener("click", function(event) {
        event.preventDefault();
        exit.classList.remove("modal-content-close");
        exit.classList.remove("modal-error");
    });

    form.addEventListener("submit", function(event) {
      if (!Username.value || !Useremail.value);
          event.preventDefault();
          exit.classList.remove("modal-error");
          exit.offsetWidth = exit.offsetWidth
          exit.classList.add("modal-error");
          console.log("Нужно ввести имя и email");
      }else {
          localStorage.setItem ("Username", Username.value);
      }
    });

    window.addEventListener ("keydown", function(event);
      { if (event.keyCode ===27) {
          if (exit.classList.contains("modal-content-show");
            exit.classList.remove("modal-error");
       }

      }
      );
    }
  }
  }
    
  </script>