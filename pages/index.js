import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/Footer";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function index() {
    return (
        <div>
        <div class="lg:px-6 xl:px-0" >
            <Header/>
           <div className="mx-auto container relative z-0 px-4 xl:px-0">
  <div className="flex flex-col-reverse md:flex-row">
    <div className="md:w-3/5 md:pt-24 pb-10 lg:py-32 xl:py-48">
      <h1 className="text-3xl lg:text-6xl xl:text-8xl font-black text-color-heading text-center md:text-left tracking-tighter f-f-i md:w-7/12 leading-tight text-heading-color">ONE WALLET TO RULE THEM ALL</h1>
      <h2 className="md:w-8/12 py-4 text-center md:text-left md:py-8 text-colo-para text-lg lg:text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra eget donec nulla tellus bibendum.</h2>
      <div className="w-full flex justify-center md:block">
        <button className="bg-background-blue py-3 px-10 lg:py-7 lg:px-20 rounded-full text-white text-sm md:text-lg f-f-p">Learn More</button>
      </div>
    </div>
    <div className="w-1/2 sm:w-2/5 h-64 md:h-auto m-auto flex items-center overflow-hidden">
      {/* <img class="h-full" src="./assets/images/Rectangle.png" alt="Device"> */}
      <img className="md:absolute md:w-1/2 md:-ml-28" src="/images/Device - Macbook Pro.png" alt />
    </div>
  </div>
    </div>
        </div>
       <div className="flex w-full justify-center mt-7 items-center">
  <a href="#blog">
    <button className="rounded-full custom-button-border py-3 px-3 focus:outline-none">
      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={17} viewBox="0 0 16 17" fill="none">
        <path d="M7.29289 15.9071C7.68342 16.2976 8.31658 16.2976 8.70711 15.9071L15.0711 9.54313C15.4616 9.15261 15.4616 8.51944 15.0711 8.12892C14.6805 7.73839 14.0474 7.73839 13.6569 8.12892L8 13.7858L2.34315 8.12892C1.95262 7.7384 1.31946 7.7384 0.928933 8.12892C0.538408 8.51944 0.538408 9.15261 0.928933 9.54313L7.29289 15.9071ZM7 0.799988L7 15.2L9 15.2L9 0.799988L7 0.799988Z" fill="#052E47" />
      </svg>
    </button>
  </a>
</div>
 <div className="my-28 container mx-auto">
  <div className="flex justify-center w-full items-center">
    <div className="w-11/12 f-f-p">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div className="py-10 px-5 rounded-3xl bg-background-blue cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width={32} height={49} viewBox="0 0 32 49" fill="none">
            <path d="M2 9.27795H22.3636C24.3889 9.27795 26.3313 10.0632 27.7634 11.4609C29.1955 12.8586 30 14.7542 30 16.7309C30 18.7075 29.1955 20.6032 27.7634 22.0009C26.3313 23.3986 24.3889 24.1838 22.3636 24.1838C24.3889 24.1838 26.3313 24.969 27.7634 26.3667C29.1955 27.7644 30 29.6601 30 31.6367C30 33.6133 29.1955 35.509 27.7634 36.9067C26.3313 38.3044 24.3889 39.0896 22.3636 39.0896H2" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.09082 9.27795V39.0896" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.09082 24.1838H22.3635" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.63672 1.82507V9.27795" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19.8184 1.82507V9.27795" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.63672 39.0896V46.5425" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19.8184 39.0896V46.5425" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="mt-5">
            <h1 className="text-white text-2xl tracking-wide font-bold">Coins</h1>
            <h2 className="text-white mt-2 leading-6 text-base tracking-wider">Lorem ipsum dolor sit amet, con sectetur adipiscing elit. Pharetra eget donec</h2>
          </div>
        </div>
        <div className="py-10 px-5 rounded-3xl bg-transparent cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width={44} height={51} viewBox="0 0 44 51" fill="none">
            <path d="M32 2.31775L42 12.5899L32 22.8621" stroke="#052E47" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 12.5897H42" stroke="#052E47" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 27.9982L2 38.2703L12 48.5425" stroke="#052E47" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 38.2704H24.5" stroke="#052E47" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="mt-5">
            <h1 className="text-color-heading text-2xl tracking-wide font-bold">Transactions</h1>
            <h2 className="text-color-para mt-2 leading-6 text-base tracking-wider">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra eget donec</h2>
          </div>
        </div>
        <div className="py-10 px-5 rounded-3xl bg-transparent cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width={44} height={47} viewBox="0 0 44 47" fill="none">
            <path d="M39.5 33.9912V41.9047C39.5 42.6043 39.2366 43.2752 38.7678 43.7699C38.2989 44.2646 37.663 44.5425 37 44.5425H7C5.67392 44.5425 4.40215 43.9867 3.46447 42.9973C2.52678 42.0079 2 40.666 2 39.2668V7.61293M34.5 12.8886V4.97511C34.5 4.27551 34.2366 3.60457 33.7678 3.10988C33.2989 2.61519 32.663 2.33728 32 2.33728H7C5.67392 2.33728 4.40215 2.89311 3.46447 3.88248C2.52678 4.87186 2 6.21374 2 7.61293C2 9.01212 2.52678 10.354 3.46447 11.3434C4.40215 12.3328 5.67392 12.8886 7 12.8886H37C37.663 12.8886 38.2989 13.1665 38.7678 13.6612C39.2366 14.1559 39.5 14.8268 39.5 15.5264V23.4399L34.5 12.8886Z" stroke="#052E47" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M42 23.4399V33.9912H32C30.6739 33.9912 29.4021 33.4354 28.4645 32.446C27.5268 31.4566 27 30.1148 27 28.7156C27 27.3164 27.5268 25.9745 28.4645 24.9851C29.4021 23.9958 30.6739 23.4399 32 23.4399H42Z" stroke="#052E47" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="mt-5">
            <h1 className="text-color-heading text-2xl tracking-wide font-bold">Wallets</h1>
            <h2 className="text-color-para mt-2 leading-6 text-base tracking-wider">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra eget donec</h2>
          </div>
        </div>
        <div className="py-10 px-5 rounded-3xl bg-transparent cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width={48} height={49} viewBox="0 0 48 49" fill="none">
            <path d="M24 46.5425C36.4264 46.5425 46.5 36.5321 46.5 24.1838C46.5 11.8354 36.4264 1.82507 24 1.82507C11.5736 1.82507 1.5 11.8354 1.5 24.1838C1.5 36.5321 11.5736 46.5425 24 46.5425Z" stroke="#052E47" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 16.7308H45" stroke="#052E47" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 31.6366H45" stroke="#052E47" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22.7501 1.82507C18.5385 8.53172 16.3057 16.2784 16.3057 24.1838C16.3057 32.0892 18.5385 39.8358 22.7501 46.5425" stroke="#052E47" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M25.25 1.82507C29.4616 8.53172 31.6945 16.2784 31.6945 24.1838C31.6945 32.0892 29.4616 39.8358 25.25 46.5425" stroke="#052E47" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="mt-5">
            <h1 className="text-color-heading text-2xl tracking-wide font-bold">Countries</h1>
            <h2 className="text-color-para mt-2 leading-6 text-base tracking-wider">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra eget donec</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
 <div className="mx-auto container f-f-p px-4 xl:px-0">
  <h1 className="text-center text-3xl lg:text-5xl tracking-wider text-color-heading">How it works?</h1>
  <div className="md:mt-24 f-f-p">
    <div className="hidden md:flex justify-center w-full">
      <div className="flex flex-col items-center md:items-end md:pr-12 md:border-r-4 border-gray-300 relative md:w-1/2">
        <svg className="mt-10" xmlns="http://www.w3.org/2000/svg" width={127} height={128} viewBox="0 0 127 128" fill="none">
          <g clipPath="url(#clip0)">
            <path d="M64.818 124.636C98.4069 124.636 125.636 97.4069 125.636 63.818C125.636 30.2291 98.4069 3 64.818 3C31.2291 3 4 30.2291 4 63.818C4 97.4069 31.2291 124.636 64.818 124.636Z" fill="#4299E1" fillOpacity="0.25" />
            <path d="M65.2346 63.6469C70.1077 63.6469 74.0581 59.6965 74.0581 54.8235C74.0581 49.9504 70.1077 46 65.2346 46C60.3615 46 56.4111 49.9504 56.4111 54.8235C56.4111 59.6965 60.3615 63.6469 65.2346 63.6469Z" stroke="#237AC2" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M52 82V77.5882C52 75.2481 52.9296 73.0038 54.5843 71.3491C56.2391 69.6944 58.4833 68.7648 60.8235 68.7648H69.6469C71.9871 68.7648 74.2313 69.6944 75.8861 71.3491C77.5408 73.0038 78.4704 75.2481 78.4704 77.5882V82" stroke="#237AC2" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M117.692 12.4634C121.133 12.4634 123.923 9.67334 123.923 6.23168C123.923 2.79002 121.133 0 117.692 0C114.25 0 111.46 2.79002 111.46 6.23168C111.46 9.67334 114.25 12.4634 117.692 12.4634Z" fill="#032E47" />
            <path d="M6.23168 92.0553C9.67334 92.0553 12.4634 89.2653 12.4634 85.8236C12.4634 82.3819 9.67334 79.5919 6.23168 79.5919C2.79002 79.5919 0 82.3819 0 85.8236C0 89.2653 2.79002 92.0553 6.23168 92.0553Z" fill="#032E47" />
            <path d="M11.8323 70.205C14.0977 70.205 15.9342 68.3685 15.9342 66.1031C15.9342 63.8377 14.0977 62.0012 11.8323 62.0012C9.56694 62.0012 7.73047 63.8377 7.73047 66.1031C7.73047 68.3685 9.56694 70.205 11.8323 70.205Z" fill="#4B98D3" />
            <path d="M22.7968 127.631C24.3651 127.631 25.6365 126.36 25.6365 124.791C25.6365 123.223 24.3651 121.952 22.7968 121.952C21.2284 121.952 19.957 123.223 19.957 124.791C19.957 126.36 21.2284 127.631 22.7968 127.631Z" fill="#4B98D3" />
            <path d="M123.923 24.1379C125.622 24.1379 126.999 22.7606 126.999 21.0615C126.999 19.3625 125.622 17.9851 123.923 17.9851C122.224 17.9851 120.847 19.3625 120.847 21.0615C120.847 22.7606 122.224 24.1379 123.923 24.1379Z" fill="#4B98D3" />
            <path d="M108.462 4.33849C109.377 4.33849 110.119 3.59684 110.119 2.68197C110.119 1.7671 109.377 1.02545 108.462 1.02545C107.547 1.02545 106.806 1.7671 106.806 2.68197C106.806 3.59684 107.547 4.33849 108.462 4.33849Z" fill="#4B98D3" />
            <path d="M96.7093 126.053C109.822 126.053 120.453 115.423 120.453 102.31C120.453 89.1967 109.822 78.5664 96.7093 78.5664C83.5961 78.5664 72.9658 89.1967 72.9658 102.31C72.9658 115.423 83.5961 126.053 96.7093 126.053Z" fill="white" />
            <path d="M96.7097 122.74C107.993 122.74 117.14 113.593 117.14 102.31C117.14 91.0265 107.993 81.8795 96.7097 81.8795C85.4263 81.8795 76.2793 91.0265 76.2793 102.31C76.2793 113.593 85.4263 122.74 96.7097 122.74Z" fill="#4B98D3" />
            <path d="M96.709 92.0553V111.539" stroke="white" strokeWidth={2} strokeMiterlimit={10} strokeLinecap="round" />
            <path d="M106.49 102.31H87.2432" stroke="white" strokeWidth={2} strokeMiterlimit={10} strokeLinecap="round" />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width={127} height="127.552" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <svg className="mt-24" xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none">
          <circle cx={24} cy={24} r="23.5" transform="rotate(90 24 24)" fill="white" stroke="#CBD5E0" />
          <path d="M18.224 31.248C20.256 29.616 21.848 28.28 23 27.24C24.152 26.184 25.12 25.088 25.904 23.952C26.704 22.8 27.104 21.672 27.104 20.568C27.104 19.528 26.848 18.712 26.336 18.12C25.84 17.512 25.032 17.208 23.912 17.208C22.824 17.208 21.976 17.552 21.368 18.24C20.776 18.912 20.456 19.816 20.408 20.952H18.296C18.36 19.16 18.904 17.776 19.928 16.8C20.952 15.824 22.272 15.336 23.888 15.336C25.536 15.336 26.84 15.792 27.8 16.704C28.776 17.616 29.264 18.872 29.264 20.472C29.264 21.8 28.864 23.096 28.064 24.36C27.28 25.608 26.384 26.712 25.376 27.672C24.368 28.616 23.08 29.72 21.512 30.984H29.768V32.808H18.224V31.248Z" fill="#052E47" />
        </svg>
        <div className="flex mt-12 flex-col items-center lg:items-end md:w-8/12">
          <h1 className="text-2xl tracking-wide font-semibold">Create a Wallet</h1>
          <h2 className="text-colo-para mt-3 pl-3 text-center md:text-right text-base leading-6 tracking-wide">Lorem ipsum dolor sit amet, consectetur adipiscing quisque in semper lacinia ante vestibulum nunc. Viverra sem ac, tellus viverra lacinia. Cras lacus.</h2>
        </div>
        <svg className="mt-24" xmlns="http://www.w3.org/2000/svg" width={127} height={129} viewBox="0 0 127 129" fill="none">
          <path d="M64.818 125.89C98.4068 125.89 125.636 98.5282 125.636 64.7751C125.636 31.0221 98.4068 3.65991 64.818 3.65991C31.2291 3.65991 4 31.0221 4 64.7751C4 98.5282 31.2291 125.89 64.818 125.89Z" fill="#DAE4ED" />
          <g clipPath="url(#clip0)">
            <path d="M71 51.3921L77 57.4214L71 63.4507" stroke="#979797" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M62 57.4214H77" stroke="#979797" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M59 66.4653L53 72.4946L59 78.5239" stroke="#979797" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M53 72.4946H66.5" stroke="#979797" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <path d="M117.692 13.1694C121.133 13.1694 123.923 10.3658 123.923 6.90735C123.923 3.44889 121.133 0.645264 117.692 0.645264C114.25 0.645264 111.46 3.44889 111.46 6.90735C111.46 10.3658 114.25 13.1694 117.692 13.1694Z" fill="#CBD5E0" />
          <path d="M6.23169 93.1501C9.67336 93.1501 12.4634 90.3465 12.4634 86.8881C12.4634 83.4296 9.67336 80.626 6.23169 80.626C2.79002 80.626 0 83.4296 0 86.8881C0 90.3465 2.79002 93.1501 6.23169 93.1501Z" fill="#CBD5E0" />
          <path d="M11.8323 71.1934C14.0977 71.1934 15.9342 69.3479 15.9342 67.0714C15.9342 64.7949 14.0977 62.9495 11.8323 62.9495C9.56694 62.9495 7.73047 64.7949 7.73047 67.0714C7.73047 69.3479 9.56694 71.1934 11.8323 71.1934Z" fill="#979797" />
          <path d="M22.7968 128.9C24.3651 128.9 25.6365 127.623 25.6365 126.047C25.6365 124.47 24.3651 123.193 22.7968 123.193C21.2284 123.193 19.957 124.47 19.957 126.047C19.957 127.623 21.2284 128.9 22.7968 128.9Z" fill="#979797" />
          <path d="M123.924 24.9011C125.623 24.9011 127 23.517 127 21.8097C127 20.1023 125.623 18.7183 123.924 18.7183C122.225 18.7183 120.848 20.1023 120.848 21.8097C120.848 23.517 122.225 24.9011 123.924 24.9011Z" fill="#979797" />
          <path d="M108.463 5.00488C109.378 5.00488 110.12 4.25958 110.12 3.34021C110.12 2.42084 109.378 1.67554 108.463 1.67554C107.548 1.67554 106.807 2.42084 106.807 3.34021C106.807 4.25958 107.548 5.00488 108.463 5.00488Z" fill="#979797" />
          <path d="M96.7093 127.315C109.822 127.315 120.453 116.632 120.453 103.455C120.453 90.2778 109.822 79.5955 96.7093 79.5955C83.5961 79.5955 72.9658 90.2778 72.9658 103.455C72.9658 116.632 83.5961 127.315 96.7093 127.315Z" fill="white" />
          <path d="M96.7097 123.986C107.993 123.986 117.14 114.794 117.14 103.455C117.14 92.1166 107.993 82.9248 96.7097 82.9248C85.4263 82.9248 76.2793 92.1166 76.2793 103.455C76.2793 114.794 85.4263 123.986 96.7097 123.986Z" fill="#B8CCDD" />
          <path d="M95.384 112.4H97.664V110.216C101.168 109.856 102.896 107.816 102.896 105.152C102.896 101.888 100.136 100.928 97.664 100.304V96.92C98.744 97.184 99.776 97.688 100.64 98.48L102.536 95.984C101.24 94.808 99.608 94.064 97.664 93.848V91.568H95.384V93.8C92.144 94.136 90.224 96.2 90.224 98.624C90.224 101.888 92.912 102.8 95.384 103.424V107.216C93.752 106.928 92.456 106.088 91.568 105.152L89.72 107.744C91.016 109.064 92.864 110.024 95.384 110.24V112.4ZM99.44 105.536C99.44 106.28 98.84 106.976 97.664 107.216V104C98.696 104.336 99.44 104.744 99.44 105.536ZM93.704 98.336C93.704 97.52 94.304 96.92 95.384 96.776V99.704C94.376 99.416 93.704 99.032 93.704 98.336Z" fill="white" />
          <defs>
            <clipPath id="clip0">
              <rect width={36} height="36.1758" fill="white" transform="translate(47 46.8701)" />
            </clipPath>
          </defs>
        </svg>
        <img className="hidden md:block absolute right-0 top-0 -mt-2 -mr-1" src="/images/line.png" alt />
      </div>
      <div className="flex flex-col items-center md:items-start md:pl-12 lg:border-gray-400 mt-20 md:mt-0 md:w-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none">
          <circle cx={24} cy={24} r={24} transform="rotate(90 24 24)" fill="#237AC2" />
          <path d="M21.912 17.64V15.648H26.424V33H24.216V17.64H21.912Z" fill="white" />
        </svg>
        <div className="flex mt-12 flex-col items-center md:items-start md:w-8/12">
          <h1 className="text-2xl tracking-wide font-semibold">SignUp for an Account</h1>
          <h2 className="text-colo-para mt-3 text-base leading-6 tracking-wide">Lorem ipsum dolor sit amet, consectetur adipiscing quisque in semper lacinia ante vestibulum nunc. Viverra sem ac, tellus viverra lacinia. Cras lacus.</h2>
        </div>
        <svg className="mt-24" xmlns="http://www.w3.org/2000/svg" width={127} height={129} viewBox="0 0 127 129" fill="none">
          <path d="M64.818 125.649C98.4068 125.649 125.636 98.2867 125.636 64.5336C125.636 30.7806 98.4068 3.41833 64.818 3.41833C31.2291 3.41833 4 30.7806 4 64.5336C4 98.2867 31.2291 125.649 64.818 125.649Z" fill="#DAE4ED" />
          <path d="M53 55.6725C53 54.873 53.3161 54.1062 53.8787 53.5408C54.4413 52.9755 55.2044 52.6578 56 52.6578H71C71.3978 52.6578 71.7794 52.8166 72.0607 53.0993C72.342 53.382 72.5 53.7654 72.5 54.1652V58.6872L75.5 64.7165V60.1945C75.5 59.7947 75.342 59.4113 75.0607 59.1287C74.7794 58.846 74.3978 58.6872 74 58.6872H56C55.2044 58.6872 54.4413 58.3696 53.8787 57.8042C53.3161 57.2388 53 56.472 53 55.6725ZM53 55.6725V73.7605C53 74.5601 53.3161 75.3268 53.8787 75.8922C54.4413 76.4576 55.2044 76.7752 56 76.7752H74C74.3978 76.7752 74.7794 76.6164 75.0607 76.3337C75.342 76.051 75.5 75.6676 75.5 75.2678V70.7458" stroke="#979797" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M77 64.7166V70.7459H71C70.2043 70.7459 69.4413 70.4283 68.8787 69.8629C68.3161 69.2975 68 68.5308 68 67.7312C68 66.9317 68.3161 66.1649 68.8787 65.5995C69.4413 65.0342 70.2043 64.7166 71 64.7166H77Z" stroke="#979797" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M117.692 12.928C121.133 12.928 123.923 10.1243 123.923 6.66583C123.923 3.20734 121.133 0.403687 117.692 0.403687C114.25 0.403687 111.46 3.20734 111.46 6.66583C111.46 10.1243 114.25 12.928 117.692 12.928Z" fill="#CBD5E0" />
          <path d="M6.23169 92.9089C9.67336 92.9089 12.4634 90.1053 12.4634 86.6468C12.4634 83.1883 9.67336 80.3846 6.23169 80.3846C2.79002 80.3846 0 83.1883 0 86.6468C0 90.1053 2.79002 92.9089 6.23169 92.9089Z" fill="#CBD5E0" />
          <path d="M11.8323 70.9518C14.0977 70.9518 15.9342 69.1064 15.9342 66.8299C15.9342 64.5534 14.0977 62.708 11.8323 62.708C9.56694 62.708 7.73047 64.5534 7.73047 66.8299C7.73047 69.1064 9.56694 70.9518 11.8323 70.9518Z" fill="#979797" />
          <path d="M22.7968 128.659C24.3651 128.659 25.6365 127.381 25.6365 125.805C25.6365 124.229 24.3651 122.951 22.7968 122.951C21.2284 122.951 19.957 124.229 19.957 125.805C19.957 127.381 21.2284 128.659 22.7968 128.659Z" fill="#979797" />
          <path d="M123.924 24.6594C125.623 24.6594 127 23.2754 127 21.5681C127 19.8607 125.623 18.4767 123.924 18.4767C122.225 18.4767 120.848 19.8607 120.848 21.5681C120.848 23.2754 122.225 24.6594 123.924 24.6594Z" fill="#979797" />
          <path d="M108.463 4.76343C109.378 4.76343 110.12 4.01816 110.12 3.09882C110.12 2.17948 109.378 1.4342 108.463 1.4342C107.548 1.4342 106.807 2.17948 106.807 3.09882C106.807 4.01816 107.548 4.76343 108.463 4.76343Z" fill="#979797" />
          <path d="M96.7093 127.073C109.822 127.073 120.453 116.391 120.453 103.214C120.453 90.0365 109.822 79.3542 96.7093 79.3542C83.5961 79.3542 72.9658 90.0365 72.9658 103.214C72.9658 116.391 83.5961 127.073 96.7093 127.073Z" fill="white" />
          <path d="M96.7097 123.744C107.993 123.744 117.14 114.552 117.14 103.214C117.14 91.8752 107.993 82.6835 96.7097 82.6835C85.4263 82.6835 76.2793 91.8752 76.2793 103.214C76.2793 114.552 85.4263 123.744 96.7097 123.744Z" fill="#B8CCDD" />
          <path d="M91.5557 103.405H99.2223" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M89 95.7006H99.2222C100.239 95.7006 101.214 96.1064 101.933 96.8288C102.652 97.5512 103.056 98.531 103.056 99.5526C103.056 100.574 102.652 101.554 101.933 102.276C101.214 102.999 100.239 103.405 99.2222 103.405C100.239 103.405 101.214 103.811 101.933 104.533C102.652 105.255 103.056 106.235 103.056 107.257C103.056 108.278 102.652 109.258 101.933 109.981C101.214 110.703 100.239 111.109 99.2222 111.109H89" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M91.5557 95.7006V111.109" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M92.833 91.8485V95.7006" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M97.9443 91.8485V95.7006" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M92.833 111.109V114.961" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M97.9443 111.109V114.961" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <svg className="mt-20" xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none">
          <circle cx={24} cy={24} r="23.5" transform="rotate(90 24 24)" fill="white" stroke="#CBD5E0" />
          <path d="M17.44 20.016C17.552 18.544 18.12 17.392 19.144 16.56C20.168 15.728 21.496 15.312 23.128 15.312C24.216 15.312 25.152 15.512 25.936 15.912C26.736 16.296 27.336 16.824 27.736 17.496C28.152 18.168 28.36 18.928 28.36 19.776C28.36 20.768 28.072 21.624 27.496 22.344C26.936 23.064 26.2 23.528 25.288 23.736V23.856C26.328 24.112 27.152 24.616 27.76 25.368C28.368 26.12 28.672 27.104 28.672 28.32C28.672 29.232 28.464 30.056 28.048 30.792C27.632 31.512 27.008 32.08 26.176 32.496C25.344 32.912 24.344 33.12 23.176 33.12C21.48 33.12 20.088 32.68 19 31.8C17.912 30.904 17.304 29.64 17.176 28.008H19.288C19.4 28.968 19.792 29.752 20.464 30.36C21.136 30.968 22.032 31.272 23.152 31.272C24.272 31.272 25.12 30.984 25.696 30.408C26.288 29.816 26.584 29.056 26.584 28.128C26.584 26.928 26.184 26.064 25.384 25.536C24.584 25.008 23.376 24.744 21.76 24.744H21.208V22.92H21.784C23.256 22.904 24.368 22.664 25.12 22.2C25.872 21.72 26.248 20.984 26.248 19.992C26.248 19.144 25.968 18.464 25.408 17.952C24.864 17.44 24.08 17.184 23.056 17.184C22.064 17.184 21.264 17.44 20.656 17.952C20.048 18.464 19.688 19.152 19.576 20.016H17.44Z" fill="#052E47" />
        </svg>
        <div className="flex mt-12 flex-col items-center md:items-start md:w-8/12">
          <h1 className="text-2xl tracking-wide font-semibold">Start your Transactions</h1>
          <h2 className="text-colo-para mt-3 text-base leading-6 tracking-wide">Lorem ipsum dolor sit amet, consectetur adipiscing quisque in semper lacinia ante vestibulum nunc. Viverra sem ac, tellus viverra lacinia. Cras lacus.</h2>
        </div>
      </div>
    </div>
    <div className="md:hidden flex flex-col items-center w-full">
      <svg className="my-10" xmlns="http://www.w3.org/2000/svg" width={127} height={128} viewBox="0 0 127 128" fill="none">
        <g clipPath="url(#clip0)">
          <path d="M64.818 124.636C98.4069 124.636 125.636 97.4069 125.636 63.818C125.636 30.2291 98.4069 3 64.818 3C31.2291 3 4 30.2291 4 63.818C4 97.4069 31.2291 124.636 64.818 124.636Z" fill="#4299E1" fillOpacity="0.25" />
          <path d="M65.2346 63.6469C70.1077 63.6469 74.0581 59.6965 74.0581 54.8235C74.0581 49.9504 70.1077 46 65.2346 46C60.3615 46 56.4111 49.9504 56.4111 54.8235C56.4111 59.6965 60.3615 63.6469 65.2346 63.6469Z" stroke="#237AC2" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M52 82V77.5882C52 75.2481 52.9296 73.0038 54.5843 71.3491C56.2391 69.6944 58.4833 68.7648 60.8235 68.7648H69.6469C71.9871 68.7648 74.2313 69.6944 75.8861 71.3491C77.5408 73.0038 78.4704 75.2481 78.4704 77.5882V82" stroke="#237AC2" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M117.692 12.4634C121.133 12.4634 123.923 9.67334 123.923 6.23168C123.923 2.79002 121.133 0 117.692 0C114.25 0 111.46 2.79002 111.46 6.23168C111.46 9.67334 114.25 12.4634 117.692 12.4634Z" fill="#032E47" />
          <path d="M6.23168 92.0553C9.67334 92.0553 12.4634 89.2653 12.4634 85.8236C12.4634 82.3819 9.67334 79.5919 6.23168 79.5919C2.79002 79.5919 0 82.3819 0 85.8236C0 89.2653 2.79002 92.0553 6.23168 92.0553Z" fill="#032E47" />
          <path d="M11.8323 70.205C14.0977 70.205 15.9342 68.3685 15.9342 66.1031C15.9342 63.8377 14.0977 62.0012 11.8323 62.0012C9.56694 62.0012 7.73047 63.8377 7.73047 66.1031C7.73047 68.3685 9.56694 70.205 11.8323 70.205Z" fill="#4B98D3" />
          <path d="M22.7968 127.631C24.3651 127.631 25.6365 126.36 25.6365 124.791C25.6365 123.223 24.3651 121.952 22.7968 121.952C21.2284 121.952 19.957 123.223 19.957 124.791C19.957 126.36 21.2284 127.631 22.7968 127.631Z" fill="#4B98D3" />
          <path d="M123.923 24.1379C125.622 24.1379 126.999 22.7606 126.999 21.0615C126.999 19.3625 125.622 17.9851 123.923 17.9851C122.224 17.9851 120.847 19.3625 120.847 21.0615C120.847 22.7606 122.224 24.1379 123.923 24.1379Z" fill="#4B98D3" />
          <path d="M108.462 4.33849C109.377 4.33849 110.119 3.59684 110.119 2.68197C110.119 1.7671 109.377 1.02545 108.462 1.02545C107.547 1.02545 106.806 1.7671 106.806 2.68197C106.806 3.59684 107.547 4.33849 108.462 4.33849Z" fill="#4B98D3" />
          <path d="M96.7093 126.053C109.822 126.053 120.453 115.423 120.453 102.31C120.453 89.1967 109.822 78.5664 96.7093 78.5664C83.5961 78.5664 72.9658 89.1967 72.9658 102.31C72.9658 115.423 83.5961 126.053 96.7093 126.053Z" fill="white" />
          <path d="M96.7097 122.74C107.993 122.74 117.14 113.593 117.14 102.31C117.14 91.0265 107.993 81.8795 96.7097 81.8795C85.4263 81.8795 76.2793 91.0265 76.2793 102.31C76.2793 113.593 85.4263 122.74 96.7097 122.74Z" fill="#4B98D3" />
          <path d="M96.709 92.0553V111.539" stroke="white" strokeWidth={2} strokeMiterlimit={10} strokeLinecap="round" />
          <path d="M106.49 102.31H87.2432" stroke="white" strokeWidth={2} strokeMiterlimit={10} strokeLinecap="round" />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width={127} height="127.552" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none">
        <circle cx={24} cy={24} r={24} transform="rotate(90 24 24)" fill="#237AC2" />
        <path d="M21.912 17.64V15.648H26.424V33H24.216V17.64H21.912Z" fill="white" />
      </svg>
      <div className="mt-10">
        <h1 className="text-2xl text-center tracking-wide font-semibold">SignUp for an Account</h1>
        <h2 className="text-colo-para mt-3 text-center text-base leading-6 tracking-wide">Lorem ipsum dolor sit amet, consectetur adipiscing quisque in semper lacinia ante vestibulum nunc. Viverra sem ac, tellus viverra lacinia. Cras lacus.</h2>
      </div>
      <svg className="my-10" xmlns="http://www.w3.org/2000/svg" width={127} height={129} viewBox="0 0 127 129" fill="none">
        <path d="M64.818 125.649C98.4068 125.649 125.636 98.2867 125.636 64.5336C125.636 30.7806 98.4068 3.41833 64.818 3.41833C31.2291 3.41833 4 30.7806 4 64.5336C4 98.2867 31.2291 125.649 64.818 125.649Z" fill="#DAE4ED" />
        <path d="M53 55.6725C53 54.873 53.3161 54.1062 53.8787 53.5408C54.4413 52.9755 55.2044 52.6578 56 52.6578H71C71.3978 52.6578 71.7794 52.8166 72.0607 53.0993C72.342 53.382 72.5 53.7654 72.5 54.1652V58.6872L75.5 64.7165V60.1945C75.5 59.7947 75.342 59.4113 75.0607 59.1287C74.7794 58.846 74.3978 58.6872 74 58.6872H56C55.2044 58.6872 54.4413 58.3696 53.8787 57.8042C53.3161 57.2388 53 56.472 53 55.6725ZM53 55.6725V73.7605C53 74.5601 53.3161 75.3268 53.8787 75.8922C54.4413 76.4576 55.2044 76.7752 56 76.7752H74C74.3978 76.7752 74.7794 76.6164 75.0607 76.3337C75.342 76.051 75.5 75.6676 75.5 75.2678V70.7458" stroke="#979797" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M77 64.7166V70.7459H71C70.2043 70.7459 69.4413 70.4283 68.8787 69.8629C68.3161 69.2975 68 68.5308 68 67.7312C68 66.9317 68.3161 66.1649 68.8787 65.5995C69.4413 65.0342 70.2043 64.7166 71 64.7166H77Z" stroke="#979797" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M117.692 12.928C121.133 12.928 123.923 10.1243 123.923 6.66583C123.923 3.20734 121.133 0.403687 117.692 0.403687C114.25 0.403687 111.46 3.20734 111.46 6.66583C111.46 10.1243 114.25 12.928 117.692 12.928Z" fill="#CBD5E0" />
        <path d="M6.23169 92.9089C9.67336 92.9089 12.4634 90.1053 12.4634 86.6468C12.4634 83.1883 9.67336 80.3846 6.23169 80.3846C2.79002 80.3846 0 83.1883 0 86.6468C0 90.1053 2.79002 92.9089 6.23169 92.9089Z" fill="#CBD5E0" />
        <path d="M11.8323 70.9518C14.0977 70.9518 15.9342 69.1064 15.9342 66.8299C15.9342 64.5534 14.0977 62.708 11.8323 62.708C9.56694 62.708 7.73047 64.5534 7.73047 66.8299C7.73047 69.1064 9.56694 70.9518 11.8323 70.9518Z" fill="#979797" />
        <path d="M22.7968 128.659C24.3651 128.659 25.6365 127.381 25.6365 125.805C25.6365 124.229 24.3651 122.951 22.7968 122.951C21.2284 122.951 19.957 124.229 19.957 125.805C19.957 127.381 21.2284 128.659 22.7968 128.659Z" fill="#979797" />
        <path d="M123.924 24.6594C125.623 24.6594 127 23.2754 127 21.5681C127 19.8607 125.623 18.4767 123.924 18.4767C122.225 18.4767 120.848 19.8607 120.848 21.5681C120.848 23.2754 122.225 24.6594 123.924 24.6594Z" fill="#979797" />
        <path d="M108.463 4.76343C109.378 4.76343 110.12 4.01816 110.12 3.09882C110.12 2.17948 109.378 1.4342 108.463 1.4342C107.548 1.4342 106.807 2.17948 106.807 3.09882C106.807 4.01816 107.548 4.76343 108.463 4.76343Z" fill="#979797" />
        <path d="M96.7093 127.073C109.822 127.073 120.453 116.391 120.453 103.214C120.453 90.0365 109.822 79.3542 96.7093 79.3542C83.5961 79.3542 72.9658 90.0365 72.9658 103.214C72.9658 116.391 83.5961 127.073 96.7093 127.073Z" fill="white" />
        <path d="M96.7097 123.744C107.993 123.744 117.14 114.552 117.14 103.214C117.14 91.8752 107.993 82.6835 96.7097 82.6835C85.4263 82.6835 76.2793 91.8752 76.2793 103.214C76.2793 114.552 85.4263 123.744 96.7097 123.744Z" fill="#B8CCDD" />
        <path d="M91.5557 103.405H99.2223" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M89 95.7006H99.2222C100.239 95.7006 101.214 96.1064 101.933 96.8288C102.652 97.5512 103.056 98.531 103.056 99.5526C103.056 100.574 102.652 101.554 101.933 102.276C101.214 102.999 100.239 103.405 99.2222 103.405C100.239 103.405 101.214 103.811 101.933 104.533C102.652 105.255 103.056 106.235 103.056 107.257C103.056 108.278 102.652 109.258 101.933 109.981C101.214 110.703 100.239 111.109 99.2222 111.109H89" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M91.5557 95.7006V111.109" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M92.833 91.8485V95.7006" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M97.9443 91.8485V95.7006" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M92.833 111.109V114.961" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M97.9443 111.109V114.961" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none">
        <circle cx={24} cy={24} r="23.5" transform="rotate(90 24 24)" fill="white" stroke="#CBD5E0" />
        <path d="M18.224 31.248C20.256 29.616 21.848 28.28 23 27.24C24.152 26.184 25.12 25.088 25.904 23.952C26.704 22.8 27.104 21.672 27.104 20.568C27.104 19.528 26.848 18.712 26.336 18.12C25.84 17.512 25.032 17.208 23.912 17.208C22.824 17.208 21.976 17.552 21.368 18.24C20.776 18.912 20.456 19.816 20.408 20.952H18.296C18.36 19.16 18.904 17.776 19.928 16.8C20.952 15.824 22.272 15.336 23.888 15.336C25.536 15.336 26.84 15.792 27.8 16.704C28.776 17.616 29.264 18.872 29.264 20.472C29.264 21.8 28.864 23.096 28.064 24.36C27.28 25.608 26.384 26.712 25.376 27.672C24.368 28.616 23.08 29.72 21.512 30.984H29.768V32.808H18.224V31.248Z" fill="#052E47" />
      </svg>
      <div className="mt-10">
        <h1 className="text-2xl tracking-wide text-center font-semibold">Create a Wallet</h1>
        <h2 className="text-colo-para mt-3 pl-3 text-center text-base leading-6 tracking-wide">Lorem ipsum dolor sit amet, consectetur adipiscing quisque in semper lacinia ante vestibulum nunc. Viverra sem ac, tellus viverra lacinia. Cras lacus.</h2>
      </div>
      <svg className="my-10" xmlns="http://www.w3.org/2000/svg" width={127} height={129} viewBox="0 0 127 129" fill="none">
        <path d="M64.818 125.89C98.4068 125.89 125.636 98.5282 125.636 64.7751C125.636 31.0221 98.4068 3.65991 64.818 3.65991C31.2291 3.65991 4 31.0221 4 64.7751C4 98.5282 31.2291 125.89 64.818 125.89Z" fill="#DAE4ED" />
        <g clipPath="url(#clip0)">
          <path d="M71 51.3921L77 57.4214L71 63.4507" stroke="#979797" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M62 57.4214H77" stroke="#979797" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M59 66.4653L53 72.4946L59 78.5239" stroke="#979797" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M53 72.4946H66.5" stroke="#979797" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <path d="M117.692 13.1694C121.133 13.1694 123.923 10.3658 123.923 6.90735C123.923 3.44889 121.133 0.645264 117.692 0.645264C114.25 0.645264 111.46 3.44889 111.46 6.90735C111.46 10.3658 114.25 13.1694 117.692 13.1694Z" fill="#CBD5E0" />
        <path d="M6.23169 93.1501C9.67336 93.1501 12.4634 90.3465 12.4634 86.8881C12.4634 83.4296 9.67336 80.626 6.23169 80.626C2.79002 80.626 0 83.4296 0 86.8881C0 90.3465 2.79002 93.1501 6.23169 93.1501Z" fill="#CBD5E0" />
        <path d="M11.8323 71.1934C14.0977 71.1934 15.9342 69.3479 15.9342 67.0714C15.9342 64.7949 14.0977 62.9495 11.8323 62.9495C9.56694 62.9495 7.73047 64.7949 7.73047 67.0714C7.73047 69.3479 9.56694 71.1934 11.8323 71.1934Z" fill="#979797" />
        <path d="M22.7968 128.9C24.3651 128.9 25.6365 127.623 25.6365 126.047C25.6365 124.47 24.3651 123.193 22.7968 123.193C21.2284 123.193 19.957 124.47 19.957 126.047C19.957 127.623 21.2284 128.9 22.7968 128.9Z" fill="#979797" />
        <path d="M123.924 24.9011C125.623 24.9011 127 23.517 127 21.8097C127 20.1023 125.623 18.7183 123.924 18.7183C122.225 18.7183 120.848 20.1023 120.848 21.8097C120.848 23.517 122.225 24.9011 123.924 24.9011Z" fill="#979797" />
        <path d="M108.463 5.00488C109.378 5.00488 110.12 4.25958 110.12 3.34021C110.12 2.42084 109.378 1.67554 108.463 1.67554C107.548 1.67554 106.807 2.42084 106.807 3.34021C106.807 4.25958 107.548 5.00488 108.463 5.00488Z" fill="#979797" />
        <path d="M96.7093 127.315C109.822 127.315 120.453 116.632 120.453 103.455C120.453 90.2778 109.822 79.5955 96.7093 79.5955C83.5961 79.5955 72.9658 90.2778 72.9658 103.455C72.9658 116.632 83.5961 127.315 96.7093 127.315Z" fill="white" />
        <path d="M96.7097 123.986C107.993 123.986 117.14 114.794 117.14 103.455C117.14 92.1166 107.993 82.9248 96.7097 82.9248C85.4263 82.9248 76.2793 92.1166 76.2793 103.455C76.2793 114.794 85.4263 123.986 96.7097 123.986Z" fill="#B8CCDD" />
        <path d="M95.384 112.4H97.664V110.216C101.168 109.856 102.896 107.816 102.896 105.152C102.896 101.888 100.136 100.928 97.664 100.304V96.92C98.744 97.184 99.776 97.688 100.64 98.48L102.536 95.984C101.24 94.808 99.608 94.064 97.664 93.848V91.568H95.384V93.8C92.144 94.136 90.224 96.2 90.224 98.624C90.224 101.888 92.912 102.8 95.384 103.424V107.216C93.752 106.928 92.456 106.088 91.568 105.152L89.72 107.744C91.016 109.064 92.864 110.024 95.384 110.24V112.4ZM99.44 105.536C99.44 106.28 98.84 106.976 97.664 107.216V104C98.696 104.336 99.44 104.744 99.44 105.536ZM93.704 98.336C93.704 97.52 94.304 96.92 95.384 96.776V99.704C94.376 99.416 93.704 99.032 93.704 98.336Z" fill="white" />
        <defs>
          <clipPath id="clip0">
            <rect width={36} height="36.1758" fill="white" transform="translate(47 46.8701)" />
          </clipPath>
        </defs>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none">
        <circle cx={24} cy={24} r="23.5" transform="rotate(90 24 24)" fill="white" stroke="#CBD5E0" />
        <path d="M17.44 20.016C17.552 18.544 18.12 17.392 19.144 16.56C20.168 15.728 21.496 15.312 23.128 15.312C24.216 15.312 25.152 15.512 25.936 15.912C26.736 16.296 27.336 16.824 27.736 17.496C28.152 18.168 28.36 18.928 28.36 19.776C28.36 20.768 28.072 21.624 27.496 22.344C26.936 23.064 26.2 23.528 25.288 23.736V23.856C26.328 24.112 27.152 24.616 27.76 25.368C28.368 26.12 28.672 27.104 28.672 28.32C28.672 29.232 28.464 30.056 28.048 30.792C27.632 31.512 27.008 32.08 26.176 32.496C25.344 32.912 24.344 33.12 23.176 33.12C21.48 33.12 20.088 32.68 19 31.8C17.912 30.904 17.304 29.64 17.176 28.008H19.288C19.4 28.968 19.792 29.752 20.464 30.36C21.136 30.968 22.032 31.272 23.152 31.272C24.272 31.272 25.12 30.984 25.696 30.408C26.288 29.816 26.584 29.056 26.584 28.128C26.584 26.928 26.184 26.064 25.384 25.536C24.584 25.008 23.376 24.744 21.76 24.744H21.208V22.92H21.784C23.256 22.904 24.368 22.664 25.12 22.2C25.872 21.72 26.248 20.984 26.248 19.992C26.248 19.144 25.968 18.464 25.408 17.952C24.864 17.44 24.08 17.184 23.056 17.184C22.064 17.184 21.264 17.44 20.656 17.952C20.048 18.464 19.688 19.152 19.576 20.016H17.44Z" fill="#052E47" />
      </svg>
      <div className="flex mt-10 flex-col items-center md:items-start md:w-8/12">
        <h1 className="text-2xl text-center tracking-wide font-semibold">Start your Transactions</h1>
        <h2 className="text-colo-para mt-3 text-center text-base leading-6 tracking-wide">Lorem ipsum dolor sit amet, consectetur adipiscing quisque in semper lacinia ante vestibulum nunc. Viverra sem ac, tellus viverra lacinia. Cras lacus.</h2>
      </div>
    </div>
  </div>
</div>

<div className="mx-auto container px-4 xl:px-0 mt-16 lg:mt-32 f-f-p">
  <h1 className="text-center text-3xl lg:text-5xl tracking-wider text-color-heading">Why PIVOT?</h1>
  <div className="w-full flex justify-center mt-12 lg:mt-24">
    <div className="hidden lg:block xl:w-11/12">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center justify-end pb-12 xl:pr-10">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width={50} height={79} viewBox="0 0 50 79" fill="none">
                <path d="M20.584 5.55054L29.784 5.55054" stroke="#CBD5E0" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M43.4 2.96167L6.6 2.96167C4.05949 2.96167 2 5.03123 2 7.58417L2 72.2991C2 74.8521 4.05949 76.9216 6.6 76.9216H43.4C45.9405 76.9216 48 74.8521 48 72.2991L48 7.58417C48 5.03123 45.9405 2.96167 43.4 2.96167Z" stroke="#CBD5E0" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M25 63.054V63.1011" stroke="#4299E1" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex flex-col pl-8 xl:w-8/12">
              <h2 className="text-base xl:text-2xl font-semibold tracking-wider text-color-heading">Mobile App</h2>
              <p className="text-colo-para leading-7 tracking-wide text-base mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra eget donec</p>
            </div>
          </div>
          <div className="w-full hidden lg:flex justify-center">
            <hr className="w-7/12 border-t-2 border-gray-300" />
          </div>
        </div>
        <div>
          <div className="vl border-b border-gray-300 hidden lg:block absolute" />
          <div className="flex items-center justify-end pb-12 lg:ml-8 xl:ml-0 xl:pr-10">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width={62} height={73} viewBox="0 0 62 73" fill="none">
                <path d="M51.2857 33.1724H10.2143C5.67766 33.1724 2 36.5521 2 40.7212V63.3679C2 67.537 5.67766 70.9167 10.2143 70.9167H51.2857C55.8223 70.9167 59.5 67.537 59.5 63.3679V40.7212C59.5 36.5521 55.8223 33.1724 51.2857 33.1724Z" stroke="#CBD5E0" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M30.7497 55.8191C33.018 55.8191 34.8569 54.1292 34.8569 52.0446C34.8569 49.9599 33.018 48.27 30.7497 48.27C28.4814 48.27 26.6426 49.9599 26.6426 52.0446C26.6426 54.1292 28.4814 55.8191 30.7497 55.8191Z" stroke="#4299E1" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14.3223 33.1724V18.0745C14.3223 14.0703 16.0531 10.23 19.1341 7.39863C22.215 4.56723 26.3937 2.97656 30.7508 2.97656C35.1079 2.97656 39.2866 4.56723 42.3676 7.39863C45.4485 10.23 47.1794 14.0703 47.1794 18.0745V33.1724" stroke="#CBD5E0" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex flex-col pl-8 xl:w-8/12">
              <h2 className="text-base xl:text-2xl font-semibold tracking-wider text-color-heading">Highly Secure</h2>
              <p className="text-colo-para leading-7 tracking-wide text-base mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra eget donec</p>
            </div>
          </div>
          <div className="w-full hidden lg:flex justify-center">
            <hr className="w-7/12 border-t-2 border-gray-300" />
          </div>
        </div>
        <div>
          <div className="vl hidden lg:block absolute" />
          <div className="flex items-center justify-end pb-12 lg:ml-8 xl:ml-0 xl:pr-10">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width={62} height={62} viewBox="0 0 62 62" fill="none">
                <path d="M8.44443 57.0464C12.0036 57.0464 14.8889 54.147 14.8889 50.5704C14.8889 46.9939 12.0036 44.0945 8.44443 44.0945C4.88527 44.0945 2 46.9939 2 50.5704C2 54.147 4.88527 57.0464 8.44443 57.0464Z" stroke="#29AAF3" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M53.5557 18.1909C57.1149 18.1909 60.0001 15.2915 60.0001 11.715C60.0001 8.1384 57.1149 5.23901 53.5557 5.23901C49.9966 5.23901 47.1113 8.1384 47.1113 11.715C47.1113 15.2915 49.9966 18.1909 53.5557 18.1909Z" stroke="#29AAF3" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M53.555 34.3806C53.555 38.6745 51.8576 42.7925 48.8362 45.8287C45.8148 48.8649 41.7169 50.5706 37.444 50.5706H27.7773M27.7773 50.5706L37.444 40.8566M27.7773 50.5706L37.444 60.2847" stroke="#CBD5E0" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.44434 27.9048C8.44434 23.611 10.1417 19.493 13.1631 16.4568C16.1846 13.4206 20.2825 11.7149 24.5554 11.7149H34.222M34.222 11.7149L24.5554 2.00098M34.222 11.7149L24.5554 21.4288" stroke="#CBD5E0" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex flex-col pl-8 xl:w-8/12">
              <h2 className="text-base xl:text-2xl font-semibold tracking-wider text-color-heading">Instant Exchange</h2>
              <p className="text-colo-para leading-7 tracking-wide text-base mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra eget donec</p>
            </div>
          </div>
          <div className="w-full hidden lg:flex justify-center">
            <hr className="w-7/12 border-t-2 border-gray-300" />
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-10 gap-8">
        <div>
          <div className="flex items-center justify-end pb-12 pr-10">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width={46} height={72} viewBox="0 0 46 72" fill="none">
                <path d="M13.1934 2.04199V13.2898" stroke="#29AAF3" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M28.1172 2.04199V13.2898" stroke="#29AAF3" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.1934 58.2812V69.5295" stroke="#29AAF3" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M28.1172 58.2812V69.5295" stroke="#29AAF3" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 13.2898H31.8485C34.8171 13.2898 37.6641 14.4748 39.7633 16.5842C41.8624 18.6936 43.0417 21.5545 43.0417 24.5377C43.0417 27.5208 41.8624 30.3817 39.7633 32.4911C37.6641 34.6005 34.8171 35.7855 31.8485 35.7855C34.8171 35.7855 37.6641 36.9706 39.7633 39.0799C41.8624 41.1893 43.0417 44.0503 43.0417 47.0334C43.0417 50.0165 41.8624 52.8774 39.7633 54.9868C37.6641 57.0962 34.8171 58.2812 31.8485 58.2812H2" stroke="#CBD5E0" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.46191 13.2898V58.2812" stroke="#CBD5E0" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.46191 35.7859H31.8483" stroke="#CBD5E0" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex flex-col pl-8 xl:w-8/12">
              <h2 className="text-base xl:text-2xl font-semibold tracking-wider text-color-heading">Multiple Coins</h2>
              <p className="text-colo-para leading-7 tracking-wide text-base mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra eget donec</p>
            </div>
          </div>
        </div>
        <div>
          <div className="vl hidden lg:block absolute" />
          <div className="flex items-center justify-end pb-12 lg:ml-8 xl:ml-0 xl:pr-10">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width={62} height={70} viewBox="0 0 62 70" fill="none">
                <path d="M16.5 42.107C16.5 38.0834 13.2541 34.8215 9.25 34.8215C5.24594 34.8215 2 38.0834 2 42.107V49.3925C2 53.4162 5.24594 56.678 9.25 56.678C13.2541 56.678 16.5 53.4162 16.5 49.3925V42.107Z" stroke="#CBD5E0" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M52.75 56.678C52.75 59.5763 50.4585 62.3558 46.3796 64.4052C42.3007 66.4546 36.7685 67.606 31 67.606" stroke="#29AAF3" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M60 42.107C60 38.0834 56.7541 34.8215 52.75 34.8215C48.7459 34.8215 45.5 38.0834 45.5 42.107V49.3925C45.5 53.4162 48.7459 56.678 52.75 56.678C56.7541 56.678 60 53.4162 60 49.3925V42.107Z" stroke="#CBD5E0" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 42.1072V31.179C2 23.4501 5.05535 16.0377 10.4939 10.5726C15.9325 5.10741 23.3087 2.03711 31 2.03711C38.6913 2.03711 46.0675 5.10741 51.5061 10.5726C56.9447 16.0377 60 23.4501 60 31.179V42.1072" stroke="#CBD5E0" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex flex-col pl-8 xl:w-8/12">
              <h2 className="text-base xl:text-2xl font-semibold tracking-wider text-color-heading">24/7 Support</h2>
              <p className="text-colo-para leading-7 tracking-wide text-base mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra eget donec</p>
            </div>
          </div>
        </div>
        <div>
          <div className="vl hidden lg:block absolute" />
          <div className="flex items-center justify-end pb-12 lg:ml-8 xl:ml-0 xl:pr-10">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width={62} height={63} viewBox="0 0 62 63" fill="none">
                <path d="M40.6667 60.3499H11.6667C9.10291 60.3499 6.64415 59.3264 4.8313 57.5047C3.01845 55.683 2 53.2122 2 50.636V47.398H34.2222V53.8739C34.2222 55.5914 34.9012 57.2386 36.1098 58.4531C37.3183 59.6676 38.9575 60.3499 40.6667 60.3499ZM40.6667 60.3499C42.3758 60.3499 44.015 59.6676 45.2236 58.4531C46.4321 57.2386 47.1111 55.5914 47.1111 53.8739V8.54235C47.1111 7.26153 47.4891 6.00947 48.1972 4.94451C48.9053 3.87955 49.9118 3.04951 51.0894 2.55936C52.2669 2.06921 53.5627 1.94097 54.8128 2.19084C56.0629 2.44072 57.2112 3.05749 58.1125 3.96317C59.0137 4.86884 59.6275 6.02275 59.8762 7.27895C60.1248 8.53516 59.9972 9.83726 59.5094 11.0206C59.0217 12.2039 58.1957 13.2153 57.1359 13.9269C56.0761 14.6385 54.8301 15.0183 53.5555 15.0183H47.1111L40.6667 60.3499ZM53.5555 2.06641H18.1111C15.5474 2.06641 13.0886 3.08984 11.2757 4.91155C9.46289 6.73326 8.44444 9.20403 8.44444 11.7803V47.398" stroke="#CBD5E0" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21.333 15.0183H34.2219" stroke="#29AAF3" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21.333 27.97H34.2219" stroke="#29AAF3" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21.333 40.2522H34.2219" stroke="#29AAF3" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex flex-col pl-8 xl:w-8/12">
              <h2 className="text-base xl:text-2xl font-semibold tracking-wider text-color-heading">Insurance Program</h2>
              <p className="text-colo-para leading-7 tracking-wide text-base mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra eget donec</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex lg:hidden flex-wrap justify-between">
      <div className="md:flex w-full justify-between items-center">
        <div className="flex items-center">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width={50} height={79} viewBox="0 0 50 79" fill="none">
              <path d="M20.584 5.55054L29.784 5.55054" stroke="#CBD5E0" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
              <path d="M43.4 2.96167L6.6 2.96167C4.05949 2.96167 2 5.03123 2 7.58417L2 72.2991C2 74.8521 4.05949 76.9216 6.6 76.9216H43.4C45.9405 76.9216 48 74.8521 48 72.2991L48 7.58417C48 5.03123 45.9405 2.96167 43.4 2.96167Z" stroke="#CBD5E0" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
              <path d="M25 63.054V63.1011" stroke="#4299E1" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex flex-col pl-8">
            <h2 className="text-base xl:text-2xl font-semibold tracking-wider text-color-heading">Mobile App</h2>
            <p className="text-colo-para leading-7 tracking-wide text-base mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra eget donec</p>
          </div>
        </div>
        <div className="flex items-center mt-10 md:mt-0">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width={62} height={73} viewBox="0 0 62 73" fill="none">
              <path d="M51.2857 33.1724H10.2143C5.67766 33.1724 2 36.5521 2 40.7212V63.3679C2 67.537 5.67766 70.9167 10.2143 70.9167H51.2857C55.8223 70.9167 59.5 67.537 59.5 63.3679V40.7212C59.5 36.5521 55.8223 33.1724 51.2857 33.1724Z" stroke="#CBD5E0" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
              <path d="M30.7497 55.8191C33.018 55.8191 34.8569 54.1292 34.8569 52.0446C34.8569 49.9599 33.018 48.27 30.7497 48.27C28.4814 48.27 26.6426 49.9599 26.6426 52.0446C26.6426 54.1292 28.4814 55.8191 30.7497 55.8191Z" stroke="#4299E1" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14.3223 33.1724V18.0745C14.3223 14.0703 16.0531 10.23 19.1341 7.39863C22.215 4.56723 26.3937 2.97656 30.7508 2.97656C35.1079 2.97656 39.2866 4.56723 42.3676 7.39863C45.4485 10.23 47.1794 14.0703 47.1794 18.0745V33.1724" stroke="#CBD5E0" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex flex-col pl-5">
            <h2 className="text-base xl:text-2xl font-semibold tracking-wider text-color-heading">Highly Secure</h2>
            <p className="text-colo-para leading-7 tracking-wide text-base mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra eget donec</p>
          </div>
        </div>
      </div>
      <div className="md:flex w-full justify-between items-center my-10">
        <div className="flex items-center">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width={62} height={62} viewBox="0 0 62 62" fill="none">
              <path d="M8.44443 57.0464C12.0036 57.0464 14.8889 54.147 14.8889 50.5704C14.8889 46.9939 12.0036 44.0945 8.44443 44.0945C4.88527 44.0945 2 46.9939 2 50.5704C2 54.147 4.88527 57.0464 8.44443 57.0464Z" stroke="#29AAF3" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
              <path d="M53.5557 18.1909C57.1149 18.1909 60.0001 15.2915 60.0001 11.715C60.0001 8.1384 57.1149 5.23901 53.5557 5.23901C49.9966 5.23901 47.1113 8.1384 47.1113 11.715C47.1113 15.2915 49.9966 18.1909 53.5557 18.1909Z" stroke="#29AAF3" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
              <path d="M53.555 34.3806C53.555 38.6745 51.8576 42.7925 48.8362 45.8287C45.8148 48.8649 41.7169 50.5706 37.444 50.5706H27.7773M27.7773 50.5706L37.444 40.8566M27.7773 50.5706L37.444 60.2847" stroke="#CBD5E0" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8.44434 27.9048C8.44434 23.611 10.1417 19.493 13.1631 16.4568C16.1846 13.4206 20.2825 11.7149 24.5554 11.7149H34.222M34.222 11.7149L24.5554 2.00098M34.222 11.7149L24.5554 21.4288" stroke="#CBD5E0" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex flex-col pl-5">
            <h2 className="text-base xl:text-2xl font-semibold tracking-wider text-color-heading">Instant Exchange</h2>
            <p className="text-colo-para leading-7 tracking-wide text-base mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra eget donec</p>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <div className="flex items-center">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width={46} height={72} viewBox="0 0 46 72" fill="none">
                <path d="M13.1934 2.04199V13.2898" stroke="#29AAF3" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M28.1172 2.04199V13.2898" stroke="#29AAF3" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.1934 58.2812V69.5295" stroke="#29AAF3" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M28.1172 58.2812V69.5295" stroke="#29AAF3" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 13.2898H31.8485C34.8171 13.2898 37.6641 14.4748 39.7633 16.5842C41.8624 18.6936 43.0417 21.5545 43.0417 24.5377C43.0417 27.5208 41.8624 30.3817 39.7633 32.4911C37.6641 34.6005 34.8171 35.7855 31.8485 35.7855C34.8171 35.7855 37.6641 36.9706 39.7633 39.0799C41.8624 41.1893 43.0417 44.0503 43.0417 47.0334C43.0417 50.0165 41.8624 52.8774 39.7633 54.9868C37.6641 57.0962 34.8171 58.2812 31.8485 58.2812H2" stroke="#CBD5E0" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.46191 13.2898V58.2812" stroke="#CBD5E0" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.46191 35.7859H31.8483" stroke="#CBD5E0" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex flex-col pl-8">
              <h2 className="text-base xl:text-2xl font-semibold tracking-wider text-color-heading">Multiple Coins</h2>
              <p className="text-colo-para leading-7 tracking-wide text-base mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra eget donec</p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex w-full justify-between items-center">
        <div>
          <div className="flex items-center">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width={62} height={70} viewBox="0 0 62 70" fill="none">
                <path d="M16.5 42.107C16.5 38.0834 13.2541 34.8215 9.25 34.8215C5.24594 34.8215 2 38.0834 2 42.107V49.3925C2 53.4162 5.24594 56.678 9.25 56.678C13.2541 56.678 16.5 53.4162 16.5 49.3925V42.107Z" stroke="#CBD5E0" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M52.75 56.678C52.75 59.5763 50.4585 62.3558 46.3796 64.4052C42.3007 66.4546 36.7685 67.606 31 67.606" stroke="#29AAF3" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M60 42.107C60 38.0834 56.7541 34.8215 52.75 34.8215C48.7459 34.8215 45.5 38.0834 45.5 42.107V49.3925C45.5 53.4162 48.7459 56.678 52.75 56.678C56.7541 56.678 60 53.4162 60 49.3925V42.107Z" stroke="#CBD5E0" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 42.1072V31.179C2 23.4501 5.05535 16.0377 10.4939 10.5726C15.9325 5.10741 23.3087 2.03711 31 2.03711C38.6913 2.03711 46.0675 5.10741 51.5061 10.5726C56.9447 16.0377 60 23.4501 60 31.179V42.1072" stroke="#CBD5E0" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex flex-col pl-5">
              <h2 className="text-base xl:text-2xl font-semibold tracking-wider text-color-heading">24/7 Support</h2>
              <p className="text-colo-para leading-7 tracking-wide text-base mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra eget donec</p>
            </div>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <div className="flex items-center">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width={62} height={63} viewBox="0 0 62 63" fill="none">
                <path d="M40.6667 60.3499H11.6667C9.10291 60.3499 6.64415 59.3264 4.8313 57.5047C3.01845 55.683 2 53.2122 2 50.636V47.398H34.2222V53.8739C34.2222 55.5914 34.9012 57.2386 36.1098 58.4531C37.3183 59.6676 38.9575 60.3499 40.6667 60.3499ZM40.6667 60.3499C42.3758 60.3499 44.015 59.6676 45.2236 58.4531C46.4321 57.2386 47.1111 55.5914 47.1111 53.8739V8.54235C47.1111 7.26153 47.4891 6.00947 48.1972 4.94451C48.9053 3.87955 49.9118 3.04951 51.0894 2.55936C52.2669 2.06921 53.5627 1.94097 54.8128 2.19084C56.0629 2.44072 57.2112 3.05749 58.1125 3.96317C59.0137 4.86884 59.6275 6.02275 59.8762 7.27895C60.1248 8.53516 59.9972 9.83726 59.5094 11.0206C59.0217 12.2039 58.1957 13.2153 57.1359 13.9269C56.0761 14.6385 54.8301 15.0183 53.5555 15.0183H47.1111L40.6667 60.3499ZM53.5555 2.06641H18.1111C15.5474 2.06641 13.0886 3.08984 11.2757 4.91155C9.46289 6.73326 8.44444 9.20403 8.44444 11.7803V47.398" stroke="#CBD5E0" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21.333 15.0183H34.2219" stroke="#29AAF3" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21.333 27.97H34.2219" stroke="#29AAF3" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21.333 40.2522H34.2219" stroke="#29AAF3" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex flex-col pl-5">
              <h2 className="text-base xl:text-2xl font-semibold tracking-wider text-color-heading">Insurance Program</h2>
              <p className="text-colo-para leading-7 tracking-wide text-base mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra eget donec</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="px-6 lg:px-12 mt-16 lg:mt-32 f-f-p">
  <h1 className="text-center text-3xl lg:text-5xl tracking-wider text-color-heading mb-12 lg:mb-0">Hear From Our Customers</h1>
  <CarouselProvider naturalSlideWidth={50} isIntrinsicHeight={true} totalSlides={4} infinite={true} className="md:flex items-center justify-between my-32">
  <ButtonNext> <span className="hidden md:block left  inset-0 w-12 h-12 m-auto lg:ml-6 mb-6 lg:mb-auto" id="prev">
      <svg className="cursor-pointer w-5 lg:w-auto" xmlns="http://www.w3.org/2000/svg" width={26} height={46} viewBox="0 0 26 46" fill="none">
        <path d="M7.52168 22.7566L24.4114 5.15716C25.6058 3.91253 25.5281 1.96955 24.2379 0.817387C22.9476 -0.334778 20.9333 -0.259826 19.7389 0.984797L0.847118 20.6704C-0.282692 21.8477 -0.282692 23.6655 0.847118 24.8428L19.7389 44.5285C20.9333 45.7731 22.9476 45.848 24.2379 44.6959C25.5281 43.5437 25.6058 41.6007 24.4114 40.3561L7.52168 22.7566Z" fill="#4299E1" /></svg>
    </span></ButtonNext>
 
  <Slider>
  <Slide index={0}>
      <div className="px-6 lg:px-0 flex flex-col lg:flex-row items-center w-full justify-between">
        <div className="flex w-full justify-center">
          <div className="lg:flex lg:w-8/12 xl:w-1/2 relative justify-center">
            <svg className="lg:absolute z-10 left-0 mb-2 lg:mb-0 lg:-ml-16" xmlns="http://www.w3.org/2000/svg" width={44} height={37} viewBox="0 0 44 37" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M35.5677 37C37.9069 37 39.897 36.179 41.5382 34.537C43.1794 32.895 44 30.9063 44 28.571C44 26.2357 43.1794 24.247 41.5382 22.605C39.897 20.963 37.9069 20.142 35.5677 20.142C33.4549 20.142 32.1816 19.3028 31.7477 17.6243C31.3139 15.9457 31.5308 14.0848 32.3986 12.0414C33.2663 9.99801 34.7188 8.13709 36.7562 6.45858C38.7935 4.78007 41.2081 3.94083 44 3.94083L44 -3.8147e-06C38.9821 -4.25337e-06 34.8038 1.92478 31.4648 5.7744C28.1258 9.62403 25.947 13.8567 24.9284 18.4726C23.9097 23.0885 24.2021 27.3304 25.8055 31.1982C27.409 35.0661 30.663 37 35.5677 37ZM11.233 37C13.5722 37 15.5623 36.179 17.2035 34.537C18.8447 32.895 19.6653 30.9063 19.6653 28.571C19.6653 26.2357 18.8447 24.247 17.2035 22.605C15.5623 20.963 13.5722 20.142 11.233 20.142C9.12023 20.142 7.83748 19.3028 7.38473 17.6243C6.93199 15.9457 7.14893 14.0848 8.03555 12.0414C8.92217 9.99802 10.3747 8.13709 12.3932 6.45858C14.4116 4.78007 16.8357 3.94083 19.6653 3.94083L19.6653 -2.12741e-06C14.6474 -2.56609e-06 10.469 1.92478 7.13007 5.77441C3.7911 9.62403 1.61231 13.8567 0.593645 18.4726C-0.425021 23.0885 -0.132629 27.3304 1.47083 31.1982C3.07429 35.0661 6.32832 37 11.233 37Z" fill="#CBD5E0" />
            </svg>
            <div className="bg-white shadow-lg w-full py-20 px-5 rounded-3xl xl:px-10">
              <div className="lg:flex">
                <img className="w-28 h-28" src="/images/profilePicMask.png" alt="profilePicMask" srcSet />
                <div className="flex flex-col lg:ml-12 mt-4 lg:mt-2">
                  <h1 className="text-2xl text-color-heading tracking-wide">Alex Parkinson</h1>
                  <h2 className="text-base text-color-heading tracking-wide mt-1">CodeDraw Corp</h2>
                  <p className="text-base text-color-para tracking-wide leading-7 mt-3">It really saves me time and effort. PIVOT is exactly what our business has been lacking. PIVOT was worth a fortune to my company.</p>
                </div>
              </div>
            </div>
            <div className="flex block lg:absolute lg:-mr-2 right-0 bottom-0 w-full justify-end mt-2 lg:mt-0 lg:pl-2">
              <svg className="lg:absolute right-0 bottom-0 lg:-mr-12 mt-4 lg:mt-0" xmlns="http://www.w3.org/2000/svg" width={44} height={37} viewBox="0 0 44 37" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.43227 1.83447e-05C6.09311 1.83447e-05 4.10296 0.821014 2.46177 2.46303C0.820582 4.10506 0 6.0937 0 8.42902C0 10.7643 0.820582 12.753 2.46177 14.395C4.10296 16.037 6.09311 16.858 8.43227 16.858C10.5451 16.858 11.8184 17.6973 12.2523 19.3758C12.6861 21.0543 12.4692 22.9152 11.6014 24.9586C10.7337 27.002 9.28117 28.8629 7.24383 30.5415C5.20649 32.22 2.79191 33.0592 0 33.0592V37C5.01789 37 9.19626 35.0753 12.5352 31.2256C15.8742 27.376 18.053 23.1433 19.0717 18.5274C20.0903 13.9115 19.7979 9.66967 18.1945 5.8018C16.591 1.93393 13.337 1.83447e-05 8.43227 1.83447e-05ZM32.767 0C30.4278 0 28.4377 0.820996 26.7965 2.46302C25.1553 4.10504 24.3347 6.09368 24.3347 8.429C24.3347 10.7643 25.1553 12.753 26.7965 14.395C28.4377 16.037 30.4278 16.858 32.767 16.858C34.8798 16.858 36.1625 17.6972 36.6153 19.3757C37.068 21.0543 36.8511 22.9152 35.9645 24.9586C35.0778 27.002 33.6253 28.8629 31.6068 30.5414C29.5884 32.2199 27.1644 33.0592 24.3347 33.0592V37C29.3526 37 33.531 35.0752 36.8699 31.2256C40.2089 27.376 42.3877 23.1433 43.4064 18.5274C44.425 13.9115 44.1327 9.66965 42.5292 5.80178C40.9257 1.93391 37.6717 0 32.767 0Z" fill="#CBD5E0" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      </Slide>
      <Slide index={1}>
      <div className="px-6 lg:px-0 flex flex-col lg:flex-row items-center w-full justify-between">
        <div className="flex w-full justify-center">
          <div className="lg:flex lg:w-8/12 xl:w-1/2 relative justify-center">
            <svg className="lg:absolute z-10 left-0 mb-2 lg:mb-0 lg:-ml-16" xmlns="http://www.w3.org/2000/svg" width={44} height={37} viewBox="0 0 44 37" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M35.5677 37C37.9069 37 39.897 36.179 41.5382 34.537C43.1794 32.895 44 30.9063 44 28.571C44 26.2357 43.1794 24.247 41.5382 22.605C39.897 20.963 37.9069 20.142 35.5677 20.142C33.4549 20.142 32.1816 19.3028 31.7477 17.6243C31.3139 15.9457 31.5308 14.0848 32.3986 12.0414C33.2663 9.99801 34.7188 8.13709 36.7562 6.45858C38.7935 4.78007 41.2081 3.94083 44 3.94083L44 -3.8147e-06C38.9821 -4.25337e-06 34.8038 1.92478 31.4648 5.7744C28.1258 9.62403 25.947 13.8567 24.9284 18.4726C23.9097 23.0885 24.2021 27.3304 25.8055 31.1982C27.409 35.0661 30.663 37 35.5677 37ZM11.233 37C13.5722 37 15.5623 36.179 17.2035 34.537C18.8447 32.895 19.6653 30.9063 19.6653 28.571C19.6653 26.2357 18.8447 24.247 17.2035 22.605C15.5623 20.963 13.5722 20.142 11.233 20.142C9.12023 20.142 7.83748 19.3028 7.38473 17.6243C6.93199 15.9457 7.14893 14.0848 8.03555 12.0414C8.92217 9.99802 10.3747 8.13709 12.3932 6.45858C14.4116 4.78007 16.8357 3.94083 19.6653 3.94083L19.6653 -2.12741e-06C14.6474 -2.56609e-06 10.469 1.92478 7.13007 5.77441C3.7911 9.62403 1.61231 13.8567 0.593645 18.4726C-0.425021 23.0885 -0.132629 27.3304 1.47083 31.1982C3.07429 35.0661 6.32832 37 11.233 37Z" fill="#CBD5E0" />
            </svg>
            <div className="bg-white shadow-lg w-full py-20 px-5 rounded-3xl xl:px-10">
              <div className="lg:flex">
                <img className="w-28 h-28" src="/images/profilePicMask.png" alt="profilePicMask" srcSet />
                <div className="flex flex-col lg:ml-12 mt-4 lg:mt-2">
                  <h1 className="text-2xl text-color-heading tracking-wide">Alex Parkinson</h1>
                  <h2 className="text-base text-color-heading tracking-wide mt-1">CodeDraw Corp</h2>
                  <p className="text-base text-color-para tracking-wide leading-7 mt-3">It really saves me time and effort. PIVOT is exactly what our business has been lacking. PIVOT was worth a fortune to my company.</p>
                </div>
              </div>
            </div>
            <div className="flex block lg:absolute lg:-mr-2 right-0 bottom-0 w-full justify-end mt-2 lg:mt-0 lg:pl-2">
              <svg className="lg:absolute right-0 bottom-0 lg:-mr-12 mt-4 lg:mt-0" xmlns="http://www.w3.org/2000/svg" width={44} height={37} viewBox="0 0 44 37" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.43227 1.83447e-05C6.09311 1.83447e-05 4.10296 0.821014 2.46177 2.46303C0.820582 4.10506 0 6.0937 0 8.42902C0 10.7643 0.820582 12.753 2.46177 14.395C4.10296 16.037 6.09311 16.858 8.43227 16.858C10.5451 16.858 11.8184 17.6973 12.2523 19.3758C12.6861 21.0543 12.4692 22.9152 11.6014 24.9586C10.7337 27.002 9.28117 28.8629 7.24383 30.5415C5.20649 32.22 2.79191 33.0592 0 33.0592V37C5.01789 37 9.19626 35.0753 12.5352 31.2256C15.8742 27.376 18.053 23.1433 19.0717 18.5274C20.0903 13.9115 19.7979 9.66967 18.1945 5.8018C16.591 1.93393 13.337 1.83447e-05 8.43227 1.83447e-05ZM32.767 0C30.4278 0 28.4377 0.820996 26.7965 2.46302C25.1553 4.10504 24.3347 6.09368 24.3347 8.429C24.3347 10.7643 25.1553 12.753 26.7965 14.395C28.4377 16.037 30.4278 16.858 32.767 16.858C34.8798 16.858 36.1625 17.6972 36.6153 19.3757C37.068 21.0543 36.8511 22.9152 35.9645 24.9586C35.0778 27.002 33.6253 28.8629 31.6068 30.5414C29.5884 32.2199 27.1644 33.0592 24.3347 33.0592V37C29.3526 37 33.531 35.0752 36.8699 31.2256C40.2089 27.376 42.3877 23.1433 43.4064 18.5274C44.425 13.9115 44.1327 9.66965 42.5292 5.80178C40.9257 1.93391 37.6717 0 32.767 0Z" fill="#CBD5E0" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      </Slide>
      <Slide index={2}>
      <div className="px-6 lg:px-0 flex flex-col lg:flex-row items-center w-full justify-between">
        <div className="flex w-full justify-center">
          <div className="lg:flex lg:w-8/12 xl:w-1/2 relative justify-center">
            <svg className="lg:absolute z-10 left-0 mb-2 lg:mb-0 lg:-ml-16" xmlns="http://www.w3.org/2000/svg" width={44} height={37} viewBox="0 0 44 37" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M35.5677 37C37.9069 37 39.897 36.179 41.5382 34.537C43.1794 32.895 44 30.9063 44 28.571C44 26.2357 43.1794 24.247 41.5382 22.605C39.897 20.963 37.9069 20.142 35.5677 20.142C33.4549 20.142 32.1816 19.3028 31.7477 17.6243C31.3139 15.9457 31.5308 14.0848 32.3986 12.0414C33.2663 9.99801 34.7188 8.13709 36.7562 6.45858C38.7935 4.78007 41.2081 3.94083 44 3.94083L44 -3.8147e-06C38.9821 -4.25337e-06 34.8038 1.92478 31.4648 5.7744C28.1258 9.62403 25.947 13.8567 24.9284 18.4726C23.9097 23.0885 24.2021 27.3304 25.8055 31.1982C27.409 35.0661 30.663 37 35.5677 37ZM11.233 37C13.5722 37 15.5623 36.179 17.2035 34.537C18.8447 32.895 19.6653 30.9063 19.6653 28.571C19.6653 26.2357 18.8447 24.247 17.2035 22.605C15.5623 20.963 13.5722 20.142 11.233 20.142C9.12023 20.142 7.83748 19.3028 7.38473 17.6243C6.93199 15.9457 7.14893 14.0848 8.03555 12.0414C8.92217 9.99802 10.3747 8.13709 12.3932 6.45858C14.4116 4.78007 16.8357 3.94083 19.6653 3.94083L19.6653 -2.12741e-06C14.6474 -2.56609e-06 10.469 1.92478 7.13007 5.77441C3.7911 9.62403 1.61231 13.8567 0.593645 18.4726C-0.425021 23.0885 -0.132629 27.3304 1.47083 31.1982C3.07429 35.0661 6.32832 37 11.233 37Z" fill="#CBD5E0" />
            </svg>
            <div className="bg-white shadow-lg w-full py-20 px-5 rounded-3xl xl:px-10">
              <div className="lg:flex">
                <img className="w-28 h-28" src="/images/profilePicMask.png" alt="profilePicMask" srcSet />
                <div className="flex flex-col lg:ml-12 mt-4 lg:mt-2">
                  <h1 className="text-2xl text-color-heading tracking-wide">Alex Parkinson</h1>
                  <h2 className="text-base text-color-heading tracking-wide mt-1">CodeDraw Corp</h2>
                  <p className="text-base text-color-para tracking-wide leading-7 mt-3">It really saves me time and effort. PIVOT is exactly what our business has been lacking. PIVOT was worth a fortune to my company.</p>
                </div>
              </div>
            </div>
            <div className="flex block lg:absolute lg:-mr-2 right-0 bottom-0 w-full justify-end mt-2 lg:mt-0 lg:pl-2">
              <svg className="lg:absolute right-0 bottom-0 lg:-mr-12 mt-4 lg:mt-0" xmlns="http://www.w3.org/2000/svg" width={44} height={37} viewBox="0 0 44 37" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.43227 1.83447e-05C6.09311 1.83447e-05 4.10296 0.821014 2.46177 2.46303C0.820582 4.10506 0 6.0937 0 8.42902C0 10.7643 0.820582 12.753 2.46177 14.395C4.10296 16.037 6.09311 16.858 8.43227 16.858C10.5451 16.858 11.8184 17.6973 12.2523 19.3758C12.6861 21.0543 12.4692 22.9152 11.6014 24.9586C10.7337 27.002 9.28117 28.8629 7.24383 30.5415C5.20649 32.22 2.79191 33.0592 0 33.0592V37C5.01789 37 9.19626 35.0753 12.5352 31.2256C15.8742 27.376 18.053 23.1433 19.0717 18.5274C20.0903 13.9115 19.7979 9.66967 18.1945 5.8018C16.591 1.93393 13.337 1.83447e-05 8.43227 1.83447e-05ZM32.767 0C30.4278 0 28.4377 0.820996 26.7965 2.46302C25.1553 4.10504 24.3347 6.09368 24.3347 8.429C24.3347 10.7643 25.1553 12.753 26.7965 14.395C28.4377 16.037 30.4278 16.858 32.767 16.858C34.8798 16.858 36.1625 17.6972 36.6153 19.3757C37.068 21.0543 36.8511 22.9152 35.9645 24.9586C35.0778 27.002 33.6253 28.8629 31.6068 30.5414C29.5884 32.2199 27.1644 33.0592 24.3347 33.0592V37C29.3526 37 33.531 35.0752 36.8699 31.2256C40.2089 27.376 42.3877 23.1433 43.4064 18.5274C44.425 13.9115 44.1327 9.66965 42.5292 5.80178C40.9257 1.93391 37.6717 0 32.767 0Z" fill="#CBD5E0" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      </Slide>
      <Slide index={3}>
      <div className="px-6 lg:px-0 flex flex-col lg:flex-row items-center w-full justify-between">
        <div className="flex w-full justify-center">
          <div className="lg:flex lg:w-8/12 xl:w-1/2 relative justify-center">
            <svg className="lg:absolute z-10 left-0 mb-2 lg:mb-0 lg:-ml-16" xmlns="http://www.w3.org/2000/svg" width={44} height={37} viewBox="0 0 44 37" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M35.5677 37C37.9069 37 39.897 36.179 41.5382 34.537C43.1794 32.895 44 30.9063 44 28.571C44 26.2357 43.1794 24.247 41.5382 22.605C39.897 20.963 37.9069 20.142 35.5677 20.142C33.4549 20.142 32.1816 19.3028 31.7477 17.6243C31.3139 15.9457 31.5308 14.0848 32.3986 12.0414C33.2663 9.99801 34.7188 8.13709 36.7562 6.45858C38.7935 4.78007 41.2081 3.94083 44 3.94083L44 -3.8147e-06C38.9821 -4.25337e-06 34.8038 1.92478 31.4648 5.7744C28.1258 9.62403 25.947 13.8567 24.9284 18.4726C23.9097 23.0885 24.2021 27.3304 25.8055 31.1982C27.409 35.0661 30.663 37 35.5677 37ZM11.233 37C13.5722 37 15.5623 36.179 17.2035 34.537C18.8447 32.895 19.6653 30.9063 19.6653 28.571C19.6653 26.2357 18.8447 24.247 17.2035 22.605C15.5623 20.963 13.5722 20.142 11.233 20.142C9.12023 20.142 7.83748 19.3028 7.38473 17.6243C6.93199 15.9457 7.14893 14.0848 8.03555 12.0414C8.92217 9.99802 10.3747 8.13709 12.3932 6.45858C14.4116 4.78007 16.8357 3.94083 19.6653 3.94083L19.6653 -2.12741e-06C14.6474 -2.56609e-06 10.469 1.92478 7.13007 5.77441C3.7911 9.62403 1.61231 13.8567 0.593645 18.4726C-0.425021 23.0885 -0.132629 27.3304 1.47083 31.1982C3.07429 35.0661 6.32832 37 11.233 37Z" fill="#CBD5E0" />
            </svg>
            <div className="bg-white shadow-lg w-full py-20 px-5 rounded-3xl xl:px-10">
              <div className="lg:flex">
                <img className="w-28 h-28" src="/images/profilePicMask.png" alt="profilePicMask" srcSet />
                <div className="flex flex-col lg:ml-12 mt-4 lg:mt-2">
                  <h1 className="text-2xl text-color-heading tracking-wide">Alex Parkinson</h1>
                  <h2 className="text-base text-color-heading tracking-wide mt-1">CodeDraw Corp</h2>
                  <p className="text-base text-color-para tracking-wide leading-7 mt-3">It really saves me time and effort. PIVOT is exactly what our business has been lacking. PIVOT was worth a fortune to my company.</p>
                </div>
              </div>
            </div>
            <div className="flex block lg:absolute lg:-mr-2 right-0 bottom-0 w-full justify-end mt-2 lg:mt-0 lg:pl-2">
              <svg className="lg:absolute right-0 bottom-0 lg:-mr-12 mt-4 lg:mt-0" xmlns="http://www.w3.org/2000/svg" width={44} height={37} viewBox="0 0 44 37" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.43227 1.83447e-05C6.09311 1.83447e-05 4.10296 0.821014 2.46177 2.46303C0.820582 4.10506 0 6.0937 0 8.42902C0 10.7643 0.820582 12.753 2.46177 14.395C4.10296 16.037 6.09311 16.858 8.43227 16.858C10.5451 16.858 11.8184 17.6973 12.2523 19.3758C12.6861 21.0543 12.4692 22.9152 11.6014 24.9586C10.7337 27.002 9.28117 28.8629 7.24383 30.5415C5.20649 32.22 2.79191 33.0592 0 33.0592V37C5.01789 37 9.19626 35.0753 12.5352 31.2256C15.8742 27.376 18.053 23.1433 19.0717 18.5274C20.0903 13.9115 19.7979 9.66967 18.1945 5.8018C16.591 1.93393 13.337 1.83447e-05 8.43227 1.83447e-05ZM32.767 0C30.4278 0 28.4377 0.820996 26.7965 2.46302C25.1553 4.10504 24.3347 6.09368 24.3347 8.429C24.3347 10.7643 25.1553 12.753 26.7965 14.395C28.4377 16.037 30.4278 16.858 32.767 16.858C34.8798 16.858 36.1625 17.6972 36.6153 19.3757C37.068 21.0543 36.8511 22.9152 35.9645 24.9586C35.0778 27.002 33.6253 28.8629 31.6068 30.5414C29.5884 32.2199 27.1644 33.0592 24.3347 33.0592V37C29.3526 37 33.531 35.0752 36.8699 31.2256C40.2089 27.376 42.3877 23.1433 43.4064 18.5274C44.425 13.9115 44.1327 9.66965 42.5292 5.80178C40.9257 1.93391 37.6717 0 32.767 0Z" fill="#CBD5E0" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      </Slide>
      </Slider>
    <ButtonBack>
    <span className="hidden md:block right  inset-0 w-12 h-12 m-auto lg:mr-6 mb-6 lg:mb-auto" id="next">
      <svg className="cursor-pointer w-5 lg:w-auto" xmlns="http://www.w3.org/2000/svg" width={26} height={46} viewBox="0 0 26 46" fill="none">
        <path d="M17.7371 22.7566L0.847372 5.15716C-0.347058 3.91253 -0.269357 1.96955 1.02092 0.817387C2.3112 -0.334778 4.32546 -0.259826 5.51989 0.984797L24.4117 20.6704C25.5415 21.8477 25.5415 23.6655 24.4117 24.8428L5.51989 44.5285C4.32546 45.7731 2.3112 45.848 1.02092 44.6959C-0.269357 43.5437 -0.347058 41.6007 0.847372 40.3561L17.7371 22.7566Z" fill="#4299E1" /></svg></span>
    </ButtonBack>
    <div className="flex justify-center items-center space-x-20 md:hidden">
    
    <ButtonNext> <span className="md:hidden left  inset-0 w-12 h-12 m-auto lg:ml-6 mb-6 lg:mb-auto" id="prev">
      <svg className="cursor-pointer w-5 lg:w-auto" xmlns="http://www.w3.org/2000/svg" width={26} height={46} viewBox="0 0 26 46" fill="none">
        <path d="M7.52168 22.7566L24.4114 5.15716C25.6058 3.91253 25.5281 1.96955 24.2379 0.817387C22.9476 -0.334778 20.9333 -0.259826 19.7389 0.984797L0.847118 20.6704C-0.282692 21.8477 -0.282692 23.6655 0.847118 24.8428L19.7389 44.5285C20.9333 45.7731 22.9476 45.848 24.2379 44.6959C25.5281 43.5437 25.6058 41.6007 24.4114 40.3561L7.52168 22.7566Z" fill="#4299E1" /></svg>
    </span></ButtonNext>
    <ButtonBack>
    <span className="md:hidden right  inset-0 w-12 h-12 m-auto lg:mr-6 mb-6 lg:mb-auto" id="next">
      <svg className="cursor-pointer w-5 lg:w-auto" xmlns="http://www.w3.org/2000/svg" width={26} height={46} viewBox="0 0 26 46" fill="none">
        <path d="M17.7371 22.7566L0.847372 5.15716C-0.347058 3.91253 -0.269357 1.96955 1.02092 0.817387C2.3112 -0.334778 4.32546 -0.259826 5.51989 0.984797L24.4117 20.6704C25.5415 21.8477 25.5415 23.6655 24.4117 24.8428L5.51989 44.5285C4.32546 45.7731 2.3112 45.848 1.02092 44.6959C-0.269357 43.5437 -0.347058 41.6007 0.847372 40.3561L17.7371 22.7566Z" fill="#4299E1" /></svg></span>
    </ButtonBack>
    </div>

        </CarouselProvider>
  <div className="hidden lg:flex items-center justify-center w-full">
    <div className="flex items-center justify-center">
      <div className="w-5 h-5 rounded-full bg-blue cursor-pointer" />
      <div className="w-3 h-3 rounded-full bg-gray ml-4 cursor-pointer" />
      <div className="w-3 h-3 rounded-full bg-gray ml-4 cursor-pointer" />
      <div className="w-3 h-3 rounded-full bg-gray ml-4 cursor-pointer" />
      <div className="w-3 h-3 rounded-full bg-gray ml-4 cursor-pointer" />
    </div>
  </div>
</div>

<div id="blog" className="bg-gray-light px-4 xl:px-0 py-12 mt-10 lg:mt-20 f-f-p">
  <div className="mx-auto container">
    <h1 className="text-center text-3xl lg:text-5xl tracking-wider text-color-heading">Latest from our Blog</h1>
    <div className="mt-12 lg:mt-24">
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
        <div>
          <img className="w-full" src="/images/blog(1).png" alt="computer" />
          <div className="py-4 px-8 w-full flex justify-between bg-blue-dark">
            <p className="text-sm text-white font-semibold tracking-wide">Bruce Wayne</p>
            <p className="text-sm text-white font-semibold tracking-wide">13TH Oct, 2020</p>
          </div>
          <div className="bg-white px-10 py-6 rounded-bl-3xl rounded-br-3xl">
            <h1 className="text-4xl text-color-heading font-semibold tracking-wider">Transactions</h1>
            <p className="text-color-para text-lg leading-8 tracking-wide mt-6 w-11/12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend lorem lacus, potenti tempor, egestas dictum eu consequat. Vitae, ut velit, sed ornare. Aliquet potenti habitasse ullamcorper molestie augue libero, nisl. Posuere vitae pellentesque sem id lectus bibendum faucibus eget at. Turpis laoreet pulvinar id blandit.</p>
            <div className="w-full mt-4 justify-end flex items-center cursor-pointer">
              <p className="text-base tracking-wide text-blue-light">Read more</p>
              <svg className="ml-3 lg:ml-6" xmlns="http://www.w3.org/2000/svg" width={20} height={18} viewBox="0 0 20 18" fill="none">
                <path d="M11.7998 1L18.9998 8.53662L11.7998 16.0732" stroke="#4299E1" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1 8.53662H19" stroke="#4299E1" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="h-5 w-2" />
          </div>
        </div>
        <div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            <div>
              <img className="w-full" src="/images/blog(2).png" alt="games" />
              <div className="py-2 px-4 w-full flex justify-between bg-blue-dark">
                <p className="text-sm text-white font-semibold tracking-wide">Bruce Wayne</p>
                <p className="text-sm text-white font-semibold tracking-wide">13TH Oct, 2020</p>
              </div>
              <div className="bg-white px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                <h1 className="text-lg text-color-heading font-semibold tracking-wider">Transactions</h1>
                <p className="text-color-para text-base leading-8 pr-4 tracking-wide mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra eget donec...</p>
              </div>
            </div>
            <div>
              <img className="w-full" src="/images/blog(3).png" alt="notes" />
              <div className="py-2 px-4 w-full flex justify-between bg-blue-dark">
                <p className="text-sm text-white font-semibold tracking-wide">Bruce Wayne</p>
                <p className="text-sm text-white font-semibold tracking-wide">13TH Oct, 2020</p>
              </div>
              <div className="bg-white px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                <h1 className="text-lg text-color-heading font-semibold tracking-wider">Transactions</h1>
                <p className="text-color-para text-base leading-8 pr-4 tracking-wide mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra eget donec...</p>
              </div>
            </div>
          </div>
          <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            <div>
              <img className="w-full" src="/images/blog(4).png" alt="laptop" />
              <div className="py-2 px-4 w-full flex justify-between bg-blue-dark">
                <p className="text-sm text-white font-semibold tracking-wide">Bruce Wayne</p>
                <p className="text-sm text-white font-semibold tracking-wide">13TH Oct, 2020</p>
              </div>
              <div className="bg-white px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                <h1 className="text-lg text-color-heading font-semibold tracking-wider">Transactions</h1>
                <p className="text-color-para text-base leading-8 pr-4 tracking-wide mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra eget donec...</p>
              </div>
            </div>
            <div>
              <img className="w-full" src="/images/blog(5).png" alt="worker" />
              <div className="py-2 px-4 w-full flex justify-between bg-blue-dark">
                <p className="text-sm text-white font-semibold tracking-wide">Bruce Wayne</p>
                <p className="text-sm text-white font-semibold tracking-wide">13TH Oct, 2020</p>
              </div>
              <div className="bg-white px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                <h1 className="text-lg text-color-heading font-semibold tracking-wider">Transactions</h1>
                <p className="text-color-para text-base leading-8 pr-4 tracking-wide mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra eget donec...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="f-f-p mt-20">
  <h1 className="text-center text-3xl lg:text-5xl tracking-wider text-color-heading">Partnerships</h1>
  <div className="py-16 mt-12 lg:mt-24 bg-blue-dark">
    <div className="flex flex-col lg:flex-row items-center w-full justify-between mx-auto container">
      <img className src="/images/hero-imglogo.png" alt="GS1" />
      <img className="mt-10 lg:mt-0" src="/images/hero-imglogo(1).png" alt="black-berry" />
      <img className="mt-10 lg:mt-0" src="/images/hero-imglogo(2).png" alt="Honda" />
      <img className="mt-10 lg:mt-0" src="/images/hero-imglogo(3).png" alt="Addidas" />
      <img className="mt-10 lg:mt-0" src="/images/hero-imglogo(4).png" alt="Nike" />
    </div>
  </div>
</div>

<div className="f-f-p mt-16 lg:mt-32 mx-auto container px-4 xl:px-0">
  <h1 className="text-center text-3xl lg:text-5xl tracking-wider text-color-heading">Contact Us</h1>
  <div className="mt-12 lg:mt-24">
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <div className="bg-white shadow-xl cursor-pointer custom-border-blue py-10 rounded-3xl flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
          <path d="M7.64706 2H18.9412L24.5882 16.1866L17.5294 20.4426C20.5533 26.6039 25.5157 31.5905 31.6471 34.6291L35.8824 27.5358L50 33.2105V44.5597C50 46.0647 49.405 47.5081 48.346 48.5723C47.287 49.6365 45.8506 50.2344 44.3529 50.2344C33.3391 49.5618 22.951 44.8619 15.1487 37.0215C7.34636 29.1811 2.66932 18.7423 2 7.67463C2 6.16963 2.59496 4.72626 3.65398 3.66206C4.71301 2.59786 6.14937 2 7.64706 2Z" stroke="#052E47" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h2 className="text-lg font-bold tracking-wide mt-4 mb-5 text-color-heading">Phone</h2>
        <p className="text-base font-semibold tracking-wide text-color-heading">+92 348 1234567</p>
        <p className="text-base font-semibold tracking-wide text-color-heading mt-4">+92 348 1234567</p>
      </div>
      <div className="bg-white shadow-lg cursor-pointer py-10 rounded-3xl flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 50 51" fill="none">
          <path d="M1 10.0439L17 1L33 10.0439L49 1V40.1904L33 49.2344L17 40.1904L1 49.2344V10.0439Z" stroke="#4A5568" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17 1V40.1904" stroke="#4A5568" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M33 10.0439V49.2344" stroke="#4A5568" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h2 className="text-lg font-bold tracking-wide mt-4 mb-5 text-colo-para">Location</h2>
        <div className="text-color-para text-base tracking-wide text-center">
          <p className="leading-7">Alpha Squad, Office# 13</p>
          <p className="leading-7">NSTP, NUST Univeristy,</p>
          <p className="leading-7">H-12, Islamabad</p>
        </div>
      </div>
      <div className="bg-white shadow-lg cursor-pointer py-10 rounded-3xl flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width={50} height={51} viewBox="0 0 50 51" fill="none">
          <path d="M25 49.2344C38.2548 49.2344 49 38.4367 49 25.1172C49 11.7976 38.2548 1 25 1C11.7452 1 1 11.7976 1 25.1172C1 38.4367 11.7452 49.2344 25 49.2344Z" stroke="#4A5568" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M25 11.7183V25.117L33 33.1562" stroke="#4A5568" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h2 className="text-lg font-bold tracking-wide mt-4 mb-5 text-colo-para">Office Timings</h2>
        <div className="text-color-para text-base tracking-wide text-center">
          <p className="leading-7">Mon - Thu</p>
          <p className="leading-7">(1:00 p.m - 10:00 p.m)</p>
          <p className="leading-7">Fri</p>
          <p>(2:00 p.m - 10:00 p.m)</p>
        </div>
      </div>
      <div className="bg-white shadow-lg cursor-pointer py-10 rounded-3xl flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width={64} height={51} viewBox="0 0 64 51" fill="none">
          <path d="M55.8571 1H7.85714C4.07004 1 1 4.08504 1 7.89062V42.3438C1 46.1493 4.07004 49.2344 7.85714 49.2344H55.8571C59.6442 49.2344 62.7142 46.1493 62.7142 42.3438V7.89062C62.7142 4.08504 59.6442 1 55.8571 1Z" stroke="#4A5568" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1 7.89014L31.8571 28.562L62.7142 7.89014" stroke="#4A5568" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h2 className="text-lg font-bold tracking-wide mt-4 mb-5 text-colo-para">E-mail</h2>
        <div className="text-color-para text-base tracking-wide text-center">
          <p className>alphasquad@mail.com</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="mx-auto f-f-p container lg:mt-24 mt-12 px-4 xl:px-0">
  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
    <div className="flex flex-col my-8 lg:my-0 xl:my-0">
      <label htmlFor="city" className="text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2">
        <span className="tracking-wide text-color-heading text-2xl font-semibold leading-10">Name</span>
      </label>
      <input id="city" className="focus:outline-none text-gray-700 focus:border focus:border-indigo-900 font-normal w-full h-10 flex items-center mt-4 text-lg border-gray-400 border-b pb-2" placeholder="Your Name" />
    </div>
    <div className="flex flex-col my-8 lg:my-0 xl:my-0">
      <label htmlFor="city" className="text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2">
        <span className="tracking-wide text-color-heading text-2xl font-semibold leading-10">Email</span>
      </label>
      <input id="city" className="focus:outline-none focus:border text-gray-700 focus:border-indigo-900 font-normal w-full h-10 flex items-center mt-4 text-lg border-gray-400 border-b pb-2" placeholder="example@email.com" />
    </div>
  </div>
  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mt-8 gap-8">
    <div className="flex flex-col my-8 lg:my-0 xl:my-0">
      <label htmlFor="city" className="text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2">
        <span className="tracking-wide text-color-heading text-2xl font-semibold leading-10">Phone</span>
      </label>
      <input id="city" className="focus:outline-none text-gray-700 focus:border focus:border-indigo-900 font-normal w-full h-10 flex items-center mt-4 text-lg border-gray-400 border-b pb-2" placeholder="+92-12-3456789" />
    </div>
    <div className="flex flex-col my-8 lg:my-0 xl:my-0">
      <label htmlFor="city" className="text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2">
        <span className="tracking-wide text-color-heading text-2xl font-semibold leading-10">Address</span>
      </label>
      <input id="city" className="focus:outline-none focus:border text-gray-700 focus:border-indigo-900 font-normal w-full h-10 flex items-center mt-4 text-lg border-gray-400 border-b pb-2" placeholder="Enter your address (optional)" />
    </div>
  </div>
  <div className="mt-8">
    <div className="flex flex-col my-8 lg:my-0 xl:my-0">
      <label htmlFor="city" className="text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2">
        <span className="tracking-wide text-color-heading text-2xl font-semibold leading-10">Comments</span>
      </label>
      <input id="city" className="focus:outline-none text-gray-700 focus:border focus:border-indigo-900 font-normal w-full h-10 flex items-center mt-4 text-lg border-gray-400 border-b pb-2" placeholder="Leave your comments here..." />
    </div>
  </div>
</div>
<Footer/>       
        </div>
    );
}
