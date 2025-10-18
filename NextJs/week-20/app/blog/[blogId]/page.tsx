import axios from "axios";

interface BlogPageProps{
    params:{
        blogId:string;
    }
}

export default async function BlogPage({params}:BlogPageProps){
    const postId = (await params).blogId;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const data = response.data
    return <div>
        Blog Page {postId}
        <br />
        title - {data.title}
        body - {data.body}
    </div>
}