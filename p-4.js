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