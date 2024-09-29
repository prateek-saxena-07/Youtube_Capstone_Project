import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faTrademark } from '@fortawesome/free-solid-svg-icons';

export default function Logo() {
    return (<>
        <div className="logo" style={{display:'flex'}}>
            <FontAwesomeIcon icon={faYoutube} style={{ color: 'red', padding: '5px',width:'20px'}} />
            
            <div style={{display:'flex'}}>YouTube
                <FontAwesomeIcon icon={faTrademark} style={{width:'8px', height:'12px'}} />
        </div>
        </div>
    </>)
}