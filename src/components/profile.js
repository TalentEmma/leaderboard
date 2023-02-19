// import React from 'react'
import React, { useState } from "react";
import { Leaderboard } from "./database";
import Popup from "./modal";
import { FaAddressCard, BsAwardFillm, FaAward } from 'react-icons/fa';

function profile({Leaderboard}) {
  return (
    <div id="profile" className="container">
        {Item(Leaderboard)}
    </div>
  )
}



function Item(data){

    function counterFunction(value){
        console.log(value);
        for (let i =0; i<=value.lenght; i++){
          
          
          
        }
    }


//   const [modalOpen, setModalOpen] = useState(false);
//   const [isActive, setActive] = useState("false");



    return(
    
        <>
        {
            

                <div class="">
            {/* <h1>Leaderboard</h1> */}
            <table className="table-responsive">
                <thead>
                <tr>
                    <th>Rank</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Score</th>
                    <th>view</th>
                </tr>
                </thead>
                <tbody>

                {

                    data.map((value, index) => (
                        
                        // value.serial = index + 1;
                    <tr key={value.id}>
                        <td>
                        <FaAward className="award-icon"/>
                            {/* {value.forEach((value, item) => { item.index = index + 1; })} */}
                            {/* {value.index}  */}

                            
                        </td>
                        <td><img src={value.img} alt="" /></td>
                        <td>{value.name}</td>
                        <td>{value.score}</td>
                        <td> <Popup about={value.about} img={value.img} name={value.name} score={value.score}/></td>
                    </tr>
                )  
                )

              }
               
                </tbody>
            </table>
    </div>
            //     <div className="flex" key={value.id} >
                

            //     <div className="item">


            //         <Popup />
                   
            //         <img src={value.img} alt="" />

              
            //         <div className="info">
            //             <h3 className="name text-dark">{value.name}</h3>
            //             <span>{value.location}</span>
            //         </div>
            //     </div>
            //     <div className="item">
            //         <span>{value.score}</span> 
            //     </div>
            // </div>
         

           

        }

        </>
    


        
    )
}

export default profile