/*

call, apply , bind 
------------------
  problem
  -------
    Javascript does not support extends until 2017. so it was difficult to share methods between different object.

  Solution by call, apply, bind
  -----------------------------
    call - method can be invoked directly by passing object reference which the method should refer during execution and necessary arguments along with reference.

    apply - similar to call method but necessary arguments are passed in array. 

    bind - similar to call, apply - but instead of invoking the function , returns th function so it can be invoked later point of time. 
    
    example
    -------
      const obj1 = {
        name: "hello",
        printName() {
          console.log(this.name);
        }
      }
  
      now printName can only be invoked from obj1 which would always refer to obj1.
  
      const obj2 = {
          name: "world"
      };
  
      to invoke printName on obj2
      ---------------------------
       call method
       -----------
          obj1.printName.call(obj2, "its", "working", "!");
       apply method
       ------------
          obj1.printName.apply(obj2, ["its", "working", "!"]);
       bind method
       -----------
          let printName = obj1.printName.bind(obj2);
          printName();
    
*/

const obj1 = {
  name: "hello",
  printName(...args) {
    console.log(this.name + args.reduce((accumulator, currentValue)=>{
     return accumulator + " " + currentValue;
    }, ""));
  }
}

const obj2 = {
    name: "world"
};

obj1.printName.call(obj2, "its", "working", "!");

obj1.printName.apply(obj2, ["its", "working", "!"]);

let printName = obj1.printName.bind(obj2, "its", "working");
printName("!");

