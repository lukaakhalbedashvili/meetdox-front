import { FC } from 'react'
import { IoIosClose } from 'react-icons/io'

interface SkillItemProps {
  text: string
  onClose: (id: string) => void
}

const SkillItem: FC<SkillItemProps> = ({ onClose, text }) => {
  return (
    <div className="flex h-10 w-fit cursor-pointer items-center whitespace-nowrap rounded-xl bg-sky pl-2">
      <p className="mr-1 text-white">{text}</p>

      <IoIosClose
        className="h-7 w-7 cursor-pointer fill-white"
        onClick={() => onClose(text)}
      />
    </div>
  )
}

export default SkillItem
