import {Link} from 'react-router-dom';

function Nav()
{
    return(
        <nav>
            <ul>
                {
                    data.map(
                        scp => (
                            <li key={scp.item}>
                                <Link to={`${scp.item}`}>{scp.item}</Link>
                            </li>
                        )
                    )
                }
            </ul>
        </nav>
    )
}

export default Nav;