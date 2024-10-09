import Stories from './Stories';
import Postagens from './Postagens';
import './ConteudoPrincipal.css';

export default function ConteudoPrincipal() {
    return (
        <div className='ConteudoPrincipal'>
            <Stories />
            <Postagens />
        </div>
    );
}