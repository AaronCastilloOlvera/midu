import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App(){
    const format = (userName) => `@${userName}`

    return(
        <section className='App'>
            <TwitterFollowCard 
                formatUserName={format} 
                isFollowing 
                userName="midudev" 
                name="Miguel Angel!"/>

            <TwitterFollowCard 
                formatUserName={format} 
                isFollowing={true} 
                userName="pheralb" 
                name="Pablo"/>

            <TwitterFollowCard 
                formatUserName={format} 
                isFollowing={false} 
                userName="elonmusk" 
                name="Elon"/>

            <TwitterFollowCard 
                formatUserName={format}
                isFollowing={true} 
                userName="aaron" 
                name="Aaron"/>

        </section>
    )
}