import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';


// \\\\\\\\\\\\\\\\\\ THIS COMPONENT "CARDIMAGE" IS FOR THE - 'DESIGNCODE.IO CARD' LOCATED IN THE SECOND DEVELOPERS BOX \\\\\\\\\\\\\\
const CardImage = () => {
    return (
        <div className="h-full w-full">
            <div className="w-full h-full overflow-hidden flex flex-col justify-between items-start gap-2 relative">
                {/* <Image
                    src={'/svg/frame.svg'}
                    alt={'card Image'}
                    width={300}
                    height={200}
                    className='w-full h-full object-cover rounded-lg'
                /> */}
                <div className='w-full z-10 h-full designcode_bg_image overflow-hidden rounded-lg'>
                    <p className="text-lg text-nowrap absolute bottom-4 left-6 text-transparent">designcode.io</p>
                </div>
            </div>
        </div>
    )
}

// \\\\\\\\\\\\\\\\\\ THIS COMPONENT IS MEANT FOR THE FIRST CARD CONTAINING THE DETAILS OF THE FIRST DEVELOPER \\\\\\\\\\\\\\\\\\\\\\\\\\\\
const CardOne = () => {
    const cardArr = [
        {
            label: 'other',
            title: 'Portfolio',
            description: '',
            date: 'Tue, Dec 13, 2022'
        },
        {
            label: 'other',
            title: 'My_Resume',
            description: 'I am updating my resume, as completing my projects.',
            date: 'Tue, Dec 13, 2022'
        },
    ];

    return (
        <div className="flex flex-row justify-start items-start gap-2 w-full mt-4">
            {
                cardArr.map((card: any, index: number) => (
                    <div className="p-4 rounded-lg border border-baseTwo bg-baseTwo/50 flex flex-col justify-between items-start gap-2 h-[160px] min-w-[300px] max-w-[300px]" key={index}>
                        <div className="flex flex-col justify-start items-start">

                            <label htmlFor="" className='px-2 rounded-full border border-white bg-base text-white text-nowrap text-sm'>{card.label}</label>
                            <h2 className="text-white font-semibold text-md pt-2">{card.title}</h2>
                            <p className="text-secondary/40 text-sm space-x-2">
                                {card.description}
                            </p>
                        </div>
                        <p className="text-secondary/40 text-sm text-nowrap space-x-2">
                            last Updated: <span className='text-white'>{card.date}</span>
                        </p>
                    </div>
                ))
            }
        </div>
    );
};

// \\\\\\\\\\\\\\\\\\ THIS COMPONENT IS MEANT FOR THE SECOND CARD CONTAINING THE DETAILS OF THE FIRST DEVELOPER \\\\\\\\\\\\\\\\\\\\\\\\\\\\
const CardTwo = () => {

    const cardArrTwo = [
        {
            label: 'other',
            title: 'My_Resume',
            description: 'I am updating my resume, as completing my projects.',
            date: 'Tue, Dec 13, 2022',
            component: ''
        },
        {
            component: <CardImage />,
        },
        {
            label: 'other',
            title: 'Portfolio',
            description: '',
            date: 'Tue, Dec 13, 2022',
            component: ''

        },
    ];

    return (
        <div className="flex flex-row justify-start items-start gap-2 w-full mt-4">
            {
                cardArrTwo.map((cardTwo: any, index: number) => (
                    <div className="p-4 rounded-lg border border-baseTwo bg-baseTwo/50 flex flex-col justify-between items-start gap-2 h-[160px] min-w-[300px] max-w-[300px] relative" key={index}>
                        <div className="flex flex-col justify-start items-start">

                            <label htmlFor="" className='px-2 rounded-full border border-white bg-base text-white text-nowrap text-sm'>{cardTwo.label}</label>
                            <h2 className="text-white font-semibold text-md pt-2">{cardTwo.title}</h2>
                            <p className="text-secondary/40 text-sm space-x-2">
                                {cardTwo.description}
                            </p>
                        </div>
                        <p className="text-secondary/40 text-sm text-nowrap space-x-2">
                            last Updated: <span className='text-white'>{cardTwo.date}</span>
                        </p>
                        <div className="absolute z-10 w-full h-full top-0 left-0">
                            {cardTwo.component}
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

// \\\\\\\\\\\\\\\\\\ THIS COMPONENT GETS ALL THE ARRAY FROM CARDONE AND CARDTWO. IT'S THE RENDER COMPONENT FOR BOTH CARDONE & CARDTWO COMPONENTS \\\\\\\\\\\\\\\\\\\\\\\\\\\\
const UserCard = () => {
    const userArray = [
        {
            img: '/svg/frameThree.png',
            name: 'John Doe',
            location: 'New jersey, USA',
            amount: '$250,000(USD)',
            position: 'Frontend developer',
            component: <CardOne />,
        },
        {
            img: '/svg/frametwo.png',
            name: 'John Doe',
            location: 'Lagos, Nigeria',
            amount: '$1000 - $3000(USD)',
            position: 'Frontend developer',
            component: <CardTwo />,
        },
    ];

    return (
        <div className='flex flex-col w-full mt-4'>
            <div className="flex flex-col justify-start items-start gap-4 w-full overflow-hidden">
                {
                    userArray.map((user: any, index: number) => (
                        <div className="flex flex-col justify-start items-start gap-4 w-full border border-baseTwo rounded-lg bg-baseOne p-4" key={index}>
                            <div className="flex justify-between items-start w-full">
                                <div className="flex flex-row justify-start items-start md:flex-nowrap">
                                    <Image
                                        src={user.img}
                                        alt={user.name}
                                        width={700}
                                        height={300}
                                        className="w-10 h-10"
                                    />
                                    <div className="flex flex-col justify-start items-start gap-y-2 pl-2">
                                        <h2 className="text-white font-semibold text-md">{user.name}</h2>
                                        <p className="text-secondary/40 text-sm md:text-nowrap space-x-2">
                                            <span>{user.location}</span>
                                            <span>{user.amount}</span>
                                        </p>
                                        <label htmlFor="" className='p-2 rounded-full border border-white bg-base text-white text-nowrap text-sm'>{user.position}</label>
                                    </div>
                                </div>
                                <Button className='rounded-full bg-button hover:bg-button/80 text-primary text-[12px]'>Hire Me</Button>
                            </div>
                            <div className="w-full overflow-x-auto scrollbar-hide">
                                {user.component}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default UserCard;
