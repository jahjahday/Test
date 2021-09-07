import axios from "axios";
import { useState, useEffect } from "react"

const Albums = () => {

    const [albums, setAlbums] = useState([])

    useEffect(() => {
        const Alb = async() => {

            const {data} = await axios.get("https://jsonplaceholder.typicode.com/albums")
            const album = [...data]
            
            
             const allAlbum = await Promise.all( album.map(async e => { 
                const albums = await axios.get(`https://jsonplaceholder.typicode.com/albums/${e.id}/photos`)
                return albums.data[0] 
            }))
            console.log(allAlbum);
            setAlbums(allAlbum)
            
        }
        Alb()
      }, [])

      return (
          <div>
            <h1>Albums</h1>
            { albums.length > 0 && albums.map(album => 
             (
                 <div key={album.id}>
             <img src = {album.thumbnailUrl} alt ="" />
                <p>{album.title}</p>
             </div>
             ))}
          </div>
      )
}

export default Albums;
