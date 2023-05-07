const button = document.getElementById("button");
const div =document.getElementById("countdown")
button.addEventListener("click",()=>{
    if(div.className!==""){
        div.className="";
        div.textContent=""
    }
    let time=10;
    setTimeout(function() {
        
        div.innerHTML = time;
        time--;
        
        setTimeout(function() {
          div.innerHTML = time;
            time--

          setTimeout(function() {
            div.innerHTML = time;
            time--

            setTimeout(function() {
              div.innerHTML = time;
                time--

              setTimeout(function() {
                div.innerHTML = time;
                time--

                setTimeout(function() {
                  div.innerHTML = time;
                    time--

                  setTimeout(function() {
                    div.innerHTML = time;
                    time--

                    setTimeout(function() {
                      div.innerHTML = time;
                        time--

                      setTimeout(function() {
                        div.innerHTML = time;
                        time--

                        setTimeout(function() {
                          div.innerHTML = time;
                            time--

                          setTimeout(function() {
                            div.setAttribute("class","count")
                            div.innerHTML = "Happy Independence Day!";
                            
                          }, 1000);
                        }, 1000);
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
      
})