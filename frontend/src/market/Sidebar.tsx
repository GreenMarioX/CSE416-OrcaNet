import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Filter, Search } from "lucide-react";

import { useContext, useState } from "react";
import { MarketPageContext } from "./MarketPage";

const Sidebar = (props: {
  setJobID: React.Dispatch<React.SetStateAction<string>>;
}) => {
  // Consider nesting JobList under FilterInput for less movement
  const [filter, setFilter] = useState("");
  return (
    <div className="absolute left-0 top-0 w-52 h-screen border">
      <JobInput />
      <FilterInput setFilter={setFilter} />
      <JobList filter={filter} setJobID={props.setJobID} />
    </div>
  );
};

const JobInput = () => {
  const [hash, setHash] = useState("");
  return (
    <div className="relative m-2">
      <Input
        type="text"
        onChange={(e) => setHash(e.target.value)}
        placeholder="Hash"
      />
      {/* <span className="absolute left-2 top-2">Hash</span> */}
      <Search className="absolute right-2 top-2" onClick={(e) => "addJob"} />
    </div>
  );
};

const FilterInput = (props: {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [buffer, setBuffer] = useState("");
  return (
    <div className="relative m-2">
      <Input
        type="text"
        value={buffer}
        onChange={(e) => setBuffer(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            props.setFilter(buffer);
          }
        }}
        placeholder="Filter"
      />
      {/* <span className="absolute left-2 top-2">Filter</span> */}
      <Filter
        className="absolute right-2 top-2"
        onClick={(e) => props.setFilter(buffer)}
      />
    </div>
  );
};

const JobList = (props: {
  filter: string;
  setJobID: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [jobInfoList, setJobInfoList] = useState([
    {
      id: "1",
      fileName: "image.png",
      fileSize: "28 mb",
      status: "downloading",
    },
    {
      id: "2",
      fileName: "bestdogvideoeverintheworld.mp4",
      fileSize: "1 gb",
      status: "paused",
    },
    { id: "3", fileName: "audio.wav", fileSize: "5 mb", status: "error" },
    {
      id: "4",
      fileName: "image.png",
      fileSize: "28 mb",
      status: "downloading",
    },
    {
      id: "5",
      fileName: "image.png",
      fileSize: "28 mb",
      status: "downloading",
    },
    {
      id: "6",
      fileName: "image.png",
      fileSize: "28 mb",
      status: "downloading",
    },
    {
      id: "7",
      fileName: "image.png",
      fileSize: "28 mb",
      status: "downloading",
    },
    {
      id: "8",
      fileName: "image.png",
      fileSize: "28 mb",
      status: "downloading",
    },
    {
      id: "9",
      fileName: "image.png",
      fileSize: "28 mb",
      status: "downloading",
    },
    {
      id: "10",
      fileName: "image.png",
      fileSize: "28 mb",
      status: "downloading",
    },
    {
      id: "11",
      fileName: "image.png",
      fileSize: "28 mb",
      status: "downloading",
    },
    {
      id: "12",
      fileName: "image.png",
      fileSize: "28 mb",
      status: "downloading",
    },
    {
      id: "13",
      fileName: "image.png",
      fileSize: "28 mb",
      status: "downloading",
    },
    {
      id: "14",
      fileName: "image.png",
      fileSize: "28 mb",
      status: "downloading",
    },
    {
      id: "15",
      fileName: "image.png",
      fileSize: "28 mb",
      status: "downloading",
    },
  ]);
  let filteredList = jobInfoList;
  if (props.filter === "") {
    filteredList = jobInfoList;
  } else {
    filteredList = filteredList.filter((e) =>
      e.fileName.includes(props.filter)
    );
  }
  return (
    <ScrollArea className="w-52 h-[calc(100%-7rem)] overflow-y-auto">
      {filteredList.map((jobInfo, i) => (
        <Job key={i} {...jobInfo} setJobID={props.setJobID} />
      ))}
    </ScrollArea>
  );
};
const Job = (props: {
  id: string;
  fileName: string;
  fileSize: string;
  status: string;

  setJobID: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { jobID } = useContext(MarketPageContext);
  return (
    // to implement: conditionally render different background component based off jobID for proper transitions
    <div
      className={`flex items-center m-2 rounded-lg 
        ${
          jobID == props.id
            ? "bg-secondary"
            : "bg-card hover:bg-accent hover:text-accent-foreground"
        }`}
      onClick={(e) => props.setJobID(props.id)}
    >
      <div className="max-w-[11rem] m-1">
        <div className="ml-2 overflow-hidden text-ellipsis">
          {props.fileName}
        </div>
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
          <span className="overflow-hidden text-ellipsis">
            {props.fileSize}
          </span>
        </div>
      </div>
    </div>
  );
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

export default Sidebar;
