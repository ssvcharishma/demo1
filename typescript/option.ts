function add1(a: number,b: number,c?: number){
    return a + b + (c||0);

}
console.log(add1(2,3))