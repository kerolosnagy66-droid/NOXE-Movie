import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export let MediaContext = createContext([]);

export default function MediaContextProvider(props) {

    const [trendingMovies, setTrendingMovies] = useState([]);
    const [trendingTv, setTrendingTv] = useState([]);
    const [trendingPeople, setTrendingPeople] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    async function getTrending(mediaType, callback) {
        try {
            let { data } = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=f1aca93e54807386df3f6972a5c33b50`);
            if (data && data.results) {
                let results = data.results.map((item) => ({ ...item, media_type: item.media_type || mediaType }));
                callback(results);
            }
        } catch (error) {
            console.error(`Error fetching ${mediaType}:`, error);
        }
    }

    useEffect(() => {
        getTrending('movie', setTrendingMovies);
        getTrending('tv', setTrendingTv);
        getTrending('person', setTrendingPeople);
    }, [])

    const filterItems = (items, key) => {
        if (!searchQuery) return items;
        return items.filter(item => (item[key] || item.name || item.title)?.toLowerCase().includes(searchQuery.toLowerCase()));
    };

    const filteredMovies = filterItems(trendingMovies, 'title');
    const filteredTv = filterItems(trendingTv, 'name');
    const filteredPeople = filterItems(trendingPeople, 'name');

    return (
        <MediaContext.Provider value={{
            trendingMovies, trendingTv, trendingPeople,
            filteredMovies, filteredTv, filteredPeople,
            searchQuery, setSearchQuery
        }}>
            {props.children}
        </MediaContext.Provider>
    )
}