import {useEditor} from '../../hooks/useEditor'
import parse from 'html-react-parser'
import styles from './styles.module.css'

export function MarkdownSanitized() {
    const {getMarkDownAsHTMLOutput} = useEditor()
    const output = parse(getMarkDownAsHTMLOutput())
    
    return (
        <div className={styles.container}>
        <h2 className={styles.title}>Markdown Output</h2>
        <div className={styles['markdown-output']}>{output}</div>
        </div>
    )
}