import {Link} from 'react-router-dom';
import './nav.css'

function Nav({data})
{
    return(
        <nav>
            <img src="/scp-logo.jpeg" class="logo" alt=" "></img>
            <ul>
                <li>
                <Link to={"Home"} className="link">HOME</Link>
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