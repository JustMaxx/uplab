//https://www.codewars.com/kata/59a96d71dbe3b06c0200009c
function generateShape(integer){
  let result = '';
  for(let i = 1 ; i<=integer; i++)
  {
    if(i!=integer){
      result = result + '+'.repeat(integer) + '\n'
    }
    else result = result + '+'.repeat(integer)
  }
  return result
}

//https://www.codewars.com/kata/5966e33c4e686b508700002d
function sumStr(a,b) {
  if(a==''){
    a=0
  }
  if(b==''){
    b=0
  }
  return `${parseInt(a)+parseInt(b)}`
}

//https://www.codewars.com/kata/55685cd7ad70877c23000102
function makeNegative(num) {
  if(num > 0){
    return num * -1
  }
  else return num
}

//https://www.codewars.com/kata/57a083a57cb1f31db7000028
function powersOfTwo(n){
  let result = []
  for (var i = 0; i <= n; i++) {
    result.push(Math.pow(2, i));
  }
  return result;
}

//https://www.codewars.com/kata/57a0e5c372292dd76d000d7e
function repeatStr (n, s) {
  let result = '';
  for(let i=1; i<=n; i++){
    result = result+s
  }
  return result;
}

//https://www.codewars.com/kata/55a70521798b14d4750000a4
function greet(name){
  return `Hello, ${name} how are you doing today?`
}

//https://www.codewars.com/kata/56453a12fcee9a6c4700009c
function closeCompare(a, b, margin = 0){
  if(Math.abs(a-b)<= margin){
   return 0 
  }
  else if(a>b && Math.abs(a-b)>margin){
    return 1
  }
  else if(b>a){
    return -1
  }
}

//https://www.codewars.com/kata/515e271a311df0350d00000f
function squareSum(numbers){
  let result = 0;  
  for(let i = 0; i<numbers.length; i++){
    result = result + Math.pow(numbers[i],2)  
  }
  return result
}

//https://www.codewars.com/kata/57ec8bd8f670e9a47a000f89
function mouthSize(animal) {
 animal = animal.toLowerCase()
  if(animal === "alligator"){
    return "small"
  }
  else return "wide"
}

//https://www.codewars.com/kata/56269eb78ad2e4ced1000013
function findNextSquare(sq) {
  sq = Math.sqrt(sq)  
  if(Number.isInteger(sq))
  { 
    return Math.pow(sq+1,2)
  }
  else{
    return -1;
  }
}

//https://www.codewars.com/kata/50654ddff44f800200000004
function multiply(a, b){
  return a * b
}

multiply(4,5)
