function genericFunctionWhichWillAcceptAnyTypeAndReturnSameType<T>(param:T) : T{
    return param;
}

let stringValue : string = genericFunctionWhichWillAcceptAnyTypeAndReturnSameType("Pardeep");

let intValue : number = genericFunctionWhichWillAcceptAnyTypeAndReturnSameType(7);

console.log(`String value is: ${stringValue}`);
console.log(`Number value is : ${intValue}`);