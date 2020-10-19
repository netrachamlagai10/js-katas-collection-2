function add(a,b){
    let result = a+b;
    return result;
}
console.log(add(2,4));

function multiply(a, b) {
    let result = 0;
    let counter= 0;
    while (counter<b) {
        result=add (a,result) 
        counter++
    }
    return result;
}
console.log(multiply(6,4));

function power(x,n) {
    let result = 1; 
    let count =0;
    while (count<n){
        result = multiply (x,result)
        count ++
    }
    return result;
}

console.log(power(2,8));
console.log(power(3,4));

function factorial (a){
    let result = 1;
    let counter = 0;
    while (counter<a) {
        result = multiply(a-counter,result)
        counter ++
    }
    return result;
}
console.log(factorial(5));

function fibonacci(n){
    let total =0;
    let counter =0;
    let result =1;
    let count =2;
    while (count < n){
        total = add(counter, result)
        counter=result
        result=total 
        count += 1
    }
    return total
}
console.log(fibonacci(8));

