import Markdown from "react-markdown";
import MarkdownFile from './data/sample.md';
function Blogs() {
    
    return (
        <> 
            Coming soon
        </>
    )
}

export default Blogs


const extractMetadataFromMarkdown = (markdown) => {
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

    return metadataObject;
};