import React from 'react'
import Station from './Station'
import '../css/stationList.css';

export default function StationsList({ stations }) {
  return (
    <div id="station-list">
      {stations.length ? <small id='results'>{stations.length} Tankstellen gefunden</small> : ''}
      {stations.length === 0 ? 'Bitte wählen Sie eine Stadt aus' : stations.map(station => <Station key={station.id} data={station} />)}
    </div>
  )
}
