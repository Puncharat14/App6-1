import React from 'react'

export default function Member() {
  return (
<div>

    <body>
    
    <div class="container mt-3">
      <h2>Member Table</h2>
      <p>รายชื่อสมาชิก</p>            
      <table class="table table-striped">
        <thead>
          <tr>
          <th>Picture</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td><img src="./images/111.jpg" width={"50"}/></td>
            <td>สมศรี</td>
            <td>หมี่หยก</td>
            <td>somsri@example.com</td>
            <td><button type="button" class="btn btn-success">Read more</button></td>
          </tr>
          <tr>
          <td><img src="./images/222.jpg" width={"50"}/></td>
            <td>ไข่ขาว</td>
            <td>ไข่ดาวทอด</td>
            <td>kaikao@example.com</td>
            <td><button type="button" class="btn btn-success">Read more</button></td>
          </tr>
          <tr>
          <td><img src="./images/333.jpg" width={"50"}/></td>
            <td>สมปอง</td>
            <td>ไพรวัล</td>
            <td>sompong@example.com</td>
            <td><button type="button" class="btn btn-success">Read more</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    
    </body>
    
    </div>
  )
  }
