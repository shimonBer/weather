import React from 'react';

export default ({temperature, text}) =>{


    return (
        <div class="card">
            {
                <div class="card-body">
                    <h5 class="card-title">{temperature}</h5>
                    <p class="card-text">{text}</p>
                </div>
            }
            
        </div>
    )

}