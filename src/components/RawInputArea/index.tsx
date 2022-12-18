import { ChangeEvent } from 'react'
import {useEditor} from '../../hooks/useEditor'
import styles from './styles.module.css'

export function RawInputArea() {
    const {handleChangeRawInputedText} = useEditor()

    const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        handleChangeRawInputedText(e.target.value)
    }

    return (
        <div className={styles.container}>
        <h1 className="title">Enter Markdown</h1>
        <textarea 
            onChange={handleTextAreaChange} 
            className={styles['text-input']}
            name="raw-area" 
            placeholder='Enter your markdown here...'
            autoFocus
        >
        </textarea>
        </div>
    )
}