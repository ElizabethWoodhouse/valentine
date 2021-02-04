import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className = 'poem'>
      <p>
      Roses are <em className = 'red'>red</em>,<br />
      Violets are <em className = 'blue'>blue</em>,<br />
      Click on the <Link to ='/valentine'>Link</Link> and<br />
      I'll generate a Valentine for you!
      </p>
    </div>
  )
}

export default Home;
