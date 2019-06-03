import React from "react"
import styled from "styled-components"
import Markup from "./markup/Markup"
import { Field } from "./Message"

interface Props {
  field: Field
}

const Container = styled.div<{ inline?: boolean }>`
  flex: ${(props) => (props.inline ? 1 : 0)};
  margin: 4px 0 0;
  min-width: ${(props) => (props.inline ? "150px" : "100%")};
  flex-basis: auto;
`

const FieldName = styled.div`
  margin: 0 0 4px;

  color: ${(props) => props.theme.embed.field.name};
  font-size: 14px;
  font-weight: 500;
`

const FieldValue = styled.div`
  color: ${(props) => props.theme.embed.field.value};
  font-size: 14px;
`

export default function EmbedField(props: Props) {
  const { name = "", value = "", inline } = props.field

  return (
    <Container inline={inline}>
      <FieldName>
        <Markup content={name} inline={true} />
      </FieldName>
      <FieldValue>
        <Markup content={value} />
      </FieldValue>
    </Container>
  )
}