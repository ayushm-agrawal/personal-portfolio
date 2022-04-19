import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {materialDark as CodeStyle} from "react-syntax-highlighter/dist/cjs/styles/prism";
import React from "react";

const CustomCodeBlock = ({className, children}) => {
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

const CustomBlockQuote = ({children}) => (
    <blockquote style={{borderLeft: '3px solid #f6a231'}} >{children}</blockquote>
);

const CustomImageBlock = ({children, ...rest}) => (
    <img {...rest} style={{width: '80vw'}} />
);

const CustomParagraph = ({children}) => (
    <p style={{marginLeft: '1%', marginRight: '1%'}}>{children}</p>
)

const CustomPreBlock = ({children, ...rest}) => {
    if ('type' in children && children['type'] === 'code') {
        return CustomCodeBlock(children['props']);
    }
    return <pre {...rest} style={{overflowX: 'scroll'}}>{children}</pre>;
};

export {CustomBlockQuote, CustomParagraph, CustomPreBlock, CustomImageBlock}