function onTheStove(){
    let onTheStove = true;
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(onTheStove){
                console.log("Stove is ON");
                return resolve();
            }
        },1000)


    })
}
function addTheOil(){
    let addTheOil = true;
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(addTheOil){
                console.log("adding the oil");
                return resolve();
            }
        },500)


    })
}
function fryChips(){
    let fryChips = false;
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(fryChips){
                console.log("Stove is ON");
                return resolve();
            }
            else{
                return reject("fries will take little more time");
            }
        },2000)


    })
}
function enjoyYourMeal(){
    let enjoyYourMeal = true;
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(enjoyYourMeal){
                console.log("Enjoy your meal")
                return resolve();
            }
        },3000)
    })
}
// onTheStove().then(()=>addTheOil()).then(()=>fryChips()).then(()=>enjoyYourMeal()).catch((err)=> console.log(err));

async function makingchips(){
    try{
    await onTheStove();
    await addTheOil();
    await fryChips();
    await enjoyYourMeal();
    }
    catch(err){
        console.log(err);
    }
}

makingchips();



