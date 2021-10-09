import {Navbar, Form, Button} from 'react-bootstrap';
import RatingStars from './RatingStars';
function NavBar({setSearchTitle, setSearchRating}){
    return(
        <Navbar bg="light" expand="lg">
        <Form className="d-flex">
        <input
        onChange={(e)=>setSearchTitle(e.target.value)}
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
        </Form>
        <RatingStars setSearchRating={setSearchRating} />
        </Navbar>
    );
}
export default NavBar;