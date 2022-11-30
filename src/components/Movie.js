const Movie = ({movieObj}) => {

    return (
        <li>
            <a href="{movieObj.url}" target="_blank">{movieObj.name}</a>
        </li>
    );
}


export default Movie;