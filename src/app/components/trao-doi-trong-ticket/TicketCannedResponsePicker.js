const cannedResponses = [
  "Xác nhận đã tiếp nhận yêu cầu",
  "Yêu cầu bổ sung chứng từ",
  "Thông báo đã xử lý xong",
  "Thông báo cần thêm thời gian xử lý",
  "Từ chối yêu cầu ngoài phạm vi dịch vụ",
  "Hướng dẫn thao tác",
  "Cảm ơn phản hồi của khách",
];

export default function TicketCannedResponsePicker() {
  return (
    <label className="grid gap-1 text-[14px] font-extrabold text-slate-800">
      Mẫu trả lời nhanh
      <select className="min-h-11 rounded-[10px] border border-bms-border px-3 font-semibold">
        <option>Chọn mẫu trả lời nhanh</option>
        {cannedResponses.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </label>
  );
}
