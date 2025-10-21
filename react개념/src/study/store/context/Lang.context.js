import { createContext, useState } from "react";

// Context생성
// createContext() : Provider와 Consumer 두개의 리엑트 컴포넌트를 반환
const MyContext = createContext({
    language: '',
    abc: 0,
    setLanguage : () => { }
});

export function LanguageProvider (props) {

    const [language, setLanguage] = useState('en');

    return (
            <MyContext.Provider value={ { language:language, setLanguage:setLanguage }}>
                {props.children}
            </MyContext.Provider>
    )
}
export default MyContext;