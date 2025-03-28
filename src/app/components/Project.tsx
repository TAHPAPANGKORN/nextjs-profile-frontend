import React from 'react'
import Image from 'next/image';
import DiscordProject  from "@/app/assets/images/Poke-discord.png"

export const Project = () => {
  return (
    <div
      id="project"
      className="bg-[#F3F4F6] flex flex-col items-center justify-center py-5 gap-20 "
    >
      <h1 className="header-item mt-5">Projects</h1>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mx-2 md:gap-6">
        <Image
          src={DiscordProject}
          alt="Discord-Project"
          height={300}
          width={500}
          className="rounded-xs shadow shadow-gray-400"
        />
        <div className="flex flex-col gap-3 w-full">
          <h2 className="font-bold text-2xl">Poke bot discord</h2>
          <p className="text-[12px] md:text-xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, voluptatum.
          </p>
          <div className="flex  gap-4 underline underline-offset-1 text-blue-500">
            <a href="#">View Project</a>
            <a href="#">GitHub Repo</a>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mx-2 md:gap-6">
        <Image
          src={DiscordProject}
          alt="Discord-Project"
          height={300}
          width={500}
          className='rounded-xs shadow shadow-gray-400'
        />
        <div className='flex flex-col gap-3 w-full'>
          <h2 className='font-bold text-2xl'>Poke bot discord</h2>
          <p className='text-[12px] md:text-xl '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, voluptatum.
          </p>
          <div className='flex  gap-4 underline underline-offset-1 text-blue-500'>
            <a href="#">View Project</a>
            <a href="#">GitHub Repo</a>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mx-2 md:gap-6">
        <Image
          src={DiscordProject}
          alt="Discord-Project"
          height={300}
          width={500}
          className='rounded-xs shadow shadow-gray-400'
        />
        <div className='flex flex-col gap-3 w-full'>
          <h2 className='font-bold text-2xl'>Poke bot discord</h2>
          <p className='text-[12px] md:text-xl '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, voluptatum.
          </p>
          <div className='flex  gap-4 underline underline-offset-1 text-blue-500'>
            <a href="#">View Project</a>
            <a href="#">GitHub Repo</a>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Project
