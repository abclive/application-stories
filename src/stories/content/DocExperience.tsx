import { useLittera } from "@assembless/react-littera";
import { config, useSpring, animated, useTrail } from "react-spring";
import ExperienceTitle from "../ui/ExperienceTitle";
import Pill from "../ui/Pill";
import Wrapper from "../ui/Wrapper";

const translations = {
    category: {
        fr_CA: "👔 Experience Pro",
        en_CA: "👔 Work Experience"
    },
    jobTitle: {
        fr_CA: "Développeur Web",
        en_CA: "Web Developer"
    },
    subtitle: {
        fr_CA: "Une plateforme de prise de rendez-vous médicaux",
        en_CA: "An online medical appointment platform"
    },
    tech: [
        {
            fr_CA: "Frameworks maison",
            en_CA: "Homemade frameworks"
        },
        {
            fr_CA: "Rendu AJAX",
            en_CA: "AJAX Rendering"
        }
    ],
    tasks: [
        {
            fr_CA: "📅 Développé le système de réservation et l'algorithme de disponibilités impliquant les dates et fuseaux horaires.",
            en_CA: "📅 Developed the booking process and availability algorithm involving dates and timezones."
        },
        {
            fr_CA: "🔎 Mis en place un service de récupération de données pour inclure le contenu d'autre repertoires sur la plateforme.",
            en_CA: "🔎 Designed and implemented a data scraping service to include other online directories on the platform."
        },
        {
            fr_CA: "💳 Integré un mode d'authentification gouvernemental utilisant des cartes d'identité électroniques.",
            en_CA: "💳 Integrated a government protocol of authentication using electronic ID cards."
        }
    ]
};

function DocExperience() {
    
    const t = useLittera(translations);

    const catSpring = useSpring({to: {opacity: 1, y: 0}, from: {opacity: 0, y: -50}, config: config.gentle});
    const pills = useTrail(t.tech.length, {to: {opacity: 1, x: 0}, from: {opacity: 0, x: -25}, config: config.gentle, delay: 400});
    const tasks = useTrail(t.tasks.length, {to: {opacity: 1}, from: {opacity: 0}, config: config.gentle, delay: 600});

    const AnimatedPill = animated(Pill);
    
    return (
        <Wrapper>
            <div className="w-full px-4 text-left">
                <animated.p className="text-3xl font-bold font-title" style={catSpring}>{t.category}</animated.p>
                <ExperienceTitle title="Doc.fr" subtitle={t.jobTitle} date="2016 — 2017" description={t.subtitle}/>
                <div className="flex gap-2 my-4">
                    {pills.map((spring, index) => <AnimatedPill style={spring}>{t.tech[index]}</AnimatedPill>)}
                </div>
                <div className="px-4 mt-4">
                    {tasks.map((spring, index) => <animated.p className="py-4" style={spring}>{t.tasks[index]}</animated.p>)}
                </div>
            </div>
        </Wrapper>
    );
}

export default DocExperience;