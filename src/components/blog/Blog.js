import React, {useState} from "react";
import '../../styles/blog/Blog.css';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {materialDark as CodeStyle} from 'react-syntax-highlighter/dist/esm/styles/prism';
import Markdown from "markdown-to-jsx";
import BlogItem from "../../helpers/BlogText.md";


function Blog() {
    const CodeBlock = ({className, children}) => {
        let lang = 'text'; // default monospaced text
        if (className && className.startsWith('lang-')) {
            lang = className.replace('lang-', '');
        }
        return (
            <SyntaxHighlighter
                lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}}
                wrapLines={true} language={lang} style={CodeStyle}>
                {children}
            </SyntaxHighlighter>
        );
    }

    const BlockQuote = ({children}) => (
      <blockquote style={{borderLeft: '3px solid #f6a231'}} >{children}</blockquote>
    );

    const ImageBlock = ({children, ...rest}) => (
      <img {...rest} style={{width: '80vw'}} />
    );

    const Paragraph = ({children}) => (
        <p style={{marginLeft: '1%', marginRight: '1%'}}>{children}</p>
    )

    const PreBlock = ({children, ...rest}) => {
        if ('type' in children && children['type'] === 'code') {
            return CodeBlock(children['props']);
        }
        return <pre {...rest} style={{overflowX: 'scroll'}}>{children}</pre>;
    };

    const [post, setPost] = useState('');

    fetch(BlogItem)
        .then(response => response.text())
        .then(data => setPost(data))
        .catch(console.error);


    return (
        <div className='blog'>
            <Markdown
                options={{
                    overrides: {
                        pre: PreBlock,
                        blockquote: BlockQuote,
                        p: Paragraph,
                        img: {
                            component: ImageBlock,
                        },
                    },
                }}>
                {post}
            </Markdown>
        </div>
    )
}

export default Blog;