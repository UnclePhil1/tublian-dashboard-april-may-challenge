import { cn } from '@/lib/utils';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'
import { Button } from './ui/button';
import { Filter } from 'lucide-react';

const ButtonSelect = () => {

    // DECLEARING CONSTANT VARIABLES FOR BOTH USEPATHNAME & USERROUTER
    const pathname = usePathname();
    const router = useRouter();

    // SETTING UP THE ROUTE ARRAY FOR "SKILL LABELS". e.g`FRONTEND, BACKEND, ETC`
    const routes = [
        {
            href: "/frontend",
            label: "Frontend Developer",
            pro: false,
        },
        {
            href: "/backend",
            label: "Backend Developer",
            pro: true,
        },
        {
            href: "/software",
            label: "Software Developer",
            pro: true,
        },
    ];

    // ONNAVIGATE: A FUNTION TO CHECK IF THE ROUTE.HREF IS TRUE, THEN NAVIGATE TO THE SELECTED ROUTE
    // THE FUNCTION HELPS IN LABEL ROUTE NAVIGATIONS
    const onNavigate = (url: string, pro: boolean) => {
        // TODO: Check if pro

        return router.push(url);
    };

    return (
        <div className="flex justify-between items-center gap-4 w-full mt-4 overflow-x-auto scrollbar-hide">
            <div className='space-x-2 flex flex-nowrap justify-center items-center'>
                {/* DISCOVER BUTTON AND IT'S CONTAINER */}
                <div className='gradient_bg p-[1px] rounded-lg'>
                    <Button
                        className={cn(
                            "text-center text-white text-sm group bg-base cursor-pointer hover:text-secondary text-nowrap hover:bg-baseTwo/50 rounded-lg transition font-medium discover_border",
                        )}
                    >
                        Discover
                    </Button>
                </div>
                {/* SKILL BUTTON ROUTES */}
                <div className="space-x-2 flex justify-between items-center">
                    {routes.map((route) => (
                        <Button
                            onClick={() => onNavigate(route.href, route.pro)}
                            className={cn(
                                "text-center text-white text-sm group p-3 w-full bg-baseOne border border-baseTwo cursor-pointer hover:text-secondary text-nowrap hover:bg-baseTwo/50 rounded-lg transition font-medium",
                                pathname == route.href && "text-secondary"
                            )}
                            key={route.href}
                        >
                            {route.label}
                        </Button>
                    ))}
                </div>
            </div>
            {/* FILTEER BUTTON */}
            <Button className='border border-baseTwo bg-base rounded-lg hover:bg-baseTwo/50 hidden md:flex'>
                <Filter className='text-secondary text-8' />
            </Button>
        </div>
    )
}

export default ButtonSelect