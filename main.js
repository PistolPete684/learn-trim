function fiveLine(s){
  // trim the white space from the input string
  const newStr = s.trim();
  // define a tab string
  let result = '';
  
  // iterate through total number of lines
  for (let i = 0; i <= 5; i++) {
    // add the string the number of times to match the line its on
    result += newStr.repeat(i) + '\n';
  }
  // return the results with trimmed white space
  return result.trim();
}


// code wars alternative
// function fiveLine(s){
//   s = s.trim();
//   return `${s}\n${s.repeat(2)}\n${s.repeat(3)}\n${s.repeat(4)}\n${s.repeat(5)}`;
// }