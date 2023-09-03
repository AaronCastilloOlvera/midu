import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App(){
    const format = (userName) => `@${userName}`
    const [name, setName] = useState('midudev');
    

    var users = 
    [
        {
            userName: 'Aaron',
            name: 'Aaron',
            isFollowing: false
        },
        {
            userName: 'midulive',
            name: 'midulive',
            isFollowing: true
        },
        {
            userName: 'dog',
            name: 'dog',
            isFollowing: false
        },
        {
            userName: 'Mike',
            name: 'Mike',
            isFollowing: true
        }            
    ]

    return(
        <section className='App'>
            {
                users.map( user => {
                    const { userName, name, isFollowing} = user
                    return(
                        <TwitterFollowCard 
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                        >
                            {name}    
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}