import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Users(){
    const [users, setUsers] = useState([]);

    useEffect(() =>{
        axios.get("/api").then(res =>{
            if(res.ok){
                console.log('response', res);
                return res.json();
            }        
        }).then(data => setUsers(data)).catch(err => {
            console.log(err);
        });
    });

    return (
        <div>
            {(typeof users.users === 'undefined') ? (
                <p>Loading....</p>
            ) : (
                users.users.map((user, i) => {
                    return (
                        <p key={i}>{user}</p>
                    );
                })

            )}
            {/* {users.map(user => <li>{user}</li>)} */}
        </div>
    );
}

export default Users;