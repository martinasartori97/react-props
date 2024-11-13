import Posts from "./data/posts.js"
import PostCard from "./PostCard.jsx"


export default function AppMain() {
    return (
        <main>
            <div className="container">

                {Posts.map(post => (<PostCard {Posts} key={post.id} />))}

            </div>
        </main>
    )
}