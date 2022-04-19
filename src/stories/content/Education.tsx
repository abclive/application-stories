import { useLittera } from "@assembless/react-littera";
import { useSpring, animated, config } from "react-spring";
import ExperienceTitle from "../ui/ExperienceTitle";
import Wrapper from "../ui/Wrapper";

const translations = {
    category: {
        fr_CA: "🎓 Éducation",
        en_CA: "🎓 Education"
    },
    school: {
        fr_CA: "École 42",
        en_CA: "42 School"
    },
    title: {
        fr_CA: "Apprentissage du développement logiciel",
        en_CA: "Learning software development"
    },
    subtitle: {
        fr_CA: "Un école unique en son genre avec un cursus centré sur la pratique et sur l'apprentissage par les pairs.",
        en_CA: "A very unique school with a project oriented paradigm and with peer learning at the heart of its curriculum."
    },
    skills: {
        fr_CA: "🧰 J'y ai appris le C, C++, PHP et le JS, ainsi que la gestion du temps en situation de stress, la revue de code et le travail collaboratif.",
        en_CA: "🧰 I learned C, C++, PHP and JS, as well as deadline management in high stress scenarios, code reviews and collaborative work."
    },
    relevantExp: {
        fr_CA: "👨‍🏫 J'ai notamment eu l'occasion d'écrire un cours intensif sur un moteur de jeu pour les autres étudiants. J'ai adoré l'opportunité d'enseigner et de partager mes connaissances en développement.",
        en_CA: "👨‍🏫 While there, I wrote an intensive game engine course for the other students. I loved the opportunity to teach and share my development knowledge."
    }
};


function Education() {

    const t = useLittera(translations);

    const catSpring = useSpring({to: {opacity: 1, y: 0}, from: {opacity: 0, y: -50}, config: config.gentle});
    const contentSpring = useSpring({to: {opacity: 1}, from: {opacity: 0}, config: config.gentle, delay: 600});

    return (
        <Wrapper>
            <div className="w-full px-4 text-left">
                <animated.p className="text-3xl font-bold font-title" style={catSpring}>{t.category}</animated.p>
                <ExperienceTitle title={t.school} subtitle={t.title} date="2013 — 2016" description={t.subtitle}/>
                <animated.div className="px-4 mt-4" style={contentSpring}>
                    <p>{t.skills}</p>
                    <p className="mt-4">{t.relevantExp}</p>
                </animated.div>
            </div>
        </Wrapper>
    );
}

export default Education;