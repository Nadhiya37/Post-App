import React, { useEffect, useState } from 'react'
import PostNavBar from './PostNavBar'
import axios from 'axios'

const ViewAllPost = () => {
    const [PostData,changePostData]=useState(
      [
 
]
    )
    const fetchData=()=>{
      axios.get("https://jsonplaceholder.typicode.com/posts ").then(
        (response)=>{
          changePostData(response.data)
        }
      ).catch(()=>{
        alert("something went wrong")
      })
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
        <PostNavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                   <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <table className="table">
                     <thead>
    <tr>
      <th scope="col">UserId</th>
      <th scope="col">Id</th>
      <th scope="col">Title</th>
      <th scope="col">Body</th>
    </tr>
  </thead>
  <tbody>
   {PostData.map(
    (value,index)=>{
        return (
             <tr>
      <th scope="row">{value.userId}</th>
      <td>{value.id}</td>
      <td>{value.title}</td>
      <td>{value.body}</td>
    </tr>
        )
    }
   )}
    
  </tbody>
</table>
                    
                </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAllPost