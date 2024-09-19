/** @format */

// problem 1

function calculateTax(income, expenses) {
  if (income >= 0 && expenses >= 0 && income >= expenses) {
    const tax = (income - expenses) * 0.2;
    return tax;
  } else {
    const message = "Invalid Input";
    return message;
  }
}

console.log(calculateTax(10000, 3000));
console.log(calculateTax(34000, 1753));
console.log(calculateTax(5000, 1500));
console.log(calculateTax(7000, 7000));
console.log(calculateTax(-5000, 2000));
console.log(calculateTax(6000, -1500));

// problem 2
function sendNotification(email) {
  if (email.includes("@") === false) {
    return "Invalid Email";
  } else {
    const twoPart = email.split("@");
    const userName = twoPart[0];
    const userDomain = twoPart[1];

    const msg = userName + " sent you an email from " + userDomain;

    return msg;
  }
}

console.log(sendNotification("zihad@gmail.com"));
console.log(sendNotification("farhan34@yahoo.com"));
console.log(sendNotification("nadim.naem5@outlook.com"));
console.log(sendNotification("fahim234.hotmail.com"));
console.log(sendNotification("sadia8icloud.com"));

// problem 3

function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  } else {
    const nameArr = name.split("");
    for (let i = 0; i < nameArr.length; i++) {
      if (nameArr[i] >= "0" && nameArr[i] <= "9") {
        return true;
      }
    }
    return false;
  }
}

console.log(checkDigitsInName("Raj123"));
console.log(checkDigitsInName("n9ayeem"));
console.log(checkDigitsInName("e1mu3"));
console.log(checkDigitsInName("Suman"));
console.log(checkDigitsInName("Name2024"));
console.log(checkDigitsInName("!@#"));
console.log(checkDigitsInName(["Raj"]));

// problem 4
function calculateFinalScore(obj) {
  if (
    typeof obj !== "object" ||
    obj === null ||
    !("name" in obj) ||
    !("testScore" in obj) ||
    !("schoolGrade" in obj) ||
    !("isFFamily" in obj) ||
    typeof obj.name !== "string" ||
    typeof obj.testScore !== "number" ||
    obj.testScore > 50 ||
    typeof obj.schoolGrade !== "number" ||
    obj.schoolGrade > 30 ||
    typeof obj.isFFamily !== "boolean"
  ) {
    return "Invalid Input";
  } else {
    if (obj.isFFamily === true) {
      const totalScore_FFamily = obj.testScore + obj.schoolGrade + 20;
      if (totalScore_FFamily >= 80) {
        return true;
      } else {
        return false;
      }
    } else {
      const totalScore = obj.testScore + obj.schoolGrade;
      if (totalScore >= 80) {
        return true;
      } else {
        return false;
      }
    }
  }
}

console.log(
  calculateFinalScore({
    name: "Rajib",
    testScore: 45,
    schoolGrade: 25,
    isFFamily: true,
  })
);

console.log(
  calculateFinalScore({
    name: "Rajib",
    testScore: 45,
    schoolGrade: 25,
    isFFamily: false,
  })
);

console.log(calculateFinalScore("hello"));

console.log(
  calculateFinalScore({
    name: "Rajib",
    testScore: 15,
    schoolGrade: 25,
    isFFamily: true,
  })
);

//problem 5

function waitingTime(waitingTimes, serialNumber) {
  // You have to write your code here

  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid Input";
  } else {
    let sum = 0;
    for (let i = 0; i < waitingTimes.length; i++) {
      sum = sum + waitingTimes[i];
    }

    const totalPeople = waitingTimes.length;
    const avgTime = parseInt(sum / totalPeople);
    const remainingPeople = serialNumber - totalPeople;
    if (remainingPeople <= 0) {
      return 0;
    } else {
      const expectedWait = (remainingPeople - 1) * avgTime;
      return expectedWait;
    }
  }
}

console.log(waitingTime([3, 5, 7, 11, 6], 10));
console.log(waitingTime([13, 2], 6));
console.log(waitingTime([13, 2, 6, 7, 10], 6));
console.log(waitingTime([6], 4));
console.log(waitingTime(7, 10));
console.log(waitingTime("[6,2]", 9));
console.log(waitingTime([7, 8, 3, 4, 5], "9"));
