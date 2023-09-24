import Image from 'next/image'

export function LeftPanel() {
  return (
    <div className="flex flex-col justify-center items-center gap-3 w-53">
      <div className='flex flex-col items-center justify-center rounded-3xl  bg-white w-full'>
        <div className='py-10 px-3 flex flex-col justify-center items-center gap-3'>
          <Image className='cursor-pointer rounded-full' src='/Treiber.jpg' alt='user avatar' width={67} height={67} />

          <div className='flex flex-col w-full justify-center items-center'>
            <span className='font-bold text-[16px]'>Rafael Treiber</span>
            <span className='text-xs text-[#9E9E9E]'>Full stack web developer</span>
          </div>

          <button className='bg-[#5E47D2] text-white rounded-md px-3 py-1.5'>View Profile</button>
        </div>

        <div className='flex flex-col gap-8 w-full px-8 pb-10'>
          <div className='flex gap-2 cursor-pointer items-center'>
            <Image className='cursor-pointer rounded-full' src='/Home.png' alt='Home icon' width={18} height={18} />
            <span>Home</span>
          </div>
          <div className='flex gap-2 cursor-pointer items-center'>
            <Image className='cursor-pointer rounded-full' src='/layers.png' alt='Home icon' width={18} height={18} />
            <span>My Network</span>
          </div>
          <div className='flex gap-2 cursor-pointer items-center'>
            <Image className='cursor-pointer rounded-full' src='/briefcase.png' alt='Home icon' width={18} height={18} />
            <span>Jobs</span>
          </div>
          <div className='flex gap-2 cursor-pointer items-center'>
            <Image className='cursor-pointer rounded-full' src='/mail.png' alt='Home icon' width={18} height={18} />
            <span>Messaging</span>
          </div>
          <div className='flex gap-2 cursor-pointer items-center'>
            <Image className='cursor-pointer rounded-full' src='/monitor.png' alt='Home icon' width={18} height={18} />
            <span>For Business</span>
          </div>
        </div>
      </div>

      <div className='flex flex-col bg-[#604DCF] w-full items-center p-5 text-white rounded-3xl'>
        <Image className='cursor-pointer' src='/21.png' alt='rating image' width={93} height={77} />
        <div className='p-2'>
          <span>Refine your profile</span>
        </div>
        <span className='block w-52 text-sm'>Enrich your profile and benefit from better visibility on the platform</span>
        <div className='flex flex-col p-2'>
          <div className='flex justify-between text-[#C1B7FF]'>
            <span>60%</span>
            <span>100%</span>
          </div>
          <div className='w-52 h-2.5 bg-[#210F7F] rounded-full'>
            <div className='w-20 h-2.5 rounded-full bg-white'></div>
          </div>

        </div>

      </div>
    </div>

  )
}