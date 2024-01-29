import React from 'react';
import dog from '../Assets/Doggo.png';
import cat from '../Assets/Cat.png';
import bird from '../Assets/Bird.png';
import LinkContainer from 'react-router-bootstrap/LinkContainer';
import { Link } from 'react-router-dom';

export default function dog_cat_bird() {
  return (
    <div class="container text-center" style={{marginRight:'160px', marginTop:'30px'}}>
      <div class="row">
        <div class="col">
         
          <Link to='/onefilter' state={{animalName: 'Cat'}} style={{textDecoration:"none"}}>
            <img style={{width:'250px', height:'250px', border:'1px solid', borderColor:'black'}} src={cat} alt=''/>
        <h4 style={{fontSize:'20px'}} className="imagetitle-clinic">CATS</h4>
        </Link>
        </div>
        <div class="col">
        <Link to='/onefilter' state={{animalName: 'DOGS'}} style={{textDecoration:"none"}}>
            <img style={{width:'250px', height:'250px', border:'1px solid', borderColor:'black'}} src={dog} alt=''/>
          <h4 style={{fontSize:'20px',textDecoration:"none"}} className="imagetitle-clinic">DOGS</h4>
          </Link>
        </div>
        <div class="col">
        <Link to='/onefilter' state={{animalName: 'Bird'}} style={{textDecoration:"none"}}>
            <img style={{width:'250px', height:'250px', border:'1px solid', borderColor:'black'}} src={bird} alt=''/>
          <h4 style={{fontSize:'20px'}} className="imagetitle-clinic">BIRDS</h4>
          </Link>
        </div>
        </div>
    </div>
  );
}
