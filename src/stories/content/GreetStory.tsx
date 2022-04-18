import { useLittera } from "@assembless/react-littera";
import { animated, config, useSpring } from "react-spring";

const translations = {
    title: {
        fr_CA: "Allô Transit! 👋",
        en_CA: "Hi Transit! 👋"
    },
    description: {
        fr_CA: "Ceci est une candidature interactive pour la position de Developpeur web Full-stack.",
        en_CA: "This is my application (pun intended) for your Full-stack Web Developer position."
    }
}

function GreetStory() {

    const t = useLittera(translations);

    const titleSpring = useSpring({to: {opacity: 1, y: 0}, from: {opacity: 0, y: -50}, config: config.gentle});
    const descSpring = useSpring({to: {opacity: 1, y: 0}, from: {opacity: 0, y: -50}, config: config.gentle, delay: 150});

    return (
        <div className="relative flex flex-wrap items-center content-center justify-center w-full h-full bg-green-700">
            <animated.h1 className="flex w-full p-5 text-4xl text-white" style={titleSpring}>{t.title}</animated.h1>
            <animated.p className="flex w-full px-5 text-white" style={descSpring}>{t.description}</animated.p>
        </div>
    );
}

export default GreetStory;