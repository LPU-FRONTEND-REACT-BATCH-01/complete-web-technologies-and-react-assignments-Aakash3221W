// async function fetchData() {
//     // let response = fetch("https://dummyjson.com/products"); // promise, because we are not waiting
//     let response = await fetch("https://dummyjson.com/products");
//     console.log(response);
// }
// fetchData(); // response object

// -------------------------------------

// async function fetchData2() {

//     let response = await fetch("https://dummyjson.com/products");
//     let data =  response.json();
//     console.log(data);
// }
// fetchData2(); // json format, but pending promise because we are not waiting

// -------------------------------------

async function fetchData2() {

    let response = await fetch("https://dummyjson.com/products");
    let data =  await response.json();
    console.log(data);
}
fetchData2(); // proper json format

// -------------------------------------

// async function fetchData() {

//     try{
//         let response = await fetch("https://dummyjson.com/products_random");
//         let data =  await response.json();
//         console.log(data);

//     }catch(errorMsg){
//         console.log("Error Occurred")
//     }
// }

// fetchData(); // our custom error message


// -------------------------------------

// if we try to convert to json and response is not present, it will cause a javascript error and not a HTTP error. so check if response is ok or not prior to converting to json

async function fetchData() {

    try{
        let response = await fetch("https://dummyjson.com/products_random");
        // console.log(response);

        if(response.ok){
            let data = response.json();
            console.log(data);

        }else{
            // if the response itself is not ok
            console.log("There is an HTTP error !!");
        }

    }catch(errorMsg){
        console.log("JavaScript Error")
    }
}

fetchData();