import Navbar from "../components/Navbar"
import HeroImg from "../assets/Hero.png"
import SlideImg from "../assets/Slide.png"
import NoodleImg from "../assets/Noodle.png"
import RiverImg from "../assets/River.png"
import QRImg from "../assets/QR.png"
import Warung1Img from "../assets/Warung-1.png"
import Warung2Img from "../assets/Warung-2.png"
import Warung3Img from "../assets/Warung-3.png"
import logo from "../assets/Logo.png"
import RectangleCard from "../components/RectangleCard"
import Anchor from "../components/Anchor"
import Card from "../components/Card"

const LandingPage = () => {
    return (
        <div className="relative w-screen h-screen bg-gradient-to-b from-[rgba(41,64,38,1)] via-[rgba(41,64,38,0.5)] via-10% to-20% to-[rgba(0,0,0,0)]">
            <Navbar/>
            <section id="home" className="relative min-h-screen min-w-full">
                <img className="absolute top-0 left-0 w-full h-full z-[-1]" src={HeroImg} alt="Gambar orang berenang" />
                <div className="h-[4rem] w-full bg-gradient-to-t from-white from-40% to-[rgba(0,0,0,0)] absolute bottom-0"></div>
            </section>
            <section className="bg-white flex flex-col items-center pt-[7rem] pb-[4rem]">
                <div className="w-[80%] flex flex-col gap-[4rem] items-center">
                    <h1 className="text-4xl font-bold">Wisata</h1>
                    <div className="flex w-full justify-between gap-14">
                        <RectangleCard title="Mini Tubing" image={RiverImg}>We book all kind of national or international ticket for your destinaion.</RectangleCard>
                        <RectangleCard title="Outbond" image={SlideImg}>You can easily book your according to your budget hotel by our website.</RectangleCard>
                        <RectangleCard title="Wisata Kuliner" image={NoodleImg}>We provide you the best plan within a short time explore more.</RectangleCard>
                    </div>
                </div>
            </section>
            <section id="tentang-kami" className="bg-[#F2F6F6] flex justify-center w-full relative">
                <img src={logo} className="opacity-40 absolute z-[1] w-[42rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                <div className="w-[50%] pt-10 flex flex-col justify-between pb-32 text-center gap-32">
                    <h1 className="text-4xl font-bold">Tentang Kami</h1>
                    <div className="text-3xl font-semibold text-justify tracking-tight">
                        <p>WIDAMAR merupakan proyek yang bertujuan untuk mentransformasi Desa Ajung menjadi destinasi ekowisata digital yang menarik. Proyek ini melibatkan pengembangan wisata interaktif di sekitar dua dam kembar yang ada di wilayah tersebut, dengan implementasi teknologi Augmented Reality (AR) untuk meningkatkan pengalaman wisatawan. Melalui pemanfaatan teknologi AR, pengunjung dapat berinteraksi dengan lingkungan sekitar, mendapatkan informasi tambahan, serta visualisasi digital yang memperkaya pengalaman mereka.</p>
                    </div>
                </div>
            </section>
            <section className="flex justify-center p-10">
                <div className="w-[70%] flex flex-col items-center gap-10">
                    <div className="text-[#646464] flex flex-col items-center gap-2 w-full">
                        <h1 className="text-4xl font-bold">Maps dan Peta Wisata</h1>
                        <p className="text-2xl">Easy and Fast</p>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="flex justify-center items-center">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.786605865273!2d113.83518407505568!3d-8.123196491906326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6bff1e82a8ac3%3A0x2c242e9b954f82f!2sDam%20kembar!5e0!3m2!1sid!2sid!4v1722145332836!5m2!1sid!2sid" className="w-[35rem] h-[27rem]" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="flex justify-between flex-col gap-1 items-center">
                            <div className="font-bold bg-[#285B0A] w-fit py-3 px-5 rounded-2xl text-white text-2xl">
                                <p>Scan Untuk Menjelajah</p>
                            </div>
                            <img src={QRImg} className="w-[23rem]" />
                        </div>
                    </div>
                    <Anchor>Unduh Dena Wisata</Anchor>
                </div>
            </section>
            <section className="flex justify-center p-10">
                <div className="bg-[#F9F9FF] w-[90%] flex flex-col gap-6 py-8 items-center justify-center">
                    <div className="w-[50%] text-center flex flex-col items-center gap-3">
                        <h1 className="text-4xl text-[#285B0A] font-bold">Informasi FoodCourt</h1>
                        <p className="text-[#717171]">The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
                    </div>
                    <div className="flex justify-center w-[80%]">
                        <div className="grid grid-cols-3 w-full h-full gap-5 min-h-[25rem]">
                            <Card image={Warung2Img} title="Warung Pak Somat">memiliki berbagai macam menu yang menarik</Card>
                            <Card image={Warung1Img} title="Warung Pak Somat">memiliki berbagai macam menu yang menarik</Card>
                            <Card image={Warung3Img} title="Warung Pak Somat">memiliki berbagai macam menu yang menarik</Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LandingPage