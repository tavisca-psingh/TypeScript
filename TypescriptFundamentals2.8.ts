class Addition {
    add(str1: string , str2 : string) : string ;
    add(num1: number , num2: number): number;
    //way 1
    // this has problem with type checking since user can pass any value apart from string and number
    // and user needs to have check for other values 
    add(n1: any , n2: any): string | number {  

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
}

var addObject = new Addition();
console.log(addObject.add("Pardeep", "Singh"));
console.log(addObject.add(5 , 6));