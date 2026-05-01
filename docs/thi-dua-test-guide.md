# Hướng dẫn test nhóm Thi đua & Giá trị con người

## Màn hình

1. Mở `/thi-dua/tong-quan` để kiểm tra sidebar active và các card tổng quan.
2. Mở lần lượt các route:
   - `/thi-dua/ky-thi-dua`
   - `/thi-dua/bo-tieu-chi`
   - `/thi-dua/cham-diem`
   - `/thi-dua/tu-danh-gia`
   - `/thi-dua/bang-xep-hang`
   - `/thi-dua/gia-tri-con-nguoi`
   - `/thi-dua/nhat-ky-ghi-nhan`
   - `/thi-dua/diem-cong-van-hoa`
   - `/thi-dua/diem-can-nhac-nho`
   - `/thi-dua/gop-y-cai-thien`
   - `/thi-dua/bao-cao`
3. Thu nhỏ trình duyệt để kiểm tra bảng chuyển sang card trên mobile.

## API

1. Tạo kỳ thi đua mới:
   `POST /api/thi-dua/ky-thi-dua`
2. Tạo tiêu chí thi đua:
   `POST /api/thi-dua/bo-tieu-chi`
3. Nhân viên tự đánh giá:
   `POST /api/thi-dua/phieu-danh-gia`
4. Trưởng nhóm chấm điểm:
   `PATCH /api/thi-dua/phieu-danh-gia/[id]`
5. Tạo ghi nhận hành vi:
   `POST /api/thi-dua/nhat-ky-ghi-nhan`

## Kỳ vọng tính điểm

1. Ghi nhận tích cực mức Trung bình tự đề xuất `+3`.
2. Lỗi cần sửa mức Cao tự đề xuất `-8`.
3. Điểm cộng văn hóa tối đa được tính là `10` điểm/kỳ.
4. Điểm cần nhắc nhở tối đa bị trừ là `20` điểm/kỳ.
5. Điểm cuối cùng luôn nằm trong khoảng `0` đến `100`.
6. Bảng xếp hạng được sắp xếp giảm dần theo điểm cuối cùng.

## Quyền truy cập cơ bản

1. Admin và Giám đốc xem toàn bộ dữ liệu.
2. Trưởng nhóm chỉ xem dữ liệu theo `teamId`.
3. Nhân viên chỉ xem dữ liệu có `nhanVienId` của mình.
