import Carousel1Img from "../assets/Carousel-1.png"
import Carousel2Img from "../assets/Carousel-2.png"
import Carousel3Img from "../assets/Carousel-3.png"
import ProfileImg from "../assets/Profile.png"

const Slider = () => {
    return (
        <div className="relative h-full w-full items-end flex">
            <ul className="flex gap-[5%] lg:gap-[10%] w-[150%] absolute -left-1/4 items-center min-h-[15rem]">
                <li>
                    <img src={Carousel1Img} alt="" />
                </li>
                <li>
                    <img src={Carousel2Img} alt="" />
                </li>
                <li>
                    <img src={Carousel3Img} alt="" />
                </li>
            </ul>
            <div className="w-full flex justify-center relative items-end">
                <div className="w-[50%] lg:w-[40%] p-6 lg:p-16 bg-white shadow-xl ">
                    <img src={ProfileImg} alt="" className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 lg:w-32" />
                    <div className="text-[0.5rem] lg:text-base">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>
                        <p className="font-bold text-[0.7rem] lg:text-xl">-Jeo Stanlee</p>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default Slider;