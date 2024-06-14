import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import NestedList from "@editorjs/nested-list";
import Checklist from "@editorjs/checklist";
import LinkTool from "@editorjs/link";
import AttachesTool from "@editorjs/attaches";
import Embed from "@editorjs/embed";
import InlineImage from "editorjs-inline-image";
import CodeTool from "@editorjs/code";
import Marker from "@editorjs/marker";
import InlineCode from "@editorjs/inline-code";
import Underline from "@editorjs/underline";
import Hyperlink from "editorjs-hyperlink";
import Warning from "@editorjs/warning";
import Alert from "editorjs-alert";

import CustomVideoTool from "./custom-tools/CustomVideoTool.js";
import CustomTable from "./custom-tools/CustomTableTool.js";
import CustomImage from "./custom-tools/CustomImageTool.js";
import MyAssets from "./custom-tools/CustomAssetsTool.js";

export const EDJ_TOOLS = {
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  header: {
    class: Header,
    config: {
      placeholder: "Enter Heading",
    },
  },
  quote: {
    class: Quote,
    inlineToolbar: true,
    config: {
      quotePlaceholder: "Enter a quote",
      captionPlaceholder: "Quote's author",
    },
  },
  list: {
    class: NestedList,
    inlineToolbar: true,
    config: {
      defaultStyle: "unordered",
    },
  },
  checklist: {
    class: Checklist,
    inlineToolbar: true,
  },
  image: {
    class: CustomImage,
    config: {
      uploadUrl: "",
    },
  },
  linkTool: {
    class: LinkTool,
    config: {
      endpoint: "",
    },
  },
  attaches: {
    class: AttachesTool,
    config: {
      endpoint: "",
    },
  },
  embed: {
    class: Embed,
    inlineToolbar: true,
  },
  inlineImage: {
    class: InlineImage,
    inlineToolbar: true,
    config: {
      embed: {
        display: false,
      },
      unsplash: {
        appName: "karanDemo",
        apiUrl: "",
        maxResults: 30,
      },
    },
  },
  table: {
    class: CustomTable,
    inlineToolbar: true,
    config: {},
  },
  code: CodeTool,
  Marker: {
    class: Marker,
  },
  inlineCode: {
    class: InlineCode,
  },
  underline: Underline,
  hyperlink: {
    class: Hyperlink,
    config: {
      shortcut: "CMD+L",
      target: "_blank",
      rel: "nofollow",
      availableTargets: ["_blank", "_self"],
      availableRels: ["author", "noreferrer"],
      validate: false,
    },
  },
  video: {
    class: CustomVideoTool,
    config: {
      uploadUrl: "",
    },
  },
  warning: {
    class: Warning,
  },
  alert: {
    class: Alert,
  },
  myassets: {
    class: MyAssets,
    config: {
      endpoints: [
        {
          text: "docs",
          url: "",
        },
        {
          text: "notes",
          url: "",
        },
        {
          text: "images",
          url: "",
        },
        {
          text: "videos",
          url: "",
        },
      ],
    },
  },
};
