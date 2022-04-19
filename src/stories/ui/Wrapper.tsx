import { PropsWithChildren } from "react";

function Wrapper({children}: PropsWithChildren<any>) {
    return <div className="relative flex flex-wrap items-center content-center justify-center w-full h-full text-white bg-transit">{children}</div>;
}

export default Wrapper;