import React from 'react';
import { Separator } from "@/components/ui/separator"
import { SidebarNav } from "../settings-alt/components/SidebarNav"
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
const sidebarNavItems = [
  {
    title: "Profile",
    href: "/settings-alt/profile",
  },
  {
    title: "Account",
    href: "/settings-alt/account",
  },
  {
    title: "Appearance",
    href: "/settings-alt/appearance",
  },
  {
    title: "Notifications",
    href: "/settings-alt/notifications",
  },
  {
    title: "Display",
    href: "/settings-alt/display",
  },
]

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsPageAlt() {
  return (
    <>
      <div className="md:hidden">
      <img
          src="/examples/forms-light.png"
          width="1280"
          height="791"
          alt="Forms"
          className="block dark:hidden"
        />
        <img
          src="/examples/forms-dark.png"
          width="1280"
          height="791"
          alt="Forms"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">OrcaNet Settings</h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <Outlet />

          
        </div>
      </div>
    </>
  )
}