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
import { createContext, useContext, useState } from "react";

interface JobInfo {
  id: string;
  fileName: string;
  fileSize: string;
  status: string;
  remainingTime: string;
  timeQueued: string;
}

export const MarketPageAltContext = createContext({ jobID: "-1" });

const MarketPageAlt = () => {
  const [jobID, setJobID] = useState("-1");
  const [jobInfoList, setJobInfoList] = useState<JobInfo[]>([
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
  ]);
  const updateJobStatus = (jobId: string, newStatus: string) => {
    // Update job status in the state
    setJobInfoList((prevJobInfoList) => {
      return prevJobInfoList.map((job) => {
        if (job.id === jobId) {
          return { ...job, status: newStatus };
        }
        return job;
      });
    });
  };
  // Function to remove job from the list
  const removeJob = (jobId: string) => {
    // Remove job from the state
    setJobInfoList((prevJobInfoList) =>
      prevJobInfoList.filter((job) => job.id !== jobId)
    );
  };

  return (
    <MarketPageAltContext.Provider value={{ jobID }}>
      <div id="market-page-alt" className="relative grow bg-background">
        <Overview
          jobID={jobID}
          setJobID={setJobID}
          jobInfoList={jobInfoList}
          updateJobStatus={updateJobStatus}
          removeJob={removeJob}
        />
        <Details />
      </div>
    </MarketPageAltContext.Provider>
  );
};

export default MarketPageAlt;

const Overview = (props: {
  jobID: string;
  setJobID: React.Dispatch<React.SetStateAction<string>>;
  jobInfoList: JobInfo[];
  updateJobStatus: (jobId: string, newStatus: string) => void;
  removeJob: (jobId: string) => void;
}) => {
  const [filter, setFilter] = useState<string>("all");
  return (
    <div className="m-4">
      <OverviewHeader setFilter={setFilter} />
      <JobList
        jobInfoList={props.jobInfoList}
        setJobID={props.setJobID}
        filter={filter}
      />
      <JobControls
        jobID={props.jobID}
        updateJobStatus={props.updateJobStatus}
        removeJob={props.removeJob}
      />
    </div>
  );
};
const OverviewHeader = (props: {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const handleFilter = (status: string) => {
    props.setFilter(status);
  };
  return (
    <div className="flex justify-between">
      <div className="flex">
        <Input placeholder="Filter..." className="w-80" />

        <Button className="ml-2" onClick={() => handleFilter("all")}>
          All
        </Button>
        <Button className="ml-2" onClick={() => handleFilter("downloading")}>
          Downloading
        </Button>
        <Button className="ml-2" onClick={() => handleFilter("paused")}>
          Paused
        </Button>
        <Button className="ml-2" onClick={() => handleFilter("error")}>
          Error
        </Button>
      </div>
      <Button>Add Job</Button>
    </div>
  );
};
const JobList = (props: {
  jobInfoList: JobInfo[];
  setJobID: React.Dispatch<React.SetStateAction<string>>;
  filter: string;
}) => {
  const filteredJobs =
    props.filter === "all"
      ? props.jobInfoList
      : props.jobInfoList.filter((job) => job.status === props.filter);
  return (
    <ul>
      {filteredJobs.map((e) => (
        <Job key={e.id} {...e} setJobID={props.setJobID} />
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

  setJobID: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { jobID } = useContext(MarketPageAltContext);

  return (
    <li
      className={`flex items-center justify-between p-1 m-2 rounded ${
        jobID == props.id
          ? "bg-secondary"
          : "bg-card hover:bg-accent hover:text-accent-foreground"
      }`}
      onClick={(e) => props.setJobID(props.id)}
    >
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
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
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
const JobControls = (props: {
  jobID: string;
  updateJobStatus: (jobId: string, newStatus: string) => void;
  removeJob: (jobId: string) => void;
}) => {
  const handlePlayClick = () => {
    props.updateJobStatus(props.jobID, "downloading");
  };

  const handlePauseClick = () => {
    props.updateJobStatus(props.jobID, "paused");
  };

  const handleDeleteClick = () => {
    props.removeJob(props.jobID);
  };
  return (
    <div className="flex items-center p-4">
      <div className="mr-4">3 jobs selected</div>
      <button onClick={handlePlayClick}>
        <Play className="size-8 hover:text-accent" />
      </button>
      <button onClick={handlePauseClick}>
        <Pause className="size-8 hover:text-accent" />
      </button>
      <button onClick={handleDeleteClick}>
        <Trash2 className="size-8 hover:text-destructive" />
      </button>
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
              <Play className="hover:text-accent" />
              <Pause className="hover:text-accent" />
              <Trash2 className="hover:text-destructive" />
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
