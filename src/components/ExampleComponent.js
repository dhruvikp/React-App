import { useEffect, useState } from "react";

const ExampleComponent = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            setData(data);
            setLoading(false);
        })
        .catch(error => {
            console.log('Error fetching data:', error);
            setError(error);
            setLoading(false);
        })
    }, []);

    if(loading) {
        return <div> Loading...</div>
    }

    if(error) {
        return <div> Error fetching data: {error.message} </div>
    }

    return (
        <div>
            <h1>:: Post Sample Data ::</h1>
            <pre> {JSON.stringify(data)} </pre>
        </div>
    );
};


export default ExampleComponent;