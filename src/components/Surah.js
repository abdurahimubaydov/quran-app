import React from 'react'
import { Sura } from './Sura'

export const Surah = ({surah, setSurah}) => {
  console.log(surah);
  return (
    <div>
      <div className="surah-section">
        {surah.map(item => (
          <div className="sura-section">
            <div className="surah-id-and-title-translation">
              <div className="surah-id"> <span> {item ? item.id : null} </span> </div>
              <div className="sura-title-and-tranlation">
                <p> {item ? item.name_simple : null } </p>
                <span> {item ? item.translated_name.name : null} </span>
              </div>
            </div>
            <div className="surah-in-arabic-and-ayat">
              <p> {item ? item.name_arabic : null} </p>
              <span> {item ? item.verses_count : null} ayah</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}