// For1

/*
let k = 7;
let n = 5;

for (let i = 0; i < n; i++){
  console.log(k);
}
*/

// For2

/*
let a = 2;
let b = 7;
let count = 0;

for(let i = a; i <= b; i++){
  count++;
  console.log(i);
}

console.log(`${a} va ${b} sonlari ichida ${count} son mavjud`);
*/

// For3

/*
let a = 2;
let b = 7;
let count = 0;

for(let i =  b - 1; i > a; i--){
  console.log(i);
  count++;
}

console.log(`${a} va ${b} ichidagi sonlari sonni ${count}`);
*/

// For4

/*
let p = 1000;
let a = 1;
let b = 10;

for(let i = a; i <= b; i++){
  console.log(i * p);
}
*/

// For5

/*
let p = 1000;
let a = 0.1;
let b = 1;

for(let i = a; i <= b; i += 0.1){
  console.log(i * p);
}
*/

// For6

/*
let p = 1000;
let a = 1.2;
let b = 2;

for(let i = a; i <= b; i += 0.2){
  console.log(i * p);
}
*/

// For8

/*
let a = 1;
let b = 5;
let count = 1;

for(let i = a; i <= b; i++){
  count *= i;
}

console.log(count);
*/

// For9

/*
let a = 1;
let b = 5;
let sum = 0;

for(let i = a; i <= b; i++){
  sum += i**2;
}

console.log(sum);
*/

// For11

/*
let n = 5;
let s = 0;

for(let i = 0; i < n; i++){
  s += (n + i)**2;
}

console.log(s);
*/

// For12

/*
let n = 1.5; 
let a = 1.1;
let count = 1;

for (let i = a; i < n + 0.1; i += 0.1){
  count *= i;
}

console.log(count);
*/

// For13

/*
let a = 1.1;
let b = 1.3;
let s = 0;
let count = 0;

for(let i = a; i <= b + 0.1; i += 0.1){
  if(count == 0) {
    s += i;
    count--;
  } else{
    s -= i;
    count++;
  }
}

console.log(s.toFixed(1));
*/

// For14

/*
let n = 5;

for(let i = 1; i <= n; i += 2){
  console.log(i**2);
}
*/

// For15

/*
let n = 5;
let k = 3;
let sum = 1;

for(let i = 1; i <= k; i++){
  sum *= n;
}

console.log(sum);
*/

// For16

/*
let n = 8;
let a = 2;

for(let i = 1; i <= n; i++){
  console.log(a**i);
}
*/

// For17

/*
let a = 2;
let n = 5;
let sum = 0;

for(let i = 1; i <= n; i++){
  console.log(a**i);
  sum += a**i;
}

console.log(`Darajalar yig'indisi ${sum}`);
*/

// For18

/*
let a = 2;
let n = 5;
let sum = 0;

for(let i = 1; i < n; i++){
  console.log(a**i);
  sum += a**i;
}

console.log(`Darajalar yig'indisi ${sum}`);
*/

// For19

/*
let n = 5;
let sum = 1;

for(let i = 1; i <= n; i++){
  sum *= i;
}

console.log(sum);
*/

// Fo20

/*
let n = 5;
let sum = 1;
let count = 0;

for(let i = 1; i <= n; i++){
  count += sum *= i;
}

console.log(count);
*/

// For21

/*
let son = 3
let result = 1
  for(let i = 1; i <= son; i++) {
    let fuc = 1
    for(let l = i; l >= 1; l--) {
      fuc *= l
    }
    result += 1 + 1 / fuc
  }

  console.log(result)
*/

// For36

/*
let n = 3;
let k = 2;
let count = 0;  

for(let i = 1; i <= n; i++){
  console.log(i**k);
  count += i**k;
}

console.log(count);
*/

// For37

/*
let n = 3;  
let count = 0;

for(let i = 1; i <= n; i++){
  count += (i**i);
}

console.log(count);
*/

// For39

/*
let a = 2;
let b = 5;

for(let i = a; i <= b; i++){
  for(let j = 1; j <= i; j++){
    console.log(i);
  }
}
*/

// For40

/*
let a = 3;
let b = 6;
let c = 1;

for(let i = a; i <= b; i++){
  for(let j = 1; j <= c; j++){
    console.log(a);
  }
  c++;
  a++;
}
*/

// FizzBuzz

let a = 15;

if(a % 3 == 0 && a % 5 == 0){
  console.log("FizzBuzz");
} else if (a % 3 == 0){
  console.log("Fizz");
} else {
  console.log("Buzz");
}