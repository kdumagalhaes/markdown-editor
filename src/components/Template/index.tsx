import { MarkdownSanitized } from "../MarkdownSanitized";
import { RawInputArea } from "../RawInputArea";
import styles from './styles.module.css'

export function Template() {
    return (
        <main className={styles.container}>
            <RawInputArea />
            <MarkdownSanitized />
        </main>
    )
}