import { useHistory, useParams } from "react-router";
import useFetch from "./UseFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending, isError } = useFetch('http://localhost:8000/blogs/' + id);

    const history = useHistory();

    const handleClick = () =>{
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { isError && <div>{isError}</div>}
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete Blog</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;