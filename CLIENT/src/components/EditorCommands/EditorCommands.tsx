import {
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import type { IconType } from "react-icons";

// icons
import {
  BsTypeH1,
  BsTypeH2,
  BsTypeH3,
  BsTypeH4,
  BsTypeH5,
  BsTypeH6,
} from "react-icons/bs";
import { TfiText } from "react-icons/tfi";
import { GoListOrdered, GoListUnordered } from "react-icons/go";
import { FaListCheck, FaFileAudio } from "react-icons/fa6";
import { GrTableAdd } from "react-icons/gr";
import { FaImages, FaVideo, FaFileAlt } from "react-icons/fa";

interface IBlock {
  text: string;
  command: string;
  icon: IconType;
}

const headings: IBlock[] = [
  {
    text: "Heading 1",
    command: "Ctrl+H+1",
    icon: BsTypeH1,
  },
  {
    text: "Heading 2",
    command: "Ctrl+H+2",
    icon: BsTypeH2,
  },
  {
    text: "Heading 3",
    command: "Ctrl+H+3",
    icon: BsTypeH3,
  },
  {
    text: "Heading 4",
    command: "Ctrl+H+4",
    icon: BsTypeH4,
  },
  {
    text: "Heading 5",
    command: "Ctrl+H+5",
    icon: BsTypeH5,
  },
  {
    text: "Heading 6",
    command: "Ctrl+H+6",
    icon: BsTypeH6,
  },
];

const lists: IBlock[] = [
  {
    text: "Numbered List",
    command: "Ctrl+L+O",
    icon: GoListOrdered,
  },
  {
    text: "Bullet List",
    command: "Ctrl+L+B",
    icon: GoListUnordered,
  },
  {
    text: "Check List",
    command: "Ctrl+L+C",
    icon: FaListCheck,
  },
];

const medias: IBlock[] = [
  {
    text: "Image",
    command: "Ctrl+M+I",
    icon: FaImages,
  },
  {
    text: "Video",
    command: "Ctrl+M+V",
    icon: FaVideo,
  },
  {
    text: "Audio",
    command: "Ctrl+M+A",
    icon: FaFileAudio,
  },
  {
    text: "File",
    command: "Ctrl+M+A",
    icon: FaFileAlt,
  },
];

const EditorCommands = () => {
  return (
    <>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Headings">
          {headings.map((heading, index) => (
            <CommandItem key={index}>
              <span className="p-1 bg-black text-white mr-1 rounded">
                <heading.icon size={15} />
              </span>
              <span>{heading.text}</span>
              <CommandShortcut>{heading.command}</CommandShortcut>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Text">
          <CommandItem>
            <span className="p-1 bg-black text-white mr-1 rounded">
              <TfiText size={15} />
            </span>
            <span>Paragraph</span>
            <CommandShortcut>Ctrl+Shift+p</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="List">
          {lists.map((list, index) => (
            <CommandItem key={index}>
              <span className="p-1 bg-black text-white mr-1 rounded">
                <list.icon size={15} />
              </span>
              <span>{list.text}</span>
              <CommandShortcut>{list.command}</CommandShortcut>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Media">
          {medias.map((media, index) => (
            <CommandItem key={index}>
              <span className="p-1 bg-black text-white mr-1 rounded">
                <media.icon size={15} />
              </span>
              <span>{media.text}</span>
              <CommandShortcut>{media.command}</CommandShortcut>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Others">
          <CommandItem>
            <span className="p-1 bg-black text-white mr-1 rounded">
              <GrTableAdd size={15} />
            </span>
            <span>Table</span>
            <CommandShortcut>Ctrl+T</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </>
  );
};

export default EditorCommands;
