import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BoxIcon,
  ChevronDown,
  HeartIcon,
  Pause,
  Play,
  StarIcon,
  Trash2,
} from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { DataTable } from "./DataTable";
import { columns } from "./columns";
import fakeSeeds from "./fakeSeeds";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { statusToColorCSS } from "./Job";
import { JobStatus } from "./MarketPage";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

export const PeerPanel = () => {
  return (
    <div>
      <Tabs defaultValue="selected_peers">
        <TabsList>
          <TabsTrigger value="selected_peers">Selected Peers</TabsTrigger>
          <TabsTrigger value="more_peers">More Peers</TabsTrigger>
        </TabsList>
        <TabsContent value="selected_peers">
          <SelectedPeers />
        </TabsContent>
        <TabsContent value="more_peers">
          <MorePeers />
        </TabsContent>
      </Tabs>
    </div>
  );
};
const SelectedPeers = () => {
  const selectedPeersInfoList = [
    {
      id: "1",
      ipAddress: "127.0.0.1",
      region: "North America",
      price: "0.1 USD/MiB",
      amountDownloaded: "2 MiB",
      status: "active",
      speed: "10 KiB/s",
      speedGraph: [
        { time: 0, speed: 0 },
        { time: 1, speed: 4 },
        { time: 2, speed: 6 },
        { time: 3, speed: 7 },
        { time: 4, speed: 7 },
        { time: 5, speed: 7 },
      ],
    },
    {
      id: "2",
      ipAddress: "127.0.0.1",
      region: "North America",
      price: "0.1 USD/MiB",
      amountDownloaded: "2 MiB",
      status: "active",
      speed: "10 KiB/s",
      speedGraph: [
        { time: 0, speed: 0 },
        { time: 1, speed: 4 },
        { time: 2, speed: 6 },
        { time: 3, speed: 7 },
        { time: 4, speed: 7 },
        { time: 5, speed: 7 },
      ],
    },
    {
      id: "3",
      ipAddress: "127.0.0.1",
      region: "North America",
      price: "0.1 USD/MiB",
      amountDownloaded: "2 MiB",
      status: "active",
      speed: "10 KiB/s",
      speedGraph: [
        { time: 0, speed: 0 },
        { time: 1, speed: 4 },
        { time: 2, speed: 6 },
        { time: 3, speed: 7 },
        { time: 4, speed: 7 },
        { time: 5, speed: 7 },
      ],
    },
    {
      id: "4",
      ipAddress: "127.0.0.1",
      region: "North America",
      price: "0.1 USD/MiB",
      amountDownloaded: "2 MiB",
      status: "active",
      speed: "10 KiB/s",
      speedGraph: [
        { time: 0, speed: 0 },
        { time: 1, speed: 4 },
        { time: 2, speed: 6 },
        { time: 3, speed: 7 },
        { time: 4, speed: 7 },
        { time: 5, speed: 7 },
      ],
    },
    {
      id: "5",
      ipAddress: "127.0.0.1",
      region: "North America",
      price: "0.1 USD/MiB",
      amountDownloaded: "2 MiB",
      status: "active",
      speed: "10 KiB/s",
      speedGraph: [
        { time: 0, speed: 0 },
        { time: 1, speed: 4 },
        { time: 2, speed: 6 },
        { time: 3, speed: 7 },
        { time: 4, speed: 7 },
        { time: 5, speed: 7 },
      ],
    },
    {
      id: "6",
      ipAddress: "127.0.0.1",
      region: "North America",
      price: "0.1 USD/MiB",
      amountDownloaded: "2 MiB",
      status: "active",
      speed: "10 KiB/s",
      speedGraph: [
        { time: 0, speed: 0 },
        { time: 1, speed: 4 },
        { time: 2, speed: 6 },
        { time: 3, speed: 7 },
        { time: 4, speed: 7 },
        { time: 5, speed: 7 },
      ],
    },
    {
      id: "7",
      ipAddress: "127.0.0.1",
      region: "North America",
      price: "0.1 USD/MiB",
      amountDownloaded: "2 MiB",
      status: "active",
      speed: "10 KiB/s",
      speedGraph: [
        { time: 0, speed: 0 },
        { time: 1, speed: 4 },
        { time: 2, speed: 6 },
        { time: 3, speed: 7 },
        { time: 4, speed: 7 },
        { time: 5, speed: 7 },
      ],
    },
    {
      id: "8",
      ipAddress: "127.0.0.1",
      region: "North America",
      price: "0.1 USD/MiB",
      amountDownloaded: "2 MiB",
      status: "active",
      speed: "10 KiB/s",
      speedGraph: [
        { time: 0, speed: 0 },
        { time: 1, speed: 4 },
        { time: 2, speed: 6 },
        { time: 3, speed: 7 },
        { time: 4, speed: 7 },
        { time: 5, speed: 7 },
      ],
    },
  ];
  return (
    <>
      <ScrollArea className="h-72">
        <ul className="w-[calc(100%-1rem)]">
          {selectedPeersInfoList.map((e) => (
            <SelectedPeer key={e.id} {...e} />
          ))}
        </ul>
      </ScrollArea>
    </>
  );
};
const SelectedPeer = (props: {
  id: string;
  ipAddress: string;
  region: string;
  price: string;
  amountDownloaded: string;
  status: string;
  speed: string;
  speedGraph: { time: number; speed: number }[];
}) => {
  const [showGraph, setShowGraph] = useState(false);
  return (
    <div className="rounded border mb-2">
      <div className="rounded-t flex justify-between pl-2 pr-2 bg-gray-100 text-gray-800">
        <div>{props.ipAddress}</div>
        <div>{props.region}</div>
        <StarIcon className="p-1" />
      </div>
      <div className="flex justify-between p-2">
        <div className="flex">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={
                    statusToColorCSS(props.status as JobStatus) +
                    " overflow-visible"
                  }
                >
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </TooltipTrigger>
              <TooltipContent>
                <div>{props.status}</div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <div>{props.speed}</div>
        </div>
        <div>{props.amountDownloaded}</div>
        <div className="flex">
          <div>{props.price}</div>
          <ChevronDown onClick={(e) => setShowGraph(!showGraph)} />
        </div>
      </div>
      <div
        className={`flex items-center transition-all ${
          showGraph ? "h-24" : "h-0"
        } overflow-hidden`}
      >
        <LineChart width={300} height={100} data={props.speedGraph}>
          <Line type="monotone" dataKey="speed" stroke="var(--primary)" />
          <CartesianGrid stroke="#ccc" />
          <XAxis />
          <YAxis />
        </LineChart>
        <div className="flex flex-grow justify-center">
          <Play className="hover:text-accent" />
          <Pause className="hover:text-accent" />
          <Trash2 className="hover:text-destructive" />
          <BoxIcon className="invisible" />
          <HeartIcon />
        </div>
      </div>
    </div>
    // <Accordion type="single" collapsible>
    //   <AccordionItem value="item-1">
    //     <AccordionTrigger className="bg-card">
    //       <div className="w-full flex justify-between">
    //         <div>{props.status}</div>
    //         <div>{props.ipAddress}</div>
    //         <div>{props.price}</div>
    //         <div>{props.amountDownloaded}</div>
    //         <div className="flex">
    //           <Play className="hover:text-accent" />
    //           <Pause className="hover:text-accent" />
    //           <Trash2 className="hover:text-destructive" />
    //         </div>
    //       </div>
    //     </AccordionTrigger>
    //     <AccordionContent>
    //       <LineChart width={300} height={100} data={props.speedGraph}>
    //         <Line type="monotone" dataKey="speed" stroke="var(--primary)" />
    //         <CartesianGrid stroke="#ccc" />
    //         <XAxis />
    //         <YAxis />
    //       </LineChart>
    //     </AccordionContent>
    //   </AccordionItem>
    // </Accordion>
  );
};
const MorePeers = () => {
  return <DataTable columns={columns} data={fakeSeeds} />;
};
