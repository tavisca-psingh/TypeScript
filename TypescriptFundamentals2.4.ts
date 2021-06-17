function calculateSumOfNNumbers(num : number){

    let sumOfNumbers : number =0;
    for(let i =1;i<=num;i++)
    {
        sumOfNumbers = sumOfNumbers + i;
    }
    return sumOfNumbers;
}

console.log(calculateSumOfNNumbers(6));
console.log(calculateSumOfNNumbers(5));