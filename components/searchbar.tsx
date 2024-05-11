import { SearchIcon, Menu } from 'lucide-react';
import React from 'react'

const SearchBar =() => {
    return (
        <div className='flex float-right justify-end items-end flex-cols gap-4 md:hidden'>
            <SearchIcon className='text-secondary'/>
            <Menu className='text-secondary'/>
        </div>
    )
}
export default SearchBar;