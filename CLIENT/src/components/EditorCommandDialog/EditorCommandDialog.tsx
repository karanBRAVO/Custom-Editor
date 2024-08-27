import { useEffect, useState } from "react";
import { CommandDialog } from "@/components/ui/command";
import EditorCommands from "@/components/EditorCommands/EditorCommands";

const EditorCommandDialog = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <EditorCommands />
      </CommandDialog>
    </>
  );
};

export default EditorCommandDialog;
