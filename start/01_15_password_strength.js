// Write your code here

function passwordStrengthCheck(password) {
  const passwordPattern = /(?=.*[!@#$%^&*])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/g
  return passwordPattern.test(password) ? 'Valid' : 'Not Valid';
}

console.log(passwordStrengthCheck("JackSparrow*4"))
console.log(passwordStrengthCheck("jacksparrow*4"))
console.log(passwordStrengthCheck("JackSparrow*"))
console.log(passwordStrengthCheck("JackSparrow4"))
console.log(passwordStrengthCheck("Jack*4"))

