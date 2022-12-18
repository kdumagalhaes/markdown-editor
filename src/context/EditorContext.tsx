import {createContext, useState, ReactNode} from 'react'
import {Remarkable} from 'remarkable'

const md = new Remarkable()

interface EditorProviderProps {
    children: ReactNode
}

interface EditorContextModel {
    rawText: string
    handleChangeRawInputedText: (inputedText: string) => void
    getMarkDownAsHTMLOutput: () => string
}  


export const EditorContext = createContext({} as EditorContextModel)

export const EditorProvider = ({children}: EditorProviderProps) => {
    const [rawText, setRawText] = useState('Hi! Welcome to the Markdown Editor App!')

    const handleChangeRawInputedText = (inputedText: string) => {
        setRawText(inputedText)
    }

    const getMarkDownAsHTMLOutput = () => {
        return md.render(rawText)
    }

    const value = {
        handleChangeRawInputedText,
        getMarkDownAsHTMLOutput,
        rawText
    }

    return <EditorContext.Provider value={value}>{children}</EditorContext.Provider>
}