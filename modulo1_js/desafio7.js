const user = {
    name: "Pedro",
    transactions: [],
    balance: 0
  };

  function createTransaction(transaction){
    user.transactions.push(transaction)
    if (transaction.type == 'credit') {
        user.balance += transaction.value;
    } else if (transaction.type == 'debit') {
        user.balance -= transaction.value;
    }
    
  }

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance)

function getHigherTransactionByType(type) {
    let typeTransiction
    let highCredit = 0
    
    for (transaction of user.transactions) {
        if (type == transaction.type && transaction.value > highCredit) {
            highCredit = transaction.value
            typeTransiction = transaction.type
        }
    }
    const creditResult = {
        type: typeTransiction,
        value: highCredit
    }
    console.log(creditResult)
}

getHigherTransactionByType('credit')
getHigherTransactionByType('debit')

function getAverageTransactionValue() { 
    let sum = 0

    for (let i = 0; i < user.transactions.length; i++) {
        sum += user.transactions[i].value
    }
    const average = sum / user.transactions.length

    return console.log(`${average}`)
}

getAverageTransactionValue(user.transactions)

function getTransactionsCount() {
    let credit = 0
    let debit = 0

    for (let i = 0; i < user.transactions.length; i++) {
        if (user.transactions[i].type === "credit") {
            credit++
           
        } else {
            debit++
        }
    }
    console.log(credit, debit)
}

getTransactionsCount('credit', 'debit')