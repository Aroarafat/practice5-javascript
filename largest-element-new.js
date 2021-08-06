function largestelement(numbers) {
    let largest = 0;

    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}
const ages = [12, 13, 14, 15, 16, 17];
const oldest = largestelement(ages);
console.log(oldest);
