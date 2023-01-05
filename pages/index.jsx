import ReactTypingEffect from "react-typing-effect";
import { isMobile } from 'react-device-detect';
import Image from "next/image";
export default function Home() {
  
  return (
    <>
      {
        isMobile ? 
        <div className="mt-60">
        coming soon
        </div>
          :
          <div className='mt-16 '>
            <div className="theme-col  py-[61px] pl-[70px] ">
              <div className="grid grid-cols-2">
                <div className="col-span-1">
                  <div className="mb-5">
                    <p className="text-[25px] lg:text-[56px]">Dive into Saas 
                    <span className="ml-[12px] my-2 bg-[#E3B4FA] rounded-[16px] p-[8px]">Realm</span>
                    </p>
                  </div>
                  <div className="mt-[5px] -ml-2">
                    <p className="text-[25px] lg:text-[56px]">
                      <span className="bg-[#FFCD9F] my-2 rounded-[16px] p-[8px]">Unique</span>
                      <span className="ml-[12px] my-2 bg-[#E3B4FA] rounded-[16px] p-[8px]">Classification</span></p>
                  </div>
                  <div className="mt-8 -ml-2">
                    <p className="text-[25px] lg:text-[56px]">
                      for
                      <span className="bg-[#E3B4FA] my-2 ml-4 rounded-[16px] p-[8px] font-medium">
                        <ReactTypingEffect
                          typingDelay={200}
                          speed={30}
                          eraseSpeed={30}
                          eraseDelay={1500}
                          text={[
                            `Developer`,
                            `Designer`,
                            `Content Creator`,
                            `Marketer`,
                            `Solopreneour`,
                          ]}
                        />
                      </span>
                    </p>
                  </div>
                </div>
                <div className="col-span-1">
                    <Image src="/images/hero.png" height={500} width={500} alt="hero" />
                </div>
              </div>
            </div>
          </div>
      }
    </>
  )
}
