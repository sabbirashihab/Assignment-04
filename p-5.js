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