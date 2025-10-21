import { createContext, useState } from "react";


export const practiceContext = createContext({
    thema : '',
    language : '',
    setThema : () => {},
    setLanguage : () => {}
})


export function PracticeProvider (props) {

    const [language, setLanguage] = useState('ko');
    const [thema, setThema] = useState('light');

    return (
        <practiceContext.Provider value={{
            language :language,
            thema :thema,
            setLanguage : setLanguage,
            setThema: setThema
        }}>
            {props.children}
        </practiceContext.Provider>
    )
}
