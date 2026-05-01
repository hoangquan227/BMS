import Button from "../../components/design-system/Button";
import Card from "../../components/design-system/Card";
import ScreenHeader from "./ScreenHeader";
import PrintButton from "./PrintButton";
import ThiDuaStatGrid from "../thi-dua/components/ThiDuaStatGrid";
import ThiDuaTable from "../thi-dua/components/ThiDuaTable";
import {
  bangCong,
  bangLuong,
  bangXepHangMoi,
  baoCaoLuongThuong,
  cauHinhLuong3P,
  chamCong,
  danhGiaHelpdesk,
  diemCanCaiThien,
  duTinhThang,
  ghiNhanDongGop,
  giayChungNhanThiDua,
  giaTriConNguoiTckn,
  ketQuaCongViec,
  ketQuaMucTieu,
  leaderDuyet,
  mucTieuNam,
  mucTieuQuy,
  mucTieuThang,
  phieuThiDua,
  phieuThuNhapCaNhan,
  phuCapPhucLoi,
  quyCheLuongThuong,
  suMenh,
  tamNhin,
  thuNhapTamTinh,
  thuNhapTongQuan,
  tongQuanThiDuaMoi,
  viecTrongTam,
} from "../data/hrm-data";

function text(value) {
  if (value === true) return "Có";
  if (value === false) return "Không";
  return value;
}

function columnsFromRows(rows = []) {
  const first = rows[0] || {};
  return Object.keys(first)
    .filter((key) => !["id", "nhanVienId", "teamId"].includes(key))
    .map((key) => ({
      key,
      label: key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (char) => char.toUpperCase())
        .replace("Trang Thai", "Trạng thái")
        .replace("trangThai", "Trạng thái"),
      type: key.toLowerCase().includes("trangthai") || key === "xepLoai" || key === "leaderDuyet" ? "status" : undefined,
    }));
}

function normalizeRows(rows = []) {
  return rows.map((row) =>
    Object.fromEntries(
      Object.entries(row).map(([key, value]) => [key, text(value)])
    )
  );
}

