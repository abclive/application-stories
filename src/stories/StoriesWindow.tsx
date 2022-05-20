import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { SpringContext } from "react-spring";
import StoriesTimeline from "./StoriesTimeline";
import { stories } from "./timeline";

function StoriesWindow() {

    const [activeStory, setActiveStory] = useState(0);
    const currentStory = stories[activeStory];

    const updateRate = 100;
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const tickInterval = useRef(0);
    const pauseTimer = useRef(0);

    useEffect(() => {
        if (tickInterval.current) {
            clearInterval(tickInterval.current);
        }
        tickInterval.current = setInterval(() => {
            if (!isPaused) {
                setElapsedTime(elapsed => elapsed + updateRate);
            }
        }, updateRate) as any;
    }, [isPaused]);

    useEffect(() => {
        if (elapsedTime >= currentStory.time * 1000) {
            if (activeStory < stories.length - 1) {
                setElapsedTime(0);
            }
            setActiveStory(active => Math.min(active + 1, stories.length - 1));
        }
    }, [elapsedTime, activeStory, currentStory]);

    function onKeyboardInput(event: KeyboardEvent<HTMLDivElement>) {
        switch (event.code) {
            case "ArrowLeft": return prevStory();
            case "ArrowRight": return nextStory();
            case "Space": return setIsPaused(!isPaused);
            default: return;
        }
    }

    function clearPause() {
        if (pauseTimer.current) {
            clearTimeout(pauseTimer.current);
        }
    }

    function pause() {
        clearPause();
        pauseTimer.current = setTimeout(() => {
            if (!isPaused) {
                setIsPaused(true);
            }
        }, 300) as any;
    }

    function prevStory() {
        clearPause();
        if (!isPaused) {
            setElapsedTime(0);
            setActiveStory(Math.max(activeStory - 1, 0));
        }
        setIsPaused(false);
    }

    function nextStory() {
        clearPause();
        if (!isPaused) {
            setElapsedTime(0);
            setActiveStory(Math.min(activeStory + 1, stories.length - 1));
        }
        setIsPaused(false);
    }

    return (
        <SpringContext pause={isPaused}>
            <div className="relative flex flex-wrap items-center justify-center w-full h-full md:bg-intiveo-almost-white md:gap-16" tabIndex={0} onKeyDown={onKeyboardInput}>
                <div onClick={prevStory} className="items-center hidden p-6 transition-all duration-200 bg-white rounded-full shadow-xl cursor-pointer hover:shadow-2xl md:flex group">
                    <svg className="h-10 transition-colors duration-200 fill-intiveo-light-blue/50 group-hover:fill-intiveo-light-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"/></svg>
                </div>
                <div className="relative w-full h-full md:w-[395px] md:max-h-[800px] md:rounded-xl md:overflow-hidden md:shadow-xl">
                    <div className="absolute z-10 flex w-full h-full opacity-0">
                        <div className="flex-1 h-full" onPointerDown={pause} onPointerUp={prevStory}></div>
                        <div className="flex-1 h-full" onPointerDown={pause} onPointerUp={nextStory}></div>
                    </div>
                    <StoriesTimeline elapsed={elapsedTime} active={activeStory} stories={stories.map((story) => story.time)}/>
                    <div className="relative h-full">{currentStory.component}</div>
                </div>
                <div onClick={nextStory} className="items-center hidden p-6 transition-all duration-200 bg-white rounded-full shadow-xl cursor-pointer hover:shadow-2xl md:flex group">
                    <svg className="h-10 transition-colors duration-200 fill-intiveo-light-blue/50 group-hover:fill-intiveo-light-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"/></svg>
                </div>
            </div>
        </SpringContext>
    );
}

export default StoriesWindow;