// Add functions as properties in objects
// Prevent namespace collisions

var obj = {
    name: "Chuck",
    age: 45,
    isCool: false,
    friends: ["bob", "tina"],
    add: function(x,y) {
        return x+y;
    }
}

console.log(obj.add(10,5));

var dog = {
    speak: function() {
        return "WOOF!";
    }
};

var cat = {
    speak: function() {
        return "MEOW!";
    }
};

console.log(dog.speak());
console.log(cat.speak());