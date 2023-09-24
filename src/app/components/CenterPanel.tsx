import Image from 'next/image'

export function CenterPanel() {
  return (
    <div className="flex flex-col w-full items-center gap-4">
      <div className="flex  bg-[#E2E7FF] rounded-3xl p-4 w-full">
        <div className="flex flex-col gap-10">
          <div className='flex flex-col'>
            <span className='font-bold text-[18px] p-1'>Discover your dream job with Linkedin</span>
            <span className='text-[12px] p-1'>Don't let your career dreams remain dreams; turn them into reality with our product and discover your dream job today</span>
          </div>
          <div className="flex justify-between items-center">
            <button className='rounded-3xl bg-[#F7F5FF] text-[#988CE1] px-2 py-4 font-bold'>Discover</button>
            <div className="border-1 flex gap-1">
              <div className="rounded-full bg-[#604DCF] w-3 h-3"></div>
              <div className="rounded-full w-3 h-3 bg-[#E2DCFF]"></div>
              <div className="rounded-full w-3 h-3 bg-[#E2DCFF]"></div>
            </div>
          </div>
        </div>
        <Image className='cursor-pointer rounded-full' src='/Clapping.png' alt='clapping people image' width={209} height={164} />
      </div>

      <div className='flex flex-col bg-white rounded-3xl p-5 w-full gap-4'>
        <div className='flex gap-4'>
          <Image className='cursor-pointer rounded-full' src='/Treiber.jpg' alt='user avatar' width={54} height={54} />
          <input className='rounded-3xl bg-[#F5F5F5] w-full px-4 text-black font-bold' placeholder='Start a post' />
        </div>
        <div className='flex justify-end gap-6'>
          <div className='flex gap-2 rounded-3xl border-2 items-center p-2 font-semibold'>
            <Image className='cursor-pointer rounded-full' src='/article.png' alt='article image' width={20} height={20} />
            <span>Write article</span>
          </div>
          <div className='flex gap-2 rounded-3xl border-2 items-center p-2 font-semibold'>
            <Image className='cursor-pointer rounded-full' src='/play-circle.png' alt='play button image' width={20} height={20} />
            <span>Video</span>
          </div>
          <div className='flex gap-2 rounded-3xl border-2 items-center p-2 font-semibold'>
            <Image className='cursor-pointer rounded-full' src='/link.png' alt='link image' width={20} height={20} />
            <span>Link</span>
          </div>
          <div className='flex gap-2 rounded-3xl border-2 items-center p-2 font-semibold'>
            <Image className='cursor-pointer rounded-full' src='/image.png' alt='picture image' width={20} height={20} />
            <span>Photo</span>
          </div>
          <button className='bg-[#5E47D2] text-white rounded-lg px-5 py-1.5'>Post</button>
        </div>
      </div>

      <div className='flex flex-col bg-white rounded-3xl p-5 w-full gap-4'>
        <div className='flex gap-4 items-center'>
          <Image className='cursor-pointer rounded-full' src='/Ellipse 88.png' alt='picture image' width={48} height={48} />
          <div className='flex flex-col'>
            <span className='font-semibold text-[16px]'>Emerson Carder</span>
            <span className='text-[12px] text-[#757575]'>Product Designer, Figma</span>
            <div className='flex gap-1 items-center'>
              <Image src='/Timer.png' alt='Clock icon' width={10} height={9} />
              <span className='text-[12px]'>30 min</span>
            </div>
          </div>
        </div>
        <p>From day 1, Figma was purpose-built for designers. As product development has become increasingly collaborative, 30% of Figma’s active users are developers—it’s time that we focused on developers and their unique needs. #Figma #Design</p>

      </div>

    </div>
  )
}