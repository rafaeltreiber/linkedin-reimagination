import Image from 'next/image'

export function RightPanel() {
  return (
    <div className="flex flex-col w-80 gap-4">
      <div className="flex gap-2">
        <div className="flex flex-col gap-1 p-3 bg-white rounded-3xl w-[50%]">
          <span className='text-[#5E47D2] text-[20px] font-bold'>210</span>
          <h1 className='font-bold text-[14px]'>Profile viewers</h1>
          <div className="flex gap-1.5 text-sm w-full items-center">
            <Image src='/Timer.png' alt='Clock icon' width={10} height={9} />
            <span className='text-[9px]'>Past 18 days</span>
          </div>
        </div>
        <div className="flex flex-col gap-1 p-3 bg-white rounded-3xl w-[50%]">
          <span className='text-[#5E47D2] text-[20px] font-bold'>89</span>
          <h1 className='font-bold text-[14px]'>Post impressions</h1>
          <div className="flex gap-1.5 text-sm w-full items-center">
            <Image src='/Timer.png' alt='Clock icon' width={10} height={9} />
            <span className='text-[9px]'>Past 7 days</span>
          </div>
        </div>
      </div>


      <div className='flex flex-col bg-white rounded-3xl p-4 gap-4'>
        <div className='flex justify-between gap-2'>
          <div className='flex flex-col'>
            <span className='font-bold text-[22px]'>Jobs</span>
            <span className='text-[11px] font-semibold'>356 Jobs recommended for you</span>
          </div>
          <button className='bg-[#F7F4FF] rounded-3xl text-[#BBb0F5] border-[#BBb0F5] border-2 py-1 px-5 '>View all</button>
        </div>

        <div className='flex flex-col gap-2.5'>
          <div className='flex items-center border-b-2 pb-3'>
            <Image src='/In.png' alt='Linkedin icon' width={50} height={50} />
            <div className='flex flex-col w-48 p-2'>
              <span className='text-[14px] font-bold'>Graphic Designer</span>
              <span className='text-[#9F9BB9] text-[12px]'>Linkedin CDD</span>
            </div>
            <Image src='/Timer.png' alt='Clock icon' width={11} height={10} />
            <span className='pl-2'>1min</span>
          </div>
          <div className='flex items-center border-b-2 pb-3'>
            <Image src='/Loreal.png' alt='Loreal icon' width={50} height={50} />
            <div className='flex flex-col w-48 p-2'>
              <span className='text-[14px] font-bold'>Brand Designer</span>
              <span className='text-[#9F9BB9] text-[12px]'>L´ORÉAL CDI</span>
            </div>
            <Image src='/Timer.png' alt='Clock icon' width={11} height={10} />
            <span className='pl-2'>1min</span>
          </div>
          <div className='flex items-center border-b-2 pb-3'>
            <Image src='/Nasa.png' alt='Nasa icon' width={50} height={50} />
            <div className='flex flex-col w-48 p-2'>
              <span className='text-[14px] font-bold'>Senior Product Designer</span>
              <span className='text-[#9F9BB9] text-[12px]'>Nasa - CDI</span>
            </div>
            <Image src='/Timer.png' alt='Clock icon' width={11} height={10} />
            <span className='pl-2'>1min</span>
          </div>
          <div className='flex items-center pb-3'>
            <Image src='/EHL.png' alt='EHL icon' width={50} height={50} />
            <div className='flex flex-col w-48 p-2'>
              <span className='text-[14px] font-bold'>Lead Designer</span>
              <span className='text-[#9F9BB9] text-[12px]'>EHL CDI</span>
            </div>
            <Image src='/Timer.png' alt='Clock icon' width={11} height={10} />
            <span className='pl-2'>1min</span>
          </div>
        </div>
      </div>

      {/* <div className='flex flex-col'> */}


      <div className='flex flex-col gap-3 bg-white rounded-3xl p-4'>
        <div className='flex justify-between gap-2'>
          <div className='flex flex-col'>
            <span className='font-bold text-[22px]'>Events</span>
            <span className='text-[11px] font-semibold'>100 events this week</span>
          </div>
          <button className='bg-[#F7F4FF] rounded-3xl text-[#BBb0F5] border-[#BBb0F5] border-2 py-1 px-5 '>View all</button>
        </div>
        <div className='flex bg-[#F4F7FE] rounded-3xl gap-3 p-4 items-center'>
          <Image src='/Event1.png' alt='Event image' width={50} height={76} />
          <div className='flex flex-col gap-2.5'>
            <div className='flex flex-col'>
              <span className='text-[#9F9BB9] text-[12px]'>19 September. 2023 19:45</span>
              <span className='font-semibold text-[12px]'>Apéro Club Exchange langages</span>
              <span className='text-[12px]'>Afterwork Paris . Paris</span>
            </div>
            <div className='flex justify-between '>
              <span className='text-[10px]'>17 participants</span>
              <div className='flex items-center gap-2'>
                <Image src='/ShareNetwork.png' alt='Network image' width={16} height={16} />
                <Image src='/Star.png' alt='Star image' width={16} height={16} />
              </div>
            </div>
          </div>
        </div>
        <div className='flex bg-[#F4F7FE] rounded-3xl gap-3 p-4 items-center'>
          <Image src='/Event2.png' alt='Event image' width={50} height={76} />
          <div className='flex flex-col gap-2.5'>
            <div className='flex flex-col'>
              <span className='text-[#9F9BB9] text-[12px]'>20 September. 2023 10:00</span>
              <span className='font-semibold text-[12px]'>How to make a professional CV</span>
              <span className='text-[12px]'>Europ. Lyon</span>
            </div>
            <div className='flex justify-between '>
              <span className='text-[10px]'>100 participants</span>
              <div className='flex items-center gap-2'>
                <Image src='/ShareNetwork.png' alt='Network image' width={16} height={16} />
                <Image src='/Star.png' alt='Star image' width={16} height={16} />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* </div> */}
    </div>
  )
}