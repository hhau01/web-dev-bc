var comments = {};

comments.data = ["Good Job!", "Bye", "Lame..."];

console.log(comments.data)

console.log(comments)

function print(arr) {
    arr.forEach(function(el) {
        console.log(el);
    });
}

// print(comments.data);

comments.print = function() {
    this.data.forEach(function(el) {
        console.log(el);
    });
}

comments.print();