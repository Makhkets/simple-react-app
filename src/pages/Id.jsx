import React from "react";
import { useParams } from "react-router-dom";

const Id = () => {
    console.log(useParams())
    const {id} = useParams()
    return (
        <>
            <h1>{ id }</h1>
        </>
    )
}

export default Id;