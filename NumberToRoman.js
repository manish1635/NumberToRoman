var NumberToRoman=(function(){
var sortByVal = function (obj) {
  return function (a, b) { 
    return obj[a] > obj[b] ? -1 : 1;
  };
};
var mappings = {
  'M': 1000 ,
  'CM': 900,
  'D': 500,
  'CD': 400,
  'C': 100,
  'XC': 90,
  'LX': 60,
  'L': 50,
  'XL': 40,
  'X': 10,
  'IX': 9,
  'V': 5,
  'IV': 4,
  'I': 1 
};

var convertToRoman = function (n) {
  var res = [],
      keys = Object.keys(mappings),
      sorted = keys.sort(sortByVal(mappings));
  sorted.forEach(function (key) {
    var val = mappings[key],
        times = Math.floor(n/val);
    for (var i = 0; i < times; i++) {     
      res.push(key); 
    }; 
    n = n % val;  
  });

  return res.join('');
};
return {
    convertToRoman: convertToRoman
  };
})();

module.exports = NumberToRoman;



