import LazyLoad from 'react-lazyload';

const image = (props) => {
    let img;
    if (props.lazy) {
        const str = props.src;
        const positionOfPeriod = str.indexOf('.');
        const before = str.slice(0, positionOfPeriod);
        const after = str.slice(positionOfPeriod);
        const newPath = before + '-LAZY' + after;

        const placeholderImg = 
            <img
                src={newPath}
                alt={props.alt}
                className={`lazy-img ${props.className}`}
                draggable="false"
            />
        img = (
            <LazyLoad offset={200} placeholder={placeholderImg}>
                <img
                    src={props.src}
                    className={props.className}
                    alt={props.alt}
                    draggable="false"
                />
            </LazyLoad>
        )
    }

    if (!props.lazy) {
        img =
            <img
                src={props.src}
                className={props.className}
                alt={props.alt}
                draggable="false"
            />
    }

    return img;
}

export default image;
