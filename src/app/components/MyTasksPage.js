"use client";

import { useState } from "react";
import Card from "../../components/design-system/Card";
import StatusBadge from "../../components/design-system/StatusBadge";
import TaskStatusControl from "../../components/design-system/TaskStatusControl";
import ScreenHeader from "./ScreenHeader";

const viewTabs = ["Danh sách", "Kanban", "Dòng thời gian", "Quản lý chi tiết"];

const tasks = [
  {
    name: "Thực hiện vay vốn 5 tỷ",
    customer: "Công ty An Phát",
    owner: "Nguyễn Hữu Thắng",
    start: "08:30",
    end: "11:00",
    dueRange: "09/12/2026 - 31/12/2026",
    status: "Đang làm",
    group: "Đang tiến hành",
    progress: 33,
    checklist: "1/3",
    comments: "0",
    hours: "2,5 giờ",
  },
  {
    name: "Phân tích thị trường khu vực HN 3 tháng cuối năm",
    customer: "Công ty Minh Khang",
    owner: "Nguyễn Hữu Thắng",
    start: "13:30",
    end: "14:15",
    dueRange: "01/11/2026 - 30/12/2026",
    status: "Đang làm",
    group: "Đang tiến hành",
    progress: 75,
    checklist: "3/4",
    comments: "5",
    hours: "0,75 giờ",
  },
  {
    name: "Ký hợp đồng với đối tác Hyper",
    customer: "Công ty Đại Nam",
    owner: "Tạ Mai Hoa",
    start: "09:00",
    end: "10:30",
    dueRange: "19/11/2026 - 31/12/2026",
    status: "Chưa làm",
    group: "Chưa bắt đầu",
    progress: 0,
    checklist: "0/0",
    comments: "0",
    hours: "0 giờ",
  },
  {
    name: "Báo cáo kết quả doanh số tháng 10",
    customer: "Cửa hàng Phúc Lộc",
    owner: "Tạ Mai Hoa",
    start: "10:00",
    end: "11:00",
    dueRange: "01/11/2026 - 01/11/2026",
    status: "Chưa làm",
    group: "Chưa bắt đầu",
    progress: 0,
    checklist: "0/0",
    comments: "0",
    hours: "0 giờ",
  },
  {
    name: "Đàm phán hợp đồng đối tác VINA HOLAN",
    customer: "Công ty Vina Holan",
    owner: "Nguyễn Hữu Thắng",
    start: "14:00",
    end: "15:00",
    dueRange: "19/11/2026 - 30/11/2026",
    status: "Chưa làm",
    group: "Chưa bắt đầu",
    progress: 0,
    checklist: "0/0",
    comments: "0",
    hours: "0 giờ",
  },
  {
    name: "Đánh giá kết quả KPI tháng 11/2026",
    customer: "Nội bộ",
    owner: "Nguyễn Hữu Thắng",
    start: "15:00",
    end: "16:00",
    dueRange: "01/11/2026 - 30/11/2026",
    status: "Chưa làm",
    group: "Chưa bắt đầu",
    progress: 0,
    checklist: "0/0",
    comments: "0",
    hours: "0 giờ",
  },
  {
    name: "Gọi điện chăm sóc KH VNI",
    customer: "Công ty VNI",
    owner: "Tạ Mai Hoa",
    start: "15:00",
    end: "16:00",
    dueRange: "21/11/2026 - 30/11/2026",
    status: "Hoàn thành",
    group: "Hoàn thành",
    progress: 100,
    checklist: "0/0",
    comments: "0",
    hours: "1 giờ",
  },
  {
    name: "Ký hợp đồng với đối tác HCM",
    customer: "Công ty HCM",
    owner: "Tạ Mai Hoa",
    start: "16:00",
    end: "17:00",
    dueRange: "19/11/2026 - 19/11/2026",
    status: "Hoàn thành",
    group: "Hoàn thành",
    progress: 100,
    checklist: "2/2",
    comments: "0",
    hours: "1 giờ",
  },
];

