import Markdown from "react-markdown";
import MarkdownFile from './data/sample.md';
function Blogs() {
    
    return (
        <> 
        <div>{displayMarkdown(MarkdownFile)}</div>
        </>
    )
}

export default Blogs

function displayMarkdown(markdown){
    let metadata = extractMetadataFromMarkdown(markdown);
    return (
        <>
        <a href={metadata.link}>
        <h3>{metadata.title}</h3>
        <h5 className="flex-row">{
            metadata.tags.split(",").map((tag)=>
                <span className="mr-3 rounded-xl px-1.5 py-0.5 text-white bg-[#6E5458]">
                {tag}
                </span>
            )
        }</h5>
        <div className="text-xs">{metadata.text} ... </div>
        </a>
        <hr/>
        </>
    )
}

function extractMetadataFromMarkdown(markdown)
{
    const charactersBetweenGroupedHyphens = /^---([\s\S]*?)---/;
    const metadataMatched = markdown.match(charactersBetweenGroupedHyphens);
    const metadata = metadataMatched[1];

    if (!metadata) {
        return {};
    }

    const metadataLines = metadata.split("\n");
    const metadataObject = metadataLines.reduce((accumulator, line) => {
        const [key, ...value] = line.split(":").map((part) => part.trim());

        if (key)
            accumulator[key] = value[1] ? value.join(":") : value.join("");
        return accumulator;
    }, {});

    var match = markdown.match(/^---([\s\S]*?)---([\s\S]*)/);
    var limit = 200;
    if (match && match[2]) {
        metadataObject["text"] = match[2].trim().substr(0,limit);
    } else {
        metadataObject["text"] = markdown.trim().substr(0, limit);
    }
    return metadataObject;
};