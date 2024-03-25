import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    } from "@/components/ui/select";

import { Globe } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { BellRing, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const notifications = [
  {
    title: "Your file has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new request!",
    description: "1 hour ago",
  },
  {
    title: "Your file has begun transfering!",
    description: "2 hours ago",
  },
]

type CardProps = React.ComponentProps<typeof Card>

const NotificationsCard = ({ className, ...props }: CardProps) => {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <BellRing />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Push Notifications
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
          <Switch />
        </div>
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Check className="mr-2 h-4 w-4" /> Mark all as read
        </Button>
      </CardFooter>
    </Card>
  )
}

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

const PreferencesForm = () => {
  return (
    <div>
      <LanguageSetting />
      <NotificationsCard />
      <ToggleSetting
        label="Dark Mode"
        text="Enable Dark Mode"
      />
    </div>
  );
}

export default PreferencesForm;