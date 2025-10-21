
import { practiceContext, PracticeProvider } from './practice.context'
import { useContext } from 'react';
import './Practice1.scss'
export default function Practice1 () {

    return (
        <PracticeProvider>
            <SelectSetting/>
        </PracticeProvider>
    )
}


function SelectSetting () {

    const { thema, language, setThema, setLanguage } = useContext(practiceContext);

    return (
        <div className={thema === 'light'? 'wrap light' : 'wrap dark'} >   
            <div className='setting-select'>
                <select defaultValue={language} onChange={(e) => setLanguage(e.target.value)}>
                    <option value={'kor'}>korea</option>
                    <option value={'en'}>english</option>
                </select>
                <select  defaultValue={thema} onChange={(e) => setThema(e.target.value)}>
                    <option>light</option>
                    <option>dark</option>
                </select>
            </div>
            <div className='setting-result'>   

                    <span>Result : </span>
                    {language === 'kor' ?
                        <span>안녕하세요</span>
                        :
                        <span>hello</span>
                    }
                    
            </div>
        </div>
    )
}