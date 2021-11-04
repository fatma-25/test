import React from 'react'
import { useSelector } from 'react-redux'


export default function Dashboard() {
 
const user = useSelector(state => state.auth.user)

    return (
        
        <div>
            {
                user?.account !== "true"  ?
                 <h1>account not activated yet</h1>

                 :
                 user?.status === "admin" ?
       
                 <h1>admin dashboard</h1>
                
                 :
                 <div>
                 <h1> {user?.name}  </h1>
            <img src='/images/profile.png' alt='pic' />
            </div>
            }
           
          
        </div>
    )
}
