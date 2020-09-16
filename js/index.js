//let message = 'Hello World';
//const message = '456'; // string
//alert(message);

//const sum = 2 + 2; // number
//alert(sum);

const age = parseFloat(prompt('Enter you age')); // peretvorili stroky v cifry
alert('Your age is' + age);

//const nextAge = age + 1;
const nextAge = add(age, 1);
alert('Next year you will be ' + nextAge);

if (age < 18) { //< > <= >= === == !== || &&
    alert('You are underaged!');
} else {
    alert('You are adult!');
}

function add(a, b) {
    const sum = a + b;
    return sum;
}