"use client";

import { useMemo, useState } from "react";
import Button from "./Button";
import Card from "./Card";
import Input from "./Input";
import ToastHost from "./ToastHost";

export default function MorningMitPanel() {
  const [tasks, setTasks] = useState(["", "", ""]);
  const [toast, setToast] = useState(null);
  const isComplete = useMemo(() => tasks.every((task) => task.trim().length > 0), [tasks]);

  function updateTask(index, value) {
    setTasks((currentTasks) =>
      currentTasks.map((task, taskIndex) => (taskIndex === index ? value : task))
    );
  }

  function saveTasks() {
    if (!isComplete) {
      return;
    }

    setToast({
      title: "Đã ghi nhận",
      description: "Đã ghi nhận 3 việc quan trọng hôm nay.",
      status: "Hoàn thành",
    });
  }

  return (
    <Card title="MIT đầu ngày">
      <div className="space-y-4">
        {tasks.map((task, index) => (
          <Input
            helperText="Viết ngắn gọn, dễ hiểu."
            key={index}
            label={`Việc quan trọng ${index + 1}`}
            onChange={(event) => updateTask(index, event.target.value)}
            placeholder="Nhập việc cần ưu tiên hôm nay"
            value={task}
          />
        ))}
        <Button disabled={!isComplete} onClick={saveTasks}>
          Tiếp tục chấm công
        </Button>
        {!isComplete ? (
          <p className="text-sm font-medium text-bms-warning">
            Cần nhập đủ 3 việc quan trọng để tiếp tục.
          </p>
        ) : null}
      </div>
      <ToastHost toast={toast} />
    </Card>
  );
}

