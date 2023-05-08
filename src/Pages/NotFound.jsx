import React from 'react'
import {Link} from 'react-router-dom';
function NotFound() {
  return (
   <div className="notfound-container">
    <h1>404  | Page not Found</h1>
    <Link to={'/'}>Go back home</Link>
   </div>
  )
}

export default NotFound