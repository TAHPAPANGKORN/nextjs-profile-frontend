import InstagramBtn from "./UiBtn/InstagramBtn";
import YoutubeBtn from "./UiBtn/YoutubeBtn";
import DiscordBtn from "./UiBtn/DiscordBtn";
import FacebookBtn from "./UiBtn/FacebookBtn";
import XBtn from "./UiBtn/XBtn";
import EmailBtn from "./UiBtn/EmailBtn";
import GithubBtn from "./UiBtn/GithubBtn";
import BuyMeCoffeeBtn from "./UiBtn/BuyMeCoffeeBtn";

function GetInTouch() {
  return (
    <div className="container flex flex-col  md:flex-row items-stretch justify-center md:m-4 h-auto">
      {/* Left Section */}
      <div className="w-full md:w-[360px] min-h-[300px] md:h-[520px] bg-gradient-to-br from-[#3A86FF] to-[#2656b4] shadow-2xl rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none flex flex-col justify-center p-6 md:p-10 text-white">
        <h1 className="font-bold text-3xl md:text-4xl mb-4 text-center md:text-left">
          Collab with Me
        </h1>
        <p className="opacity-90 leading-relaxed text-center md:text-left text-sm md:text-base">
            I love meeting new people and <span className="font-semibold">working together on fun projects</span>.  
            If you've got an idea, want to learn together, or just feel like building something cool —  
            let's team up and make it happen! 
        </p>
      </div>

      {/* Right Section */}
      <div className="bg-white shadow-xl h-auto w-full md:w-[360px] min-h-[400px] md:h-[520px]  md:rounded-r-2xl md:rounded-bl-none relative flex flex-col overflow-hidden ">
        <h2 className="text-3xl font-bold text-center m-4">
          My Contacts
        </h2>
        <span className="border-b-2 border-[#3A86FF] w-[60%] md:w-[70%] text-center block mx-auto mb-4"></span>

        <div className="flex-1 overflow-y-auto scrollbar-style">
          <div className="m-4 space-y-4 flex flex-col justify-center items-center">
            <div className="flex flex-col gap-3">
              <h2 className="text-xl md:text-2xl font-bold">Contact Information</h2>
              <EmailBtn />
              <GithubBtn />
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-xl md:text-2xl font-bold">Support Me</h2>
              <BuyMeCoffeeBtn />
            </div>

            <div className="flex flex-col gap-3 pb-6">
              <h2 className="text-xl md:text-2xl font-bold">Social Media</h2>
              <InstagramBtn />
              <FacebookBtn />
              <DiscordBtn />
              <YoutubeBtn />
              <XBtn />
            </div>
          </div>
        </div>

        {/* Bottom Blur Overlay */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent rounded-b-2xl md:rounded-br-2xl"></div>
      </div>
    </div>
  );
}

export default GetInTouch;
