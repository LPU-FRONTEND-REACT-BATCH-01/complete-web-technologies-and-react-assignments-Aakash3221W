let userAccount = {
    balance :0,
    transactions : [],
}

function deposit(amount){
    if(amount<=0){
        console.log("amount must be grater then zero");
        return;
    }
    userAccount.balance+=amount;
    userAccount.transactions.push("Deposit :"+amount);
    console.log("Amount cradited :"+amount)
    
}
function withdraw(amount){
    if(amount<=0){
        console.log("amount must be grater then zero");
        return;
    }else if(amount>userAccount.balance){
        console.log("Insufficent Balance");
        return;
    }else if((userAccount.balance-amount)<500){
        console.log("Min Balance cannot be less then the 500");
        return;
    }else if(amount>10000){
        console.log("Max withdrawal allowed is 10000");
        return;
    }
    userAccount.balance-=amount;
    userAccount.transactions.push("Withdawn :"+amount)
    console.log("Amount Dabited :"+amount);
}
function balance(){
    console.log("Your Balance is : "+userAccount.balance);
}
function getTransactions(){
    console.log(userAccount.transactions);
}


deposit(2000);
withdraw(2500);
balance();
getTransactions();


