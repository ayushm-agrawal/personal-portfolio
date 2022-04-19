import React, {useState} from "react";
import '../../styles/blog/Blog.css';
import Markdown from "markdown-to-jsx";
import BlogItem from "../../helpers/BlogText.md";
import {CustomBlockQuote, CustomImageBlock, CustomParagraph, CustomPreBlock} from "./CustomHTMLTagOverride";
import BlogsList from "./BlogsList";


function Blog() {
    const [post, setPost] = useState('');

    fetch(BlogItem)
        .then(response => response.text())
        .then(data => setPost(data))
        .catch(console.error);


    return (
        <div className='blog'>
            {/*<Markdown
                options={{
                    overrides: {
                        pre: CustomPreBlock,
                        blockquote: CustomBlockQuote,
                        p: CustomParagraph,
                        img: {
                            component: CustomImageBlock,
                        },
                    },
                }}>
                {post}
            </Markdown>*/}
            <div className='blog-left'></div>
            <div className='blog-middle'>
                <BlogsList/>
            </div>
            <div className='blog-right'></div>
        </div>
    )
}

export default Blog;