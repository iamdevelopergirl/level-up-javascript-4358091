// Write your code here
function stringPermutation(value) {
  if(value === "") {
    return 0;
  }
  if(value.length === 1) {
    return 1;
  }
  return value.length * stringPermutation(value.slice(1))
}

console.log(stringPermutation("hello"));
console.log(stringPermutation(""));
console.log(stringPermutation("h"));
console.log(stringPermutation("hell"));