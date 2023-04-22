import React, { ChangeEvent, FC } from 'react'
import Input from '../Input'

interface TypeAheadInputProps {
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  errorMessage?: string | undefined | false
  name: string
  results?: string[]
}

const TypeAheadInput: FC<TypeAheadInputProps> = ({
  value,
  onChange,
  results,
}) => {
  return (
    <div className="h-full w-full">
      <Input
        placeholder="University"
        type="text"
        value={value}
        name=""
        onChange={onChange}
      />

      <div className="h-[500px] w-full">
        {results?.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </div>
  )
}

export default TypeAheadInput
