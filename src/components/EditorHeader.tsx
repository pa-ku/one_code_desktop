import {
  Play,
  RefreshCcw,
  ArrowLeftRight,
  ListOrdered,
  Boxes,
} from 'lucide-react'

import { useConfig } from '../context/ConfigContext'
import Checkbox from './Checkbox'

interface EditorHeaderProps {
  onExecute: () => void
}

export function EditorHeader({ onExecute }: EditorHeaderProps) {
  const {
    autoRun,
    setAutoRun,
    setInvertLayout,
    setLineNum,
    lineNum,
    invertLayout,
    formatOnSave,
    setFormatOnSave,
  } = useConfig()

  return (
    <div
      className={`fixed pt-5  left-0 top-0 w-14  duration-500 z-50 h-screen border-b bg-background-500  border-gray-700 flex items-center justify-start flex-col `}
    >
      <div className=' flex items-center  flex-col gap-4'>
        <button
          onClick={onExecute}
          className='flex group/play relative items-center text-md gap-2 p-1  rounded text-accent'
        >
          <Play size={20} />
          <p
            className={`
           group-hover/play:opacity-100 opacity-0 -bottom-12 pointer-events-none z-10  duration-300 absolute left-0 border-background-100 border w-max bg-black rounded-lg p-2 `}
          >
            Execute Code
          </p>
        </button>

        <p className='text-background-100 text-xs '>Layout</p>

        <Checkbox
          checked={invertLayout}
          onChange={(e) => setInvertLayout(e.target.checked)}
          onHover='Invert Layot'
        >
          <ArrowLeftRight size={20}></ArrowLeftRight>
        </Checkbox>
        <Checkbox
          checked={lineNum}
          onChange={(e) => setLineNum(e.target.checked)}
          onHover='Line Numbers'
        >
          <ListOrdered size={20}></ListOrdered>
        </Checkbox>
        <div className='h-full'></div>
        <p className='text-background-100 text-xs '>Config</p>

        <Checkbox
          checked={formatOnSave}
          onChange={(e) => setFormatOnSave(e.target.checked)}
          onHover='Format on save'
        >
          <Boxes size={20}></Boxes>
        </Checkbox>

        <Checkbox
          checked={autoRun}
          onChange={(e) => setAutoRun(e.target.checked)}
          onHover='Auto run'
        >
          <RefreshCcw size={20} />
        </Checkbox>
      </div>
    </div>
  )
}
