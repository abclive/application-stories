import { CSSProperties, PropsWithChildren } from 'react';
import { animated } from 'react-spring';

function Pill({style, children}: PropsWithChildren<{style: CSSProperties}>) {
    return (
        <animated.div className="px-4 py-2 text-xs font-semibold text-white bg-black rounded-full bg-opacity-20" style={style}>{children}</animated.div>
    );
}

export default Pill;