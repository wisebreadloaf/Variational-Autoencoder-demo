import * as React from "react";
import { Inter } from "next/font/google";
import ReplayIcon from "@mui/icons-material/Replay";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const inter = Inter({ subsets: ["latin"] });
const model = "Convolutional Variational Autoencoder (CVAE)";

export function Git(props) {
  return (
    <svg
      className={"absolute h-5 w-5 right-px m-9 mt-1"}
      viewBox="0 0 98 96"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
        fill="#fff"
      />
    </svg>
  );
}

export function Header() {
  return (
    <div
      className={
        "bg-[#183d4e] min-w-full min-h-8 flex flex-row justify-between"
      }
    >
      <h4 className={"text-sm absolute left-px m-auto mt-1 pl-16"}>
        Play with {model} in your browser!
      </h4>
      <div>
        <div className={"text-sm absolute right-px m-auto mt-1 pr-16"}>
          Fork us on Github
        </div>
        <Git />
      </div>
    </div>
  );
}

export function TopPanel() {
  return (
    <div
      className={
        "bg-[#eeeeee] min-w-full min-h-20 flex flex-row items-center border-b-2 border-gray-400"
      }
    >
      <div className="flex flex-row gap-1">
        <h4 className={"text-xl font-bold text-black pl-16"}>GAN</h4>
        <h4 className={"text-xl font-medium text-black"}>Lab</h4>
      </div>
      <div className="flex flex-row items-center gap-1 pl-12">
        <ReplayIcon sx={{ color: "#183d4e" }} fontSize="small" />
        <PlayCircleIcon
          className={"h-12 w-12"}
          sx={{ color: "#183d4e" }}
          fontSize="large"
        />
        <SkipNextIcon
          className={"h-6 w-6"}
          sx={{ color: "#183d4e" }}
          fontSize="medium"
        />
      </div>
      <div className="flex flex-col pl-12">
        <div className="text-xs font-normal text-black">Epoch</div>
        <div className="text-2xl font-normal text-black text-opacity-60">
          000,000
        </div>
      </div>
    </div>
  );
}

export function Controls() {
  const boxes = Array.from({ length: 10 }, (_, i) => i);
  const [selectValue, setSelectValue] = React.useState(10); // Default value set to 10 for "Unit"

  const handleSelectChange = (event) => {
    setSelectValue(event.target.value);
  };

  return (
    <div className="flex justify-between w-full">
      <div className="bg-[#ffffff] min-w-full min-h-10 flex flex-row items-center">
        {boxes.map((id) => (
          <div
            key={id}
            className="bg-[#5f5f5f] h-8 w-8 rounded-sm ml-2 flex items-center justify-center"
          >
            <img
              src={`/generated_${id}.png`}
              alt={`generated_${id}`}
              className="h-full w-full object-cover rounded-sm p-[1.5px]"
            />
          </div>
        ))}
        <Select
          className="absolute right-[10px] ml-2 h-6 w-24 text-[11px] font-thin"
          value={selectValue}
          onChange={handleSelectChange}
          displayEmpty
        >
          <MenuItem value={10}>Unit</MenuItem>
          <MenuItem value={20}>Global</MenuItem>
          <MenuItem value={30}>Module</MenuItem>
        </Select>
        <Button
          className="absolute h-6 w-30 text-[8px] right-[110px]"
          variant="outlined"
        >
          <VisibilityIcon className="text-sm mr-[4px]" />
          Show detail
        </Button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center ${inter.className}`}
    >
      <Header />
      <TopPanel />
      <Controls />
    </main>
  );
}
