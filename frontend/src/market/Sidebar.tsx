import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Filter, Search, CircleDot, Scroll } from "lucide-react";

import { useState } from "react";

const Sidebar = () => {
  // Consider nesting JobList under FilterInput for less movement
  const [filter, setFilter] = useState("");
  return (
    <div className="absolute left-0 top-0 w-52 h-screen border">
      <JobInput />
      <FilterInput setFilter={setFilter} />
      <JobList filter={filter} />
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

const JobList = (props: { filter: string }) => {
  const jobInfoList = [
    {
      id: "1",
      fileName: "image.png",
      fileSize: "28 mb",
      status: "downloading",
    },
    {
      id: "2",
      fileName: "bestdogvideoever.mp4",
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
  ];
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
        <Job key={i} {...jobInfo} />
      ))}
    </ScrollArea>
  );
};
const Job = (props: {
  id: string;
  fileName: string;
  fileSize: string;
  status: string;
}) => {
  return (
    <div
      className="flex items-center m-2 bg-card rounded-lg "
      onClick={(e) => "loadJob"}
    >
      <CircleDot
        className={`${statusToColorCSS(
          props.status
        )} inline size-6 min-w-6 m-1`}
      />
      <div className="max-w-36 m-1">
        <div className="overflow-hidden text-ellipsis">{props.fileName}</div>
        <div className="overflow-hidden text-ellipsis">{props.fileSize}</div>
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
