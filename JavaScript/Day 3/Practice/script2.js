function func1(){
    return new Promise((resolve, reject)=>{
        let condition = true;
        setTimeout(() => {

            if(condition){
                console.log("Func 1 called");
                resolve();
            }else{
                console.log("Func 1 failed");
                reject("Func 1 rejected");
            }
        }, 1000);
    })
}
function func2(){
    return new Promise((resolve, reject)=>{
        let condition = true;
        setTimeout(() => {

            if(condition){
                console.log("Func 2 called");
                resolve()
            }else{
                console.log("Func 2 failed");
                reject("Func 2 rejected");
            }
        }, 1000);
    })
}
function func3(){
    return new Promise((resolve, reject)=>{
        let condition = true;
        setTimeout(() => {

            if(condition){
                console.log("Func 3 called");
                resolve()
            }else{
                console.log("Func 3 failed");
                reject("Func 3 rejected");
            }
        }, 1000);
    })
}
function func4(){
    return new Promise((resolve, reject)=>{
        let condition = true;
        setTimeout(() => {

            if(condition){
                console.log("Func 4 called");
                resolve()
            }else{
                console.log("Func 4 failed");
                reject("Func 4 rejected");
            }
        }, 1000);
    })
}
function func5(){
    return new Promise((resolve, reject)=>{
        let condition = true;
        setTimeout(() => {

            if(condition){
                console.log("Func 5 called");
                resolve()
            }else{
                console.log("Func 5 failed");
                reject("Func 5 rejected");
            }
        }, 1000);
    })
}


// func1(()=>{
//     func2(()=>{
//         func3(()=>{
//             func4(()=>{
//                 func5();
//             })
//         })
//     })
// })

func1()
.then(func2)
.then(func3)
.then(func4)
.then(func5)
.catch((errorMessage)=>{
    console.log(errorMessage);
})

// async-await

async function callFunctions(){
    try{
        await func1()
        await func2()
        await func3()
        await func4()
        await func5()
    }catch(errorMsg){
        console.log(errorMsg);
    }
}

callFunctions()