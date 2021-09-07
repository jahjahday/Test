import axios from "axios";
import { useState, useEffect } from "react"
import "./App.css"

const Artist = () => {

    const [ artists, setArtists ] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
          setArtists(res.data)
        })
      }, [])



    return (
        <div>
            <div>
            <h1>Chocolate City Artists </h1>
        </div>
            {artists.map(artist => 
        <li key = {artist.id}> {artist.name} </li>
      )}
        </div>
    )
}

export default Artist;
