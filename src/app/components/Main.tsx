import { LeftPanel } from "./LeftPanel"

export function Main() {
  return (
    <div className='flex items-center justify-between mt-4'>
      <LeftPanel />
      <div>Main content</div>
      <div>Right panel</div>
    </div>
  )
}