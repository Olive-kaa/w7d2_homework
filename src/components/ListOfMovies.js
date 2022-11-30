import Movie from "./Movie";
import "./ListOfMovies.css";

const ListOfMovies = ({allMovies}) => {

    const movieNodes = allMovies.map((movie) => {
        return <Movie key={movie.id} movieObj={movie}/>
    });

    return (
        <ul>{movieNodes}</ul>
    );

}



export default ListOfMovies;