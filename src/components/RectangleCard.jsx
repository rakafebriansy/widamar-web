const RectangleCard = (props) => {
    const {image, children, title} = props;
    return (
    <div className="bg-gradient-to-t from-[#7ED91B] to-[#43730E] p-2 rounded-xl">
        <div className="bg-white rounded-lg p-6 flex flex-col items-start justify-center gap-2 w-full h-full">
            <img src={image} alt="" />
            <h1 className="font-bold text-2xl">{title}</h1>
            <p>{children}</p>
        </div>
    </div>
    );
}

export default RectangleCard;