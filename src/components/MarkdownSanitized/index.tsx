import {useEditor} from '../../hooks/useEditor'
import parse from 'html-react-parser'

export function MarkdownSanitized() {
    const {getMarkDownAsHTMLOutput} = useEditor()
    const output = parse(getMarkDownAsHTMLOutput())
    
    return (
        <div>
        <h2 className="title">Markdown Output</h2>
        <div className="markdown-output">{output}</div>
        </div>
    )
}