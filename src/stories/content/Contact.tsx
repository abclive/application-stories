import { useLittera } from "@assembless/react-littera";
import Wrapper from "../ui/Wrapper";
import { config, useSpring, animated } from "react-spring";
import Button from "../ui/Button";


const translations = {
    title: {
        fr_CA: "Prenons contact!",
        en_CA: "Let's get in touch!"
    },
    description: {
        fr_CA: "Merci d'avoir pris le temps de lire ma candidature. Parlons-nous, vous pouvez me contacter par email ou téléphone",
        en_CA: "Thank you for taking the time to review my application. I would love to talk more, here's how you can contact me"
    }
};

function Contact() {

    const t = useLittera(translations);

    const titleSpring = useSpring({to: {opacity: 1, y: 0}, from: {opacity: 0, y: -50}, config: config.gentle});
    const descSpring = useSpring({to: {opacity: 1}, from: {opacity: 0}, config: config.gentle, delay: 300});
    const btnSpring = useSpring({to: {opacity: 1}, from: {opacity: 0}, config: config.gentle, delay: 500});

    const AnimatedButton = animated(Button);

    return (
        <Wrapper>
            <div className="text-center">
                <animated.p className="text-3xl font-bold font-title" style={titleSpring}>{t.title}</animated.p>
                <animated.p className="px-4 mt-8 text-lg" style={descSpring}>{t.description}</animated.p>
                <div className="flex flex-wrap justify-center gap-4 mt-8">
                    <AnimatedButton url="tel:+14388862209" style={btnSpring}>☎️ (438) 886-2209</AnimatedButton>
                    <AnimatedButton url="mailto:r.astier.dev@gmail.com" style={btnSpring}>✉️ r.astier.dev@gmail.com</AnimatedButton>
                </div>
            </div>
        </Wrapper>
    );
}

export default Contact;