import Image from 'next/image'

export function Navbar() {
  return (
    <div className="flex items-center justify-between bg-white rounded-full px-4 py-2">
      <div className='flex items-center gap-4'>
        <Image src='/LinkedinLogo.png' alt='Linkedin logo' width={100} height={43} />
        <div className='text-[#9F9BB9] flex gap-2 text-xs'>
          <a href=''>Settings & Privacy</a>
          <a href=''>Help</a>
          <a href=''>Posts & Activity</a>
          <a href=''>Job Posting Account</a>
        </div>
      </div>

      <div className='flex gap-6 items-center'>
        <div className='flex items-center relative'>
          <input className='bg-[#F4F7FE] rounded-full px-10 py-3 text-xs w-55 ' type='text' placeholder='Search' />
          <Image className='absolute top-2.2 left-3' src='/search.png' alt='Linkedin logo' width={20} height={20} />
        </div>
        <Image className='cursor-pointer' src='/layers.png' alt='Linkedin logo' width={20} height={20} />
        <Image className='cursor-pointer' src='/notifications.png' alt='Linkedin logo' width={20} height={20} />
        <Image className='cursor-pointer' src='/mail.png' alt='Linkedin logo' width={20} height={20} />
        <Image className='cursor-pointer rounded-full' src='/Treiber.jpg' alt='Linkedin logo' width={40} height={40} />
      </div>
    </div>
  )
}