import React from "react"
import { Box } from "../UI"
import { lista } from "../../info.js"

const List = () => {
    console.log(List);
    return <Box>
        {
            lista.cargos.map( ({id, type, value, from, date}) => {
                return <div key={id}>
                    <span>{ type }</span>
                    <span>{ value }</span>
                </div>
            })
        }
    </Box>
}

export default List;


