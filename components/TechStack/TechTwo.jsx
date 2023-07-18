'use client'

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
  ];

  return (
    <div className="w-full md:w-3/4">
    <Marquee className="my-10" 
    speed={120} 
    direction="left" 
    gradient="true"
    gradientColor={[30,30,47]}
    gradientWidth={200}     
    autoFill={true}
    pauseOnHover={true}
    >
      <div className="flex me-[100px] py-[50px] gap-[100px]">
        {imageUrls.map((imageUrl, index) => (
          <Image
              className="bg-slate-600 p-2 rounded shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300"
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