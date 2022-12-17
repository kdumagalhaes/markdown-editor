interface MarkdownSanitizedProps {
    output?: string
}

export function MarkdownSanitized({output}: MarkdownSanitizedProps) {
    return (
        <>
        <h2 className="title">Markdown Output</h2>
        <div className="markdown-output">{output}</div>
        </>
    )
}