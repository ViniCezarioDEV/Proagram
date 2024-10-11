import Stories from './Stories';
import Post from './Post';
import './ConteudoPrincipal.css';

export default function ConteudoPrincipal() {
    return (
        <div className='ConteudoPrincipal'>
            <Stories />
            <Post avatar='https://avatars.githubusercontent.com/u/125317872?v=4' profileName='Vinas' conteudo='https://imageswscdn.wslojas.com.br/files/10232/MED_tabela-de-basquete-acrilico-10-mm-de-110-x-080-c-aro-flexivel-e-rede-unidade-2455443.peg' />
            <Post avatar='https://b.fssta.com/uploads/application/nba/headshots/1120.vresize.350.350.medium.77.png' profileName='James' conteudo='https://s22928.pcdn.co/wp-content/uploads/2018/11/LeBron-James-38.jpg' />
        </div>
    );
}