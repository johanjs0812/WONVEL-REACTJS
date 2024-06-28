const LinkOrButton = ({ href, children, ...props }) => {
    if (href) {
        return <a href={href} {...props}>{children}</a>;
    } else {
        return (
        <button style={{ background: 'none', border: 'none', padding: 0, textDecoration: 'underline', color: 'blue', cursor: 'pointer' }} {...props}>
            {children}
        </button>
        );
    }
};

export default LinkOrButton