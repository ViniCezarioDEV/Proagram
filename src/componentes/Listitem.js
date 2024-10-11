import '../componentes/ConteudoLateral.css'
export default function ListItem(props) {
    return (
        <li>

            <a href='/'>
                <span>
                    {props.icon}
                </span>
            </a>
            <a href='/'>
                <span>
                    {props.text}
                </span>
            </a>
        </li>
    );
}