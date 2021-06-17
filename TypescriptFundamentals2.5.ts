const myArray : number [] = [1,3,5,7];

function incrementArrayElementsBy1(myArry: number[]){
    for(let i=0;i<myArray.length;i++){
        myArry[i] = myArry[i] + 1;
    }
    return myArry;
}
console.log("input array: " + myArray)
console.log("incrementArrayBy1: " + incrementArrayElementsBy1(myArray))