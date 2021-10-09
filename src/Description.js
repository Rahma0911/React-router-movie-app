import React from 'react';
import {Button} from 'react-bootstrap';
import YouTube from 'react-youtube';

const Description = ({location:{state}, history}) => {
    return (
        <div>
            <h1>{state.el.title}</h1>
            <YouTube videoId={state.el.trailer}/>
            <h4>Description:</h4>
            <p className='description'>{state.el.fullDescription}</p>
            <Button onClick={() => history.push("/")}>Go to home page</Button>
        </div>
    )
}

export default Description;
