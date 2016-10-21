
var ul = document.getElementById("list");
var expansion = document.getElementById("expand");

function Person(name, lname, description, image, DOM){
    this.name = name;
    this.lname = lname;
    this.description = description;
    this.image = image;
    this.dom;
}

Person.prototype.expand = function(){
    var str = "<button type=\"submit\" id=\"eQuit\" onclick=\""+
    this.name+".removeExpansion()\">X</button><h1>" + this.name + " " +
        this.lname + "</h1><p>" + this.description + "</p>"; 
    expansion.innerHTML = str;   
    expansion.style.zIndex = "1";
    expansion.style.opacity = "1";
}

Person.prototype.removeDOM = function(){
    var dom = document.getElementById(this.name);
    dom.parentNode.removeChild(dom);
}

Person.prototype.createDOM = function(){
    var li = document.createElement("li");
    li.id = this.name;
    var div = document.createElement("div");
    div.className = "uProfile";
    div.setAttribute("onclick", this.name+".expand()");
    div.innerHTML = "<p>"+this.name+" "+this.lname+"</p>";
    li.appendChild(div);   
    ul.appendChild(li);
    this.dom = div;
}

Person.prototype.removeExpansion = function(){
    expansion.innerHTML = "";
    expansion.style.zIndex = "-1";
    expansion.style.opacity = "0";
}

var Azim = new Person("Azim","BekkodJaev", 
"The Best");
Azim.createDOM();

var Chloe = new Person("Chloe","Sanderson", 
"The Best");
Chloe.createDOM();

var Dana = new Person("Dana", "Lance", 
"Description1111");
Dana.createDOM();

var Sam = new Person("Sam", "Trinidad", 
"Description1111");
Sam.createDOM();

var Teara = new Person("Teara", "Duch", 
"Description1111");
Teara.createDOM();

