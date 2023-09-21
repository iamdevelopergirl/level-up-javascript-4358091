// Write your code here
const classRoom = {
  hasTeachingAssistant: false,
  classList : ["A", "B", "C", "D", "E", "F"]
}

function getStudents(classRoom) {
  const {
    hasTeachingAssistant,
    classList
  } = classRoom;
  
  if(hasTeachingAssistant) {
    [teacher, assistant, ...students] = classList
  }
  else {
    [teacher, ...students] = classList
  }
  return students;
}

console.log(getStudents(classRoom));

