function myFullName(firstName: string, lastname: string , middleName?: string)
{
    middleName = middleName == null ? '': " " +middleName;
    console.log("Hello my name is: " +firstName + " "+ lastname + middleName);
}

myFullName('Pardeep','Sumbria');
myFullName('Pardeep', 'Singh','Sumbria');