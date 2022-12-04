import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function Movies(props) {

    const [count, setCount] = useState(10);

    const transformedChildren = props.children.map((element,i) => {
        return (<div key={i} className="card p-2">{element}</div>)

    });

    const quitarPelicula = () => {
        setCount(count - 1);
        if(count<=0) setCount(0)
    }
    const agregarPelicula = () => {
        setCount(count + 1);
        if(count>=transformedChildren.length) setCount(transformedChildren.length)
    }

    return (<div>
    
        <Button className="btn btn-success p-3 m-3" onClick={agregarPelicula}>Agregar Pelicula</Button>
        <Button className="btn btn-danger p-3 m-3" onClick={quitarPelicula}>Quitar Pelicula</Button>
         
        <h2>Cantidad de películas: {count}</h2>
       
        <div className="d-flex flex-row flex-wrap" >
        {transformedChildren.slice(0, count)}

        </div>
    </div>);
};

