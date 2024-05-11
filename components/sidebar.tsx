"use client";

import { cn } from "@/lib/utils";
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import { Logout, MonetizationOnOutlined, Settings } from "@mui/icons-material";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const routes = [
    {
      icon: DonutSmallIcon,
      href: "/",
      label: "Dashboard",
      pro: false,
      toolTip: 'Dashboard'
    },
    {
      icon: MonetizationOnOutlined,
      href: "/monetization",
      label: "Monetization",
      pro: true,
      toolTip: 'Monetization'
    },
    {
      icon: NotificationsNoneIcon,
      href: "/notification",
      label: "Notification",
      pro: true,
      toolTip: 'Notification'
    },
  ];

  const footerRoutes = [
    {
      icon: Settings,
      href: "/settings",
      label: "Settings",
      pro: false,
      toolTip: 'Settings'
    },
    {
      icon: Logout,
      href: "/logout",
      label: "Logout",
      pro: true,
      toolTip: 'Logout'
    },
  ];

  const onNavigate = (url: string, pro: boolean) => {
    // TODO: Check if pro

    return router.push(url);
  };

  return (
    <div className="space-y-4 flex flex-col h-full text-primary w-full">
      <Image
        src={'/svg/frametwo.png'}
        alt={'Profile Image'}
        width={700}
        height={300}
        className="w-8 h-8 mt-6 ml-[80%] profile_image"
      />
      <div className="p-3">
        <div className="space-y-2">
          {routes.map((route) => (
            <div
              onClick={() => onNavigate(route.href, route.pro)}
              className={cn(
                "text-secondary/50 text-sm group p-3 w-full cursor-pointer hover:text-secondary hover:bg-baseTwo/50 rounded-lg transition font-medium",
                pathname == route.href && "bg-baseOne text-secondary"
              )}
              key={route.href}
            >
              <div className="flex flex-row gap-y-2 justify-start items-center flex-1 w-full gap-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <route.icon className="h-5 w-5" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{route.toolTip}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <span className="sidebar_text">
                  {route.label}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-2 mt-[100%] footer_route">
          {footerRoutes.map((footerRoute) => (
            <div
              onClick={() => onNavigate(footerRoute.href, footerRoute.pro)}
              className={cn(
                "text-secondary/50 text-sm group p-3 w-full cursor-pointer hover:text-secondary hover:bg-baseTwo/50 rounded-lg transition font-medium",
                pathname == footerRoute.href && "bg-baseOne text-secondary"
              )}
              key={footerRoute.href}
            >
              <div className="flex flex-row gap-y-2 justify-start items-center flex-1 w-full gap-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <footerRoute.icon className="h-5 w-5" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{footerRoute.toolTip}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <span className="sidebar_text">
                  {footerRoute.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
