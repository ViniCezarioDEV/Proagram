import { IoHeartOutline } from "react-icons/io5"; //none
import { IoChatbubbleSharp } from "react-icons/io5"; //message
import './Postagens.css';

export default function Post(props) {
    return(
        <div className="Post">
            
            <div className="Post-cabecalho">
                <div className="Post-avatar">
                    <img src={props.avatar} alt="avatar-image"/>
                </div>
                <div className="Post-name">
                    <p>{props.profileName}</p>
                </div>
            </div>

            <div className="Post-conteudo">
                <img src={props.conteudo} alt="conteudo"/>
            </div>

            <div className="Post-rodape">
                <div className="Post-Like">
                    <a href="#" type="submit" id="Like">{<IoHeartOutline />}</a>
                    
                </div>
                <div className="Post-message">
                    <a href="#">{<IoChatbubbleSharp />}</a>
                </div>
            </div>

        </div>
    );
}


