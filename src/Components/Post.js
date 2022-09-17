import {React,useState} from 'react'

const Post = ({users,loading}) => {
 

//if(loading){
 // return <h2>Loading...</h2>
//}

console.log("users11",users)

  return (<div className='container' >

    {  users.length>0 && (
      <ul className='list-group list-group-horizontal'>
   { users.map(user=>(
<li key={user.id} className='list-group-item card-group'>

<div className='card m-10'   >
<img src={user.image} className="card-img-top" alt="..." />
{/*<span className='quote-icon'>
   <FaQuoteRight/>
 </span>*/ } 
<div class="card-body">
 <h4 class="card-title">{user.name}</h4>
 <p class="card-text">{user.brandName}</p>
 <div className="card-footer">
 <button className='btn btn-primary' >Add Cart</button>
 </div>

</div></div>
</li>
 ))}
  </ul>
    )}
     </div>
  )
}

export default Post
