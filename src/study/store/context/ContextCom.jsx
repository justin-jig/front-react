import { useState } from 'react';
import MyContext, { LanguageProvider } from './Lang.context';
import {LanguageSelector1, LanguageSelector2} from './LanguageSelector';

export default function ContextCom () {


    return (
        <LanguageProvider> 
            <LanguageSelector2/>
        </LanguageProvider>
    )
}