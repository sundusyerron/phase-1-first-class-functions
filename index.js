function receivesAFunction(callback) {
    return callback()
}

//return returnsANamedFunction
//name a function add
 function mod(x, y) {
    return (x%y);
 }

 function returnsANamedFunction() {
    return(mod);
 }

 function returnsAnAnonymousFunction() {
   return function() {
    console.log("Anonymous")
   }
 }