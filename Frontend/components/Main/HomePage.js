import { useEffect, useState } from "react";
import ArticlePreview from "../Article/ArticlePreview"

const HomePage = () => {
    const [ids, setIds] = useState([])

    // get a list of 6 random ids for the previews
    useEffect(() => {
        n = 6
        axios.get(`/randomids/${n}`)
          .then(res => res.json())
          .then(data => setIds(data));
      }, [id]);

    return (
        <div>
            <h1>Welcome</h1>
            <table className="preview-table">
                <tr>
                    <td><div className="article-preview"><ArticlePreview id={ids[0]}/></div></td>
                    <td><div className="article-preview"><ArticlePreview id={ids[1]}/></div></td>
                </tr>
                <tr>
                    <td><div className="article-preview"><ArticlePreview id={ids[2]}/></div></td>
                    <td><div className="article-preview"><ArticlePreview id={ids[3]}/></div></td>
                </tr>
                <tr>
                    <td><div className="article-preview"><ArticlePreview id={ids[4]}/></div></td>
                    <td><div className="article-preview"><ArticlePreview id={ids[5]}/></div></td>
                </tr>
            </table>
        </div>
    );
};

export default HomePage