exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

  },

  permute: function(arr) {

  },

  fibonacci: function(n) {
    function fib(n){
      if(n === 1) {return 1;}
      if(n === 2) {return 1;}
      return fib(n - 1) + fib(n - 2);
    }
    return fib(n);
  },

  validParentheses: function(n) {

  }
};
