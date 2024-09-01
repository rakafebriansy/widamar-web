const Anchor = (props) => {
    const {children} = props;
    return (
        <a className="bg-[#285B0A] rounded-xl text-base lg:text-xl py-2 px-16 text-white font-semibold w-fit">{children}</a>
    )
}

export default Anchor;