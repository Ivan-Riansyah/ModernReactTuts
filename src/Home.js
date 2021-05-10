import BlogList from './BlogList';
import useFetch from './UseFetch';

const Home = () => {

    const {data, isPending, isError} = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {isPending && <div>Loading...</div>}
            {isError && <div>{isError}</div>}
            {data && <BlogList blogs={data} title="All Blogs"/>}
        </div>
    );

}

// const Home = () => {
//     const [name, setName] = useState('mario');
//     const [age, setAge] = useState(25);

//     const handleClick = () =>{
//         setName('luigi');
//         setAge(30);
//     }

//     return (
//         <div className="home">
//             <h2>Home Page</h2>
//             <p>{name} is {age} years old</p>
//             <button onClick={handleClick}>Click Me</button>
//         </div>
//     );
// }

// npx json-server --watch data/db.json --port 8000

export default Home;