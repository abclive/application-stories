import { useLittera } from "@assembless/react-littera";
import { config, useSpring, useTrail, animated } from "react-spring";
import Wrapper from "../ui/Wrapper";

const translations = {
    title: {
        fr_CA: "Ce que j'apporterai",
        en_CA: "What I can bring"
    },
    assets: [
        {
            fr_CA: "📚 Une forte experience sur les APIs et l'integration de données",
            en_CA: "📚 A strong experience with APIs and data integration"
        },
        {
            fr_CA: "🎨 Le plaisir des designs simples et du beau code",
            en_CA: "🎨 An appreciation for simple designs and pretty code"
        },
        {
            fr_CA: "🤔 Un esprit féru d'apprentissage, en constante recherche d'amélioration",
            en_CA: "🤔 A constantly learning, improvement-seeking mindset"
        },
        {
            fr_CA: "🚌 Une passion pour l'urbanisme et la volonté de rendre le transport public plus accessible.",
            en_CA: "🚌 A passion for urbanism and making public transit more accessible."
        }
    ]
};

function Summary() {
    
    const t = useLittera(translations);

    const titleSpring = useSpring({to: {opacity: 1, y: 0}, from: {opacity: 0, y: -50}, config: config.gentle});
    const assetTrail = useTrail(t.assets.length, {to: {opacity: 1, x: 0}, from: {opacity: 0, x: -50}, config: config.gentle, delay: 200});
    
    return (
        <Wrapper>
            <animated.p className="text-3xl font-bold font-title" style={titleSpring}>{t.title}</animated.p>
            <div className="px-4 mt-8">
                {assetTrail.map((assetSpring, index) => <animated.p className="py-4 text-lg" style={assetSpring}>{t.assets[index]}</animated.p>)}
            </div>
        </Wrapper>
    );
}

export default Summary;