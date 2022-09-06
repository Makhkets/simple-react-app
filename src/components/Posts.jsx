import React, { Fragment } from "react";

const Posts = (props) => {
    
    if (props.posts.length > 0) {
        return (
            <Fragment>
                {props.posts.map((el) => (
                    <div style={{ 
                        backgroundColor: "gray", 
                        width: "300px",
                        height: "150px", 
                        margin: "0 auto",
                        marginTop: "10px",
                        padding: "25px 25px"
                        
                    }} key={el.title}>
                    <strong>{el.title}</strong>
                    <div>
                        <p>{el.description}</p>
                        <a href="">Подробнее</a>
                    </div>
                </div>
                ))}
            </Fragment>
        );
    } else {
        return (
            <h1>Нет постов</h1>
        );
    }
}

export default Posts
