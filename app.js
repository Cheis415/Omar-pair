const BASE_URL = "http://numbersapi.com/" 

async function get_fav(evt) {
    evt.preventDefault()
    let num = $("#num").val()
    let fav = await axios.get(`${BASE_URL}${num}/trivia`)
    $("#four_facts").append(`<p>${fav.data}</p>` )
    console.log(fav)
}
$("#fav_num").on("submit", get_fav)

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



// (4) 


const BASE_DECK_URL = "https://deckofcardsapi.com/api/deck/"



async function cardFromDeck() {

    let response = await axios.get(`${BASE_DECK_URL}new/draw/?count=1`);

    console.log(response.data.cards[0].value, response.data.cards[0].suit);
}






