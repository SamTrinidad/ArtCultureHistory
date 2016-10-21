'use strict';
function displayNames(){
        var names = ["Azim BekkodJaev", "Chloe Sanderson", "Dana Lamce", "Sam Trinidad", "Teara Duch"];
        var ul = document.getElementById("list");
        var i;
        for(i=0;i<names.length;i++){
            var name = document.createElement("li");
            name.addEventListener("click",expand);
            name.innerHTML = "<div class=\"uProfile\"><p>" + names[i] + "</p></div>";
            ul.appendChild(name);
        }
    }
    
    function expand(e){
        var others = document.getElementById("expand");
        if(others){
            others.id= "";
        }
        this.firstChild.id= "expand"; 
        var button = document.createElement("input");
        button.setAttribute("type","button");
        button.setAttribute("value","X");
        button.style.position = "absolute";
        button.style.top = "5px";
        button.style.right= "5px";

        button.addEventListener("click", close);
        this.removeEventListener("click", expand);
        this.firstChild.appendChild(button);
    }
    
    function close(){
        var div = this.parentNode;
        div.id="";
    }
 
  displayNames();