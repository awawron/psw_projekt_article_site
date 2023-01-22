import { useEffect, useState } from "react";
import ArticlePreview from "../Article/ArticlePreview"
import axios from "axios"
import Navbar from "./Navbar";

const HomePage = () => {
    const [articles, setArticles] = useState([])
    const [query, setQuery] = useState('');

    const handleSearch = async () => {
        const res = await axios.get(`/search?query=${query}`);
        setArticles(res.data);
    };

    // Get articles for the preview table
    useEffect(() => {
        console.log("Go get articles")
        axios.get("/articles")
            .then(res => {
                setArticles(res.data)
        })
    }, []);
    

    return (<div>
        <Navbar />
        <div className="page">
            <h1>Welcome to ArticleSuperSite!</h1>
            <div className="center">
                <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
                <button onClick={handleSearch}>Search</button>
            </div>
            <table className="preview-table">
                <tbody>
                    {articles.map(article => {
                        return (<tr key={article.id} >
                            <td className="article-preview"><ArticlePreview a={article}/></td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    </div>)
}

export default HomePage