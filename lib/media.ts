// File này dùng để lưu trữ các đường link ảnh (URL) mà bạn tìm được trên mạng.
// Bạn chỉ cần dán link ảnh vào trong các dấu ngoặc kép ("...") là ảnh sẽ tự động hiển thị trên web.

// 1. Ảnh tĩnh/Ảnh minh họa cho các trận chiến
// Key bên trái là ID của trận chiến (không được đổi), bên phải là mảng chứa các link ảnh.
// Bạn có thể để nhiều link nếu trận đó có nhiều ảnh.
export const BATTLE_IMAGES: Record<string, string[]> = {
  "toan-quoc-khang-chien": [
    // "https://link-anh-cua-ban.com/hanoi-1946.jpg",
  ],
  "dien-bien-phu-tren-khong": [
    // "https://link-anh.com/b52-chay.jpg",
  ],
  "chien-dich-dien-bien-phu": [
    // "https://link-anh.com/ham-de-cat.jpg",
    // "https://link-anh.com/keo-phao.jpg"
  ],
  "chien-dich-ho-chi-minh": [
    // "https://link-anh.com/xe-tang-843.jpg",
  ],
  "chien-dich-tay-nguyen": [],
  "thanh-co-quang-tri": [],
  "giai-phong-da-nang": [],
  "chien-dich-xuan-loc": [],
  "nam-bo-khang-chien": [],
  "ham-rong": [],
  "hai-chien-hoang-sa": [],
  "hai-chien-truong-sa": [],
  "buon-ma-thuot": [],
  "vi-xuyen": [],
  "chien-dich-tay-bac": [],
  "dong-khoi-ben-tre": [],
  "bao-ve-hai-phong": [],
  "phong-toa-cang-hai-phong": [],
  "bien-gioi-duong-4": [],
  "chien-tranh-bien-gioi-1979": [],
  "chien-dich-bien-gioi": [],
  "chien-dich-hoa-binh": [],
  "tet-mau-than-hue": [],
  "giai-phong-hue": [],
  "xo-viet-nghe-tinh": [],
  "viet-bac-thu-dong": [],
  "giai-phong-phuoc-long": [],
  "chien-khu-c": [],
  "tuyen-lua-quang-binh": [],
  "tham-sat-my-lai": [],
  "dong-bac-chong-my": [],
};

// 2. Bản đồ tác chiến / Sơ đồ tiến công
// Dành cho các hình ảnh sơ đồ mũi tên đỏ, xanh chỉ đường tiến quân.
export const BATTLE_MAPS: Record<string, string[]> = {
  "chien-dich-dien-bien-phu": [
    // "https://link-ban-do-tien-cong.com/dien-bien-phu-map.jpg"
  ],
  "chien-dich-ho-chi-minh": [],
  "chien-dich-tay-nguyen": [],
  "thanh-co-quang-tri": [],
  "chien-tranh-bien-gioi-1979": [],
};

// 3. Hình ảnh các vị Tướng / Người chỉ huy
// Key là tên hoặc ID của vị tướng
export const COMMANDER_IMAGES: Record<string, string> = {
  "Võ Nguyên Giáp": "", // "https://link-anh.com/tuong-giap.jpg"
  "Văn Tiến Dũng": "",
  "Hoàng Minh Thảo": "",
  "Lê Trọng Tấn": "",
  "Trần Văn Trà": "",
  "Chủ tịch Hồ Chí Minh": "",
  "Nguyễn Thị Định": "",
};
