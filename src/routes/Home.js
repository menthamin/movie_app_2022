import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {

    state = {
        isLoading: true,
        movies: [],
    };

    getMovies = async() => {
        // 구조 분해 할당 (mongo와도 비슷하네)
        const {
            data: {
                data: { movies },
            },
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        // console.log(movies.data.data.movies);
        this.setState({ movies, isLoading: false})  
        // ES6는 키와 대입할 변수의 이름이 같으면 축약할 수 있다. page159
        // this.setState({ movies: movies})
    };

    componentDidMount() {
        // Load Movies data
        this.getMovies();
        // setTimeout(() => {
        //     this.setState({ isLoading: false});
        // }, 3000);
    };

    render() {
        // console.log('render end')
        const { isLoading, movies } = this.state;
        return (
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                    </div>
                ) : (
                    <div className="movies">
                        {movies.map((movie) => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                            />
                        ))}
                    </div>
                )}
                </section>
        );
    }
}

export default Home;