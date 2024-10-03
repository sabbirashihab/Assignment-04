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