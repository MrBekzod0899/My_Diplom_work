import React from 'react';
import Content from '../../Components/Content/Content';
import './home.scss'
import Slider from './Slider/Slider';
const Home = () => {
    return (
      <div className='home container-fluid'>
          <div className="row splider-react">
            <div className="col-lg-12 splider-react">
                <Slider/>
            </div>
          </div>

        <Content/>
       
      </div>
    );
}

export default Home;
