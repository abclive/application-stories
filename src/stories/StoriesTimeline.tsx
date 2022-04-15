import { useEffect, useRef, useState } from "react";

function StoriesTimeline({active, stories}: {active: number, stories: number[]}) {
    const updateRate = 100;
    const activeStoryLength = stories[active];
    const [storyCompletion, setStoryCompletion] = useState(0);
    const progressElt = useRef(null);

    useEffect(() => {
        setStoryCompletion(0);
        const interval = setInterval(() => {
            setStoryCompletion((completion) => Math.min(completion + (updateRate / 10 / activeStoryLength), 100));
        }, updateRate);

        return () => clearInterval(interval);
    }, [active]);

    useEffect(() => {
        if (progressElt.current) {
            (progressElt.current as HTMLElement).style.width = `${storyCompletion}%`;
        }
    }, [storyCompletion]);

    return (
        <div className="flex absolute z-10 flex-row gap-2 p-2 w-full">
            {stories.map((story, index) => 
                <div className={'relative flex flex-1 h-2 bg-white rounded ' + ((index >= active) ? 'bg-opacity-20' : '')} key={index}>
                    {(index === active) && <div ref={progressElt} className="absolute z-10 h-full bg-white rounded transition-all duration-75"></div>}
                </div>
            )}
        </div>
    );
}

export default StoriesTimeline;