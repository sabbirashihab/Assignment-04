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