import { useState } from 'react';
import { FaAngleLeft, FaAngleRight, FaHandScissors } from 'react-icons/fa6';
import data from './data';

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = data[index];

  const checkNum = (num) => {
    if (num < 0) {
      num = data.length - 1;
    }
    if (num > data.length - 1) {
      num = 0;
    }
    return num;
  };

  const previous = () => {
    setIndex((currIndex) => {
      let newIndex = currIndex - 1;

      return checkNum(newIndex);
    });
  };
  const next = () => {
    setIndex((currIndex) => {
      let newIndex = currIndex + 1;

      return checkNum(newIndex);
    });
  };

  const surp = () => {
    let random = Math.floor(Math.random() * data.length);
    if (random === index) {
      random = checkNum(random + 1);
    }
    console.log(random);

    setIndex(random);
  };

  return (
    <main>
      <section className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaHandScissors />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='btn-container'>
          <button className='prev-btn' onClick={previous}>
            <FaAngleLeft />
          </button>
          <button className='next-btn' onClick={next}>
            <FaAngleRight />
          </button>
        </div>
        <button className='btn btn-hipster' onClick={surp}>
          Surprise me
        </button>
      </section>
    </main>
  );
};
export default App;
