const BASE_URL = "http://numbersapi.com/" 

async function get_fav(num) {
    let fav = await axios.get(`${BASE_URL}${num}/trivia?json`)
    return fav.data.text
}

// (2) (a)

async function getData(num1,num2){
    
    let p1 = axios.get(`${BASE_URL}${num1}/trivia?json`);
    let p2 = axios.get(`${BASE_URL}${num2}/trivia?json`);
         
    let results = [await p1, await p2];

    return results;
}

// (b)

async function getDataOnArray(num1, num2){

    let response = await axios.get(`${BASE_URL}${[num1,num2]}/trivia?json`);

    return response.data;

}

async function getFavNumFacts(favNum){
    
    let fav1 = await axios.get(`${BASE_URL}${favNum}/trivia?json`);
    let fav2 = await axios.get(`${BASE_URL}${favNum}/trivia?json`);
    let fav3 = await axios.get(`${BASE_URL}${favNum}/trivia?json`);
    let fav4 = await axios.get(`${BASE_URL}${favNum}/trivia?json`);
         
    let results = [fav1.data.text, fav2.data.text, fav3.data.text, fav4.data.text];

    return results;
}





