import { useLittera } from "@assembless/react-littera";

const translations = {
    title: {
        fr_CA: "Allô Transit!",
        en_CA: "Hi Transit!"
    },
    description: {
        fr_CA: "Ceci est une candidature interactive pour la position de Developpeur web Full-stack.",
        en_CA: "This is my application (pun intended) for your Full-stack Web Developer position."
    }
}

function GreetStory() {

    const t = useLittera(translations);

    return (
        <div className="flex relative flex-wrap justify-center content-center items-center w-full h-full bg-green-700">
            <h1 className="flex p-5 w-full text-4xl text-white">{t.title}</h1>
            <p className="flex px-5 w-full text-white">{t.description}</p>
        </div>
    );
}

export default GreetStory;