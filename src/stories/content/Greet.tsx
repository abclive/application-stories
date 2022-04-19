import { useLittera } from "@assembless/react-littera";
import { animated, config, useSpring } from "react-spring";
import Wrapper from "../ui/Wrapper";

const translations = {
    title: {
        fr_CA: "Allô Transit! 👋",
        en_CA: "Hi Transit! 👋"
    },
    description: {
        fr_CA: "Ceci est une candidature interactive pour la position de Developpeur web Full-stack.",
        en_CA: "This is my application (pun intended) for your Full-stack Web Developer position."
    },
    instructions: {
        fr_CA: "Naviguez d'un écran à l'autre en tappant sur la gauche ou la droite de la page comme n'importe quelle autre app avec des stories. Pour pauser, gardez votre doigt pressé sur l'écran.",
        en_CA: "You can navigate like any other stories app from screen to screen by tapping the left or right side of the page. You can pause by holding your finger on the screen."
    }
}

function Greet() {

    const t = useLittera(translations);

    const titleSpring = useSpring({to: {opacity: 1, y: 0}, from: {opacity: 0, y: -50}, config: config.gentle});
    const descSpring = useSpring({to: {opacity: 1, y: 0}, from: {opacity: 0, y: -50}, config: config.gentle, delay: 500});
    const instrSpring = useSpring({to: {opacity: 1}, from: {opacity: 0}, config: config.gentle, delay: 1500});

    return (
        <Wrapper>
            <animated.h1 className="flex w-full p-5 text-4xl font-bold font-title" style={titleSpring}>{t.title}</animated.h1>
            <animated.p className="flex w-full px-5" style={descSpring}>{t.description}</animated.p>
            <animated.div className="p-4 mx-4 mt-16 bg-black rounded bg-opacity-20" style={instrSpring}>
                <p className="text-lg font-semibold">📖 Instructions</p>
                <p className="flex w-full">{t.instructions}</p>
            </animated.div>
        </Wrapper>
    );
}

export default Greet;