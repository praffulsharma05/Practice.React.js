import {data} from '../src/data/data'
import React, { useState } from 'react'
const UseState=()=>{
const [people,setPeople] = React.useState(data);
return <h2>
    useState array example
    {people.map((person)=> {
        console.log(person);
        return <h4>item: </h4>
    })}
 </h2>
}
export default useState;