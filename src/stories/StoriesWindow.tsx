import React, { useEffect, useRef, useState } from "react";
import GreetStory from "./content/GreetStory";
import IntroStory from './content/IntroStory';
import StoriesTimeline from "./StoriesTimeline";

function StoriesWindow() {

    const stories = [
        {component: <GreetStory/>, time: 5},
        {component: <IntroStory/>, time: 3},
        {component: <GreetStory/>, time: 5},
    ];
    const [activeStory, setActiveStory] = useState(0);
    const currentStory = stories[activeStory];
    const storyTimer = useRef(0);

    function queueNextStory() {
        if (storyTimer.current) {
            clearTimeout(storyTimer.current);
        }
        storyTimer.current = setTimeout(() => {
            setActiveStory(active => Math.min(active + 1, stories.length - 1));
        }, currentStory.time * 1000) as any;
    }

    useEffect(() => queueNextStory(), []);
    useEffect(() => queueNextStory(), [activeStory]);

    function prevStory() {
        setActiveStory(Math.max(activeStory - 1, 0));
    }

    function nextStory() {
        setActiveStory(Math.min(activeStory + 1, stories.length - 1));
    }

    return (
        <div className="fixed w-full h-full">
            <div className="flex absolute z-10 w-full h-full opacity-0">
                <div className="flex-1 h-full bg-red-500" onClick={prevStory}>{activeStory - 1}</div>
                <div className="flex-1 h-full bg-green-500" onClick={nextStory}>{activeStory + 1}</div>
            </div>
            <StoriesTimeline active={activeStory} stories={stories.map((story) => story.time)}/>
            <div className="relative h-full">{currentStory.component}</div>
        </div>
    );
}

export default StoriesWindow;