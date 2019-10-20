import React, { ChangeEvent } from "react"
import {
  Container,
  InputLabel,
  InputNote,
  MultilineTextInput,
  TextInput,
} from "./styles"

type Event = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

type Props = {
  id: string
  value?: string
  onChange: (value: string) => void
  label: string
  type?: string
  multiline?: boolean
  placeholder?: string
  maxLength?: number
}

export default function InputField(props: Props) {
  const {
    id,
    onChange: handleChange,
    label,
    type,
    multiline,
    placeholder,
    maxLength,
  } = props
  const value = props.value || ""

  const Input = multiline ? MultilineTextInput : TextInput

  const state =
    !maxLength || value.length / maxLength < 0.9
      ? "normal"
      : value.length / maxLength > 1
      ? "error"
      : "warning"

  return (
    <Container>
      <InputLabel htmlFor={id}>
        {label}
        <Input
          id={id}
          value={value}
          onChange={(event: Event) => handleChange(event.target.value)}
          type={type}
          placeholder={placeholder}
        />
      </InputLabel>
      {maxLength && (
        <InputNote state={state}>
          {value.length} / {maxLength}
        </InputNote>
      )}
    </Container>
  )
}
