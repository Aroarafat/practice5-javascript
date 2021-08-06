function fibonacci(num) {
    if (typeof num != 'number') {
        return "please give a number";
    }
    if (num < 2) {
        return "please enter a positive number which is greater than 1"
    }
    const fibo = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];

    }
    return fibo;
}
const fiboseries = fibonacci(2);
console.log(fiboseries);