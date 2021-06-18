class AccessModifier {
    private myPrivateVariable = "Private variable";
    public myPublicVariable = "Public variable";
    protected myProtectedVariable = "Protected variable";

    //there are two ways we can intalize a readonly variable in typescrip which are below
    readonly pie = 3.14;
    readonly readOnlyVariableIntializedInConstructor : string;

    constructor(readOnlyVariableIntializedInConstructor: string) {
        this.readOnlyVariableIntializedInConstructor = readOnlyVariableIntializedInConstructor;
    }

    getMyPrivateVariable() : string
    {
        return this.myPrivateVariable;
    }
}

var accessModifier = new AccessModifier("Tavisca");
// accessModifier.myPrivateVariable // compile error 
console.log("Get private variable [" +accessModifier.getMyPrivateVariable() + "] using public method");
console.log("Get public variable: " +accessModifier.myPublicVariable);
console.log("Get public read only variable [ "+ accessModifier.getMyPrivateVariable()+ "] intalized at the time of declaration ");
console.log("Get public read only variable [" + accessModifier.readOnlyVariableIntializedInConstructor+ "] intalized in constructor ");

class ExtendsAccessModifier extends AccessModifier{

    protected myProtectedVariable = "MyPortectedVariableValueChangedInDerivedClass";

    getMyProtectedVariable(){
        return this.myProtectedVariable;
    }
}

var extendsAccessModifier = new ExtendsAccessModifier("Tavisca aquired by JP Morgan");
console.log("Get public read only variable [" + extendsAccessModifier.readOnlyVariableIntializedInConstructor+ "] intalized in constructor ");
console.log("Get protected variable ["+ extendsAccessModifier.getMyProtectedVariable()+ "] re-intalized in derived class ");

//extendsAccessModifier.myProtectedVariable // error