

function Person(name, description, image, DOM){
    this.name = name;
    this.description = description;
    this.image = image;
    this.obj = DOM;
}


Person.prototype.getName = function(){
    return this.name;
}

var sam = new Person("Sam");

console.log(sam.getName);