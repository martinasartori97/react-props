import Posts from "./data/posts.js"
import postsCard from "./PostCard.jsx"


export default function AppMain() {
    return (
        <main>
            <div className="container">

                {Posts.map(post => <PostsCard {Posts} key={post.id} />)}

            </div>
        </main>
    )
}