const screens = {
  mucTieu: {
    "tam-nhin": {
      title: "Tầm nhìn",
      description: "Giúp mọi người hiểu công ty đang muốn trở thành điều gì, viết ngắn gọn và dễ nhớ.",
      rows: tamNhin,
    },
    "su-menh": {
      title: "Sứ mệnh",
      description: "Diễn giải công ty phục vụ khách hàng, nhân viên và nghề nghiệp bằng cách nào.",
      rows: suMenh,
    },
    "gia-tri-con-nguoi": {
      title: "Giá trị con người TCKN",
      description: "Tám giá trị được chuyển thành hành vi nên có, hành vi cần tránh và ví dụ thực tế.",
      rows: giaTriConNguoiTckn,
    },
    "muc-tieu-nam": {
      title: "Mục tiêu năm",
      description: "Mục tiêu lớn của năm, chia theo tài chính, khách hàng, quy trình nội bộ, con người và học tập.",
      rows: mucTieuNam,
      action: "Tạo mục tiêu năm",
    },
    "muc-tieu-quy": {
      title: "Mục tiêu quý",
      description: "Mục tiêu quý được nối từ mục tiêu năm để team biết trọng tâm trong quý.",
      rows: mucTieuQuy,
      action: "Tạo mục tiêu quý",
    },
    "muc-tieu-thang": {
      title: "Mục tiêu tháng",
      description: "Mục tiêu tháng nối từ mục tiêu quý, đủ gần để chuyển thành việc trọng tâm.",
      rows: mucTieuThang,
      action: "Tạo mục tiêu tháng",
    },
    "viec-trong-tam": {
      title: "Việc trọng tâm",
      description: "Nơi nối mục tiêu với công việc hằng ngày, chỉ gắn các việc thật sự quan trọng.",
      rows: viecTrongTam,
      action: "Tạo việc trọng tâm",
    },
    "ket-qua-muc-tieu": {
      title: "Kết quả mục tiêu",
      description: "Nhìn lại kết quả đã đạt, chưa đạt, bài học rút ra và hành động tiếp theo.",
      rows: ketQuaMucTieu,
    },
  },
  thiDua: {
    "tong-quan": {
      title: "Tổng quan thi đua",
      description: "Một trang ngắn để nhân viên thấy điểm tạm tính, hạng, thu nhập và việc cần cải thiện.",
      stats: tongQuanThiDuaMoi.stats,
      rows: phieuThiDua,
    },
    "ket-qua-cong-viec": {
      title: "Kết quả công việc",
      description: "Điểm công việc lấy từ việc được giao, việc đúng hạn, việc phải làm lại và giờ thực tế.",
      rows: ketQuaCongViec,
      action: "Tính lại kết quả công việc",
    },
    "danh-gia-helpdesk": {
      title: "Đánh giá từ Helpdesk",
      description: "Phản hồi khách hàng được phân loại nguyên nhân, điểm nhạy cảm phải qua leader duyệt.",
      rows: danhGiaHelpdesk,
      action: "Tính lại Helpdesk",
    },
    "ghi-nhan-dong-gop": {
      title: "Ghi nhận đóng góp",
      description: "Ghi nhận việc tốt, có điểm đề xuất và điểm được duyệt rõ ràng.",
      rows: ghiNhanDongGop,
      action: "Tạo ghi nhận",
    },
    "diem-can-cai-thien": {
      title: "Điểm cần cải thiện",
      description: "Không gọi là điểm phạt; mỗi điểm cần có nguyên nhân, hướng khắc phục và người hỗ trợ.",
      rows: diemCanCaiThien,
      action: "Tạo điểm cần cải thiện",
    },
    "tu-danh-gia": {
      title: "Tự đánh giá",
      description: "Nhân viên tự nhìn lại việc đã làm, minh chứng và điều cần cải thiện.",
      rows: phieuThiDua,
      action: "Gửi tự đánh giá",
    },
    "leader-duyet": {
      title: "Leader duyệt",
      description: "Leader duyệt ghi nhận, điểm cần cải thiện, Helpdesk nhạy cảm và điểm cuối kỳ.",
      rows: leaderDuyet,
      action: "Duyệt mục đã chọn",
    },
    "bang-xep-hang": {
      title: "Bảng xếp hạng",
      description: "Có thể xem theo tuần, tháng, quý, năm; mục tiêu là ghi nhận và hỗ trợ, không gây áp lực.",
      rows: bangXepHangMoi,
    },
    "in-giay-chung-nhan": {
      title: "In giấy chứng nhận thi đua",
      description: "In giấy chứng nhận theo tuần, tháng, quý hoặc năm với 3 ghi nhận chính, ngắn gọn và trang trọng.",
      rows: giayChungNhanThiDua,
      certificate: true,
    },
    "gop-y-cai-thien": {
      title: "Góp ý & cải thiện",
      description: "Chuyển góp ý thành hành động cải thiện cụ thể, có người hỗ trợ và thời hạn.",
      rows: diemCanCaiThien,
    },
  },
  thuNhap: {
    "tong-quan": {
      title: "Tổng quan thu nhập",
      description: thuNhapTongQuan.canhBao,
      stats: thuNhapTongQuan.stats,
      rows: thuNhapTamTinh,
    },
    "cham-cong": {
      title: "Chấm công",
      description: "Check-in, check-out và trạng thái trong ngày được hiển thị đơn giản, dễ hiểu.",
      rows: chamCong,
      action: "Chấm công",
    },
    "bang-cong": {
      title: "Bảng công",
      description: "Bảng công chỉ được dùng cho bảng lương khi đã được xác nhận và duyệt.",
      rows: bangCong,
      action: "Tạo bảng công",
    },
    "thu-nhap-tam-tinh": {
      title: "Thu nhập tạm tính",
      description: "Thu nhập tạm tính thay đổi theo điểm thi đua, ngày công và khoản đã duyệt.",
      rows: thuNhapTamTinh,
      action: "Tính lại thu nhập",
    },
    "du-tinh-thang": {
      title: "Thu nhập dự tính tháng",
      description: "Dự tính đến cuối tháng dựa trên thu nhập đã ghi nhận, bình quân ngày và khoản cố định.",
      rows: duTinhThang,
    },
    "phieu-thu-nhap-ca-nhan": {
      title: "Phiếu thu nhập cá nhân",
      description: "Nhân viên xem nguồn gốc điểm, bảng công và khoản thu nhập của mình.",
      rows: phieuThuNhapCaNhan,
    },
  },
  luongThuong: {
    "luong-3p": {
      title: "Thiết lập lương 3P",
      description: "Hiển thị đơn giản thành lương theo vị trí, năng lực cá nhân và kết quả thực hiện.",
      rows: cauHinhLuong3P,
      action: "Thêm thiết lập",
    },
    "quy-che": {
      title: "Quy chế lương thưởng",
      description: "Quản lý công thức, điều kiện hưởng và trạng thái áp dụng của quy chế.",
      rows: quyCheLuongThuong,
      action: "Tạo quy chế",
    },
    "phu-cap-phuc-loi": {
      title: "Phụ cấp & phúc lợi",
      description: "Các khoản phổ biến như ăn trưa, điện thoại, xăng xe, đào tạo và thưởng chất lượng.",
      rows: phuCapPhucLoi,
      action: "Thêm khoản",
    },
    "bang-luong": {
      title: "Bảng lương",
      description: "Bảng lương chỉ chốt khi bảng công và điểm thi đua đã chốt.",
      rows: bangLuong,
      action: "Tạo bảng lương",
    },
    "duyet-bang-luong": {
      title: "Duyệt bảng lương",
      description: "Leader và giám đốc xem khoản ảnh hưởng thu nhập trước khi chốt.",
      rows: bangLuong.filter((item) => item.trangThai !== "Đã chốt"),
      action: "Duyệt bảng lương",
    },
    "bao-cao": {
      title: "Báo cáo lương thưởng",
      description: "Theo dõi quỹ lương tạm tính, khoản chờ duyệt và mức hợp lý của thu nhập.",
      stats: baoCaoLuongThuong.stats,
      rows: bangLuong,
    },
  },
};

