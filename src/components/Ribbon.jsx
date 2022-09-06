import React from "react";
import { useState } from "react";
import Posts from "./Posts";

import '../css/style.css'

function Ribbon() {
    
    const [post, setPost] = useState({title: "", description: ""});
    const [posts, setPosts] = useState([]);

    function publishPost(e) {
        e.preventDefault()
        const title = post.title
        const description = post.description
        
        setPosts(
            prev => prev.concat({
                title: title, 
                description: description
            })
        )

        setPost({title: "", description: ""});

    };
    
    return (
        <div>
            <h1>Лента:</h1>
            <form>

                <input type="text" placeholder="Название" value={post.title}
                       onChange={e => setPost({...post, title: e.target.value})}
                /><br />

                <input type="text" placeholder="Описание"  value={post.description}
                       onChange={e => setPost({...post, description: e.target.value})}
                /><br />

                <button type="submit" onClick={publishPost}>Опубликовать</button>
            </form>    
            
            <Posts posts={posts} />

        </div>
    );
}

export default Ribbon
