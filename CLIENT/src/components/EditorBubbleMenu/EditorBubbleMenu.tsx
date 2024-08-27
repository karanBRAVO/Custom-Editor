import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// icons
import type { IconType } from "react-icons";
import { GoBold, GoItalic } from "react-icons/go";
import { LuUnderline, LuStrikethrough } from "react-icons/lu";
import { FaLink } from "react-icons/fa6";
import { AiOutlineFontColors } from "react-icons/ai";
import { RxFontFamily } from "react-icons/rx";

const actions: {
  text: string;
  icon: IconType;
}[] = [
  {
    text: "Bold",
    icon: GoBold,
  },
  {
    text: "Italic",
    icon: GoItalic,
  },
  {
    text: "Underline",
    icon: LuUnderline,
  },
  {
    text: "Strike-Through",
    icon: LuStrikethrough,
  },
  {
    text: "Link",
    icon: FaLink,
  },
  {
    text: "Color",
    icon: AiOutlineFontColors,
  },
  {
    text: "Font Family",
    icon: RxFontFamily,
  },
];

const EditorBubbleMenu = () => {
  return (
    <>
      <div className="flex flex-row bg-white p-2 gap-1 shadow-md rounded-md border-solid border-[2px] border-zinc-100">
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
    </>
  );
};

export default EditorBubbleMenu;
