import { useLittera } from "@assembless/react-littera";

const translations = {
    title: {
        fr_CA: "Raphael, enchanté",
        en_CA: "I'm Raphael"
    },
    description: {
        fr_CA: "27 ans, passionné par la tech, le cinéma et l'urbanisme",
        en_CA: "A 27 years old, passionate about tech, cinema, and urbanism"
    }
};

function IntroStory() {

    const t = useLittera(translations);

    return (
        <div className="relative flex flex-wrap items-center content-center justify-center w-full h-full bg-green-700">
            <h1 className="flex w-full p-5 text-4xl text-white">{t.title}</h1>
            <p className="flex w-full px-5 text-white">{t.description}</p>
        </div>
    );
}

export default IntroStory;