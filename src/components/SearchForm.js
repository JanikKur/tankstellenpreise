import React, { useRef } from 'react'
import getCityData from '../utils/getCityData';
import getStations from '../utils/getStations';
import '../css/searchForm.css';

export default function SearchForm({setStations, setLoading}) {

    const cityRef = useRef();
    const rangeRef = useRef();

    async function onSubmit(e){
        e.preventDefault();
        if(rangeRef.current.value <= 0){
            return;
        }
        setLoading(true);
        let cityData = (await getCityData(cityRef.current.value)).data[0];
        let stations = (await getStations(cityData.lat, cityData.lon, rangeRef.current.value)).data.stations;
        console.log(stations);
        setStations(stations);
        setTimeout(() => {
            setLoading(false);
        },5000);
    }

    return (
        <form id="search-form" onSubmit={onSubmit}>
            <input ref={rangeRef} type='number' id="range" defaultValue={5} min={1}/>
            <input ref={cityRef} id="search-input" placeholder='Stadt...' type='text'/>
            <button type='submit'>Suchen</button>
        </form>
    )
}
