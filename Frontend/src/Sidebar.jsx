import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Sidebar = () =>
{
    return (<>
        <div className="hamburger">
            <FontAwesomeIcon icon={faBars} />
        </div>
    </>)
}
export default Sidebar;