const detailRows = [
  {
    strategy: "Ổn định hồ sơ thuế tháng",
    goal: "Nộp đúng hạn",
    budget: "0 đ",
    assignment: "Người thực hiện: quangph; Người chịu trách nhiệm cuối cùng: luanpm; Người hỗ trợ: dangnh; Người tham vấn: phucth; Người cần được thông báo: quanpt",
    method: "Kiểm tra chứng từ, đối chiếu số liệu, nộp tờ khai",
    start: "08:30",
    end: "11:00",
    checkpoint: "Đủ chứng từ đầu vào",
    expected: "Nộp tờ khai đúng hạn",
    actual: "Đang xử lý",
    fix: "Nhắc khách gửi thiếu hóa đơn",
    lesson: "Cần chốt chứng từ trước ngày 25",
    hours: "2,5 giờ",
  },
  {
    strategy: "Giảm việc trễ hạn",
    goal: "Xử lý chứng từ thiếu",
    budget: "0 đ",
    assignment: "Người thực hiện: minhkt; Người chịu trách nhiệm cuối cùng: ketoantruong; Người hỗ trợ: trankha; Người tham vấn: khachhang; Người cần được thông báo: giamdoc",
    method: "Gọi khách, lập danh sách chứng từ thiếu",
    start: "09:00",
    end: "10:30",
    checkpoint: "Khách xác nhận lịch gửi",
    expected: "Nhận đủ chứng từ",
    actual: "Thiếu 3 hóa đơn",
    fix: "Gửi mẫu tin nhắn nhắc khách",
    lesson: "Cần cảnh báo sớm hơn",
    hours: "1,5 giờ",
  },
  {
    strategy: "Tăng chất lượng bàn giao",
    goal: "Báo cáo rõ ràng",
    budget: "0 đ",
    assignment: "Người thực hiện: lebn; Người chịu trách nhiệm cuối cùng: truongnhom; Người hỗ trợ: chungtu; Người tham vấn: khachhang; Người cần được thông báo: giamdoc",
    method: "Tổng hợp việc hoàn thành và việc tồn",
    start: "15:00",
    end: "16:00",
    checkpoint: "Có ghi chú bàn giao",
    expected: "Bàn giao đầy đủ",
    actual: "Hoàn thành",
    fix: "Không có",
    lesson: "Mẫu báo cáo giúp tiết kiệm thời gian",
    hours: "1 giờ",
  },
];

