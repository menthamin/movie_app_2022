import React from 'react';
import PropTypes from 'prop-types'

function Food({ name, picture, rating }) {
  // console.log(props);
  return (
    <div>
      <h2>I Like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>

  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://health.chosun.com/site/data/img_dir/2021/09/01/2021090100998_0.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'data:image/jpeg;base64,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',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: 'data:image/jpeg;base64,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',
    rating: 4.7,
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'https://mp-seoul-image-production-s3.mangoplate.com/428178/1727908_1610466129234_7890?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80',
    rating: 4.8,
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTMa8SsgcefFFceGz0NPRxx4S1bQeFdrsQIw&usqp=CAU',
    rating: 4.5,
  }
];

function App() {
  // return <div className="App" />;
  return(
    <div> 
      <h1>Hello</h1>
      {/* {foodILike.map(renderFood)} */}
      {foodILike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
}

export default App;
