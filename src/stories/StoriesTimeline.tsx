import { useEffect, useRef, useState } from "react";

function StoriesTimeline({elapsed, active, stories}: {elapsed: number, active: number, stories: number[]}) {
    const activeStoryLength = stories[active];
    const progressElt = useRef(null);

    useEffect(() => {
        if (progressElt.current) {
            (progressElt.current as HTMLElement).style.width = `${Math.min(elapsed / (activeStoryLength * 10), 100)}%`;
        }
    }, [elapsed]);

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