import { useLittera } from "@assembless/react-littera";
import Wrapper from "../ui/Wrapper";
import { config, useSpring, animated } from "react-spring";
import Button from "../ui/Button";

const translations = {
    title: {
        fr_CA: "Ne me croyez pas sur parole!",
        en_CA: "See for yourself!"
    },
    description: {
        fr_CA: "J'ai developpé cette application pour l'occasion en utilisant React, Typescript et Tailwind, vous pouvez en inspecter le code source sur Github.",
        en_CA: "I developed this app from scratch using React, Typescript, Tailwind, and you can check out its source code on Github."
    },
    cta: {
        fr_CA: "💻 Voir le code source",
        en_CA: "💻 View the source code"
    }
};

function CodeReview() {
    
    const t = useLittera(translations);

    const titleSpring = useSpring({to: {opacity: 1, y: 0}, from: {opacity: 0, y: -50}, config: config.gentle});
    const descSpring = useSpring({to: {opacity: 1}, from: {opacity: 0}, config: config.gentle, delay: 300});
    const ctaSpring = useSpring({to: {opacity: 1}, from: {opacity: 0}, config: config.gentle, delay: 500})

    const AnimatedButton = animated(Button);

    return (
        <Wrapper>
            <div className="text-center">
                <animated.p className="text-3xl font-bold font-title" style={titleSpring}>{t.title}</animated.p>
                <animated.p className="px-4 mt-8 text-lg" style={descSpring}>{t.description}</animated.p>
                <div className="mt-8">
                    <AnimatedButton url="https://github.com/abclive/application-stories/tree/transit" style={ctaSpring}>{t.cta}</AnimatedButton>
                </div>
            </div>
        </Wrapper>
    );
}

export default CodeReview;