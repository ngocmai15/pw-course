function getMax(a, b){
    if (a > b){
        return a;
    };
    if (a < b){
        return b;
    };
}
console.log("Max =", getMax(10, 15));