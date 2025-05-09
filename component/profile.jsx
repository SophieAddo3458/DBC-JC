import React from 'react';
import './Profile.css';

function Profile({id, name= "Add Name", age = "20", src = "image url"}){
        return(
            <div className = "profileContainer" style ={{
                background:"red",
            }}>
                <img 
                src={src}
                alt="Profile"
                className="profileImage"
            />
            <div className = "profileInfo" style ={{
                background:"white"
                }}>
                    <p className= "profileName"></p>
                    <p className= "profileName"></p>
                </div>
            </div>
        );
}
          
        
    
    export default Profile;