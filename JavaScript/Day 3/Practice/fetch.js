async function fetcData() {
    try{
        let res = await fetch("http://localhost:8080/gateway/catalog/products");
        console.log(res)

        if(res.ok){
            let data = await res.json();
            let content = data.data.content;
            console.log(content);
        }
        else{
            console.log("There is an Http Error");
        }
    }catch(err){
        console.log(err);
    }
    
}

fetcData();