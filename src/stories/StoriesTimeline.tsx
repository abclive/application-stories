import { useEffect, useRef } from "react";

function StoriesTimeline({elapsed, active, stories}: {elapsed: number, active: number, stories: number[]}) {
    const activeStoryLength = stories[active];
    const progressElt = useRef(null);

    useEffect(() => {
        if (progressElt.current) {
            (progressElt.current as HTMLElement).style.width = `${Math.min(elapsed / (activeStoryLength * 10), 100)}%`;
        }
    }, [elapsed, activeStoryLength]);

    return (
        <div className="absolute z-10 flex flex-row w-full gap-2 p-2">
            {stories.map((story, index) => 
                <div className={'relative flex flex-1 h-2 rounded ' + ((index >= active) ? 'bg-opacity-20 bg-black' : 'bg-white')} key={index}>
                    {(index === active) && <div ref={progressElt} className="absolute z-10 h-full transition-all duration-75 bg-white rounded"></div>}
                </div>
            )}
        </div>
    );
}

export default StoriesTimeline;