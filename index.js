let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here
/*alternative to let answer = parseFloat(window.prompt(weeklyExpenseQuestions[0]))
let stringAnswer = window.prompt(weeklyExpenseQuestions[0])
let numberAnswer = parseFloat(stringAnswer) --converts string into number*/

//function
weeklyExpenses = askQuestions(weeklyExpenseQuestions)
monthlyExpenses = askQuestions(monthlyExpenseQuestions)
annualExpenses = askQuestions(annualExpenseQuestions)

function askQuestions(listOfQuestions){
    let expenses = 0
    for (let i = 0; i <listOfQuestions.length; i++){
        let answer = parseFloat(window.prompt(listOfQuestions[i]))
        expenses = expenses + answer
    }
    return expenses
}

//for loops
/*for (let i = 0; i < weeklyExpenseQuestions.length; i++){
    let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
    weeklyExpenses = weeklyExpenses + answer
}
for (let i = 0; i < monthlyExpenseQuestions.length; i++){
    let answer = parseFloat(window.prompt(monthlyExpenseQuestions[i]))
    monthlyExpenses = monthlyExpenses + answer
}
for (let i = 0; i < annualExpenseQuestions.length; i++){
    let answer = parseFloat(window.prompt(annualExpenseQuestions[i]))
    annualExpenses = annualExpenses + answer
}*/

//while loops
/*let i = 0
while (i < weeklyExpenseQuestions.length){
    let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]));
    i++;
    weeklyExpenses = weeklyExpenses + answer;
}

while (i < monthlyExpenseQuestions.length){
    let answer = parseFloat(window.prompt(monthlyExpenseQuestions[i]));
    i++;
    monthlyExpenses = monthlyExpenses + answer;
}

while (i < annualExpenseQuestions.length){
    let answer = parseFloat(window.prompt(annualExpenseQuestions[i]));
    i++;
    annualExpenses = annualExpenses + answer;
}*/