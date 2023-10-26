import React, { useState } from 'react';

function Toggle({color,setBgColor}) {
    

    const toggle = () => {
        if(color=='BLUE'){
            setBgColor('bg-primary')
        }
        else if(color=='RED'){
            setBgColor('bg-danger')
        }
        else if(color=='YELLOW'){
            setBgColor('bg-warning')
        }
        else{
            setBgColor('bg-success')
        }
        

    };


    return (
        <div className="m-3">
            <button className='btn btn-dark' onClick={toggle}>
                {color}
            </button>
        </div>

    );
}

export default Toggle;