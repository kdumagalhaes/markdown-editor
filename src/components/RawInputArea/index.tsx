import { ChangeEvent } from 'react'
import {useEditor} from '../../hooks/useEditor'

export function RawInputArea() {
    const {handleChangeRawInputedText} = useEditor()

    const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        handleChangeRawInputedText(e.target.value)
    }

    return (
        <div>
        <h1 className="title">Enter Markdown</h1>
        <textarea 
            onChange={handleTextAreaChange} 
            className="raw-area" 
            name="raw-area" 
            id="" 
            cols={30} 
            rows={10}>
        </textarea>
        </div>
    )
}