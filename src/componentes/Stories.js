import Story from './Story';
import './Stories.css';

export default function Stories() {
    return (
        <div className='Stories'>
            <Story profilePhoto="https://encurtador.com.br/7cBcC" profileName="Gabs" />
            <Story profilePhoto="https://img.olympics.com/images/image/private/t_1-1_300/f_auto/primary/ovfsumgucccbmte6jtor" profileName="MJ" />
            <Story profilePhoto="https://b.fssta.com/uploads/application/nba/headshots/1550.vresize.350.350.medium.91.png" profileName="Curry" />
            <Story profilePhoto="https://avatars.githubusercontent.com/u/125317872?v=4" profileName="Vinicius" />
            <Story profilePhoto="https://static01.nyt.com/images/2021/05/19/sports/19nba-ja-morant/19nba-ja-morant-mediumSquareAt3X.jpg" profileName="Ja Morant" />
            <Story profilePhoto="https://pbs.twimg.com/profile_images/1579949436527988737/RDqn1udJ_400x400.jpg" profileName="Shaq" />
        </div>
    );
}