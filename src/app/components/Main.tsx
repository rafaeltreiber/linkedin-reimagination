import { CenterPanel } from "./CenterPanel"
import { LeftPanel } from "./LeftPanel"
import { RightPanel } from "./RightPanel"

export function Main() {
  return (
    <div className='flex justify-between mt-4 gap-4'>
      <LeftPanel />
      <CenterPanel />
      <RightPanel />
    </div>
  )
}