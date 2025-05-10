document.addEventListener("DOMContentLoaded", () => {
 
  let toggle_navbar = document.getElementById("toggle_navbar");
  let navbar = document.querySelector("nav");
  
  let more_info = document.getElementsByClassName("container_question_response");
  
  for(let info of more_info)
  { let question = info.children[0];
    console.log(question);
    question.addEventListener("click", (e) => {
      const response = e.target.parentNode.children[1];
      let is_close = e.target.classList.contains("close");
      console.log("e ==>", e.target)
      if(is_close)
      { e.target.classList.remove("close");
        e.target.classList.add("open");
        response.style.display = "block";
      }
      if(!is_close)
      { e.target.classList.remove("open");
        e.target.classList.add("close");
        response.style.display = "none";
      }
    });

  }

  toggle_navbar.addEventListener("click", () => {
    let is_close = navbar.classList.contains("close");
    
    if(is_close)
    { navbar.classList.add("open");
      navbar.classList.remove("close")
    }
    else
    { navbar.classList.add("close");
      navbar.classList.remove("open");
    }
  });
});