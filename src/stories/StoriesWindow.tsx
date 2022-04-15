import React, { useState } from "react";
import GreetStory from "./content/GreetStory";
import IntroStory from './content/IntroStory';

function StoriesWindow() {

    const stories = [
        <GreetStory/>,
        <IntroStory/>
    ];
    const [currentStory, setCurrentStory] = useState(0);
    
    function prevStory() {
        setCurrentStory(Math.max(currentStory - 1, 0));
    }

    function nextStory() {
        setCurrentStory(Math.min(currentStory + 1, stories.length));
    }

    return (
        <div className="fixed w-full h-full">
            <div className="flex absolute z-10 w-full h-full opacity-0">
                <div className="flex-1 h-full bg-red-500" onClick={prevStory}>{currentStory - 1}</div>
                <div className="flex-1 h-full bg-green-500" onClick={nextStory}>{currentStory + 1}</div>
            </div>
            <div className="relative h-full">{stories[currentStory]}</div>
        </div>
    );
}

export default StoriesWindow;