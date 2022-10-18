import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function Movies(props) {

    const [count, setCount] = useState(4);

    const myList = props.data.map((element) => {
        return (<h2> {element} </h2>)
    });

    const transformedChildren = props.children.map((element) => {
        return (<div className="card p-2">{element}</div>)



    });



    return (<>
    
        <Button className="btn btn-success p-3 m-3" onClick={() => setCount(count + 1)}>Agregar Pelicula</Button>
        <Button className="btn btn-danger p-3 m-3" onClick={() =>  setCount(count - 1)}>Quitar Pelicula</Button>
         
        <h2>Collection Number:{count}</h2>
       
        <div className="d-flex flex-row flex-wrap">
        {transformedChildren.slice(0, count)}
        {myList}
        </div>
    </>);
};

