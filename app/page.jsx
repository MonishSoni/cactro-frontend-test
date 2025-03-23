import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function Home() {


  const imageNames = [
    "fox.png",
    "lonelyPlanet.png",
    "carvana.png",
    "intuit.png",
    "kiva.png",
    "target.png",

  ];

  return (
    <div className=" bg-[#F6EEE7]">

      <div className="flex items-center justify-center pt-15 pb-10 gap-30">

        <div className="flex justify-start items-start flex-col">
          <h2 className="text-7xl font-bold  max-w-[40rem] mb-5">Slack is where the future works</h2>
          <p className="text-lg font-medium max-w-[28rem]  mb-10">Transform the way you work with one place for everyone and everyhting you need to get stuff done</p>

          <div className="flex justify-center items-center gap-5">
            <Link className='text-sm px-12 py-4.5 text-background  bg-[#611f69] rounded outline outline-[#611f69] font-semibold tracking-wide uppercase' href={'#'}>Try For Free</Link>
            <Link className="uppercase bg-blue-500 text-sm px-8 rounded py-4 text-white font-semibold tracking-wide flex justify-start items-center gap-3" href={'#'}><Image className="bg-white rounded" src={'/google.png'} width={25} height={25} alt="google" /> Sign up with google</Link>
          </div>
        </div>

        <div>
          <Image className="rounded-lg" src={'/slack1.png'} width={550} height={550} alt="slack window" />
        </div>

      </div>






      <Marquee pauseOnHover={true} speed={50} gradient={false} className="py-10 flex  items-center justify-center ">
        {imageNames.map((image, index) => (
          <img
            key={index}
            src={`/${image}`}
            alt={image.replace(".png", "")}
            className="h-20 md:h-24 mx-4 md:mx-12 object-cover"
          />
        ))}
      </Marquee>


      <div className="flex flex-row-reverse items-start justify-end py-5 gap-35">

        <div className="flex justify-start items-start flex-col">
          <h2 className="text-4xl font-semibold  max-w-[33rem] mb-5">Now is your moment to build a better tomorrow</h2>
          <p className="text-lg font-medium max-w-[28rem]  mb-5">We've seen what bthe future can be. Now it's time to decide what it will be.</p>

          <div className="flex justify-center items-center gap-5">
            <Link className='text-sm px-12 py-4.5  text-[#611f69] rounded outline outline-[#611f69] font-semibold tracking-wide uppercase' href={'#'}>Watch Video</Link>

          </div>
        </div>

        <div>
          <Image className="rounded-lg" src={'/slack2.png'} width={550} height={550} alt="slack window" />
        </div>

      </div>






    </div>
  );
}
