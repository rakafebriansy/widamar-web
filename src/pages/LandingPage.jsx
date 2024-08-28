import Navbar from "../components/Navbar"
import HeroImg from "../assets/Hero.png"
import SlideImg from "../assets/Slide.png"
import NoodleImg from "../assets/Noodle.png"
import ProfileImg from "../assets/Profile.png"
import RiverImg from "../assets/River.png"
import QRImg from "../assets/QR.png"
import PlaneImg from "../assets/Plane.png"
import Warung1Img from "../assets/Warung-1.png"
import Warung2Img from "../assets/Warung-2.png"
import Warung3Img from "../assets/Warung-3.png"
import Carousel1Img from "../assets/Carousel-1.png"
import Carousel2Img from "../assets/Carousel-2.png"
import Carousel3Img from "../assets/Carousel-3.png"
import logo from "../assets/Logo.png"
import RectangleCard from "../components/RectangleCard"
import Anchor from "../components/Anchor"
import Card from "../components/Card"
import { useEffect, useRef, useState } from "react"
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const LandingPage = () => {

    const [isAnimated, setIsAnimated] = useState(false);
    const mountRef = useRef(null);

    useEffect(() => {
        if(!isAnimated) {
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer();
            
            renderer.setClearColor(0xffffff, 1); 
            renderer.setSize(window.innerWidth, window.innerHeight);
            mountRef.current.appendChild(renderer.domElement);

            const controls = new OrbitControls(camera, renderer.domElement);
    
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
            scene.add(ambientLight);

            const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
            directionalLight.position.set(5, 10, 7.5);
            scene.add(directionalLight);

            const spotlight = new THREE.SpotLight(0xffffff, 2);
            spotlight.position.set(15, 30, 20);
            spotlight.castShadow = true;
            scene.add(spotlight);
            
            const loader = new GLTFLoader();
            loader.load('http://127.0.0.1:8000/api/ppk', function (gltf) {
                scene.add(gltf.scene);
                gltf.scene.position.set(0, 0, 0);
            }, undefined, function (error) {
                console.error('An error happened:', error);
            });
    
            camera.position.x = 50;
            camera.position.z = -10;
            camera.position.y = 40;
            camera.lookAt(0, 0, 0);

            const animate = () => {
                console.log('animate')
                requestAnimationFrame(animate);
                controls.update();
                renderer.render(scene, camera);
            }

            setIsAnimated(true);
            animate();

            const handleResize = () => {
                camera.aspect = (window.innerWidth/3) / (window.innerHeight/3);
                camera.updateProjectionMatrix();
                renderer.setSize((window.innerWidth/3), (window.innerHeight/3));
            };
            window.addEventListener('resize', handleResize);
    
            // Cleanup on unmount
            return () => {
                window.removeEventListener('resize', handleResize);
                mountRef.current.removeChild(renderer.domElement);
                renderer.dispose();
            };
        }
    },[]);

    return (
        <div className="relative w-full h-screen bg-gradient-to-b from-[rgba(41,64,38,1)] via-[rgba(41,64,38,0.5)] via-10% to-20% to-[rgba(0,0,0,0)]">
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
            <section id="about" className="bg-[#F2F6F6] flex justify-center w-full relative">
                <img src={logo} className="opacity-40 absolute z-[1] w-[42rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                <div className="w-[50%] pt-10 flex flex-col justify-between pb-32 text-center gap-32">
                    <h1 className="text-4xl font-bold">Tentang Kami</h1>
                    <div className="text-3xl font-semibold text-justify tracking-tight">
                        <p>WIDAMAR merupakan proyek yang bertujuan untuk mentransformasi Desa Ajung menjadi destinasi ekowisata digital yang menarik. Proyek ini melibatkan pengembangan wisata interaktif di sekitar dua dam kembar yang ada di wilayah tersebut, dengan implementasi teknologi Augmented Reality (AR) untuk meningkatkan pengalaman wisatawan. Melalui pemanfaatan teknologi AR, pengunjung dapat berinteraksi dengan lingkungan sekitar, mendapatkan informasi tambahan, serta visualisasi digital yang memperkaya pengalaman mereka.</p>
                    </div>
                </div>
            </section>
            <section ref={mountRef} className="w-[80%] overflow-hidden">
            </section>
            <section id="news" className="flex justify-center p-10">
                <div className="w-[70%] flex flex-col items-center gap-10">
                    <div className="text-[#646464] flex flex-col items-center gap-2 w-full">
                        <h1 className="text-4xl font-bold">Maps dan Peta Wisata</h1>
                        <p className="text-2xl">Easy and Fast</p>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="flex justify-center items-center">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.76638083046!2d113.83630099999999!3d-8.1252517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6bf8fb6e97339%3A0x6ce61ee74b7fe29a!2sBendung%20Kembar!5e0!3m2!1sid!2sid!4v1722354994101!5m2!1sid!2sid"className="w-[35rem] h-[27rem]" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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
            <section id="feature" className="flex justify-center p-20">
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
            <section id="service" className="w-full flex flex-col gap-12 relative h-[42rem] p-[5rem] bg-[#E6F7EE] overflow-hidden">
                <div className="flex w-full flex-col items-center h-[10%]">
                    <h1 className="text-4xl">Apa Kata Mereka</h1>
                    <h1 className="text-2xl">Tentang Wisata</h1>
                </div>
                <div className="relative h-full items-end flex">
                    <ul className="flex gap-[18rem] w-[150%] absolute -left-1/4 items-center min-h-[30rem]">
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
                        <div className="w-[40%] p-16 bg-white shadow-xl ">
                            <img src={ProfileImg} alt="" className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32" />
                            <div className="">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>
                                <p className="font-bold text-xl">-Jeo Stanlee</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full flex justify-center p-[4rem]">
                <div className="w-[80%] flex flex-col items-center relative gap-14">
                    <img src={PlaneImg} className="absolute top-0 right-0" alt="" />
                    <div className=" flex flex-col gap-4 w-[60%] items-center text-center">
                        <h1 className="font-semibold text-4xl">Saran dan Kritik</h1>
                        <p className="font-bold">Yuk berikan kritik dan saran Atas tempat wisata ini agar  menjadi lebih baik lagi, jangan lupa berikan kritik dan saran yang membangun ya.</p>
                    </div>
                    <div className="flex flex-col gap-5 w-full">
                        <div className="grid grid-cols-2 gap-8">
                            <div className="bg-gradient-to-t to-[#813794] from-[#C91F25] p-1 rounded-md">
                                <input type="text" name="" placeholder="Nama" id="" className="rounded-sm font-bold text-lg w-full h-full p-3" />
                            </div>
                            <div className="bg-gradient-to-t to-[#813794] from-[#C91F25] p-1 rounded-md">
                                <input type="text" name="" placeholder="Nama" id="" className="rounded-sm font-bold text-lg w-full h-full p-3" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-8 h-50">
                            <div className="bg-gradient-to-t to-[#813794] from-[#C91F25] p-1 h-32 rounded-md">
                                <textarea className="w-full h-full font-bold text-lg resize-none p-2" placeholder="Sampaikan Kritik Anda*"></textarea>
                            </div>
                            <div className="bg-gradient-to-t to-[#813794] from-[#C91F25] p-1 h-32 rounded-md">
                                <textarea className="w-full h-full font-bold text-lg resize-none p-2" placeholder="Sampaikan Kritik Anda*"></textarea>
                            </div>
                        </div>
                    </div>
                    <Anchor>Submit</Anchor>
                </div>
            </section>
            <footer className="p-14 flex justify-center text-white bg-[#263238] items-start">
                <div className="w-[80%] flex gap-96">
                    <div className="gap-5 flex flex-col items-start">
                        <div className="flex flex-col items-start justify-center ">
                            <div className="flex gap-5 items-center">
                                <img src={logo} className="w-20" alt="" />
                                <p className="text-2xl font-bold">WIDAMAR Desa Ajung</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-start">
                            <p>Copyright © 2024 BEM Fasilkom UNEJ.</p>
                            <p>All rights reserved</p>
                        </div>
                        <div className="flex gap-3">
                            <div className="p-2 rounded-full bg-[#3B464C] w-10 h-10">
                                <svg className="w-full h-full" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.00093 0.138428C6.68339 0.138428 6.39255 0.148561 5.48232 0.189984C4.57386 0.231584 3.95377 0.375408 3.41118 0.586432C2.84993 0.80439 2.37384 1.09595 1.89952 1.57044C1.42485 2.04476 1.13329 2.52085 0.914624 3.08192C0.703066 3.62469 0.559065 4.24496 0.518175 5.15306C0.477464 6.06329 0.466797 6.35431 0.466797 8.67185C0.466797 10.9894 0.477108 11.2793 0.518353 12.1896C0.560131 13.098 0.703955 13.7181 0.914802 14.2607C1.13294 14.822 1.4245 15.2981 1.89899 15.7724C2.37313 16.247 2.84922 16.5393 3.41012 16.7573C3.95306 16.9683 4.57333 17.1121 5.4816 17.1537C6.39184 17.1951 6.68251 17.2053 8.99986 17.2053C11.3176 17.2053 11.6075 17.1951 12.5178 17.1537C13.4262 17.1121 14.047 16.9683 14.59 16.7573C15.151 16.5393 15.6264 16.247 16.1006 15.7724C16.5752 15.2981 16.8668 14.822 17.0855 14.2609C17.2952 13.7181 17.4392 13.0979 17.4819 12.1898C17.5228 11.2795 17.5335 10.9894 17.5335 8.67185C17.5335 6.35431 17.5228 6.06347 17.4819 5.15323C17.4392 4.24478 17.2952 3.62469 17.0855 3.0821C16.8668 2.52085 16.5752 2.04476 16.1006 1.57044C15.6259 1.09577 15.1512 0.804212 14.5894 0.586432C14.0454 0.375408 13.425 0.231584 12.5165 0.189984C11.6063 0.148561 11.3165 0.138428 8.99826 0.138428H9.00093ZM8.23537 1.6762C8.46258 1.67584 8.71609 1.6762 9.00089 1.6762C11.2793 1.6762 11.5494 1.68438 12.4491 1.72526C13.2811 1.76331 13.7327 1.90233 14.0335 2.01913C14.4317 2.1738 14.7156 2.35869 15.0141 2.65736C15.3128 2.95603 15.4977 3.24048 15.6527 3.63871C15.7695 3.93915 15.9087 4.39071 15.9466 5.22272C15.9875 6.12229 15.9963 6.39251 15.9963 8.66987C15.9963 10.9472 15.9875 11.2175 15.9466 12.117C15.9085 12.949 15.7695 13.4006 15.6527 13.701C15.498 14.0993 15.3128 14.3828 15.0141 14.6813C14.7154 14.98 14.4319 15.1649 14.0335 15.3195C13.733 15.4369 13.2811 15.5755 12.4491 15.6136C11.5495 15.6545 11.2793 15.6634 9.00089 15.6634C6.72229 15.6634 6.45224 15.6545 5.55268 15.6136C4.72067 15.5752 4.26911 15.4362 3.96813 15.3194C3.5699 15.1647 3.28546 14.9798 2.98679 14.6811C2.68812 14.3825 2.50323 14.0987 2.3482 13.7003C2.2314 13.3999 2.0922 12.9483 2.05433 12.1163C2.01344 11.2167 2.00527 10.9465 2.00527 8.66774C2.00527 6.38896 2.01344 6.12016 2.05433 5.22059C2.09238 4.38858 2.2314 3.93702 2.3482 3.63622C2.50287 3.23799 2.68812 2.95354 2.98679 2.65487C3.28546 2.3562 3.5699 2.17131 3.96813 2.01629C4.26893 1.89896 4.72067 1.76029 5.55268 1.72206C6.33989 1.68651 6.64496 1.67584 8.23537 1.67406V1.6762ZM13.556 3.0931C12.9906 3.0931 12.532 3.55124 12.532 4.11676C12.532 4.6821 12.9906 5.14077 13.556 5.14077C14.1213 5.14077 14.58 4.6821 14.58 4.11676C14.58 3.55142 14.1213 3.0931 13.556 3.0931ZM9.00095 4.28956C6.58083 4.28956 4.61868 6.25171 4.61868 8.67183C4.61868 11.0919 6.58083 13.0532 9.00095 13.0532C11.4211 13.0532 13.3825 11.0919 13.3825 8.67183C13.3825 6.25171 11.4211 4.28956 9.00095 4.28956ZM9.00091 5.82735C10.5718 5.82735 11.8454 7.10079 11.8454 8.67183C11.8454 10.2427 10.5718 11.5163 9.00091 11.5163C7.42987 11.5163 6.15644 10.2427 6.15644 8.67183C6.15644 7.10079 7.42987 5.82735 9.00091 5.82735Z" fill="white"/>
                                </svg>
                            </div>
                            <div className="p-2 rounded-full bg-[#3B464C] w-10 h-10">
                                <svg className="w-full h-full" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5335 8.65993C17.5335 9.23702 17.4747 9.81331 17.3593 10.3751C17.2468 10.9235 17.0801 11.4619 16.8618 11.9766C16.6485 12.4822 16.3839 12.9694 16.0747 13.4237C15.7701 13.8752 15.4192 14.2988 15.0338 14.6849C14.6475 15.0693 14.2225 15.4192 13.7712 15.7251C13.3154 16.0322 12.8275 16.2964 12.3216 16.5107C11.8061 16.7279 11.2665 16.8943 10.7186 17.0066C10.1561 17.1223 9.57767 17.1814 8.99975 17.1814C8.42139 17.1814 7.84303 17.1223 7.28133 17.0066C6.73257 16.8943 6.19295 16.7279 5.67792 16.5107C5.17207 16.2964 4.68369 16.0322 4.22784 15.7251C3.77657 15.4193 3.35155 15.0693 2.96611 14.6849C2.58027 14.2988 2.2294 13.8752 1.92439 13.4237C1.61687 12.9694 1.35184 12.4821 1.13768 11.9766C0.919305 11.4619 0.752236 10.9234 0.63931 10.3751C0.525147 9.81331 0.466797 9.23702 0.466797 8.65993C0.466797 8.08241 0.525114 7.50488 0.639343 6.94436C0.75227 6.39595 0.919338 5.85672 1.13771 5.34286C1.35187 4.83691 1.6169 4.34927 1.92442 3.89488C2.22943 3.44302 2.5803 3.02025 2.96614 2.6337C3.35158 2.24922 3.7766 1.90015 4.22787 1.59475C4.68372 1.28641 5.1721 1.02223 5.67795 0.807505C6.19298 0.589849 6.73257 0.423021 7.28137 0.311525C7.84306 0.196694 8.42142 0.138428 8.99978 0.138428C9.57771 0.138428 10.1561 0.196694 10.7186 0.311525C11.2665 0.423055 11.8061 0.589882 12.3216 0.807505C12.8275 1.02219 13.3154 1.28641 13.7713 1.59475C14.2225 1.90015 14.6476 2.24922 15.0338 2.6337C15.4193 3.02025 15.7701 3.44302 16.0747 3.89488C16.3839 4.34927 16.6485 4.83694 16.8618 5.34286C17.0801 5.85672 17.2468 6.39595 17.3593 6.94436C17.4747 7.50488 17.5335 8.08241 17.5335 8.65993ZM5.89038 2.07781C3.85817 3.03608 2.34143 4.90597 1.86848 7.1595C2.0606 7.16117 5.09742 7.19946 8.59634 6.27114C7.33505 4.03341 5.98748 2.20725 5.89038 2.07781ZM9.20012 7.39171C5.44786 8.51344 1.84724 8.43273 1.71808 8.42776C1.71597 8.50597 1.71223 8.58168 1.71223 8.65992C1.71223 10.5294 2.41851 12.2337 3.57941 13.5223C3.5769 13.5186 5.5712 9.98557 9.50389 8.71569C9.59888 8.68407 9.69558 8.65575 9.7914 8.6283C9.6085 8.21474 9.40887 7.8003 9.20012 7.39171ZM13.8125 3.19835C12.5295 2.06864 10.8448 1.38339 8.99972 1.38339C8.4076 1.38339 7.83298 1.45496 7.28254 1.58727C7.3917 1.73375 8.76054 3.54704 10.0068 5.83216C12.7566 4.80278 13.7945 3.22496 13.8125 3.19835ZM10.2882 9.83412C10.2719 9.83949 10.2557 9.84413 10.2398 9.84993C5.94009 11.3467 4.53595 14.3632 4.52076 14.3961C5.75793 15.3568 7.30968 15.9365 8.99977 15.9365C10.009 15.9365 10.9703 15.7313 11.8449 15.3598C11.737 14.724 11.3136 12.4954 10.2882 9.83412ZM13.072 14.6949C14.7083 13.5922 15.8705 11.8414 16.1946 9.81328C16.0446 9.76502 14.0058 9.12049 11.6536 9.49707C12.6095 12.1201 12.9978 14.2563 13.072 14.6949ZM10.5678 6.91651C10.7369 7.26353 10.9007 7.61673 11.0519 7.9717C11.1057 8.09904 11.1582 8.22388 11.2095 8.34868C13.7129 8.0341 16.1793 8.56337 16.2847 8.58498C16.2681 6.85991 15.6501 5.27668 14.6276 4.03718C14.6138 4.05669 13.445 5.74311 10.5678 6.91651Z" fill="white"/>
                                </svg>
                            </div>
                            <div className="p-2 rounded-full bg-[#3B464C] w-10 h-10">
                                <svg className="w-full h-full" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5208 3.67697L7.55438 4.23061L6.99479 4.16282C4.95791 3.90295 3.17843 3.02165 1.66756 1.54152L0.928908 0.807104L0.73865 1.34944C0.33575 2.5584 0.593158 3.83516 1.43253 4.69386C1.8802 5.1684 1.77948 5.23619 1.00725 4.95373C0.73865 4.86334 0.503625 4.79554 0.481242 4.82944C0.4029 4.90853 0.6715 5.93671 0.884142 6.34347C1.17513 6.9084 1.76828 7.46204 2.4174 7.7897L2.96579 8.04957L2.31668 8.06087C1.68994 8.06087 1.66756 8.07217 1.73471 8.30944C1.95854 9.04385 2.84268 9.82346 3.82755 10.1624L4.52143 10.3997L3.91708 10.7613C3.02175 11.281 1.96973 11.5748 0.917717 11.5974C0.414092 11.6087 0 11.6539 0 11.6877C0 11.8007 1.36538 12.4335 2.15999 12.682C4.54382 13.4164 7.37531 13.1001 9.50173 11.8459C11.0126 10.9533 12.5235 9.17944 13.2286 7.46204C13.6091 6.54684 13.9896 4.87463 13.9896 4.07243C13.9896 3.55269 14.0232 3.4849 14.6499 2.86347C15.0192 2.50191 15.3662 2.10645 15.4333 1.99347C15.5452 1.77879 15.534 1.77879 14.9633 1.97087C14.012 2.30983 13.8777 2.26464 14.3477 1.75619C14.6947 1.39464 15.1088 0.739312 15.1088 0.547234C15.1088 0.513338 14.9409 0.569832 14.7506 0.67152C14.5492 0.784507 14.1015 0.953987 13.7658 1.05568L13.1614 1.24775L12.613 0.874897C12.3108 0.67152 11.8856 0.445546 11.6617 0.377754C11.0909 0.219572 10.218 0.24217 9.70318 0.422949C8.30422 0.93139 7.42008 2.24204 7.5208 3.67697Z" fill="white"/>
                                </svg>
                            </div>
                            <div className="p-2 rounded-full bg-[#3B464C] w-10 h-10">
                                <svg className="w-full h-full" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6679 1.1714C16.4022 1.3729 16.9805 1.96665 17.1768 2.72066C17.5335 4.0872 17.5335 6.93851 17.5335 6.93851C17.5335 6.93851 17.5335 9.78972 17.1768 11.1564C16.9805 11.9104 16.4022 12.5041 15.6679 12.7057C14.3371 13.0718 9.00013 13.0718 9.00013 13.0718C9.00013 13.0718 3.66321 13.0718 2.3323 12.7057C1.59795 12.5041 1.01962 11.9104 0.823354 11.1564C0.466797 9.78972 0.466797 6.93851 0.466797 6.93851C0.466797 6.93851 0.466797 4.0872 0.823354 2.72066C1.01962 1.96665 1.59795 1.3729 2.3323 1.1714C3.66321 0.805176 9.00013 0.805176 9.00013 0.805176C9.00013 0.805176 14.3371 0.805176 15.6679 1.1714ZM7.40015 4.53845V9.87179L11.6668 7.20522L7.40015 4.53845Z" fill="white"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-8 w-[60%]">
                        <div className="flex flex-col items-start gap-8">
                            <p className="text-lg font-semibold">Company</p>
                            <ul className="flex flex-col items-start gap-5">
                                <li>About us</li>
                                <li>Blog</li>
                                <li>Contact us</li>
                                <li>Pricing</li>
                                <li>Testimonials</li>
                            </ul>
                        </div>
                        <div className="flex flex-col items-start gap-8">
                            <p className="text-lg font-semibold">Support</p>
                            <ul className="flex flex-col items-start gap-5">
                                <li>Help Center</li>
                                <li>Terms of Service</li>
                                <li>Legal</li>
                                <li>Privacy Policy</li>
                                <li>Status</li>
                            </ul>
                        </div>
                        <div className="flex flex-col items-start gap-8">
                            <p className="text-lg font-semibold">Stay up to date</p>
                            <div className="rounded-lg items-start flex h-10">
                                <input type="text" className="p-2 border-none outline-none bg-[#515B60] rounded-l-md" placeholder="Your Email Address"/>
                                <div className="h-full box-border p-1 bg-[#515B60] rounded-r-md flex items-center justify-center">
                                    <svg className=" w-[70%] h-[70%]" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0303 0.969691C17.2341 1.17342 17.3031 1.47584 17.2079 1.74778L11.9579 16.7478C11.8563 17.038 11.5878 17.2369 11.2806 17.2494C10.9733 17.2619 10.6895 17.0856 10.5646 16.8046L7.6818 10.3182L1.1954 7.43538C0.91439 7.31049 0.738092 7.02671 0.750627 6.71945C0.763163 6.41219 0.961991 6.14371 1.25224 6.04213L16.2522 0.792127C16.5242 0.696948 16.8266 0.765962 17.0303 0.969691ZM9.14456 9.91612L11.1671 14.4667L14.7064 4.35429L9.14456 9.91612ZM13.6457 3.29362L3.53331 6.83297L8.0839 8.85546L13.6457 3.29362Z" fill="white"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default LandingPage
