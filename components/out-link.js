const outLink = (props) => {
    if (props.href == '#') {
        return (
            <a className={props.className}>{props.children}</a>
        )
    }
    return (
        <a
            className={props.className}
            target="_blank"
            rel="noopener noreferrer"
            href={props.href}    
        >
        {props.children}
        </a>
    );
}

export default outLink;
