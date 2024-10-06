"use client";

import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
  LuBold,
  LuItalic,
  LuList,
  LuListOrdered,
  LuUnderline,
} from "react-icons/lu";
import { Label } from "@radix-ui/react-label";
import React from "react";
import { Toggle } from "./ui/toggle";

const ICON_SIZE = 18;

interface TiptapProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  placeholder?: string;
  callback: (txt: string) => void;
}

const Tiptap = ({
  label = "",
  placeholder = "",
  callback,
  ...props
}: TiptapProps) => {
  const editor = useEditor({
    onUpdate: (e) => {
      callback(e.editor.getHTML());
    },

    extensions: [
      StarterKit,
      Placeholder.configure({
        emptyNodeClass:
          "first:before:text-zinc-500 first:before:float-left first:before:content-[attr(data-placeholder)] first:before:pointer-events-none",
        placeholder,
      }),
      Underline,
    ],
    content: "",
    immediatelyRender: false,
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-col rounded-md">
      <Label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2"
        htmlFor={label}
      >
        {label}
      </Label>
      <div id={label} className="flex bg-zinc-200 p-4 gap-4 rounded-t-md">
        <button
          onClick={(e) => {
            e.preventDefault();
            editor?.chain().focus().toggleBold()?.run();
          }}
        >
          <LuBold size={ICON_SIZE} />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            editor?.chain().focus().toggleItalic().run();
          }}
        >
          <LuItalic size={ICON_SIZE} />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor?.chain().focus().toggleUnderline()?.run();
          }}
        >
          <LuUnderline size={ICON_SIZE} />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor?.chain().focus().toggleOrderedList().run();
          }}
        >
          <LuListOrdered size={ICON_SIZE} />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor?.chain().focus().toggleBulletList().run();
          }}
        >
          <LuList size={ICON_SIZE} />
        </button>
      </div>
      <EditorContent
        className="bg-zinc-200 min-h-[100px] pb-4 px-4 focus-visible:outline-none rounded-b-md"
        editor={editor}
      />
    </div>
  );
};

export default Tiptap;
