import { useContext } from 'react';
import MyContext from './Lang.context';

export function LanguageSelector1 () {

    // 첫번째 방법
    return (
        <MyContext.Consumer>
            {value => {
                return (
                    <div>
                        <h2>현재 선택된 언어 : {value.language}</h2>
                        <select defaultValue={value.language} onChange={(e) => value.setLanguage(e.target.value)}>
                            <option value={'ko'}>한국어</option>
                            <option value={'en'}>영어</option>
                            <option value={'jp'}>일본어</option>
                        </select>
                    </div>
                )
            }}
        </MyContext.Consumer>
    )
} 

export function LanguageSelector2 () {
     
    // 두번 째 방법
    const value = useContext(MyContext);

    return (
        <div>
            <h2>현재 선택된 언어 : {value.language}</h2>
            <select defaultValue={value.language} onChange={(e) => value.setLanguage(e.target.value)}>
                <option value={'ko'}>한국어</option>
                <option value={'en'}>영어</option>
                <option value={'jp'}>일본어</option>
            </select>
        </div>
    )
} 