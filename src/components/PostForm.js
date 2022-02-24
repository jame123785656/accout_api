import React, { useState } from 'react'
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { Link } from 'react-router-dom';
import axios from 'axios';

function PostForm() {

    const [photo, setPhoto] = useState("");
    const [clientId] = useState("aaHmGd6OyMgHxI-_00YQrXEGMAcUKnjw7HjcC8SRW4Q");
  
    const [result,setResult] = useState([]);
  
    function handleChange(event){
      setPhoto(event.target.value);
    }
    
    function handleSubmit(event){
      console.log(photo);
  
      const url = "https://api.unsplash.com/search/photos?page=1&query="+photo+"&client_id="+clientId
        
      axios.get(url)
      .then ((response) =>{
        console.log(response);
        setResult(response.data.results);
      })
    }
  return (
    <div>
        <navbar class="navbar">
            <div class="logo">
                <img 
                  src='https://firebasestorage.googleapis.com/v0/b/prayut-rxltjj.appspot.com/o/miniProject%2Flogo5.png?alt=media&token=1df9750a-d934-4fbc-b237-d4d5f4f9be67'>
                </img>
            </div>
            <div class="boxSearch">    
                <input onChange={handleChange}  type="text" name="photo" placeholder="Search" />
                <button onClick={()=>{handleSubmit()}} type="submit">Search</button>
            </div>   
        </navbar>

              {result.map(photo=>{
                  return(
            
        <div class="menu-section">            
            <Link to="/profile" state={{
                username:photo.user.username,
                bio:photo.user.bio,
                first_name:photo.user.first_name,
                last_name:photo.user.last_name,
                location01:photo.user.location,
                profile_image:photo.user.profile_image.large,
                portfolio_url:photo.user.portfolio_url,
                likes:photo.likes,
                total_collections:photo.user.total_collections,
                total_photos:photo.user.total_photos
                }}>
              <div class="text-accout">
                  <img src={photo.user.profile_image.large} alt=""/>
                  <p>{photo.user.name}</p>
              </div>
            </Link>
              <div class="img-section">
                  <img src={photo.urls.raw} />
              </div>
              <div class="icon-section">
                  <h2><GrFavorite/></h2>
                  <h2><FaRegComment/></h2>
              </div>
              <div class="nb-likes">
                  <h4><FaRegThumbsUp/> {photo.user.total_likes}</h4>
              </div>
              <div class="text-section">
                  <h4>{photo.user.name}:</h4>
                  <p>{photo.alt_description}</p>
              </div>
        </div>
              )})}
    </div>

  )
}

export default PostForm