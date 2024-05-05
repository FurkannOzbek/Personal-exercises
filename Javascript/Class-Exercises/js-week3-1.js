const user = {
  name: "Emil",
  age: 25,
  role: "Teacher",
  classes: ["Javascript 1", "Javascript 2"],
  hobbies: {
    favourite: "computers",
    sports: "running to class",
  },
};
const user2 = {
  name: "Peter",
  age: 42,
  role: "Teacher",
  classes: ["Maths", "Physics"],
  hobbies: {
    favourite: "Raspberry Pi",
    sports: "Tennis",
  },
};
const user3 = {
  name: "Alicia",
  age: 62,
  role: "Lawyer",
  classes: ["Bio", "Social"],
  hobbies: {
    favourite: "Guitar",
    sports: "Handball",
  },
};

const users = [user, user2, user3];
const keysToLog = ["name", "age", "hobbies"];
let result = "";

for (let i = 0; i < users.length; i++) {
  const user = users[i];
  for (let j = 0; j < keysToLog.length; j++) {
    const key = keysToLog[j];
    if (typeof users[i][keysToLog[j]] === "object") {
      for (let k = 0; k < user[key].length < k++; ) {
        result += `${user[key]} - `; // find out how to get to inside object
      }
    } else {
      result += `${user[key]} `;
    }
  }
}
console.log(result);
