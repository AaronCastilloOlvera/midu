import { useState } from "react";

export function TwitterFollowCard({ userName, name, initialIsFollowing}) {

    const [isFollowing, setIsFollowing ] = useState(initialIsFollowing);

    const imageSrc = `https://unavatar.io/${userName}`; 
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    };

    return(
        <article className='md-tw-followCard'>
            <header>
                <img 
                    className="tw-followCard-avatar"
                    alt="Avatar"
                    src={ imageSrc }></img>
                <div>
                    <strong>{ userName }</strong>
                    <span>{"@" + userName }</span>
                </div>
            </header>
            <aside>
                <button className={ buttonClassName } onClick={() => { handleClick() }}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de Seguir</span>
                </button>
            </aside>
        </article>
    )
}