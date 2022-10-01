import axios from "axios";

export default async function getStations(lat, long, range){
    return await axios.get(`https://creativecommons.tankerkoenig.de/json/list.php?lat=${lat}&lng=${long}&rad=${range}&sort=dist&type=all&apikey=f8ee6587-c721-d35a-5b5a-65ddbd4711a6`);
}