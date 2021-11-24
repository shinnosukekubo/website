import "./Blog.css";
import parse from "html-react-parser";
import { marked } from "marked";
import { useEffect, useState } from "react";
import {Helmet} from "react-helmet"

export default function Blog() {
  const [data, setData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const json = await fetch("http://localhost:8888").then((res) =>
        res.json()
      );
      var html = marked(json["message"]);
      setData(html);
    };
    fetchData();
  }, [data]);
  return (
    <div>
      <Helmet>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/styles/dracula.min.css"/>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/highlight.min.js"></script>
      <script>
        // ハイライトを実行
        hljs.initHighlightingOnLoad();
      </script>
      </Helmet>
      <div>{parse(data)}</div>
      <code>export default function aaa() {}</code>
    </div>
  );
}
