import { DataTable } from "./DataTable";
import { columns } from "./columns";
import fakeSeeds from "./fakeSeeds";

import { Progress } from "@/components/ui/progress";

import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { Play, Pause, Trash2 } from "lucide-react";

import { ScrollArea } from "@/components/ui/scroll-area";

const JobPanel = () => {
  return (
    <ScrollArea className="absolute left-52 w-[calc(100%-13rem)] h-screen p-5 overflow-y-auto">
      <MainCard />
      <TotalGraph />
      <ProgressCard />
      <AddedPeers />
      <AddPeers />
    </ScrollArea>
  );
};

const TotalGraph = () => {
  const speedGraph = [
    { time: 0, speed: 0 },
    { time: 1, speed: 8 },
    { time: 2, speed: 12 },
    { time: 3, speed: 14 },
    { time: 4, speed: 14 },
    { time: 5, speed: 14 },
  ];
  const speed = "14 kb/s";
  const price = "0.002 USD/kb";
  return (
    <div className="flex items-center justify-around">
      <LineChart width={400} height={150} data={speedGraph}>
        <Line type="monotone" dataKey="speed" stroke="var(--primary)" />
        <CartesianGrid stroke="#ccc" />
        {/* <XAxis dataKey={"time"} /> */}
        <YAxis />
      </LineChart>
      <div className="p-5 flex flex-col items-center text-lg">
        <div className="text-nowrap">{speed}</div>
        <div className="text-nowrap">{price}</div>
      </div>
    </div>
  );
};

const ProgressCard = () => {
  const info = { downloaded: 72, total: 2502 };
  return (
    <div className="flex p-5 items-center">
      <Progress value={Math.floor((info.downloaded / info.total) * 100)} />
      <div>
        <div className="text-nowrap pl-5 text-lg">{`${info.downloaded} / ${info.total} Chunks`}</div>
      </div>
    </div>
  );
};

const MainCard = () => {
  return (
    <div className="grid grid-cols-3 relative bg-card p-5">
      <div>File Hash</div>
      <div>7sjKLdskl18efMdkw3Hdne2</div>
      <div></div>
      <div>File Name</div>
      <div>EdelGlad.png</div>
      <div></div>
      <div>File Size</div>
      <div>2 mb</div>
      <div></div>
      <div className="absolute right-0 bottom-0 flex items-center mr-5 mb-5">
        <Play className="size-10" /> <Pause className="size-10" />
        <Trash2 className="size-10" />
      </div>
    </div>
  );
};

const AddedPeers = () => {
  const AddedPeersInfo = [
    {
      id: "1",
      speedGraph: [
        { time: 0, speed: 0 },
        { time: 1, speed: 4 },
        { time: 2, speed: 6 },
        { time: 3, speed: 7 },
        { time: 4, speed: 7 },
        { time: 5, speed: 7 },
      ],
      speed: "7 kb/s",
      price: "0.001 USD/kb",
      downloaded: "60 kb/s",
    },
    {
      id: "2",
      speedGraph: [
        { time: 0, speed: 0 },
        { time: 1, speed: 4 },
        { time: 2, speed: 6 },
        { time: 3, speed: 7 },
        { time: 4, speed: 7 },
        { time: 5, speed: 7 },
      ],
      speed: "7 kb/s",
      price: "0.001 USD/kb",
      downloaded: "60 kb/s",
    },
  ];
  return (
    <div>
      <div className="m-2">
        <span className="text-xl">Peers</span>
        <span className="ml-5">2</span>
      </div>
      {AddedPeersInfo.map((e) => (
        <AddedPeer key={e.id} {...e} />
      ))}
    </div>
  );
};

const AddedPeer = (props: {
  id: string;
  speedGraph: { time: number; speed: number }[];
  speed: string;
  price: string;
  downloaded: string;
}) => {
  return (
    <div className="flex items-center p-5 justify-around bg-card">
      <LineChart width={300} height={100} data={props.speedGraph}>
        <Line type="monotone" dataKey="speed" stroke="var(--primary)" />
        <CartesianGrid stroke="#ccc" />
        {/* <XAxis dataKey={"time"} /> */}
        <YAxis />
      </LineChart>
      <div className="flex flex-col items-center">
        <div className="text-nowrap">{props.speed}</div>
        <div className="text-nowrap">{props.price}</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-nowrap">Total</div>
        <div className="text-nowrap">{props.downloaded}</div>
      </div>
      <div className="flex">
        <Play /> <Pause />
        <Trash2 />
      </div>
    </div>
  );
};

const AddPeers = () => {
  return (
    <div>
      <div className="text-xl m-2">Add Peers</div>
      <DataTable columns={columns} data={fakeSeeds} />
    </div>
  );
};

export default JobPanel;
