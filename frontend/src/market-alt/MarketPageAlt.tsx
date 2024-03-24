import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Dot, Pause, Play, Trash2 } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import { DataTable } from "./DataTable";
import { columns } from "./columns";
import fakeSeeds from "./fakeSeeds";

const MarketPageAlt = () => {
  return (
    <div id="market-page-alt" className="relative grow bg-background">
      <Overview />
      <Details />
    </div>
  );
};

export default MarketPageAlt;

const Overview = () => {
  return (
    <div className="m-4">
      <OverviewHeader />
      <JobList />
      <JobControls />
    </div>
  );
};
const OverviewHeader = () => {
  return (
    <div className="flex justify-between">
      <div className="flex">
        <Input placeholder="Filter..." className="w-80" />

        <Button className="ml-2">All</Button>
        <Button className="ml-2">Completed</Button>
        <Button className="ml-2">Downloading</Button>
        <Button className="ml-2">Paused</Button>
      </div>
      <Button>Add Job</Button>
    </div>
  );
};
const JobList = () => {
  const jobInfoList = [
    {
      id: "1",
      fileName: "WhoLetTheDogsOut.mp4",
      fileSize: "185 MiB",
      status: "downloading",
      remainingTime: "2 min",
      timeQueued: "2024-03-23 16:29",
    },
    {
      id: "2",
      fileName: "WhoLetTheDogsOut.mp4",
      fileSize: "185 MiB",
      status: "paused",
      remainingTime: "2 min",
      timeQueued: "2024-03-23 16:29",
    },
    {
      id: "3",
      fileName: "WhoLetTheDogsOut.mp4",
      fileSize: "185 MiB",
      status: "error",
      remainingTime: "2 min",
      timeQueued: "2024-03-23 16:29",
    },
    {
      id: "4",
      fileName: "WhoLetTheDogsOut.mp4",
      fileSize: "185 MiB",
      status: "downloading",
      remainingTime: "2 min",
      timeQueued: "2024-03-23 16:29",
    },
    {
      id: "5",
      fileName: "WhoLetTheDogsOut.mp4",
      fileSize: "185 MiB",
      status: "downloading",
      remainingTime: "2 min",
      timeQueued: "2024-03-23 16:29",
    },
  ];
  return (
    <ul>
      {jobInfoList.map((e) => (
        <Job key={e.id} {...e} />
      ))}
    </ul>
  );
};
const Job = (props: {
  id: string;
  fileName: string;
  fileSize: string;
  status: string;
  remainingTime: string;
  timeQueued: string;
}) => {
  return (
    <li className="flex items-center justify-between p-1 m-2 rounded bg-card">
      <div className="flex items-center">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
                className={`lucide lucide-dot ${statusToColorCSS(
                  props.status
                )}`}
              >
                <circle cx="12" cy="12" r="2" />
              </svg>
            </TooltipTrigger>
            <TooltipContent>
              <div>{props.status}</div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <div>{props.fileName}</div>
      </div>
      <div>{props.fileSize}</div>
      <div>{props.remainingTime}</div>
      <div>{props.timeQueued}</div>
    </li>
  );
};
const JobControls = () => {
  return (
    <div className="flex items-center p-4">
      <div className="mr-4">3 jobs selected</div>
      <Play className="size-8" />
      <Pause className="size-8" />
      <Trash2 className="size-8" />
    </div>
  );
};

const Details = () => {
  return (
    <div className="grid grid-cols-[minmax(0,_1fr)_minmax(0,_2fr)]">
      <GeneralInfoPanel />
      <PeerPanel />
    </div>
  );
};
const GeneralInfoPanel = () => {
  const speedGraph = [
    { time: 0, speed: 0 },
    { time: 1, speed: 8 },
    { time: 2, speed: 12 },
    { time: 3, speed: 14 },
    { time: 4, speed: 14 },
    { time: 5, speed: 14 },
  ];
  return (
    <div className="bg-card rounded p-4">
      <div>File Hash</div>
      <div>47 / 185 MiB</div>
      <div>Running Cost: 10 USD</div>
      <div>Projected Cost: 20 USD</div>
      <LineChart width={300} height={150} data={speedGraph} className="">
        <Line type="monotone" dataKey="speed" stroke="var(--primary)" />
        <CartesianGrid stroke="#ccc" />
        <XAxis />
        <YAxis />
      </LineChart>
    </div>
  );
};
const PeerPanel = () => {
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
  ];
  return (
    <>
      <div className="flex justify-between">
        <div>Status</div>
        <div>IP Address</div>
        <div>Price</div>
        <div>Total Storage</div>
        <div className="flex invisible">
          <Play /> <Pause />
          <Trash2 />
        </div>
      </div>
      <ul>
        {selectedPeersInfoList.map((e) => (
          <SelectedPeer key={e.id} {...e} />
        ))}
      </ul>
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
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="bg-card">
          <div className="w-full flex justify-between">
            <div>{props.status}</div>
            <div>{props.ipAddress}</div>
            <div>{props.price}</div>
            <div>{props.amountDownloaded}</div>
            <div className="flex">
              <Play /> <Pause />
              <Trash2 />
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <LineChart width={300} height={100} data={props.speedGraph}>
            <Line type="monotone" dataKey="speed" stroke="var(--primary)" />
            <CartesianGrid stroke="#ccc" />
            <XAxis />
            <YAxis />
          </LineChart>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
const MorePeers = () => {
  return <DataTable columns={columns} data={fakeSeeds} />;
};

function statusToColorCSS(status: string): string {
  switch (status) {
    case "downloading":
      return "stroke-green-500";
    case "paused":
      return "stroke-yellow-500";
    case "error":
      return "stroke-red-500";
    default:
      return "";
  }
}
