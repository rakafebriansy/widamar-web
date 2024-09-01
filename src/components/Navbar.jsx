import logo from '../assets/Logo.png'

const Navbar = () => {
    return (
        <nav className="hidden lg:flex justify-between backdrop-blur-sm items-center text-white font-bold fixed top-0 left-0 z-20 w-screen py-[1rem] px-[6rem]">
            <img src={logo} alt="" />
            <ul className='flex gap-10'>
                <li className='hover:text-blue-300'><a href="#home">Home</a></li>
                <li className='hover:text-blue-300'><a href="#about">Tentang Kami</a></li>
                <li className='hover:text-blue-300'><a href="#news">Berita</a></li>
                <li className='hover:text-blue-300'><a href="#feature">Fitur</a></li>
                <li className='hover:text-blue-300'><a href="#service">Layanan</a></li>
            </ul>
            <div className="flex gap-6">
                <svg className='w-10' viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.1902 32C24.7482 31.9996 24.3165 31.8673 23.9502 31.62L16.4902 26.62C16.4534 26.5946 16.4098 26.581 16.3652 26.581C16.3205 26.581 16.2769 26.5946 16.2402 26.62L8.78015 31.62C8.40555 31.8701 7.96371 32.0004 7.51333 31.9935C7.06294 31.9866 6.62531 31.8428 6.25855 31.5813C5.8918 31.3198 5.61326 30.9529 5.45994 30.5294C5.30662 30.1058 5.28577 29.6457 5.40015 29.21L7.85015 20.57C7.86174 20.5266 7.86033 20.4807 7.84611 20.438C7.8319 20.3954 7.80549 20.3578 7.77015 20.33L0.710154 14.78C0.338492 14.5031 0.0628012 14.1169 -0.0782619 13.6754C-0.219325 13.2339 -0.218687 12.7594 -0.0764367 12.3183C0.0658135 11.8772 0.342542 11.4917 0.714947 11.2158C1.08735 10.94 1.53676 10.7876 2.00015 10.78L11.0002 10.44C11.0444 10.4369 11.0868 10.4212 11.1223 10.3945C11.1578 10.3679 11.1848 10.3316 11.2002 10.29L14.3002 1.86C14.4564 1.43263 14.7402 1.06361 15.1132 0.802891C15.4861 0.54217 15.9301 0.402344 16.3852 0.402344C16.8402 0.402344 17.2842 0.54217 17.6572 0.802891C18.0301 1.06361 18.3139 1.43263 18.4702 1.86L21.5702 10.29C21.5855 10.3316 21.6125 10.3679 21.648 10.3945C21.6835 10.4212 21.7259 10.4369 21.7702 10.44L30.7702 10.78C31.2335 10.7876 31.683 10.94 32.0554 11.2158C32.4278 11.4917 32.7045 11.8772 32.8467 12.3183C32.989 12.7594 32.9896 13.2339 32.8486 13.6754C32.7075 14.1169 32.4318 14.5031 32.0602 14.78L25.0002 20.33C24.9637 20.3569 24.9365 20.3944 24.9222 20.4373C24.9079 20.4803 24.9072 20.5266 24.9202 20.57L27.3702 29.21C27.4561 29.5414 27.4647 29.8882 27.3951 30.2234C27.3255 30.5586 27.1796 30.8733 26.9688 31.1431C26.758 31.4129 26.4879 31.6305 26.1795 31.7791C25.871 31.9277 25.5325 32.0033 25.1902 32ZM16.3702 24.58C16.813 24.5935 17.2415 24.7399 17.6002 25L25.0602 30C25.098 30.0287 25.144 30.0445 25.1915 30.0448C25.239 30.0452 25.2853 30.0302 25.3236 30.0021C25.3619 29.974 25.39 29.9342 25.4038 29.8888C25.4176 29.8433 25.4163 29.7946 25.4002 29.75L22.9502 21.11C22.8296 20.6862 22.8385 20.236 22.9757 19.8172C23.1129 19.3985 23.3722 19.0303 23.7202 18.76L30.7802 13.21C30.8187 13.1829 30.8475 13.1443 30.8624 13.0996C30.8773 13.055 30.8775 13.0067 30.8629 12.962C30.8484 12.9172 30.8199 12.8783 30.7816 12.8509C30.7433 12.8236 30.6972 12.8092 30.6502 12.81L21.6502 12.47C21.2095 12.4528 20.7839 12.3048 20.4277 12.0447C20.0715 11.7847 19.8008 11.4245 19.6502 11.01L16.5502 2.58C16.5362 2.53524 16.5083 2.49611 16.4705 2.46833C16.4327 2.44055 16.387 2.42557 16.3402 2.42557C16.2933 2.42557 16.2476 2.44055 16.2098 2.46833C16.172 2.49611 16.1441 2.53524 16.1302 2.58L13.0602 11C12.9095 11.4145 12.6388 11.7747 12.2826 12.0347C11.9264 12.2948 11.5008 12.4428 11.0602 12.46L2.06015 12.8C2.0131 12.7992 1.96704 12.8136 1.92874 12.8409C1.89044 12.8683 1.86192 12.9072 1.84738 12.952C1.83283 12.9967 1.83302 13.045 1.84792 13.0896C1.86282 13.1343 1.89164 13.1729 1.93015 13.2L9.00015 18.76C9.34709 19.0312 9.60555 19.3994 9.74266 19.8179C9.87978 20.2363 9.88934 20.6861 9.77015 21.11L7.33015 29.75C7.31559 29.7933 7.31552 29.8401 7.32996 29.8834C7.34439 29.9267 7.37255 29.9641 7.41015 29.99C7.44638 30.021 7.49248 30.038 7.54015 30.038C7.58782 30.038 7.63393 30.021 7.67015 29.99L15.1302 24.99C15.4947 24.7482 15.9227 24.6194 16.3602 24.62L16.3702 24.58Z" fill="#FF7A00"/>
                </svg>
                <svg className='w-10' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.809 30.714C17.654 29.714 22.367 29.8 29.221 30.749C29.7174 30.821 30.1709 31.0701 30.4979 31.4504C30.8249 31.8307 31.0033 32.3165 31 32.818C31 33.298 30.835 33.764 30.537 34.128C30.0176 34.7626 29.4855 35.3868 28.941 36H31.582C31.748 35.802 31.915 35.6 32.084 35.395C32.6772 34.6676 33.0007 33.7576 33 32.819C33 30.794 31.522 29.049 29.495 28.769C22.479 27.798 17.575 27.705 10.52 28.736C8.472 29.035 7 30.807 7 32.846C7 33.751 7.295 34.646 7.854 35.371C8.019 35.585 8.182 35.795 8.344 36.001H10.921C10.4144 35.3945 9.92032 34.7777 9.439 34.151C9.15296 33.7758 8.99866 33.3168 9 32.845C9 31.768 9.774 30.865 10.809 30.714ZM20 21C20.7879 21 21.5681 20.8448 22.2961 20.5433C23.0241 20.2417 23.6855 19.7998 24.2426 19.2426C24.7998 18.6855 25.2417 18.0241 25.5433 17.2961C25.8448 16.5681 26 15.7879 26 15C26 14.2121 25.8448 13.4319 25.5433 12.7039C25.2417 11.9759 24.7998 11.3145 24.2426 10.7574C23.6855 10.2002 23.0241 9.75825 22.2961 9.45672C21.5681 9.15519 20.7879 9 20 9C18.4087 9 16.8826 9.63214 15.7574 10.7574C14.6321 11.8826 14 13.4087 14 15C14 16.5913 14.6321 18.1174 15.7574 19.2426C16.8826 20.3679 18.4087 21 20 21ZM20 23C22.1217 23 24.1566 22.1571 25.6569 20.6569C27.1571 19.1566 28 17.1217 28 15C28 12.8783 27.1571 10.8434 25.6569 9.34315C24.1566 7.84285 22.1217 7 20 7C17.8783 7 15.8434 7.84285 14.3431 9.34315C12.8429 10.8434 12 12.8783 12 15C12 17.1217 12.8429 19.1566 14.3431 20.6569C15.8434 22.1571 17.8783 23 20 23Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M20 38C29.941 38 38 29.941 38 20C38 10.059 29.941 2 20 2C10.059 2 2 10.059 2 20C2 29.941 10.059 38 20 38ZM20 40C31.046 40 40 31.046 40 20C40 8.954 31.046 0 20 0C8.954 0 0 8.954 0 20C0 31.046 8.954 40 20 40Z" fill="white"/>
                </svg>
            </div>
        </nav>
    )
}

export default Navbar;