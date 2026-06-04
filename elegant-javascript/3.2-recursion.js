function isEven(num){
    return num>=0? !Boolean(num%2): isEven(num-2);
}
console.log(isEven(3),isEven(82), isEven(-25.11), isEven(-398.42), isEven(-1));