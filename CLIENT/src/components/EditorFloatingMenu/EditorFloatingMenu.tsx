import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Command } from "@/components/ui/command";
import EditorCommands from "@/components/EditorCommands/EditorCommands";
import { IoMdAdd } from "react-icons/io";

const EditorFloatingMenu = () => {
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant={"outline"} size={"icon"}>
            <IoMdAdd size={16} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 p-0">
          <Command>
            <EditorCommands />
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default EditorFloatingMenu;
