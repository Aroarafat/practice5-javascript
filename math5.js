function findsmallest(first, second, third) {
    if (first < second && first < third) {
        return first;
    }
    else if (second < first && second < third) {
        return second;
    }
    else {
        return third;
    }
}
const smallest = findsmallest(12, 11, 9);
console.log("smallest number is:", smallest);