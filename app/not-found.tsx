import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex justify-center items-center w-screen h-screen mx-auto bg-secondary">
            <div className="text-center flex justify-center items-center flex-col gap-4">
                <Image
                    src={'/svg/notfound.svg'}
                    alt="not found image"
                    width={700}
                    height={300}
                    className="w-80 h-80"
                />
                <h2 className="text-3xl text-base font-semibold">Not Found</h2>
                <p className='text-baseOne'>This page is either under construction or would not be avaliable for use!</p>
                <Button className="bg-baseOne hover:bg-baseTwo">
                    <Link href="/">Return Home</Link>
                </Button>
            </div>
        </div>
    );
}
