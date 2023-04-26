import React, { FC } from 'react'
import useTypeAheadInput from './useTypeAheadInput'
import Input from '../Input'

interface TypeAheadInputProps {
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  errorMessage?: string | undefined | false
  name: string
  results?: string[]
  onSelect?: (value: string) => void
  onBlurHandler: (e: React.FocusEvent<HTMLInputElement>) => void
  placeHolder: string
}

const TypeAheadInput: FC<TypeAheadInputProps> = ({
  value,
  onChange,
  results,
  onSelect,
  name,
  onBlurHandler,
  errorMessage,
  placeHolder,
}) => {
  const { isDownOpen, resultsRef, setIsDownOpen, inputRef } =
    useTypeAheadInput()

  return (
    <div className="relative h-full w-full">
      <div className="h-10" ref={inputRef}>
        <Input
          onFocus={() => setIsDownOpen(true)}
          placeholder={placeHolder}
          type="text"
          value={value}
          name={name}
          onChange={onChange}
          onBlurHandler={onBlurHandler}
          errorMessage={errorMessage}
        />
      </div>

      {isDownOpen && value && results && results?.length > 0 && (
        <div
          className="absolute top-10 z-30 h-fit w-full rounded-md border border-t-0 border-border_gray bg-white"
          ref={resultsRef}
        >
          {results?.map((item) => (
            <div
              onClick={() => {
                if (onSelect) onSelect(item)
                setIsDownOpen(false)
              }}
              key={item}
              className="flex h-11 cursor-pointer items-center px-3 hover:bg-border_gray"
            >
              <p className="overflow-hidden whitespace-nowrap">{item}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default TypeAheadInput
