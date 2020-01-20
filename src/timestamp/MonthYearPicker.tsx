import { addMonths, getMonth, getYear, isValid, subMonths } from "date-fns"
import React from "react"
import styled, { css } from "styled-components"
import { chevronLeft, chevronRight } from "../core/icons"

const Container = styled.div`
  margin: 8px 0;

  width: 100%;
  height: 24px;

  display: flex;
  justify-content: center;
  align-items: center;
`

const CycleMonthButton = styled.div<{ disabled?: boolean }>`
  cursor: pointer;

  width: 24px;
  height: 24px;

  color: ${({ theme }) => theme.interactive.normal};

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
      color: ${({ theme }) => theme.interactive.muted};
    `}
`

const MonthYearDisplay = styled.div`
  margin: auto;

  font-size: 16px;
  text-align: center;
`

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

type Props = {
  date: Date
  onChange: (date: Date) => void
}

export default function MonthYearPicker(props: Props) {
  const { date, onChange: handleChange } = props

  return (
    <Container>
      <CycleMonthButton
        disabled={!isValid(date)}
        onClick={() => {
          if (isValid(date)) handleChange(subMonths(date, 1))
        }}
      >
        {chevronLeft}
      </CycleMonthButton>
      <MonthYearDisplay>
        {isValid(date)
          ? `${months[getMonth(date)]} ${getYear(date)}`
          : "Unknown"}
      </MonthYearDisplay>
      <CycleMonthButton
        disabled={!isValid(date)}
        onClick={() => {
          if (isValid(date)) handleChange(addMonths(date, 1))
        }}
      >
        {chevronRight}
      </CycleMonthButton>
    </Container>
  )
}
