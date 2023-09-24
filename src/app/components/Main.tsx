import { LeftPanel } from "./LeftPanel"
import { RightPanel } from "./RightPanel"

export function Main() {
  return (
    <div className='flex justify-between mt-4'>
      <LeftPanel />
      <div>Main content</div>
      <RightPanel />
    </div>
  )
}