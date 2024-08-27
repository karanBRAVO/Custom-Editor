import {
  useEditor,
  EditorContent,
  FloatingMenu,
  BubbleMenu,
} from "@tiptap/react";

// styles
import "@/styles/editor.css";

// components
import EditorToolbar from "@/components/EditorToolbar/EditorToolbar";
import EditorBubbleMenu from "@/components/EditorBubbleMenu/EditorBubbleMenu";
import EditorFloatingMenu from "@/components/EditorFloatingMenu/EditorFloatingMenu";
import { CONTENT } from "@/pages/content";

// extensions
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Blockquote from "@tiptap/extension-blockquote";
import CodeBlock from "@tiptap/extension-code-block";
import HardBreak from "@tiptap/extension-hard-break";
import Heading from "@tiptap/extension-heading";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import Dropcursor from "@tiptap/extension-dropcursor";
import Image from "@tiptap/extension-image";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import Mention from "@tiptap/extension-mention";
import Gapcursor from "@tiptap/extension-gapcursor";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import Youtube from "@tiptap/extension-youtube";
import Bold from "@tiptap/extension-bold";
import Code from "@tiptap/extension-code";
import Highlight from "@tiptap/extension-highlight";
import Italic from "@tiptap/extension-italic";
import Link from "@tiptap/extension-link";
import Strike from "@tiptap/extension-strike";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import History from "@tiptap/extension-history";
import Placeholder from "@tiptap/extension-placeholder";
import CharacterCount from "@tiptap/extension-character-count";
import EditorCommandDialog from "@/components/EditorCommandDialog/EditorCommandDialog";

const Editor = () => {
  const editor = useEditor({
    extensions: [
      Heading.configure({
        levels: [1, 2, 3, 4, 5, 6],
      }),
      Text,
      Paragraph,
      Document,
      Blockquote,
      HardBreak,
      HorizontalRule,
      CodeBlock,
      Image.configure({
        inline: true,
        allowBase64: true,
      }),
      Dropcursor,
      BulletList,
      ListItem,
      OrderedList,
      Mention.configure({
        HTMLAttributes: {
          class: "mention",
        },
      }),
      Gapcursor,
      Table,
      TableCell,
      TableRow,
      TableHeader,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      Youtube,
      Bold,
      Code,
      Highlight.configure({
        multicolor: true,
      }),
      Italic,
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
        linkOnPaste: false,
      }),
      Strike,
      Subscript,
      Superscript,
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"],
        alignments: ["left", "center", "right", "justify"],
        defaultAlignment: "left",
      }),
      History.configure({
        depth: 10,
        newGroupDelay: 1000,
      }),
      Placeholder.configure({
        showOnlyWhenEditable: true,
        placeholder: "Type here...",
      }),
      CharacterCount.configure({
        limit: null,
      }),
    ],
    content: CONTENT,
  });

  if (!editor) return null;

  return (
    <div className="p-10">
      <EditorToolbar />
      <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
        <EditorBubbleMenu />
      </BubbleMenu>
      <FloatingMenu editor={editor} tippyOptions={{ duration: 100 }}>
        <EditorFloatingMenu />
      </FloatingMenu>
      <EditorCommandDialog />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;
