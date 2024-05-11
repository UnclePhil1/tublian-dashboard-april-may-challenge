import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectCard() {
  return (
    <Select>
      <SelectTrigger className="!w-auto">
        <SelectValue placeholder="Sort By high streetcred" className='!text-secondary' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel className='text-secondary'>Streetcred</SelectLabel>
          <SelectItem value="apple">Score</SelectItem>
          <SelectItem value="banana">Percentile</SelectItem>
          <SelectItem value="blueberry">Pair Requests</SelectItem>
          <SelectItem value="grapes">Contributors </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
