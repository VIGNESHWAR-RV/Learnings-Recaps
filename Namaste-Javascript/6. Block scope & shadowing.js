
/*

  Block ( compound statement )
  -----
    block is a way to group statements as one where JS expects a single statements

  Block Scope
  ----- -----
    memory space specifically created for holding variables ( let, const ) defined inside the block

    var type variables gets defined in the local memory space of execution context ( its global memory space incase of global execution context )

    nested block scope is also possible, once can create multiple block scope nested inside block scope.

    block scope also follows scope chain in same manner.

    block memory space will be removed once the specific block statements are executed.
      

  Shadowing
  ---------
    Variables defined inside the block has more priority pointing reference inside the block ( shadowing ) than variables defined outside the block.
    its due to being the closest scope ( memory ) available while accessing the variable.

    Note 🚨
    -------

    Illegal shadowing
    -----------------
    variables ( type let and const ) outside block get defined in the local memory space of execution context ( its script incase of global execution context )
      varibale ( type var ) inside block also get defined in the same local memory space of execution context ( its global incase of global execution context )
      so incase of same variable, it throws an error that variable is already defined ( as both are pointing to same memory space ( incase of global execution context, it checks script memory space for same variable ) ).

    variables ( var type ) outside block and variables ( type let and const ) inside block scope can be created without any such issue.
      they always point to local memory and block memory respectively.  

*/

function a() {
    let b = true;
    if (b) {
        let b = 1;
        const c = 2;
        var d = 3;

        {
            let b = 4;
            const c = 5;
            d = 6;
            console.log(b);
            console.log(c);
            console.log(d);
        }
        console.log(b);
        console.log(c);
        console.log(d);
    }
    console.log(b);
}

a();