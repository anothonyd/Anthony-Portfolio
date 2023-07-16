'use client';

import Marquee from "react-fast-marquee";
import Image from "next/image";
import {
  cssImg,
  figmaImg,
  gitImg,
  htmlImg,
  jsImg,
  mongoImg,
  nextImg,
  nodeImg,
  reactImg,
  tailwindImg,
  tsImg,
  bootstrapImg
} from "../../assets/tech/index";

const TechOne = () => {
  const imageUrls = [
    tsImg,
    tailwindImg,
    reactImg,
    nodeImg,
    nextImg,
    mongoImg,
    jsImg,
    htmlImg,
    gitImg,
    figmaImg,
    cssImg,
    bootstrapImg
  ];


  return (
    <div className="w-screen md:w-3/4">
      <Marquee className="my-10"
        speed={120}
        direction="right"
        gradient="true"
        gradientColor={[15, 15, 15]}
        gradientWidth={window.innerWidth <= 768 ? 5 : 300}
        autoFill={true}
        pauseOnHover={true}
      >
        <div className="flex ms-[100px] gap-[100px] ">
          {imageUrls.map((imageUrl, index) => (
            <Image
              className="bg-slate-600 p-2 rounded shadow"
              key={index}
              src={imageUrl}
              alt={`Image ${index}`}
              style={{ width: '100px', height: '100px' }}
            />
          ))}
        </div>
      </Marquee>
    </div>

  )
}

export default TechOne