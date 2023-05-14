import React, { FC } from 'react'
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im'

interface CheckboxProps {
  isChecked: boolean
  onChange?: (id: number | string) => void
  id: number | string
}

const Checkbox: FC<CheckboxProps> = ({ isChecked, onChange, id }) => {
  return (
    <div>
      {isChecked ? (
        <ImCheckboxChecked
          onClick={() => onChange && onChange(id)}
          className="h-8 w-5 fill-sky"
        />
      ) : (
        <ImCheckboxUnchecked
          onClick={() => onChange && onChange(id)}
          className="h-8 w-5 fill-sky"
        />
      )}
    </div>
  )
}

export default Checkbox
