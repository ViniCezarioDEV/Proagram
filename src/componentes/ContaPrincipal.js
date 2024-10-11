import './ConteudoFinal.css'

export default function ContaPrincipal(props){
    return(
        <div className="ContaPrincipal">
            <div className="Post-avatar">
                <img src={props.avatar} alt="avatar-image"/>
            </div>
            <div className="Post-name">
                <p>{props.profileName}</p>
            </div>
            <div className='Switch'>
                <a href='/'>Switch</a>
            </div>
        </div>
    );
}