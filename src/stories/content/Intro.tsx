import { useLittera } from "@assembless/react-littera";
import { useSpring, animated, config } from "react-spring";
import Wrapper from "../ui/Wrapper";

const translations = {
    title: {
        fr_CA: "Raphael, enchanté",
        en_CA: "I'm Raphael"
    },
    description: {
        fr_CA: "Je suis un developpeur passionné par la tech, le cinéma et l'urbanisme. Je travaille dans le developpement web depuis 2016, j'ai conçu des applications, dashboards et APIs dans divers domaines.",
        en_CA: "A developer passionate about tech, cinema and urbanism. I've been working in web development since 2016, building applications, dashboards, and APIs in diverse domains."
    },
    next: {
        fr_CA: "Je cherche la prochaine étape, travailler avec une compagnie qui supporte des causes auxquelles je crois, comme Transit!",
        en_CA: "I'm now looking to take the next step, working with companies that support causes I believe in, like Transit!"
    },
    alt: {
        fr_CA: "Une photo de moi a coté de la rivière Saguenay",
        en_CA: "A photo of me by the Saguenay river"
    }
};

function Intro() {

    const t = useLittera(translations);

    const imgSpring = useSpring({to: {opacity: 1, scale: 1}, from: {opacity: 0, scale: 0}, config: config.wobbly});
    const titleSpring = useSpring({to: {opacity: 1, y: 0}, from: {opacity: 0, y: -50}, config: config.gentle});
    const descSpring = useSpring({to: {opacity: 1}, from: {opacity: 0}, config: config.gentle, delay: 500});
    const nextSpring = useSpring({to: {opacity: 1}, from: {opacity: 0}, config: config.gentle, delay: 700});

    return (
        <Wrapper>
            <animated.div className="w-32 h-32 overflow-hidden rounded-full shadow-2xl" style={imgSpring}>
                <img className="object-cover w-full h-full" src="/headshot.png" alt={t.alt}/>
            </animated.div>
            <animated.h1 className="flex w-full p-5 text-4xl font-bold font-title" style={titleSpring}>{t.title}</animated.h1>
            <animated.p className="flex w-full px-5" style={descSpring}>{t.description}</animated.p>
            <animated.p className="flex w-full px-5 mt-8 font-semibold" style={nextSpring}>{t.next}</animated.p>
        </Wrapper>
    );
}

export default Intro;