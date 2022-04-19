import { useLittera } from "@assembless/react-littera";
import { config, useSpring, animated, useTrail } from "react-spring";
import Pill from "../ui/Pill";
import Wrapper from "../ui/Wrapper";

const translations = {
    title: {
        fr_CA: "🌐 Projets",
        en_CA: "🌐 Projects"
    },
    restaurants_title: {
        fr_CA: "Commande en ligne",
        en_CA: "Online Ordering Platform"
    },
    restaurants_tech: [{fr_CA: "Typescript", en_CA: "Typescript"}, {fr_CA: "Pusher", en_CA: "Pusher"}, {fr_CA: "PWA", en_CA: "PWA"}],
    restaurants_description: {
        fr_CA: "Une app multi client pour restaurants comprenant un panel d'administration et un système de point de ventes.",
        en_CA: "A multi-tenancy app for restaurants featuring a back-end administration panel and a Point of Sale system."
    },
    rentals_title: {
        fr_CA: "Location de vacances",
        en_CA: "Vacation Rental Website"
    },
    rentals_tech: [{fr_CA: "Lazy loading", en_CA: "Lazy loading"}, {fr_CA: "AJAX", en_CA: "AJAX"}, {fr_CA: "Crons", en_CA: "Crons"}],
    rentals_description: {
        fr_CA: "Un site hautement optimisé permettant aux utilisateurs de réserver en ligne directement via l'API de HomeAway. Le contenu, disponibilités et prix sont récupérés depuis l'API. Itérations basées sur les données d'usage.",
        en_CA: "A highly optimized website enabling users to reserve online directly through HomeAway's API. Content, availability and pricing are pulled from the API, and improvements were implemented based on usage analytics."
    }
};

function Projects() {

    const t = useLittera(translations);

    const titleSpring = useSpring({to: {opacity: 1, y: 0}, from: {opacity: 0, y: -50}, config: config.gentle});
    const imgSpring = useSpring({to: {opacity: 1, y: 0}, from: {opacity: 0, y: -50}, config: config.gentle, delay: 400});
    const projectsSpring = useSpring({to: {opacity: 1, y: 0}, from: {opacity: 0, y: -25}, config: config.gentle, delay: 300})
    const restaurantPills = useTrail(t.restaurants_tech.length, {to: {opacity: 1, x: 0}, from: {opacity: 0, x: -25}, config: config.gentle, delay: 400});
    const descSpring = useSpring({to: {opacity: 1}, from: {opacity: 0}, config: config.gentle, delay: 600});

    const AnimatedPill = animated(Pill);

    return (
        <Wrapper>
            <div className="w-full px-4 text-left">
                <animated.p className="text-3xl font-bold font-title" style={titleSpring}>{t.title}</animated.p>
                <div className="flex gap-4 mt-8">
                    <div className="w-1/4">
                        <animated.div className="relative h-48 mt-2 overflow-hidden rounded shadow-lg" style={imgSpring}>
                            <img className="object-cover w-full h-full" src="/rentals.png" alt=""/>
                        </animated.div>
                    </div>
                    <div className="w-3/4">
                        <animated.p className="text-lg font-semibold font-title" style={projectsSpring}>{t.restaurants_title}</animated.p>
                        <div className="flex gap-2 mt-2">
                            {restaurantPills.map((pillSpring, index) => <AnimatedPill style={pillSpring}>{t.restaurants_tech[index]}</AnimatedPill>)}
                        </div>
                        <animated.p className="mt-4 text-sm" style={descSpring}>{t.restaurants_description}</animated.p>
                    </div>
                </div>
                <div className="flex gap-4 mt-8">
                    <div className="w-3/4">
                        <animated.p className="text-lg font-semibold font-title" style={projectsSpring}>{t.rentals_title}</animated.p>
                        <div className="flex gap-2 mt-2">
                            {restaurantPills.map((pillSpring, index) => <AnimatedPill style={pillSpring}>{t.rentals_tech[index]}</AnimatedPill>)}
                        </div>
                        <animated.p className="mt-4 text-sm" style={descSpring}>{t.rentals_description}</animated.p>
                    </div>
                    <div className="w-1/4">
                        <animated.div className="relative h-48 mt-2 overflow-hidden rounded shadow-lg" style={imgSpring}>
                            <img className="object-cover w-full h-full" src="/rentals.png" alt=""/>
                        </animated.div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Projects;