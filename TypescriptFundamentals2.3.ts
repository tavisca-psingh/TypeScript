function isAutomationGuy(name: string , age: number , isAutomatedBefore: boolean){

    const automationStatus = isAutomatedBefore === true ? 'done' : 'not done'
     console.log(`My name is ${name}. I am ${age} years old. I have ${automationStatus} automation before.`)
 }
 
 isAutomationGuy("Pardeep",32, true);
 isAutomationGuy("Vidur",1, false);