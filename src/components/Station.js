import React from 'react'
import '../css/station.css';

export default function Station({ data }) {
  return (
    <a rel="noreferrer" href={`https://www.google.de/maps/dir//${data.name} ${data.street} ${data.houseNumber} ${data.place}/`} target='_blank' className='station'>
      <h2 className='name'>{data.name}</h2>
      <p className='street'>{data.street} {data.houseNumber}, {data.postCode}, {data.place}</p>
      <p className='main-price'><span>E5: </span>{data.e5}€/l</p>
      <p className='secondary-price'><span>E10: </span>{data.e10}€/l</p>
      <p className='secondary-price'><span>DIESEL: </span>{data.diesel}€/l</p>
      <p className={`status ${data.isOpen ? 'open' : ''}`}>{data.isOpen ? 'GEÖFFNET' : 'GESCHLOSSEN'}</p>
    </a>
  )
}
