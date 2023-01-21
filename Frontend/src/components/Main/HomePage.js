import { useEffect, useState } from "react";
import ArticlePreview from "../Article/ArticlePreview"
import axios from "axios"
import Navbar from "./Navbar";

const HomePage = () => {
    const [articles, setArticles] = useState([])

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
            <table className="preview-table">
                <tbody>
                    <tr>
                        <td className="article-preview"><ArticlePreview a={articles[ 1 % articles.length ]}/></td>
                        <td className="article-preview"><ArticlePreview a={articles[ 2 % articles.length ]}/></td>
                    </tr>
                    <tr>
                        <td className="article-preview"><ArticlePreview a={articles[ 3 % articles.length ]}/></td>
                        <td className="article-preview"><ArticlePreview a={articles[ 4 % articles.length ]}/></td>
                    </tr>
                    <tr>
                        <td className="article-preview"><ArticlePreview a={articles[ 5 % articles.length ]}/></td>
                        <td className="article-preview"><ArticlePreview a={articles[ 6 % articles.length ]}/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>)
}

export default HomePage