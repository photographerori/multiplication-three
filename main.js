// Basic
for (let index = 0; index <= 100; index++) {
  if (index % 3 === 0) {
    console.log(index + "!!!!!!!!");
  } else {
    console.log(index);
  }
}

// FizzBuzz
const fizzBuzz = function(number) {
  for (let index = 1; index <= number; index++) {
    if (index % 15 === 0) {
      console.log("FizzBuzz");
    } else if (index % 5 === 0) {
      console.log("Buzz");
    } else if (index % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(index);
    }
  }
};
fizzBuzz(30);

const likeNumberThree = function(number) {
  for (let index = 0; index <= number; index++) {
    const str = String(index);
    if (str.includes("3") === true || index % 3 === 0) {
      console.log(index + "!!!!!");
    } else {
      console.log(index);
    }
  }
};
likeNumberThree(100);

let count = 1;
const countUp = function() {
  if (count > 30) {
    clearInterval(timer);
  } else
  if (count % 15 === 0) {
    console.log("FizzBuzz");
  } else if (count % 5 === 0) {
    console.log("Buzz");
  } else if (count % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(count);
  }
  count++;
};

setInterval(countUp, 1000);
