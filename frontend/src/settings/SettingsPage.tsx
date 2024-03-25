import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

"use client"

import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import ProfileForm from "./ProfileForm";
import PreferencesForm from "./PreferencesForm";
const SettingsPage = () => {
  return (
    <div id="settings-page" className="p-5 grow">
      <DropMenus />
      
    </div>
  );
};

const DropMenus = () => {
  return (
      <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
              <AccordionTrigger>Account Settings</AccordionTrigger>
              <AccordionContent>
                <ProfileForm />
          </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
              <AccordionTrigger>Preferences</AccordionTrigger>
              <AccordionContent>
                <PreferencesForm />
              </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
              <AccordionTrigger>Transfer Configurations</AccordionTrigger>
              <AccordionContent>
                <SaveFolderSetting />
                <UploadRateSetting />
                <DownloadRateSetting />
                <SeedingLimitSetting />
                <ThemeJSONSetting />
              </AccordionContent>
          </AccordionItem>
      </Accordion>


  )
}

const SaveFolderSetting = () => {
  return (
    <div className="flex items-center mb-5">
      <span>Default save folder</span>
      <Input type="text" className="ml-5 w-96" placeholder="\store\" />
    </div>
  );
};

const UploadRateSetting = () => {
  return (
    <div className="flex items-center mb-5">
      <span>Upload Rate Limit</span>
      <Input type="text" className="ml-5 w-24 text-end" placeholder="10" />{" "}
      <span className="ml-2">KiB/s</span>
    </div>
  );
};

const DownloadRateSetting = () => {
  return (
    <div className="flex items-center mb-5">
      <span>Download Rate Limit</span>
      <Input type="text" className="ml-5 w-24 text-end" placeholder="10" />{" "}
      <span className="ml-2">KiB/s</span>
    </div>
  );
};

const SeedingLimitSetting = () => {
  return (
    <div className="flex items-center mb-5">
      <span>Seeding Ratio Limit</span>
      <Input type="text" className="ml-5 w-24 text-end" placeholder="1" />{" "}
    </div>
  );
};
const ThemeJSONSetting = () => {
  return (
    <div className="mb-5">
      <div className="mb-2">Paste JSON Theme Configuration</div>
      <Textarea className="w-[32rem]" />
    </div>
  );
};

export default SettingsPage;

/*
Settings:
  Language
  Notifications on off
  Dark Mode/Light Mode
  Default Save Path
  Upload rate limit
  Download rate limit
  Seeding
	limit when ratio reaches
  Theme Json
*/
