import axios from "axios";
import { useState, useEffect } from "react"

const Tweets = () => {

    const [comments, setComments] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments").then(res => {
          setComments(res.data)
        })
      }, [])

      return (
          <div>
          <h1>Tweets</h1>
            {comments.map(comment => <li key = {comment.id}>{comment.name}</li>)}
          </div>
      )
}

export default Tweets;
