"use client";

import { useEffect, useRef } from "react";

const toolbarGroups = [
  [
    { command: "bold", label: "B" },
    { command: "italic", label: "I" },
    { command: "underline", label: "U" },
  ],
  [
    { command: "insertUnorderedList", label: "Danh sách" },
    { command: "insertOrderedList", label: "Số thứ tự" },
  ],
  [
    { command: "justifyLeft", label: "Trái" },
    { command: "justifyCenter", label: "Giữa" },
    { command: "justifyRight", label: "Phải" },
  ],
];

export default function TicketRichTextEditor({ label, placeholder, value, onChange }) {
  const editorRef = useRef(null);

  useEffect(() => {
    if (!value && editorRef.current?.innerHTML) {
      editorRef.current.innerHTML = "";
    }
  }, [value]);

  function updateValue() {
    onChange(editorRef.current?.innerHTML || "");
  }

  function runCommand(command) {
    editorRef.current?.focus();
    document.execCommand(command, false);
    updateValue();
  }

  function insertLink() {
    const url = window.prompt("Nhập đường dẫn cần chèn");
    if (!url) return;

    editorRef.current?.focus();
    document.execCommand("createLink", false, url);
    updateValue();
  }

  function handlePaste(event) {
    event.preventDefault();
    const text = event.clipboardData.getData("text/plain");
    document.execCommand("insertText", false, text);
    updateValue();
  }

  return (
    <div className="grid gap-1">
      <p className="text-[14px] font-extrabold text-slate-800">{label}</p>
      <div className="overflow-hidden rounded-[12px] border border-bms-border bg-white">
        <div className="flex flex-wrap items-center gap-1 border-b border-bms-border bg-slate-50 px-2 py-2">
          <select
            className="min-h-9 rounded-[8px] border border-bms-border bg-white px-2 text-[13px] font-bold text-slate-800"
            defaultValue=""
            onChange={(event) => {
              editorRef.current?.focus();
              document.execCommand("formatBlock", false, event.target.value);
              updateValue();
            }}
          >
            <option disabled value="">Kiểu chữ</option>
            <option value="p">Đoạn văn</option>
            <option value="h2">Tiêu đề lớn</option>
            <option value="h3">Tiêu đề nhỏ</option>
          </select>
          {toolbarGroups.map((group, groupIndex) => (
            <div className="ml-1 flex gap-1 border-l border-slate-200 pl-1" key={groupIndex}>
              {group.map((item) => (
                <button
                  className="min-h-9 rounded-[8px] border border-transparent px-2 text-[13px] font-extrabold text-slate-800 hover:border-bms-border hover:bg-white"
                  key={item.command}
                  onClick={() => runCommand(item.command)}
                  type="button"
                >
                  {item.label}
                </button>
              ))}
            </div>
          ))}
          <div className="ml-1 flex gap-1 border-l border-slate-200 pl-1">
            <button className="min-h-9 rounded-[8px] px-2 text-[13px] font-extrabold text-slate-800 hover:bg-white" onClick={insertLink} type="button">
              Chèn link
            </button>
            <button className="min-h-9 rounded-[8px] px-2 text-[13px] font-extrabold text-slate-800 hover:bg-white" onClick={() => runCommand("removeFormat")} type="button">
              Xóa định dạng
            </button>
          </div>
        </div>
        <div
          aria-label={label}
          className="min-h-[220px] px-4 py-3 text-[15px] font-semibold leading-7 text-slate-900 outline-none empty:before:text-slate-400 empty:before:content-[attr(data-placeholder)]"
          contentEditable
          data-placeholder={placeholder}
          onInput={updateValue}
          onPaste={handlePaste}
          ref={editorRef}
          role="textbox"
          suppressContentEditableWarning
        />
      </div>
      {value ? <p className="text-[12px] font-semibold text-slate-500">Nội dung đang soạn có định dạng và sẽ được lưu vào lịch sử ticket.</p> : null}
    </div>
  );
}
