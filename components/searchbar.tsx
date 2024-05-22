// THIS IS THE SEARCH AND MENU ICON THAT WILL SHOW OR TAKE EFFECT WHEN A USER VISITS THE WEBSITE ON A SMALL-SCREEN.
// IT'S THE COMPONENT THAT SHOWS ON THE TOP RIGHT OF THE WEBSITE OR DASHBOARD

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