const screenAliases = {
  thiDua: {
    "ky-thi-dua": "tong-quan",
    "bo-tieu-chi": "ket-qua-cong-viec",
    "cham-diem": "leader-duyet",
    "gia-tri-con-nguoi": "tong-quan",
    "nhat-ky-ghi-nhan": "ghi-nhan-dong-gop",
    "diem-cong-van-hoa": "ghi-nhan-dong-gop",
    "diem-can-nhac-nho": "diem-can-cai-thien",
    "bao-cao": "bang-xep-hang",
  },
};

export function getModuleScreen(moduleKey, screenKey) {
  const alias = screenAliases[moduleKey]?.[screenKey];
  return screens[moduleKey]?.[screenKey] || screens[moduleKey]?.[alias] || null;
}

export function getModuleMetadata(moduleKey, screenKey) {
  const screen = getModuleScreen(moduleKey, screenKey);
  return {
    title: screen?.title || "TCKN BMS",
    description: screen?.description || "Màn hình quản trị nội bộ TCKN BMS.",
  };
}

export default function SimpleModulePage({ moduleKey, screenKey }) {
  const screen = getModuleScreen(moduleKey, screenKey);

  if (!screen) {
    return (
      <ScreenHeader
        description="Route chưa có cấu hình hiển thị. Vui lòng kiểm tra lại đường dẫn."
        title="Chưa có dữ liệu"
      />
    );
  }

  const rows = normalizeRows(screen.rows || []);

  return (
    <>
      <ScreenHeader
        action={screen.action ? <Button>{screen.action}</Button> : null}
        description={screen.description}
        title={screen.title}
      />

      {screen.stats ? (
        <div className="mb-6">
          <ThiDuaStatGrid stats={screen.stats} />
        </div>
      ) : null}

      {screen.certificate ? (
        <div className="mb-6 space-y-5">
          <div className="flex flex-col gap-3 rounded-bms-card border border-bms-border bg-white p-4 sm:flex-row sm:items-end sm:justify-between print:hidden">
            <label className="block max-w-xs">
              <span className="text-sm font-extrabold text-bms-muted">Chọn kỳ in</span>
              <select className="mt-1 min-h-11 w-full rounded-bms-control border border-bms-border bg-white px-3 text-base font-bold text-bms-text">
                <option>Tuần</option>
                <option>Tháng</option>
                <option>Quý</option>
                <option>Năm</option>
              </select>
            </label>
            <PrintButton>In giấy chứng nhận</PrintButton>
          </div>

          <div className="grid gap-5 xl:grid-cols-2 print:block">
            {giayChungNhanThiDua.map((item) => (
              <section
                className="break-inside-avoid rounded-[20px] border-2 border-blue-100 bg-white p-8 shadow-[var(--shadow-card)] print:mb-6 print:shadow-none"
                key={item.id}
              >
                <div className="border-b border-blue-100 pb-5 text-center">
                  <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-bms-primary">TCKN BMS</p>
                  <h2 className="mt-3 text-3xl font-black text-bms-text">Giấy chứng nhận thi đua</h2>
                  <p className="mt-2 text-base font-semibold text-bms-muted">
                    {item.ky} · {item.thoiGian}
                  </p>
                </div>

                <div className="py-6 text-center">
                  <p className="text-sm font-bold uppercase text-bms-muted">Trân trọng ghi nhận</p>
                  <p className="mt-2 text-3xl font-black text-bms-primary">{item.nhanVien}</p>
                  <p className="mt-1 text-base font-bold text-slate-700">{item.team}</p>
                  <p className="mt-5 rounded-bms-control bg-green-50 px-4 py-3 text-xl font-black text-bms-success">
                    {item.danhHieu}
                  </p>
                </div>

                <div className="rounded-bms-control bg-bms-subtle p-4">
                  <p className="text-sm font-extrabold uppercase text-bms-muted">Mục tiêu ghi nhận</p>
                  <p className="mt-1 text-base font-bold text-bms-text">{item.mucTieuGhiNhan}</p>
                  <ul className="mt-4 space-y-2 text-base font-semibold leading-7 text-slate-900">
                    <li>1. {item.ghiNhan1}</li>
                    <li>2. {item.ghiNhan2}</li>
                    <li>3. {item.ghiNhan3}</li>
                  </ul>
                </div>

                <div className="mt-6 grid gap-4 text-sm font-bold text-slate-700 sm:grid-cols-3">
                  <div>
                    <p className="text-bms-muted">Điểm thi đua</p>
                    <p className="text-xl font-black text-bms-primary">{item.diemThiDua}</p>
                  </div>
                  <div>
                    <p className="text-bms-muted">Người duyệt</p>
                    <p>{item.nguoiDuyet}</p>
                  </div>
                  <div>
                    <p className="text-bms-muted">Ngày in</p>
                    <p>{item.ngayIn}</p>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      ) : null}

      <Card title={screen.title}>
        <ThiDuaTable columns={columnsFromRows(rows)} rows={rows} />
      </Card>
    </>
  );
}
