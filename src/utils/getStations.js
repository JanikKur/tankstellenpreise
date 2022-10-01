import axios from "axios";

export default async function getStations(lat, long, range){
    return await axios.get(`https://creativecommons.tankerkoenig.de/json/list.php?lat=${lat}&lng=${long}&rad=${range}&sort=dist&type=all&apikey=${process.env.REACT_APP_API_KEY}`);
}