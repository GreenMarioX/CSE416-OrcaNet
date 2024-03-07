import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

import { Globe } from "lucide-react";

const SettingsPage = () => {
  return (
    <div id="settings-page" className="p-5 grow">
      <LanguageSetting />
      <ToggleSetting
        label="Notifications"
        text="Enable desktop notifications"
      />
      <SaveFolderSetting />
      <UploadRateSetting />
      <DownloadRateSetting />
      <SeedingLimitSetting />
      <ThemeJSONSetting />
    </div>
  );
};

const LanguageSetting = () => {
  return (
    <div className="flex items-center mb-5">
      <span className="whitespace-pre">Language </span>
      <Globe />
      <div className="ml-5">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="English" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="zh-TW">中文</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

const ToggleSetting = (props: { label: string; text: string }) => {
  return (
    <div className="flex items-center mb-5">
      <span>
        <div>{props.label}</div>
        <div className="text-sm">{props.text}</div>
      </span>
      <Switch className="justify-self-end ml-5" />
    </div>
  );
};

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
