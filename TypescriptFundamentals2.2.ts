function myFun(num: number){
    if(num == null) // we can have if( num === null || typeof of num === 'undefined')
    {
        return -1;
    }
    else
    return num;
}

var num ;
console.log(myFun(5));
console.log(myFun(null));
console.log(myFun(num));