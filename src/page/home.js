import React from 'react'

export default function Home() {
    return (
        
        <div>
         <div className="container mt-4">
                    <div className="col-sm-4"></div>
                <h1>Welcome to Website Kitty Cats FOOD!</h1>
                </div>
<div id="demo" class="carousel slide" data-bs-ride="carousel">

  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>


  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./images/11.jpg" alt="c1" class="d-block w-100"/>
    </div>
    <div class="carousel-item">
      <img src="./images/22.jpg" alt="c2" class="d-block w-100"/>
    </div>
    <div class="carousel-item">
      <img src="./images/33.jpg" alt="c3" class="d-block w-100"/>
    </div>
  </div>

  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
<div className="container mt-5"></div>
<div className="col-sm-5">
                        <h3>About Me</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris..consectetur adipisicing elit...Ut enim ad minim veniam,.</p>
                    </div>
                </div>
          
        
        
    )
}