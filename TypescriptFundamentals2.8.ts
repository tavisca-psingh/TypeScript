class Addition {
    add(str1: string , str2 : string) : string ;
    add(num1: number , num2: number): number;
    //way 1
    // this has problem with type checking since user can pass any value apart from string and number
    // and user needs to have check for other values 
    add(n1: any , n2: any): string | number {  

        if(n1 == null|| n2 == null)
        return "Value passed is either not a string or number";
        else
        return n1 + n2;
    }

    //way 2
  /*   add(n1: string | number , n2: string | number): string | number {
        if ( typeof(n1) === 'string' && typeof(n2) === 'string'){
            return n1.concat(n2);
        }else if(typeof(n1) === 'number' && typeof(n2) === 'number'){
            return n1+n2;
        }
    } */

     verifyOutput(actual : string| number, expected: string | number) {

       if( actual === expected )
       {
           console.log(`Test case passed as expected value was ${actual} against input value ${expected}`);
       }

       else
       {
           console.log(`Test case failed as expected value was ${expected} and actual value received is ${actual}`)
       }
    
    }

}

var addObject = new Addition();

const str1 : string = "Pardeep";
const str2: string = "Singh";

addObject.verifyOutput(addObject.add(str1, str2), "PardeepSingh");
addObject.verifyOutput(addObject.add(5,6), 11);
addObject.verifyOutput(addObject.add(null,1),1);
addObject.verifyOutput(addObject.add(undefined,"str"),"str");
