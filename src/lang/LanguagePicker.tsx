import { useLitteraMethods } from "@assembless/react-littera";

function LanguagePicker({onPicked}: {onPicked: Function}) {

    const littera = useLitteraMethods();

    function pickLocale(locale: string) {
        littera.setLocale(locale);
        onPicked();
    }

    return (
        <div className="relative w-full h-full">
            <div className="relative flex flex-wrap items-center content-center justify-center w-full h-full gap-8 bg-transit">
                <div className="flex justify-center w-full">
                    <button className="flex p-4 text-xl font-bold text-white bg-black rounded-xl bg-opacity-20" onClick={() => pickLocale('fr_CA')}>Français</button>
                </div>
                <div className="flex justify-center w-full">
                    <button className="flex p-4 text-xl font-bold text-white bg-black rounded-xl bg-opacity-20" onClick={() => pickLocale('en_CA')}>English</button>
                </div>
            </div>
        </div>
    );
}

export default LanguagePicker;