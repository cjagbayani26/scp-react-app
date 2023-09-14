import React from 'react';
import './scp.css';


function SCP({scp})
{
    return(
        <div className="component container">
            <h1><b>Subject: </b> {scp.item}</h1>
            <h2><b>Object Class:</b>{scp.object}</h2>
            <img
  src={process.env.PUBLIC_URL + scp.icon}
  alt={scp.icon}
  style={{width: '100%',       
    height: 'auto',  
    border: '4px solid #e50914',
    borderRadius: '5px',
    display: 'block',
    padding: '5px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }}
/>
            <h3>Containment Procedure: </h3>
            <p>{scp.containment}</p>
            <h3>Description:</h3>
            <p>{scp.description}</p>
        </div>

        
    );
}

export default SCP;