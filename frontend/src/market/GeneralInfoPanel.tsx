import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { Card } from "@/components/ui/card";
import { CopyIcon } from "lucide-react";

export const GeneralInfoPanel = () => {
  const speedGraph = [
    { time: 0, speed: 0 },
    { time: 1, speed: 8 },
    { time: 2, speed: 12 },
    { time: 3, speed: 14 },
    { time: 4, speed: 14 },
    { time: 5, speed: 14 },
  ];
  return (
    <Card className="">
      <div className="flex justify-between rounded-t-lg bg-gray-300 text-gray-800">
        <div className="ml-2">File Hash</div>
        <CopyIcon className="mr-2" />
      </div>
      <div className="p-3 text-lg">
        <div className="mb-1">WhoLetTheDogsOut.mp4</div>
        <div>
          <span className="text-blue-600">47</span> / 185 MiB
        </div>
        <div>
          Running Cost: <span className="text-blue-600">10 USD</span>
        </div>
        <div>Projected Cost: 20 USD</div>
        <div>ETA: 10 s</div>
      </div>
    </Card>
  );
};
