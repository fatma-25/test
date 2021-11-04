import React, {useEffect, useState} from "react"
import axios from "axios";

const ApprouveUser = () => {
    const [data, setData] = useState([]);

      useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            "http://localhost:2000/api/auth/all",
          );
     
          setData(result.data);
        };
     
        fetchData();
      }, []);
  return(
      <div>






 <table className="table">
    
        <tbody className="table" >
        {
             

         
        data.map(user => (
        <div style={{display:"flex", justifyContent:"space-around", alignSelf:"stretch"}}>
          <a >{user._id}</a>
          <a >{user.name}</a>
          <a style={{color:"red"}}>{user.account}</a>
          <button type="button" class="btn btn-link" onClick={()=> {alert(` user approved`) ;axios.put(`http://localhost:2000/api/auth/${user._id}`,{account:true})}}>approuve user</button>
        </div>
      ))
    }
       
        </tbody>
      </table>
      </div>





  )  
}

export default ApprouveUser

// { [ 'Name','Account status', 'Approuve User'].map(item =>
//   <th className="itemListColor" scope="col">{item}</th>)}