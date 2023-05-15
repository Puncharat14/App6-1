import React from 'react'

export default function Product() {
  const product=[
    ['1.jpg','Name&Surname','Tel'],
    ['user.png','Name&Surname','Tel'],
    ['user.png','Name&Surname','Tel'],
    ['user.png','Name&Surname','Tel'],
    ['user.png','Name&Surname','Tel']
]
  return (
    <div className="container mt-5">
    <center>
<h3 >PRODUCTS</h3>
<hr></hr>
</center>
    <div className="row">
       
    {
            product.map(item => {
                return(
        <div className="col-sm-3">      
   <div class="card" >
  <img src="./images/1.jpg" class="card-img-top" width="50"/>
  <div class="card-body">
    <h5 class="card-title">{item[1]}</h5>
    <p class="card-text">{item[1]}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
 </div>
   )
  } 
  )
  }

   </div>
</div>
  )
}