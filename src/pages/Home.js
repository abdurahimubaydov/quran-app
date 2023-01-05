import React, { useEffect, useState } from "react";
import { SearchSection } from "../components/SearchSection";
import { Surah } from "../components/Surah";
import axios from "axios";
import { SURAH } from "../utils/links";

export default function Home() {
    const [surah, setSurah] = useState([])

    const getChapters = async () => {
        await axios.get('http://api.quran.com/api/v3/chapters?lang=eng')
        .then(res => setSurah(res.data.chapters))
        .catch(err => console.error(err))
    }

    useEffect(() => {
        getChapters()
    }, [])

    return (
        <div>
            <SearchSection />
            <Surah 
                surah={surah} 
                setSurah={setSurah} 
            />
        </div>
    )
}