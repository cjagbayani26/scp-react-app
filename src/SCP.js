import './scp.css';


function SCP({scp})
{
    return(
        <div className="component container">
            <h2>Subject:</h2>
            <h3>ITEM #: {scp.item}</h3>
            <h2>Object Class:</h2>
            <h3>{scp.object}</h3>
            <h2>Containment Procedure: </h2>
            <p>{scp.containment}</p>
            <h2>Description:</h2>
            <p>{scp.description}</p>
        </div>
    );
}

export default SCP;