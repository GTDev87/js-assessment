exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var nums = [];
    var current = start;
    var id = setInterval(function () {
      nums.push(current);
      ++current;
      if(current === end){ clearInterval(id);}
    }, 100);


  }
};
