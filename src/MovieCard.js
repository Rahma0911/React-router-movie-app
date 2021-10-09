import {Card , Button} from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';


function MovieCard({el:{id,title,description,fullDescription,posterURL,rating,trailer}, history}) {
    return(
        <div key={id} className="movie">
            <Card style={{ width: '14rem' }}>
            <Link to={{pathname:"/description", state:{el:{id,title,fullDescription,trailer}},}}>
                <Card.Img variant="top" src={posterURL} />
            </Link>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                {description}
                </Card.Text>
                <ReactStars
                    size={24}
                    activeColor="#ffd700"
                    value={rating}
                    edit={false}
                />
                <Link to={{pathname:"/description", state:{el:{id,title,fullDescription,trailer}},}}>
                    <Button variant="primary">Watch Trailer</Button>
                </Link>
            </Card.Body>
            </Card>
        </div>
    );

}
export default MovieCard;