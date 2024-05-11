'use client'

import ButtonSelect from "@/components/buttonSelect";
import FreelanceMobileToggle from "@/components/freelanceMobileToggle";
import Navbar from "@/components/navbar";
import SearchInputBar from "@/components/search";
import SearchBar from "@/components/searchbar";
import ToggleBtn from "@/components/toggleBtn";
import UserCard from "@/components/userCard";

export default function Home() {
  return (
    <div className="">
      <div className="">
        <SearchBar />
        <Navbar />
        <main className="md:border md:border-t-0 border-secondary/10 md:px-16 py-4 h-[83vh] scrollbar-hide overflow-y-auto rounded-b-lg">
          <div className="hidden md:flex justify-center items-center gap-4">
            <SearchInputBar />
            <ToggleBtn />
          </div>
          <div className="flex md:hidden">
            <FreelanceMobileToggle />
          </div>
          <ButtonSelect />
          <UserCard />
        </main>
      </div>
    </div>
  );
}
