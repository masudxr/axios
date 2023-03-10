// import FetchData from './Components/GetData';
import React, { useEffect, useState } from 'react';

function FetchReactData() {
    const [backenData, setBackenData] = useState([{}]);

    useEffect(() => {
        fetch("5050/api").then(
            response => {
                console.log('data:', response.json());
                console.log('data response:', response);
                response.json();
            }).then(
            data => {
                setBackenData(data);
            }
        );
    }, []);
    
    return (
        <>
            {(typeof backenData.users === 'undefined') ? (
                <p>Loading....</p>
            ) : (
                backenData.users.map((user, i) => {
                    return (
                        <p key={i}>{user}</p>
                    );
                })

            )}
        </>
    );

};
export default FetchReactData;
