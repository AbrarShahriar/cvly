"use client";

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

import Italic from "@tiptap/extension-italic";
import Bold from "@tiptap/extension-bold";
import Underline from "@tiptap/extension-underline";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";

// 2. Overwrite the keyboard shortcuts
const CustomItalic = Italic.extend({
  renderHTML({ HTMLAttributes }) {
    return ["span", { ...HTMLAttributes, class: "italic" }, 0];
  },
});

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
      Document,
      Paragraph,
      Text,
      Bold,
      CustomItalic,
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
