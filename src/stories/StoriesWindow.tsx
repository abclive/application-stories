import React, { useEffect, useRef, useState } from "react";
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
            <div className="relative w-full h-full">
                <div className="absolute z-10 flex w-full h-full opacity-0">
                    <div className="flex-1 h-full bg-red-500" onPointerDown={pause} onPointerUp={prevStory}>{activeStory - 1}</div>
                    <div className="flex-1 h-full bg-green-500" onPointerDown={pause} onPointerUp={nextStory}>{activeStory + 1}</div>
                </div>
                <StoriesTimeline elapsed={elapsedTime} active={activeStory} stories={stories.map((story) => story.time)}/>
                <div className="relative h-full">{currentStory.component}</div>
            </div>
        </SpringContext>
    );
}

export default StoriesWindow;