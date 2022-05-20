import { CSSProperties, PropsWithChildren } from 'react';
import { animated } from 'react-spring';

function Button({style, url, children}: PropsWithChildren<{style: CSSProperties, url: string}>) {
    return (
        <animated.a className="relative z-50 inline-block px-6 py-4 text-lg font-semibold text-white rounded bg-intiveo-light-blue" href={url} target="_blank" style={style}>{children}</animated.a>
    );
}

export default Button;