
import React, { Suspense } from "react";
import Sidebar from "@/components/sidebar"
import Loader from "@/components/loader"

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-auto">
      <div className="">
        <div className="hidden md:flex h-full fixed w-60 z-50 sidebar_layout">
          <Sidebar />
        </div>
        <main className="lg:pl-60 relative overflow-hidden w-full main_layout h-screen">
          <Suspense fallback={<Loader />}>
            <div className="p-4">{children}</div>
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
