# Hướng dẫn test Hướng đi, Thi đua, Thu nhập và Lương thưởng

## Route cần mở

1. Hướng đi & Mục tiêu:
   `/muc-tieu/tam-nhin`, `/muc-tieu/su-menh`, `/muc-tieu/gia-tri-con-nguoi`, `/muc-tieu/muc-tieu-nam`, `/muc-tieu/muc-tieu-quy`, `/muc-tieu/muc-tieu-thang`, `/muc-tieu/viec-trong-tam`, `/muc-tieu/ket-qua-muc-tieu`.
2. Thi đua & Ghi nhận:
   `/thi-dua/tong-quan`, `/thi-dua/ket-qua-cong-viec`, `/thi-dua/danh-gia-helpdesk`, `/thi-dua/ghi-nhan-dong-gop`, `/thi-dua/diem-can-cai-thien`, `/thi-dua/tu-danh-gia`, `/thi-dua/leader-duyet`, `/thi-dua/bang-xep-hang`, `/thi-dua/gop-y-cai-thien`.
3. Chấm công & Thu nhập:
   `/thu-nhap/tong-quan`, `/thu-nhap/cham-cong`, `/thu-nhap/bang-cong`, `/thu-nhap/thu-nhap-tam-tinh`, `/thu-nhap/du-tinh-thang`, `/thu-nhap/phieu-thu-nhap-ca-nhan`.
4. Lương thưởng & Phúc lợi:
   `/luong-thuong/luong-3p`, `/luong-thuong/quy-che`, `/luong-thuong/phu-cap-phuc-loi`, `/luong-thuong/bang-luong`, `/luong-thuong/duyet-bang-luong`, `/luong-thuong/bao-cao`.

## API nhanh

1. `GET /api/muc-tieu/muc-tieu-nam`
2. `POST /api/muc-tieu/viec-trong-tam`
3. `GET /api/thi-dua/ket-qua-cong-viec`
4. `POST /api/thi-dua/tinh-lai-ket-qua-cong-viec`
5. `GET /api/thi-dua/danh-gia-helpdesk`
6. `GET /api/thi-dua/leader-duyet`
7. `GET /api/thu-nhap/tong-quan`
8. `POST /api/thu-nhap/tinh-lai-thu-nhap-tam-tinh`
9. `GET /api/luong-thuong/bang-luong`
10. `POST /api/luong-thuong/duyet-bang-luong`

## Kỳ vọng

1. Ticket khách chưa hài lòng nhưng nguyên nhân là khách thiếu dữ liệu phải nằm ở trạng thái chờ duyệt, không tự động trừ điểm.
2. Điểm chưa duyệt chỉ hiển thị tạm tính, không đưa vào bảng lương chính thức.
3. Bảng lương chưa chốt khi bảng công hoặc điểm thi đua chưa chốt.
4. Thu nhập tạm tính đổi khi gọi API tính lại thu nhập.
5. Nhân viên thấy điểm, hạng, thu nhập tạm tính và việc cần cải thiện.
6. Leader thấy các mục cần duyệt.
7. Giám đốc thấy được quỹ lương tạm tính và tình hình team.
