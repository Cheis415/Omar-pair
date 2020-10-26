const BASE_URL = "http://numbersapi.com/" 

async function get_fav(num) {
    let fav = await axios.get(`${BASE_URL}${num}/trivia?json`)
    return fav.data.text
}