import React from 'react';
import './services.css';

function Services() {
  return (
   <div className='view'>
     <div class="card">
  <img src="https://www.felixhospital.com/sites/default/files/2022-11/dr-dk-gupta.jpg" alt="John"/>
  <h1>John Doe</h1>
  <p class="title">CEO & Founder, Example</p>
  <p>Harvard University</p>
  {/* <div style="margin: 24px 0;"> */}
    <a href="#"><i class="fa fa-dribbble"></i></a> 
    <a href="#"><i class="fa fa-twitter"></i></a>  
    <a href="#"><i class="fa fa-linkedin"></i></a>  
    <a href="#"><i class="fa fa-facebook"></i></a> 
  </div>
  <p><button>Contact</button></p>
</div>
  //  </div>
   
  )
}

export default Services
