import { useLittera } from "@assembless/react-littera";
import { useTrail, animated, config } from "react-spring";
import ExperienceTitle from "../ui/ExperienceTitle";
import Pill from "../ui/Pill";
import Wrapper from "../ui/Wrapper";

const translations = {
    jobTitle: {
        fr_CA: "Développeur Principal",
        en_CA: "Lead Developer"
    },
    subtitle: {
        fr_CA: "Une agence web conçevant et implémentant des services digitaux",
        en_CA: "A web agency designing and implementing digital services front to back"
    },
    tech: [
        {fr_CA: "Laravel",en_CA: "Laravel"},
        {fr_CA: "Vue",en_CA: "Vue"},
        {fr_CA: "Tailwind",en_CA: "Tailwind"},
        {fr_CA: "Git",en_CA: "Git"},
    ],
    tasks: [
        {
            fr_CA: "✏️ Intégration d'expériences utilisateurs depuis Figma vers des composants JavaScript.",
            en_CA: "✏️ Integrated user experiences from Figma to JavaScript components."
        },
        {
            fr_CA: "⚙️ Responsable du développement de projets d'applications complexes et du rafraîchissement de la suite technologique et des processus techniques de la compagnie.",
            en_CA: "⚙️ Led development on complex application projects and revised the company's tech stack and workflows."
        },
        {
            fr_CA: "🔨 Interfaçage et organisation de plusieurs APIs, optimisation de leur contenu pour les afficher dans des expériences utilisateurs précises.",
            en_CA: "🔨 Interfaced and mapped several APIs, optimizing their content for display in tailored user experiences."
        }
    ]
};

function CollectiveExperience() {

    const t = useLittera(translations);
    const pills = useTrail(t.tech.length, {to: {opacity: 1, x: 0}, from: {opacity: 0, x: -25}, config: config.gentle, delay: 400});
    const tasks = useTrail(t.tasks.length, {to: {opacity: 1}, from: {opacity: 0}, config: config.gentle, delay: 600});

    const AnimatedPill = animated(Pill);

    return (
        <Wrapper>
            <div className="w-full px-4 text-left">
                <ExperienceTitle title="Collective Design" subtitle={t.jobTitle} date="2018 — 2022" description={t.subtitle}/>
                <div className="flex gap-2 my-4">
                    {pills.map((spring, index) => <AnimatedPill key={index} style={spring}>{t.tech[index]}</AnimatedPill>)}
                </div>
                <div className="px-4 mt-4">
                    {tasks.map((spring, index) => <animated.p key={index} className="py-4" style={spring}>{t.tasks[index]}</animated.p>)}
                </div>
            </div>
        </Wrapper>
    );
}

export default CollectiveExperience;