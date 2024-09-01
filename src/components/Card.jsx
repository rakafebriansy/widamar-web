const Card = (props) => {
    const {image, children, title} = props;

    return (
        <div className="relative flex items-end justify-center rounded-xl min-h-[16rem]">
            <img src={image} alt={title} className="w-full h-[80%] absolute top-0 left-0" />
            <div className="p-3 z-10 h-[40%] w-[90%] rounded-lg flex flex-col items-center justify-between text-justify bg-white shadow-xl">
                <div className="flex flex-col items-start w-full tracking-tight">
                    <h1 className="text-xs lg:text-lg font-bold ">{title}</h1>
                    <p className="text-xs lg:text-lg text-[#393636]">{children}</p>
                </div>
                <a href="" className="gap-2 items-center inline-flex">
                    <span className="text-xs lg:text-lg font-bold text-[#285B0A]">Readmore</span>
                    <div className="relative h-full">
                        <svg className="w-3 absolute top-1/2 inline-block" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5 9L15.7929 5.70711C16.1834 5.31658 16.1834 4.68342 15.7929 4.29289L12.5 1M15.5 5L1.5 5" stroke="#285B0A" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Card;