function words(str){
  var strSplit = str.split(/\s+/m),
      counts = {};

  for (var i = 0; i < strSplit.length; i++){
    if(counts.hasOwnProperty(strSplit[i])){
      counts[strSplit[i]] += 1;
    } else {
      counts[strSplit[i]] = 1;
    }
  }
  
  return counts;
}

module.exports = words;