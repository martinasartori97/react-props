export default function postsCard({ post }) {



    return (
        <div className="card">
            <img src={post.image} alt="" />
            <div className="card-body">
                <h3>{post.name}</h3>
                <div className="tags"> tags:html ,css </div>
                <div className="title"> title:cagnolino</div>

            </div>
        </div>
    )
}