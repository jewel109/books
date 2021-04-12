function outer(){   //Outer is in Global scope.

    function inner(){   // Inner is in Function (Outer)scope.
        // Inner function has access of Outer function parameter/arguments/variable.But Inner function can't be called in out of Outer function.
        return('I am Inner Function.');
    }
    // inner()
    console.log(inner());
    return ('I am Outer Function');
}
// outer();
console.log(outer());
outer()