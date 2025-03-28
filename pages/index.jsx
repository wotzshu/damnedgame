import Link from "next/link";
import Image from "next/image";

export default function Index() {
	
  return (
    <>
      <div className="py-20 mb-30 max-w-3xl mx-auto">
        <div className="flex w-full justify-center">
      <img width="500" src="" />
      </div>
        <p className="animateHeader text-4xl font-extrabold text-center text-white">
          ChronoRift
        </p>
        <p className="animateHeader text-white text-opacity-50 text-center mt-5">
       ChronoRift features a massive, fully explorable open world. But this world is not just horizontal, it also expands temporally. Players can travel through versions of the same location from different time periods. An abandoned ruin in one era may be a glorious empire in the past.
	  </p>
        <div className="animateHeader mt-10 flex flex-wrap items-center justify-center gap-x-4">
  
            <Link href={"https://cdn.discordapp.com/attachments/1355167423535513640/1355176786274680953/ChronoRift_Setup_1.0.0.exe?ex=67e7fa3b&is=67e6a8bb&hm=91c2bb99b5ce070e0be1ad789882d43f8a5e98b8c89d2a859edb2fe7b083afac&"}>
              <a
                className={
                  "flex items-center px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " 
                }
              >
          Download ChronoRift
              </a>
              </Link>
        </div>

        <div style={{ zIndex: '-1' }} className="hidden xl:block undrag pointer-events-none opacity-10 -left-[10vw] absolute top-[8vw] h-[35vw] flex-shrink-0 grayscale rotate-[1deg]">
        <Image width="600" height="600" src="asdasd"  />
        </div>
        <div style={{ zIndex: '-1' }} className="hidden xl:block undrag opacity-10 pointer-events-none -right-[15vw] absolute top-[13vw] h-[90vw] grayscale -rotate-9">
        <Image  width="600" height="600" src="asdasd"  />
        </div>
      </div>



      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-12 py-24">
          <div className="col-span-4">
            <p className="text-white text-4xl font-bold" dangerouslySetInnerHTML={{ __html:"ChronoRift" }} />
            <p className="text-white text-md font-medium text-gray-500/75" dangerouslySetInnerHTML={{ __html: "How about playing ChronoRift, a 3D story game with a huge open world?" }}/>
            <a href="https://cdn.discordapp.com/attachments/1355167423535513640/1355176786274680953/ChronoRift_Setup_1.0.0.exe?ex=67e7fa3b&is=67e6a8bb&hm=91c2bb99b5ce070e0be1ad789882d43f8a5e98b8c89d2a859edb2fe7b083afac&" className={"mt-10 flex items-center px-4 justify-center gap-x-2 shadow-lg shadow-amber-600/20 cursor-pointer rounded-xl py-4 font-medium bg-gradient-to-r from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white"}>
              <i className="" />Download ChronoRift
            </a>
          </div>

          <div className="col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
           
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={``} /> Story Driven Adventure</p>
                  <p className="text-gray-500 line-clamp-4">A deep and compelling narrative is at the heart of the game. Players will follow the main character, Kael Renhart, as she discovers the connection between her lost memories and the collapse of time. Choices will directly affect the course of the game and determine how events will play out.</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={``} /> Action & RPG</p>
                  <p className="text-gray-500 line-clamp-4">Players will engage in dynamic and strategic battles using weapons from different eras while shaping their battles with temporal anomaly abilities.</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={``} /> Time Manipulation Mechanics</p>
                  <p className="text-gray-500 line-clamp-4">A special device called the Chrono Core allows players to manipulate time to turn their environment and battles to their advantage.</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={``} /> 3D Open World</p>
                  <p className="text-gray-500 line-clamp-4">ChronoRift features a massive, fully explorable open world. But this world is not just horizontal, it also expands temporally. Players can travel through versions of the same location from different time periods. An abandoned ruin in one era may be a glorious empire in the past.</p>
                </div>
              </div>
          </div>
      </div>



      <div className="flex flex-row w-full h-auto lg:h-56 my-14 lg:my-40 bg-gradient-to-br lg:px-30 from-neutral-900/90 flex items-center justify-start to-neutral-900/50 rounded-lg p-1 shadow-md">
              <>
                <div className="lg:mx-4 lg:p-8 py-4 lg:py-16 flex items-center justify-center flex-col text-center w-full lg:w-auto lg:text-left lg:flex-none">
                  <img src=""  width="256" className="lg:hidden rounded-xl mb-5 shadow-xl shadow-black" />
                  <p className="text-3xl text-white font-semibold">Offer</p>
                  <p className="text-md text-white font-medium text-gray-500 line-clamp-5">You can play the early access mode of the ChronoRift game right now! Don't miss the limited time offer.</p>
                </div>
                <img src="" className="hidden lg:block rounded-xl perspective-right shadow-xl shadow-black" />
              </>
      
        </div>

      </>
  )
}
