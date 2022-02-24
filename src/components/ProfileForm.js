import React ,{useState, useEffect} from 'react'
import { BsImage } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineCollections } from "react-icons/md";
import { GiEarthAmerica } from "react-icons/gi";
import { FiMapPin } from "react-icons/fi";
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProfileForm =()=> {
  const [image, setImage] = useState([]);
  const [clientId] = useState("aaHmGd6OyMgHxI-_00YQrXEGMAcUKnjw7HjcC8SRW4Q");
  const location = useLocation()
  
  const { username } = location.state
  const { first_name } = location.state
  const { bio } = location.state
  const { profile_image } = location.state
  const { location01 } = location.state
  const { last_name} = location.state
  const { portfolio_url} = location.state
  const {likes} = location.state
  const {total_collections} = location.state
  const {total_photos} = location.state


  useEffect(initialValue,[]);
    function initialValue(){
      SearchUser()
    }
    function SearchUser(){
     
      const url = "https://api.unsplash.com/users/"+username+"/photos?client_id="+clientId
        
      axios.get(url)
      .then ((response) =>{
        console.log(response);
        setImage(response.data);
      })
    }
    
  return (
    <div>
      <Link to="/">
      <navbar class="navbar">
        <div class="logo">
            <img src='https://firebasestorage.googleapis.com/v0/b/prayut-rxltjj.appspot.com/o/miniProject%2Flogo5.png?alt=media&token=1df9750a-d934-4fbc-b237-d4d5f4f9be67'></img>
        </div>
      </navbar>
      </Link>

            <div class="box-area">
                  <div class="section-profile">
                      <img src={profile_image} alt=""/>
                  </div>
                  <div class="section-text">
                      <h2>{first_name} {last_name}</h2>
                      <p>{bio}</p>
                      <p><FiMapPin/> {location01}</p>
                      <p><GiEarthAmerica/> {portfolio_url}</p>
                  </div>
            </div>  

            <div class="box-menu">
                <div class="menu-item">
                    <p class="protosText"><BsImage/> Photos {total_photos}</p>
                    <p class="likesText"><AiOutlineLike/> Likes {likes}</p>
                    <p class="colletText"><MdOutlineCollections/> Collettions {total_collections}</p>     
                </div>
            </div>
      
            <div class="show-img">
                <div class="card">
                  {image?
                  image.map(photo=>(
                  <img src={photo.urls.small} />
                  ))
                  :null}
                  {/* ถ้ามีรูปก็จะแสดงเป็นคำสั่งข้างหน้า ถ้าเช้าไปแล้วไม่เจอก็จะแสดงคำสั่งหลัง */}
                </div>
            </div>
            
    </div>
  )
}

export default ProfileForm