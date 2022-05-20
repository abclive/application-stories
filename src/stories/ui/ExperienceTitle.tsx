import { config, useSpring, animated } from "react-spring";

function ExperienceTitle({title, date, subtitle, description}: {title: string, date: string, subtitle: string, description: string}) {

    const titleSpring = useSpring({to: {opacity: 1, x: 0}, from: {opacity: 0, x: -50}, config: config.gentle, delay: 150});
    const subtitleSpring = useSpring({to: {opacity: 1, x: 0}, from: {opacity: 0, x: -50}, config: config.gentle, delay: 300});
    const descSpring = useSpring({to: {opacity: 1, x: 0}, from: {opacity: 0, x: -50}, config: config.gentle, delay: 300});

    return (
        <div>
            <animated.p className="mt-8 text-2xl font-bold text-intiveo" style={titleSpring}>{title} <span className="ml-2 text-lg font-normal text-intiveo-light-blue">{date}</span></animated.p>
            <animated.p className="text-xl font-semibold text-gray-700" style={subtitleSpring}>{subtitle}</animated.p>
            <animated.p className="text-sm text-gray-600" style={descSpring}>{description}</animated.p>
        </div>
    );
}

export default ExperienceTitle;