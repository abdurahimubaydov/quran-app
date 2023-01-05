import React, { useState } from 'react'
import alquran_img from '../images/alquranilkarim.png'
import {BiSearchAlt} from 'react-icons/bi'

export const SearchSection = () => {
    const [value, setValue] = useState('')
    const [surah, setSurah] = useState([
      {id: 1, title: 'Al Mulk'},
      {id: 2, title: 'Ya Seen'},
      {id: 3, title: 'Ayatul Kursi'},
      {id: 4, title: 'Al Khaf'},
      {id: 5, title: "Al Waqi'ah"},
    ])

  return (
    <div className='search-section'>
        <img src={alquran_img} alt="" />
        <div className="search-box">
            <BiSearchAlt className='search-icon' />
            <input 
                type="text" 
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder='What do you want to read?'
            />
        </div>
        <div className="top-reads-surah">
          {surah.map(sura => (
            <div 
              className="top-read-surah"
              key={sura.id}
            >
              <p> {sura.title} </p>
            </div>
          ))}
        </div>
    </div>
  )
}