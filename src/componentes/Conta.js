import './ConteudoFinal.css'

export default function Conta(props){
    return(
        <div className="Conta">
            <div className="Post-avatar">
                <img src={props.avatar} alt="avatar-image"/>
            </div>
            <div className="Post-name">
                <p>{props.profileName}</p>
            </div>
            <div className='Follow'>
                <a href='/'>Follow</a>
            </div>
        </div>
    );
}