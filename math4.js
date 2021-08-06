function findlargest(first, second, third) {
    if (first > second && first > third) {
        return first;
    }
    else if (second > first && second > third) {
        return second;
    }
    else {
        return third;
    }
}
const largest = findlargest(121200, 5999, 233444);
console.log("largest is", largest);
