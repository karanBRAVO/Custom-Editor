import { ImUndo2, ImRedo2 } from "react-icons/im";
import { FaSave } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { IconType } from "react-icons";

const actions: { text: string; icon: IconType }[] = [
  {
    text: "Undo",
    icon: ImUndo2,
  },
  {
    text: "Redo",
    icon: ImRedo2,
  },
  {
    text: "Save",
    icon: FaSave,
  },
];

const EditorToolbar = () => {
  return (
    <div className="flex flex-row gap-2 m-1">
      {actions.map((action, index) => (
        <TooltipProvider key={index}>
          <Tooltip>
            <TooltipTrigger>
              <Button variant={"outline"} size={"icon"}>
                <action.icon size={15} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{action.text}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
};

export default EditorToolbar;
