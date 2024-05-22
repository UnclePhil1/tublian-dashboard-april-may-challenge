// MOBILE RESPONSIVE BUTTON COMPONENT FROM
// THIS COMPONENT CONTAINS CODE FOR THE MOBILE RESPONSIVE VIEW FO THE FREELANCE TOGGLE
// THIS COMPONENT WILL SHOW ON A SCREEN OR 768PX AND BELOW, THEN HIDE FROM 769PX > ...

import React from 'react'
import ToggleBtn from './toggleBtn'
import { Filter } from 'lucide-react'
import { Button } from './ui/button'

const FreelanceMobileToggle = () => {
    return (
        <div className='flex justify-between items-center gap-4 w-full'>
            <div className="flex flex-col justify-start items-start p-0">
                <ToggleBtn />
            </div>
            <Button className='border border-baseTwo bg-base rounded-lg hover:bg-baseTwo/50 flex'>
                <Filter className='text-secondary text-10' />
            </Button>
        </div>
    )
}

export default FreelanceMobileToggle;