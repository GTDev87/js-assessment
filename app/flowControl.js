exports = (typeof window === 'undefined') ? global : window;

exports.flowControlAnswers = {
  fizzBuzz : function(num) {
    // write a function that receives a number as its argument;
    // if the number is divisible by 3, the function should return 'fizz';
    // if the number is divisible by 5, the function should return 'buzz';
    // if the number is divisible by 3 and 5, the function should return
    // 'fizzbuzz';
    //
    // otherwise the function should return the number, or false if no number
    // was provided or the value provided is not a number

    function modWordFn(mod, word){ return function (i) { return (!(i%mod) && word ) || ""; }; }

    var fizz3 = modWordFn(3, "fizz");
    var buzz5 = modWordFn(5, "buzz");

    console.log("fizzBuzz = %j", (fizz3(num) + buzz5(num)) || num);
    console.log("num = %j", num);

    if(isNaN(num)){ return false; }


    return isNaN(num) ? false : ((fizz3(num) + buzz5(num)) || num);


  }
};
