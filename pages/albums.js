import React from "react";
import axios from "axios";

function Albums({albuns}){
    return(
        <div>
            {albuns.map((album)=>(
                <div>
                   <p><strong>{album.id}:</strong>
                    {album.title}</p>
                
                </div>
            ))}
        </div>
    )
}

export async function getServerSideProps(context){
    const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
    
    const data = await response.data;

    return{
        props:{albuns:data},
    }
}
export default Albums;
