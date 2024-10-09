

export default function Story(props) {

    return (
        <div className="Story">
            <img src={props.profilePhoto} alt="profile-photo" />
            <p>{props.profileName}</p>
        </div>
    );
}