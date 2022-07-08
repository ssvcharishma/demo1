function add(a: number ,b: number, ...rest: number[]){
    return a + b + rest.reduce((p,c)=> p+c,0);
}
console.log(add(6,6,6,6,6,6,6));