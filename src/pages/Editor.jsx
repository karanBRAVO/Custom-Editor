import React, { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import DragDrop from "editorjs-drag-drop";
import { EDJ_TOOLS } from "../components/custom-editor/Editor_Tools.js";
import "../styles/editor.css";

const INITIAL_DATA = {
  time: new Date().getTime(),
  blocks: [
    {
      type: "header",
      data: {
        text: "Heading",
        level: 1,
      },
    },
  ],
};

const Editor = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const editorInstance = useRef(null);
  let loader = false;

  const initEditor = () => {
    const editor = new EditorJS({
      holder: "editorjs",
      onReady: () => {
        new DragDrop(editor);
        editorInstance.current = editor;
      },
      data,
      tools: EDJ_TOOLS,
      autofocus: true,
      onChange: async () => {
        const content = await editor.saver.save();
        setData(content);
      },
    });
  };

  useEffect(() => {
    if (!editorInstance.current && !loader) {
      loader = true;
      initEditor();
    }

    return () => {
      if (editorInstance.current) {
        editorInstance.current.destroy();
        editorInstance.current = null;
      }
    };
  }, []);

  const handleSave = async () => {
    try {
      if (editorInstance.current) {
        const savedData = await editorInstance.current.saver.save();
        console.log(savedData);
        setData(savedData);
      }
    } catch (error) {
      console.error("Failed to save data:", error);
    }
  };

  return (
    <>
      <div className="editor-container">
        <h1 className="top-heading">Custom Editor</h1>
        <button className="saveBtn" onClick={handleSave}>
          Save
        </button>
        <div id="editorjs" className="editorjs"></div>
      </div>
    </>
  );
};

export default Editor;
