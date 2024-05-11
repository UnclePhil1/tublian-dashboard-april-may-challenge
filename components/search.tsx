'use client'

import { Search } from 'lucide-react'
import { Input } from './ui/input';

const SearchInputBar = () => {
  // Declearing some usefull hooks

  return (
    <div className='relative w-full hidden md:block'>
      <Search className='absolute h-4 w-4 top-3 left-4 text-secondary hover:text-white cursor-pointer' />
      <Input
        placeholder='Try Searching “full time backend developer”'
        className='pl-10 bg-baseOne border border-baseTwo text-secondary/50'
      />
    </div>
  )
}

export default SearchInputBar;