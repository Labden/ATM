class Account{
    constructor(userName, password, balance){
    this.userName = userName;
    this.password = password;
    this.balance = balance;
    }
}

class ATM{
    constructor(accounts = []){
        this.accounts = accounts;
        this.accounts.push({name: "Trent", password: "Nedbal", balance: 100});
        this.currentaccount=null;
    }
    accounts = [];
    Register(){
        let userName = prompt("Please input a username: ");
        console.log("Username: " + userName)
        let password = prompt("Please input a password: ");
        console.log("Password: "+ Password)

        let newAccount = new Account(userName, password, 0);
        this.accounts.push(newAccount);
    }


    login(){
        let username = prompt("Username:")
        let password = prompt("Password")
        

        console.log(this.accounts);

        for(let i = 0; i<= this.accounts.length; i++){
            if(username===this.accounts[i].name&&password===this.accounts[i].password){
                this.currentaccount=this,accounts[i];
                console.log(this.currentaccount);
            }
            if(this.currentaccount===null){
                console.log("Login Failed");
            }
            else{
                return;
            }
        }
    }

    printInfo(){
        console.log (this.accounts);
        for (var i = 0; i < this.accounts.length; i++){
            console.log(`${i} : ${this.accounts[i].name}`)
        }
    }

    Logoout(){
            if(this.currentaccount!==null){
               this.currentaccount=null;
                return null;
            }
            else{
                console.log("Error, no active account")
            }
    }

    Deposit(){

        if (this.login === true){
            let deposit = prompt("Deposit: ")
            console.log ("Deposit:" + deposit)
        }

    }

    Withdraw(){
        if (this.login === true){
            let withdraw = prompt("Withdraw: ")
            console.log ("Withdraw:" + withdraw)
        }
    }
}

let atm = new ATM();  
atm.Register();
let loginAttempt = atm.login();
console.log(loginAttempt);