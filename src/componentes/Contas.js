import ContaPrincipal from './ContaPrincipal';
import Conta from './Conta';

export default function Contas(){
    return(
        <div className="Contas">
            <ContaPrincipal avatar='https://encurtador.com.br/7cBcC' profileName='Gabs'/>
            <h3>Recomendations</h3>
            <Conta avatar='https://pyxis.nymag.com/v1/imgs/8de/c19/f8161cd3f780358b8bebe6057bb6bc608c-JimmyButler.1x.rsquare.w1400.jpg' profileName='Butler'/>
            <Conta avatar='https://b.fssta.com/uploads/application/nba/headshots/2357.vresize.350.350.medium.79.png' profileName='Adebayo'/>
            <Conta avatar='https://playmakerbrasil.com.br/wp-content/uploads/2024/05/tyrese-maxey-getty-675x675.webp' profileName='Tyrese'/>
            <Conta avatar='https://4kwallpapers.com/images/wallpapers/anthony-davis-lakers-nba-american-basketball-player-4k-2048x2048-7596.jpg' profileName='AD'/>
        </div>
    );
}