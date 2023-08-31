export function TwitterFollowCard({ formatUserName, userName, name, isFollowing}) {

    const imageSrc = `https://unavatar.io/${userName}`; 
    
    return(
        <article className='md-tw-followCard'>
            <header>
                <img 
                    alt="Avatar"
                    src={imageSrc}></img>
                <div>
                    <strong>{ name }</strong>
                    <span>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button>
                    Seguir
                </button>
            </aside>
        </article>
    )
}