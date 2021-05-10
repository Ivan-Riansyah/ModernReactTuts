import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method : 'POST',
            headers : {"Content-Type": "application/JSON"},
            body : JSON.stringify(blog)
        }).then(()=>{
            setIsPending(false);
            history.push('/');
        })
    }

    return (
        <div className="create">
            <h2>Created a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                 type="text"
                 required
                 value = {title}
                 onChange = {(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                 required
                 value = {body}
                 onChange = {(e) => setBody(e.target.value)}
                />
                <label>Blog author:</label>
                <select
                 value = {author}
                 onChange = {(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                    <option value="luigi">luigi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Loading...</button>}
                {/* <p>{title + body + author}</p> */}
            </form>
        </div>
    );
}
 
export default Create;