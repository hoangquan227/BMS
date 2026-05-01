# Hướng dẫn test Phân tích hoạt động làm việc

## Route màn hình

1. `/phan-tich-hoat-dong/tong-quan`
2. `/phan-tich-hoat-dong/ung-dung`
3. `/phan-tich-hoat-dong/website`
4. `/phan-tich-hoat-dong/trong-bms`
5. `/phan-tich-hoat-dong/thoi-gian-theo-cong-viec`
6. `/phan-tich-hoat-dong/canh-bao-bat-thuong`
7. `/phan-tich-hoat-dong/bao-cao-nhan-vien`
8. `/phan-tich-hoat-dong/bao-cao-team`
9. `/phan-tich-hoat-dong/cau-hinh`
10. `/phan-tich-hoat-dong/chinh-sach-du-lieu`

## API tracking

1. `GET /api/phan-tich-hoat-dong/tong-quan`
2. `POST /api/phan-tich-hoat-dong/trong-bms/page-view`
3. `POST /api/phan-tich-hoat-dong/trong-bms/feature-event`
4. `POST /api/phan-tich-hoat-dong/task-activity`
5. `PATCH /api/phan-tich-hoat-dong/canh-bao-bat-thuong/[id]`
6. `GET /api/phan-tich-hoat-dong/cau-hinh`
7. `PATCH /api/phan-tich-hoat-dong/cau-hinh`
8. `GET /api/phan-tich-hoat-dong/chinh-sach-du-lieu`

## Kỳ vọng

1. Khi đổi page trong BMS, tracker gửi route, thời gian vào, thời gian rời và tổng thời lượng.
2. Khi bấm nút hoặc link, tracker gửi feature event ở mức tên thao tác, không đọc nội dung form.
3. Cảnh báo bất thường chỉ để leader xem xét, không kết luận vi phạm.
4. Chính sách dữ liệu nói rõ không keylogger, không mật khẩu, không chat cá nhân, không email cá nhân, không tự động chụp màn hình.
5. Dữ liệu hoạt động không tự động trừ điểm thi đua, không tự động trừ lương.
