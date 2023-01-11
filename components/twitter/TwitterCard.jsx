import Image from 'next/image'
import React from 'react'
import { isMobile } from 'react-device-detect'
import { AiOutlineTwitter } from 'react-icons/ai';
import { RxExternalLink } from 'react-icons/rx';
import { SiGithub } from 'react-icons/si';
import ReadMore from '../utils/ReadMore';
import profile from '../../assets/images/profile.png'

const TwitterCard = ({ name, bio, hashtags, followers, site_link, twitter_link, github_link, }) => {
  return (
    <div>
      <div className=' rounded-[4px]   border-[0.2px] font-two p-2'>
        <div className='grid grid-cols-4 lg:grid-cols-6'>
          <div className='col-span-1'>
          <a href={twitter_link} target="_blank" rel="noreferrer">
            <div>
              <Image height={isMobile ? 60 : 80} width={isMobile ? 60 : 80} className=" rounded-full m-2 lg:m-4" src={profile} alt='jkln' />
            </div>
            </a>
            <div>
              <p className='text-[12px] mx-2'>{followers}</p>
              {/* <p className='text-[12px] mx-2'>followers</p> */}
            </div>
          </div>
          <div className="col-span-3 lg:col-span-5">
            <div>
              <a href={twitter_link} target="_blank" rel="noreferrer">
                <p className='text-[16px]  font-medium'>{name}
                  <span className='inline-block mx-2 text-blue-500'>
                    <AiOutlineTwitter />
                  </span>
                </p>
              </a>
              {/* <p className='-mt-1 text-[14px] font-light'>@levelsio</p> */}
            </div>
            <div className='mt-[6px]'>
              <p className='text-[13px]'>
                <ReadMore>{bio}</ReadMore>
              </p>
              <p className='text-[15px] text-blue-500 ml-1'>
                {hashtags}
              </p>
            </div>
            <div className='grid grid-flow-col grid-cols-8 mt-[10px] lg:mt-[15px]'>
              {
                site_link ?
                  <div className='text-[22px] text-orange-500'><a href={site_link} target="_blank" rel="noreferrer" ><RxExternalLink /></a></div> : null
              }
              {
                github_link ?
                  <div className='text-[20px]'><a href={github_link} target="_blank" rel="noreferrer"><SiGithub /></a></div> : null
              }

              {/* <div className='text-[22px] text-red-500'><FaYoutube /></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default TwitterCard