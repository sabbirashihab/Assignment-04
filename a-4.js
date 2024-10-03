// problem-01
function calculateTax(income, expense) {
    if (income < 0) {
        return "Invalid Input";
    } else if (expense < 0) {
        return "Invalid Input";
    } else {
        if (expense > income) {
            return "Invalid Input";
        } else {
            const tax = (income - expense) * 0.2;
            return tax;
        }
    }
}


// problem-02
function sendNotification(email) {
    if (email.indexOf('@') == -1) {
        return "Invalid Email";
    } else if (email.indexOf('@') != email.lastIndexOf('@')) {
        return "Invalid Email";
    } else {
        const subStrings = email.split('@');
        const userName = subStrings[0];
        const domainName = subStrings[1];
        return userName + " sent you an email from " + domainName;
    }
}


// problem-03
function checkDigitsInName(name) {
    if (typeof name != "string") {
        return "Invalid Input";
    } else {

        for (let i = 0; i < name.length; i++) {
            if (isNaN(name[i]) == false) {
                return true;
            }
        }

        return false;
    }
}


// problem-04
function calculateFinalScore(obj) {
    if (typeof obj !== "object") {
        return "invalid input";
    }

    let finalScore = obj.testScore + obj.schoolGrade;
    if (obj.isFFamily == true) {
        finalScore += 20;
    }

    if (finalScore >= 80) {
        return true;
    }
    else {
        return false;
    }
}


// problem-05
function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || !Number.isInteger(serialNumber)) {
        return "Invalid Input";
    }

    let sum = 0;
    for (let i = 0; i < waitingTimes.length; i++) {
        sum += waitingTimes[i];
    }
    const roundedAverage = Math.round(sum / waitingTimes.length);

    const waitingTime = (serialNumber - 1 - waitingTimes.length) * roundedAverage;
    return waitingTime;
}