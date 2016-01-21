exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return arr.reduce(function (agg, item) {return agg + item;});
  },

  remove : function(arr, item) {
    return arr.filter(function (ele) {return ele !== item});
  },

  removeWithoutCopy : function(arr, item) {
    var fullLength = arr.length;
    var curIndex = 0;
    for(var i = 0; i < arr.length; ++i) {
      if(arr[i] !== item){
        arr[curIndex] = arr[i];
        ++curIndex;
      }
    }

    for(var i = 0; i < (fullLength - curIndex); ++i){ arr.pop(); }
    return arr;
  },

  append : function(arr, item) {
    return arr.concat([item]);
  },

  truncate : function(arr) {
    return arr.slice(arr, arr.length - 1);
  },

  prepend : function(arr, item) {
    return [item].concat(arr);
  },

  curtail : function(arr) {
    console.log("arr = %j", arr);
    console.log("arr.slice(arr, 1, arr.length -1 ) = %j", arr.slice(arr, 1, 3 ));
    return arr.slice(arr, 1, arr.length);
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    console.log("arr.splice(index, 0, item) = %j", arr.splice(index, 0, item));
    return arr.splice(index, 0, item);
  },

  count : function(arr, item) {
    return arr.filter(function (ele) {return ele === item}).length;
  },

  duplicates : function(arr) {
    var res = [];
    var obj = {};
    for(var i = 0; i < arr.length; ++i){
      obj[arr[i]] = obj[arr[i]] ? 2 : 1;
    }

    for(var key in obj){
      if(obj[key] === 2){
        res.push(parseInt(key));
      }
      
    }
    return res;
  },

  square : function(arr) {
    return arr.map(function (ele) {return ele * ele});
  },

  findAllOccurrences : function(arr, target) {
    return arr
            .map(function (ele, index) {return ele === target ? index : -1})
            .filter(function(ele) {return ele !== -1});
  }
};
