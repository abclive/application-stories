import { CSSProperties, PropsWithChildren } from 'react';
import { animated } from 'react-spring';

function Pill({style, children}: PropsWithChildren<{style: CSSProperties}>) {
    return (
        <animated.div className="px-4 py-2 text-xs font-semibold rounded-full text-intiveo bg-intiveo/10" style={style}>{children}</animated.div>
    );
}

export default Pill;