import axios from "axios";

export default async function getCityData(name){
    return await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=5&appid=bad2fe1938f153a5a7da9f29ba2aa0d9`);
}