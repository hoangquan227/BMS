import { NextResponse } from "next/server";
import { findCrmRecord } from "../data/crm-data";

const entityConfig = {
  "lien-he": { label: "Liên hệ", moduleKey: "contacts" },
  "cong-ty": { label: "Công ty", moduleKey: "companies" },
  "co-hoi": { label: "Cơ hội", moduleKey: "deals" },
};

const tabLabels = {
  "tong-quan": "Tổng quan",
  "cong-viec": "Công việc",
  "yeu-cau-ho-tro": "Yêu cầu hỗ trợ",
  "lich-su-trao-doi": "Lịch sử trao đổi",
  "tu-ho-so": "Tủ hồ sơ",
  "chung-tu": "Chứng từ",
  "tai-khoan-truy-cap": "Tài khoản truy cập",
  "hop-dong": "Hợp đồng",
  "tai-chinh": "Tài chính",
  "ho-so-chung-tu": "Hồ sơ và chứng từ",
  "dich-vu-dang-dung": "Dịch vụ đang dùng",
  "nhu-cau-dich-vu": "Nhu cầu dịch vụ",
  "cong-viec-ban-hang": "Công việc bán hàng",
  "lich-hen": "Lịch hẹn",
  "bao-gia": "Báo giá",
  "ho-so-khao-sat": "Hồ sơ khảo sát",
  "tai-lieu-khach-gui": "Tài liệu khách gửi",
  "chuyen-doi": "Chuyển đổi",
  "ghi-chu-noi-bo": "Ghi chú nội bộ",
  "lich-su": "Lịch sử",
};

function linkedIds(config, id, record) {
  return {
    contactId: config.moduleKey === "contacts" ? id : null,
    companyId: config.moduleKey === "companies" ? id : record.company || null,
    dealId: config.moduleKey === "deals" ? id : null,
    customerId: record.company || record.name || id,
    serviceId: record.service || null,
    contractId: null,
    taskId: null,
    ticketId: null,
  };
}

export function crmTabResponse(entityType, id, tabKey = "tong-quan") {
  const config = entityConfig[entityType];
  const record = findCrmRecord(config.moduleKey, id);
  const title = tabLabels[tabKey] || "Nghiệp vụ liên quan";

  return NextResponse.json({
    objectType: config.label,
    id,
    tabKey,
    title,
    recordName: record.name,
    linkedIds: linkedIds(config, id, record),
    filters: ["Tất cả", "Người phụ trách", "Trạng thái", "Kỳ dữ liệu"],
    columns: ["Tên dữ liệu", "Người phụ trách", "Trạng thái", "Ngày cập nhật", "Liên kết"],
    rows: [
      {
        tenDuLieu: `${title} của ${record.name}`,
        nguoiPhuTrach: record.owner || "Nguyễn Minh",
        trangThai: "Đang theo dõi",
        ngayCapNhat: "01/05/2026",
        lienKet: linkedIds(config, id, record),
      },
    ],
  });
}

export function createLinkedRecordResponse(type, payload) {
  return NextResponse.json(
    {
      message: `Đã tạo ${type}.`,
      data: {
        id: `${type}-${Date.now()}`,
        ...payload,
        linkedIds: {
          contactId: payload.contactId || null,
          companyId: payload.companyId || null,
          dealId: payload.dealId || null,
          customerId: payload.customerId || payload.companyId || payload.contactId || payload.dealId || null,
          serviceId: payload.serviceId || null,
          contractId: payload.contractId || null,
          taskId: payload.taskId || null,
          ticketId: payload.ticketId || null,
        },
      },
    },
    { status: 201 },
  );
}
