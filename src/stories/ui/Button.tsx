import { animated } from 'react-spring';

function Button({style, url, children}: any) {
    return (
        <animated.a className="relative z-50 inline-block px-6 py-4 text-lg font-semibold text-white bg-black rounded bg-opacity-20" href={url} target="_blank" style={style}>{children}</animated.a>
    );
}

export default Button;