import { useLittera } from "@assembless/react-littera";
import { animated, config, useSpring } from "react-spring";
import Wrapper from "../ui/Wrapper";

const translations = {
    title: {
        fr_CA: "Allô Intiveo! 👋",
        en_CA: "Hi Intiveo! 👋"
    },
    description: {
        fr_CA: "Ceci est une candidature interactive pour la position de Developpeur web Full-stack.",
        en_CA: "This is my application (pun intended) for your Full-stack Web Developer position."
    },
    instructions: [
        {
            fr_CA: "Naviguez d'un écran à l'autre en tappant sur la gauche ou la droite de la page.",
            en_CA: "You can navigate from screen to screen by tapping the left or right side of the page."
        },
        {
            fr_CA: "Pour pauser, gardez votre doigt pressé sur l'écran.",
            en_CA: "You can pause by holding your finger on the screen.",
        },
    ],
    instructions_desktop: [
        {
            fr_CA: "Cette experience est optimisée pour une utilisation sur téléphone.",
            en_CA: "This experience is optimized for smartphones."
        },
        {
            fr_CA: "Naviguez d'un écran à l'autre en cliquant sur les fleches ou en appuyant sur les touches fléchées du clavier.",
            en_CA: "Navigate by using the arrows on each side or by using the arrow keys of your keyboard."
        },
        {
            fr_CA: "Vous pouvez pauser en appuyant sur espace.",
            en_CA: "You can pause by pressing the spacebar."
        }
    ]
}

function Greet() {

    const t = useLittera(translations);

    const titleSpring = useSpring({to: {opacity: 1, y: 0}, from: {opacity: 0, y: -50}, config: config.gentle});
    const descSpring = useSpring({to: {opacity: 1, y: 0}, from: {opacity: 0, y: -50}, config: config.gentle, delay: 500});
    const instrSpring = useSpring({to: {opacity: 1}, from: {opacity: 0}, config: config.gentle, delay: 1500});

    return (
        <Wrapper>
            <animated.h1 className="flex w-full p-5 text-4xl font-bold font-title text-intiveo" style={titleSpring}>{t.title}</animated.h1>
            <animated.p className="flex w-full px-5 text-gray-800" style={descSpring}>{t.description}</animated.p>
            <animated.div className="p-4 mx-4 mt-16 rounded bg-intiveo-almost-white" style={instrSpring}>
                <p className="text-lg font-semibold text-intiveo">📖 Instructions</p>
                {t.instructions.map((instructions, index) => <p key={index} className="flex w-full py-2 md:hidden">{instructions}</p>)}
                {t.instructions_desktop.map((instructions, index) => <p key={index} className="hidden w-full py-2 md:flex">{instructions}</p>)}
            </animated.div>
        </Wrapper>
    );
}

export default Greet;