function ViewSwitcher({ activeView, onChange }) {
  return (
    <div className="flex gap-2 overflow-x-auto rounded-bms-control bg-white p-2 ring-1 ring-bms-border">
      {viewTabs.map((tab) => (
        <button
          className={`min-h-11 shrink-0 rounded-[12px] px-4 text-sm font-bold transition active:translate-y-px ${
            activeView === tab
              ? "bg-bms-primary text-white shadow-sm"
              : "bg-bms-subtle text-slate-900 hover:bg-blue-50 hover:text-bms-primary"
          }`}
          key={tab}
          onClick={() => onChange(tab)}
          type="button"
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

function ProgressCircle({ progress, done }) {
  return (
    <div
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-4 bg-white text-[11px] font-extrabold ${
        done ? "border-orange-400 text-orange-500" : progress > 0 ? "border-green-300 text-green-600" : "border-slate-200 text-red-500"
      }`}
    >
      {progress}%
    </div>
  );
}

function TaskListGroup({ title, count, color, tasksInGroup }) {
  return (
    <section className="rounded-sm bg-white">
      <div className={`${color} flex min-h-9 items-center justify-between px-3 py-2 text-sm font-extrabold text-white`}>
        <span>{title} ({count})</span>
        <span>Thời hạn</span>
      </div>
      <div className="divide-y divide-dashed divide-slate-300">
        {tasksInGroup.map((task, index) => (
          <article className={index % 2 === 0 ? "grid gap-3 bg-white p-3 md:grid-cols-[auto_1fr_210px]" : "grid gap-3 bg-[#eefdfb] p-3 md:grid-cols-[auto_1fr_210px]"} key={task.name}>
            <ProgressCircle done={task.status === "Hoàn thành"} progress={task.progress} />
            <div>
              <p className="font-bold text-bms-primary">{task.name}</p>
              <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-600">
                <span>☷ {task.checklist}</span>
                <span>◇ {task.comments}</span>
                <span>Người phụ trách: {task.owner}</span>
                <span>Tổng giờ thực tế: {task.hours}</span>
              </div>
            </div>
            <div className="border-slate-300 text-sm font-semibold text-slate-800 md:border-l md:pl-4">
              {task.dueRange}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ListView() {
  const groups = [
    { title: "Đang tiến hành", color: "bg-green-600", name: "Đang tiến hành" },
    { title: "Chưa bắt đầu", color: "bg-sky-300 text-slate-800", name: "Chưa bắt đầu" },
    { title: "Hoàn thành", color: "bg-bms-primary", name: "Hoàn thành" },
  ];

  return (
    <Card title="Công việc cá nhân">
      <div className="mb-4 flex flex-col gap-3 border-b border-slate-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
        <button className="text-left text-sm font-bold text-bms-primary" type="button">
          + Tạo công việc
        </button>
        <button className="text-sm font-bold text-bms-primary" type="button">
          Tất cả mục tiêu
        </button>
      </div>
      <div className="space-y-4">
        {groups.map((group) => {
          const tasksInGroup = tasks.filter((task) => task.group === group.name);
          return (
            <TaskListGroup
              color={group.color}
              count={tasksInGroup.length}
              key={group.name}
              tasksInGroup={tasksInGroup}
              title={group.title}
            />
          );
        })}
      </div>
    </Card>
  );
}

function KanbanView() {
  const groups = ["Đang tiến hành", "Chưa bắt đầu", "Hoàn thành"];

  return (
    <div className="grid gap-4 xl:grid-cols-3">
      {groups.map((group) => (
        <Card key={group} title={group}>
          <div className="space-y-3">
            {tasks
              .filter((task) => task.group === group)
              .map((task) => (
                <article className="rounded-bms-control border border-bms-border bg-bms-subtle p-4" key={task.name}>
                  <p className="font-bold text-bms-text">{task.name}</p>
                  <p className="mt-1 text-sm text-bms-muted">{task.customer}</p>
                  <p className="mt-2 text-sm font-semibold text-bms-money">{task.hours}</p>
                  <div className="mt-3">
                    <StatusBadge status={task.status} />
                  </div>
                </article>
              ))}
          </div>
        </Card>
      ))}
    </div>
  );
}

function TimelineView() {
  return (
    <Card title="Dòng thời gian hôm nay">
      <div className="space-y-4">
        {tasks.map((task) => (
          <div className="grid gap-3 border-l-4 border-bms-primary pl-4 sm:grid-cols-[120px_1fr_auto]" key={task.name}>
            <p className="font-bold text-bms-primary">{task.start} - {task.end}</p>
            <div>
              <p className="font-bold text-bms-text">{task.name}</p>
              <p className="text-sm text-bms-muted">{task.customer} · {task.owner}</p>
            </div>
            <div className="sm:text-right">
              <StatusBadge status={task.status} />
              <p className="mt-1 text-sm font-semibold text-bms-money">{task.hours}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function DetailManagementView() {
  const columns = [
    "Ý đồ chiến lược (Mục đích)",
    "Mục tiêu",
    "Ngân sách nếu có",
    "Phân công",
    "Cách làm",
    "Thời gian bắt đầu",
    "Thời gian kết thúc",
    "Điểm kiểm soát",
    "Kết quả mong muốn",
    "Kết quả đạt được thực tế",
    "Chỉnh sửa cải gì?",
    "Bài học rút kinh nghiệm",
    "Tổng giờ thực tế",
  ];

  return (
    <Card title="Bảng quản lý công việc chi tiết">
      <div className="mb-4 overflow-x-auto">
        <table className="min-w-[760px] border-collapse text-center text-sm">
          <thead>
            <tr>
              <th className="border border-slate-400 bg-yellow-300 px-3 py-2 font-bold" colSpan={5}>
                Phân công
              </th>
            </tr>
            <tr>
              {["Người thực hiện", "Người chịu trách nhiệm cuối cùng", "Người hỗ trợ", "Người tham vấn", "Người cần được thông báo"].map((column) => (
                <th className="border border-slate-400 bg-yellow-300 px-3 py-2 font-bold" key={column}>
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {["quangph", "luanpm", "dangnh", "phucth", "quanpt"].map((person) => (
                <td className="border border-slate-300 px-3 py-2" key={person}>{person}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-[1600px] border-collapse text-left text-sm">
          <thead>
            <tr>
              {columns.map((column) => (
                <th className="border border-slate-700 bg-yellow-300 px-3 py-3 align-top font-extrabold text-slate-950" key={column}>
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {detailRows.map((row, index) => (
              <tr className={index % 2 === 0 ? "bg-[#f9e8df]" : "bg-[#f4d8cc]"} key={row.strategy}>
                <td className="border border-slate-700 px-3 py-4 align-top">{row.strategy}</td>
                <td className="border border-slate-700 px-3 py-4 align-top">{row.goal}</td>
                <td className="border border-slate-700 px-3 py-4 align-top">{row.budget}</td>
                <td className="border border-slate-700 px-3 py-4 align-top">{row.assignment}</td>
                <td className="border border-slate-700 px-3 py-4 align-top">{row.method}</td>
                <td className="border border-slate-700 px-3 py-4 align-top">{row.start}</td>
                <td className="border border-slate-700 px-3 py-4 align-top">{row.end}</td>
                <td className="border border-slate-700 px-3 py-4 align-top">{row.checkpoint}</td>
                <td className="border border-slate-700 px-3 py-4 align-top">{row.expected}</td>
                <td className="border border-slate-700 px-3 py-4 align-top">{row.actual}</td>
                <td className="border border-slate-700 px-3 py-4 align-top">{row.fix}</td>
                <td className="border border-slate-700 px-3 py-4 align-top">{row.lesson}</td>
                <td className="border border-slate-700 px-3 py-4 align-top font-bold text-bms-money">{row.hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

export default function MyTasksPage() {
  const [activeView, setActiveView] = useState("Danh sách");

  return (
    <section className="space-y-6">
      <ScreenHeader
        description="Theo dõi việc hôm nay, việc trễ hạn, việc chờ khách và việc đã hoàn thành theo nhiều kiểu hiển thị."
        title="Việc của tôi"
      />
      <ViewSwitcher activeView={activeView} onChange={setActiveView} />

      {activeView === "Danh sách" ? <ListView /> : null}
      {activeView === "Kanban" ? <KanbanView /> : null}
      {activeView === "Dòng thời gian" ? <TimelineView /> : null}
      {activeView === "Quản lý chi tiết" ? <DetailManagementView /> : null}

      <TaskStatusControl />
    </section>
  );
}
