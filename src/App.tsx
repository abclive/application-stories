import React, { useState } from 'react';
import './App.css';
import StoriesWindow from './stories/StoriesWindow';
import { LitteraProvider } from '@assembless/react-littera';
import LanguagePicker from './lang/LanguagePicker';

function App() {    
    
    const [pickedLanguage, setPickedLanguage] = useState(false);

    return (
        <div className="fixed w-full h-full">
            <LitteraProvider locales={["fr_CA", "en_CA"]}>
                {pickedLanguage ? <StoriesWindow/> : <LanguagePicker onPicked={() => setPickedLanguage(true)}/>}
            </LitteraProvider>
        </div>
    );
}
    
export default App;
