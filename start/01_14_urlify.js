// Write your code here
function createUrlify(value) {
  // const lowercaseValues = value.toLowerCase();
  // const valueArray = lowercaseValues.split(' ');
  // const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g;
  // const processedArray = valueArray.map(item => item.replace(specialChars, ""))
  // return processedArray.join('-');

  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g;
  const stringWithoutSpecialChars = value.replaceAll(specialChars, "");
  return stringWithoutSpecialChars.toLowerCase().trim().replaceAll(' ', '-');
}

console.log(createUrlify('My Blog Name!'));
console.log(createUrlify("Elakya's Blog"));
console.log(createUrlify("How I got into Programming"));
console.log(createUrlify("I've got a new job :)"));