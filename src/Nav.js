import {Link} from 'react-router-dom';
import './nav.css'

function Nav({data})
{
    return(
        <nav>
            <img src="public/scp-logo.jpg" class="logo" alt=" "></img>
            <ul>
                <li>
                <Link to={"Home"}>HOME</Link>
                </li>
                {
                    data.map(
                        scp => (
                            <li key={scp.item}>
                            <Link to={`${scp.item}`} className="link">{scp.item}</Link>
                            </li>
                        )
                    )
                }

            </ul>
        </nav>
    )
}

export default Nav;