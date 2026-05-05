import { BattleInfo, HistoryItem } from "@/types";

export const ALL_PROVINCES = [
  "An Giang", "Bà Rịa - Vũng Tàu", "Bạc Liêu", "Bắc Giang", "Bắc Kạn", "Bắc Ninh", "Bến Tre", "Bình Dương", "Bình Định", "Bình Phước", "Bình Thuận", "Cà Mau", "Cao Bằng", "Cần Thơ", "Đà Nẵng", "Đắk Lắk", "Đắk Nông", "Điện Biên", "Đồng Nai", "Đồng Tháp", "Gia Lai", "Hà Giang", "Hà Nam", "Hà Nội", "Hà Tĩnh", "Hải Dương", "Hải Phòng", "Hậu Giang", "Hòa Bình", "Hưng Yên", "Khánh Hòa", "Kiên Giang", "Kon Tum", "Lai Châu", "Lạng Sơn", "Lào Cai", "Lâm Đồng", "Long An", "Nam Định", "Nghệ An", "Ninh Bình", "Ninh Thuận", "Phú Thọ", "Phú Yên", "Quảng Bình", "Quảng Nam", "Quảng Ngãi", "Quảng Ninh", "Quảng Trị", "Sóc Trăng", "Sơn La", "Tây Ninh", "Thái Bình", "Thái Nguyên", "Thanh Hóa", "Thừa Thiên Huế", "Tiền Giang", "TP. Hồ Chí Minh", "Trà Vinh", "Tuyên Quang", "Vĩnh Long", "Vĩnh Phúc", "Yên Bái", "Quần đảo Hoàng Sa", "Quần đảo Trường Sa"
];

export const MAP_DATA: Record<string, Record<string, BattleInfo>> = {
  khangphap: {
    "Hà Nội": {
      name: "Hà Nội",
      role: "Thủ đô kháng chiến - Nơi nổ súng đầu tiên",
      summary: "Thủ đô ngàn năm văn hiến, nơi chứng kiến tiếng súng mở đầu toàn quốc kháng chiến và cuộc đọ sức thần kỳ Điện Biên Phủ trên không. Hà Nội luôn là trái tim hồng, niềm kiêu hãnh của cả dân tộc.",
      hot: true,
      totalBattles: 2,
      battles: [
        {
          id: "hn-1946",
          name: "Lời kêu gọi Toàn quốc kháng chiến",
          year: "19/12/1946",
          summary: "Chủ tịch Hồ Chí Minh ra lời kêu gọi toàn dân đứng lên kháng chiến chống thực dân Pháp.",
          troops: "Vệ quốc quân, Tự vệ Hà Nội",
          casualty: "Kìm chân địch 60 ngày đêm",
          result: "Thành công bảo vệ đầu não",
          events: [
            { year: "1946", text: "Tiếng súng nổ tại pháo đài Láng khởi đầu kháng chiến toàn quốc." }
          ]
        }
      ]
    },
    "Điện Biên": {
      name: "Điện Biên",
      role: "Pháo đài không thể công phá",
      summary: "Mảnh đất biên cương anh hùng, nơi ghi dấu chiến công hiển hách lừng lẫy năm châu, chấn động địa cầu.",
      hot: true,
      totalBattles: 1,
      battles: [
        {
          id: "dbp-1954",
          name: "Chiến dịch Điện Biên Phủ",
          year: "1954",
          summary: "Trận quyết chiến chiến lược đánh bại hoàn toàn tập đoàn cứ điểm mạnh nhất Đông Dương.",
          troops: "5 Đại đoàn chủ lực",
          casualty: "Hàng vạn thương vong hai phía",
          result: "Pháp đầu hàng vô điều kiện",
          events: [
            { year: "07/05/1954", text: "Lá cờ Quyết chiến Quyết thắng tung bay trên nóc hầm De Castries." }
          ]
        }
      ]
    },
    "Bắc Kạn": {
      name: "Bắc Kạn",
      role: "Thủ đô kháng chiến - ATK Việt Bắc",
      summary: "Bắc Kạn là trung tâm của căn cứ địa Việt Bắc, nơi đặt các cơ quan đầu não của Đảng và Chính phủ trong những năm đầu kháng chiến chống Pháp.",
      hot: true,
      totalBattles: 2,
      battles: [
        {
          id: "bk-atk",
          name: "Xây dựng An toàn khu (ATK)",
          year: "1947",
          summary: "Xây dựng hệ thống hầm hào, công sở trong lòng núi rừng để bảo vệ bộ máy lãnh đạo kháng chiến.",
          troops: "Vệ quốc quân và nhân dân địa phương",
          casualty: "N/A",
          result: "Bảo vệ an toàn đầu não kháng chiến",
          events: [
            { year: "1947", text: "Chủ tịch Hồ Chí Minh và Trung ương Đảng chuyển lên ATK Bắc Kạn chỉ đạo kháng chiến." }
          ]
        },
        {
          id: "bk-1947",
          name: "Chống cuộc tập kích đường không của Pháp",
          year: "07/10/1947",
          summary: "Pháp nhảy dù xuống Bắc Kạn nhằm tiêu diệt cơ quan đầu não của ta nhưng thất bại hoàn toàn.",
          troops: "Quân dân tại chỗ",
          casualty: "Địch thiệt hại nặng nề",
          result: "Bẻ gãy âm mưu đánh nhanh thắng nhanh của Pháp",
          events: [
            { year: "07/10/1947", text: "Quân Pháp nhảy dù xuống thị xã Bắc Kạn mở đầu chiến dịch Việt Bắc Thu Đông." }
          ]
        }
      ]
    }
  },
  khangmy: {
    "Quảng Trị": {
      name: "Quảng Trị",
      role: "Vùng đất lửa kiên cường",
      summary: "Vùng đất lửa kiên cường bên dòng sông Thạch Hãn, nơi mỗi tấc đất đều thấm đẫm máu xương của các anh hùng liệt sĩ.",
      hot: true,
      totalBattles: 1,
      battles: [
        {
          id: "qt-1972",
          name: "81 ngày đêm Thành cổ Quảng Trị",
          year: "1972",
          summary: "Cuộc đọ sức tàn khốc bảo vệ Thành cổ trước hỏa lực kinh hoàng của Mỹ-Ngụy.",
          troops: "Sư đoàn 308, 304, 325...",
          casualty: "Hơn 10.000 chiến sĩ hy sinh",
          result: "Giữ vững trận địa",
          events: [
            { year: "1972", text: "Cuộc chiến đấu tàn khốc nhất trong lịch sử chiến tranh Việt Nam." }
          ]
        }
      ]
    }
  }
};

export const COMMANDERS = [
  {
    id: "giap",
    name: "Võ Nguyên Giáp",
    title: "Đại tướng, Tổng tư lệnh",
    province: "Quảng Bình",
    era: "khangphap, khangmy",
    description: "Người anh cả của Quân đội nhân dân Việt Nam, thiên tài quân sự thế giới.",
    imageUrl: "/images/commanders/vo-nguyen-giap.jpg"
  }
];

export const HISTORY_ITEMS: HistoryItem[] = [
  {
    id: "1",
    title: "Toàn quốc kháng chiến",
    date: "19/12/1946",
    era: "Kháng Pháp",
    tag: "Mở đầu",
    description: "Đêm 19/12/1946, Chủ tịch Hồ Chí Minh ra Lời kêu gọi toàn quốc kháng chiến. Quân dân Hà Nội chiến đấu 60 ngày đêm trong lòng địch, giam chân 6.000 quân Pháp để hậu phương kháng chiến được xây dựng vững chắc.",
    commander: "Chủ tịch Hồ Chí Minh, Tướng Vương Thừa Vũ",
    troops: "Vệ quốc quân + Tự vệ Hà Nội",
    casualty: "Kìm chân địch 60 ngày đêm",
    result: "Bảo toàn lực lượng kháng chiến",
    significance: "Mở đầu cuộc kháng chiến trường kỳ 9 năm chống Pháp",
  },
  {
    id: "2",
    title: "Chiến dịch Việt Bắc Thu Đông",
    date: "7/10 – 22/12/1947",
    era: "Kháng Pháp",
    tag: "Phản công",
    description: "Pháp huy động 12.000 quân tấn công căn cứ địa Việt Bắc hòng tiêu diệt cơ quan đầu não kháng chiến. Quân dân ta phản công quyết liệt, tiêu diệt và bắt sống hàng nghìn tên địch.",
    commander: "Đại tướng Võ Nguyên Giáp",
    troops: "Các đại đoàn chủ lực + dân quân du kích",
    casualty: "Địch: 6.000 bị loại, 16 máy bay bị bắn hạ",
    result: "Phá tan âm mưu đánh nhanh thắng nhanh của Pháp",
    significance: "Khẳng định đường lối kháng chiến trường kỳ của Đảng",
  },
  {
    id: "3",
    title: "Chiến dịch Biên Giới",
    date: "16/9 – 14/10/1950",
    era: "Kháng Pháp",
    tag: "Bước ngoặt",
    description: "Ta chủ động mở chiến dịch tấn công trên tuyến biên giới Việt–Trung, tiêu diệt nhiều binh đoàn Pháp, khai thông biên giới, nối liền với phe xã hội chủ nghĩa.",
    commander: "Đại tướng Võ Nguyên Giáp, Chủ tịch Hồ Chí Minh trực tiếp chỉ đạo",
    troops: "Đại đoàn 308, 209, 174",
    casualty: "Địch: 8.000 bị loại, thu 3.000 tấn vũ khí",
    result: "Khai thông biên giới Việt–Trung",
    significance: "Bước ngoặt chiến lược, ta giành quyền chủ động trên chiến trường",
  },
  {
    id: "4",
    title: "Chiến dịch Hòa Bình",
    date: "10/12/1951 – 25/2/1952",
    era: "Kháng Pháp",
    tag: "Tiến công",
    description: "Quân ta tiến công địch ở Hòa Bình, buộc Pháp phải rút khỏi vùng này sau khi chịu tổn thất nặng nề. Chiến dịch củng cố vùng tự do liên khu 3 và 4.",
    commander: "Đại tướng Võ Nguyên Giáp",
    troops: "Đại đoàn 308, 312, 320",
    casualty: "Địch: 22.000 bị loại",
    result: "Pháp rút khỏi Hòa Bình",
    significance: "Mở rộng vùng tự do, củng cố hậu phương kháng chiến",
  },
  {
    id: "5",
    title: "Chiến dịch Tây Bắc",
    date: "14/10 – 10/12/1952",
    era: "Kháng Pháp",
    tag: "Tiến công",
    description: "Quân ta giải phóng vùng Tây Bắc rộng lớn gồm Sơn La, Lai Châu, tạo bàn đạp tiến lên Điện Biên Phủ. Đây là chiến dịch quy mô lớn nhất từ trước đến nay.",
    commander: "Đại tướng Võ Nguyên Giáp",
    troops: "Đại đoàn 308, 312, 316",
    casualty: "Địch: 6.000 bị loại",
    result: "Giải phóng toàn bộ Tây Bắc",
    significance: "Tạo bàn đạp chiến lược cho chiến dịch Điện Biên Phủ",
  },
  {
    id: "6",
    title: "Chiến dịch Điện Biên Phủ",
    date: "13/3 – 7/5/1954",
    era: "Kháng Pháp",
    tag: "Đỉnh điểm",
    description: "Chiến dịch lịch sử đập tan tập đoàn cứ điểm mạnh nhất Đông Dương. 56 ngày đêm chiến đấu kiên cường, quân dân ta đã làm nên chiến thắng vang dội khắp năm châu bốn biển.",
    commander: "Đại tướng Võ Nguyên Giáp",
    troops: "5 Đại đoàn, 55.000 quân + 261.000 dân công",
    casualty: "Pháp: 16.200 bị bắt, 2.293 tử trận. Ta: ~8.000 hy sinh",
    result: "Pháp đầu hàng, ký Hiệp định Genève 20/7/1954",
    significance: "Chấm dứt 9 năm kháng chiến chống Pháp, lập lại hòa bình ở Đông Dương",
  },
  {
    id: "7",
    title: "Đồng Khởi",
    date: "17/1/1960",
    era: "Kháng Mỹ",
    tag: "Mở đầu",
    description: "Phong trào Đồng Khởi bùng nổ tại Bến Tre do bà Nguyễn Thị Định lãnh đạo, nhanh chóng lan rộng khắp miền Nam. Nhân dân nổi dậy phá ấp chiến lược, giải phóng nhiều vùng nông thôn.",
    commander: "Nguyễn Thị Định",
    troops: "Nhân dân miền Nam",
    casualty: "Phá vỡ hàng nghìn ấp chiến lược",
    result: "Mặt trận Giải phóng miền Nam ra đời 20/12/1960",
    significance: "Mở đầu cao trào cách mạng toàn miền Nam chống Mỹ-Diệm",
  },
  {
    id: "8",
    title: "Chiến thắng Ấp Bắc",
    date: "2/1/1963",
    era: "Kháng Mỹ",
    tag: "Chiến thắng",
    description: "Trận Ấp Bắc ở Mỹ Tho, lần đầu tiên quân Giải phóng đánh thắng quân đội Sài Gòn được Mỹ trang bị hiện đại gồm xe bọc thép M113 và trực thăng.",
    commander: "Tướng Nguyễn Chí Thanh",
    troops: "Tiểu đoàn 514 + du kích địa phương",
    casualty: "Địch: 450 bị loại, 3 máy bay bị bắn hạ",
    result: "Phá tan huyền thoại bất khả chiến bại của M113",
    significance: "Chứng minh quân Giải phóng có thể đánh thắng Mỹ-ngụy",
  },
  {
    id: "9",
    title: "Chiến dịch Mậu Thân",
    date: "30/1/1968",
    era: "Kháng Mỹ",
    tag: "Bước ngoặt",
    description: "Tổng tiến công và nổi dậy Tết Mậu Thân đồng loạt tấn công 64 thành phố, thị xã toàn miền Nam. Tuy không giữ được các mục tiêu nhưng tạo chấn động chính trị lớn tại Mỹ.",
    commander: "Đại tướng Võ Nguyên Giáp, Tướng Nguyễn Chí Thanh",
    troops: "Hơn 80.000 quân Giải phóng",
    casualty: "Ta: ~45.000 hy sinh. Địch: thiệt hại nặng nề",
    result: "Johnson tuyên bố không tái tranh cử, Mỹ ngồi vào bàn đàm phán",
    significance: "Bước ngoặt chiến lược buộc Mỹ xuống thang chiến tranh",
  },
  {
    id: "10",
    title: "Chiến dịch Đường 9 - Nam Lào",
    date: "30/1 – 23/3/1971",
    era: "Kháng Mỹ",
    tag: "Phản công",
    description: "Mỹ-ngụy mở chiến dịch Lam Sơn 719 tấn công đường 9 - Nam Lào hòng cắt đứt đường Hồ Chí Minh. Quân ta phản công tiêu diệt hơn 20.000 địch, đập tan chiến lược Việt Nam hóa chiến tranh.",
    commander: "Tướng Lê Trọng Tấn",
    troops: "Quân đoàn 70B + các sư đoàn chủ lực",
    casualty: "Địch: 22.000 bị loại, 556 xe tăng, 651 máy bay",
    result: "Đập tan chiến dịch Lam Sơn 719",
    significance: "Phá sản chiến lược Việt Nam hóa chiến tranh của Nixon",
  },
  {
    id: "11",
    title: "Chiến dịch Xuân Hè - Mùa hè đỏ lửa",
    date: "30/3 – 9/1972",
    era: "Kháng Mỹ",
    tag: "Tiến công",
    description: "Quân ta mở cuộc tiến công chiến lược trên 3 hướng: Quảng Trị, Tây Nguyên và Đông Nam Bộ. Thành cổ Quảng Trị trở thành biểu tượng bi tráng với 81 ngày đêm chiến đấu.",
    commander: "Tướng Lê Trọng Tấn, Tướng Hoàng Minh Thảo",
    troops: "5 Quân đoàn + lực lượng dự bị chiến lược",
    casualty: "Cả hai phía: hàng chục nghìn thương vong",
    result: "Giải phóng Quảng Trị 1/5/1972",
    significance: "Tạo thế mạnh trên bàn đàm phán Paris",
  },
  {
    id: "12",
    title: "Điện Biên Phủ trên không",
    date: "18 – 29/12/1972",
    era: "Kháng Mỹ",
    tag: "Đỉnh điểm",
    description: "12 ngày đêm Nixon dùng B-52 ném bom rải thảm Hà Nội và Hải Phòng. Quân dân ta bắn hạ 81 máy bay trong đó có 34 chiếc B-52, buộc Mỹ phải ký Hiệp định Paris.",
    commander: "Đại tướng Võ Nguyên Giáp",
    troops: "Bộ đội Phòng không - Không quân",
    casualty: "Bắn hạ 81 máy bay, 34 chiếc B-52. Phố Khâm Thiên bị san phẳng",
    result: "Mỹ ký Hiệp định Paris 27/1/1973",
    significance: "Buộc Mỹ rút quân, chấm dứt can thiệp trực tiếp vào VN",
  },
  {
    id: "13",
    title: "Chiến dịch Tây Nguyên",
    date: "10 – 24/3/1975",
    era: "Kháng Mỹ",
    tag: "Tổng tiến công",
    description: "Đòn then chốt mở màn cuộc Tổng tiến công mùa Xuân 1975. Tấn công bất ngờ vào Buôn Ma Thuột khiến toàn bộ Tây Nguyên sụp đổ chỉ trong 2 tuần.",
    commander: "Tướng Hoàng Minh Thảo",
    troops: "Quân đoàn 3 + Sư đoàn 316, 320",
    casualty: "Địch: 2 sư đoàn bị tiêu diệt, toàn Tây Nguyên tan rã",
    result: "Toàn bộ Tây Nguyên giải phóng",
    significance: "Tạo bước ngoặt quyết định cho chiến dịch Hồ Chí Minh",
  },
  {
    id: "14",
    title: "Chiến dịch Hồ Chí Minh",
    date: "26 – 30/4/1975",
    era: "Kháng Mỹ",
    tag: "Thống nhất",
    description: "5 cánh quân đồng loạt tấn công bao vây Sài Gòn. 10:45 ngày 30/4/1975, xe tăng 843 húc đổ cổng Dinh Độc Lập. Dương Văn Minh tuyên bố đầu hàng vô điều kiện, chấm dứt 30 năm chiến tranh.",
    commander: "Đại tướng Văn Tiến Dũng",
    troops: "270.000 quân, 5 cánh quân, hơn 1.000 xe tăng",
    casualty: "Ngụy quyền tan rã hoàn toàn. Ta: ~7.000 hy sinh",
    result: "Giải phóng miền Nam, thống nhất đất nước",
    significance: "Kết thúc 30 năm chiến tranh, non sông thu về một mối",
  },
];

export const CASUALTIES = [
  {
    id: "c1",
    battle: "Điện Biên Phủ",
    period: "1954",
    casualties: "4.020 hy sinh",
    note: "Tổn thất lớn đổi lấy thắng lợi quyết định.",
    result: "Chiến thắng"
  }
];

export const MILITARY_FORCES = [
  {
    id: "m1",
    name: "Quân đội nhân dân Việt Nam",
    founded: "22/12/1944",
    role: "Nòng cốt",
    description: "Từ nhân dân mà ra, vì nhân dân mà chiến đấu.",
    tag: "Chủ lực"
  }
];

export const FRONTS = [
  {
    id: "f1",
    name: "Mặt trận Việt Bắc",
    province: "Thái Nguyên, Tuyên Quang...",
    period: "1945-1954",
    era: "Kháng Pháp",
    description: "Thủ đô kháng chiến.",
    result: "An toàn"
  }
];

export const BATTLE_TIMELINE: Record<string, {
  year: string;
  name: string;
  slug: string;
}[]> = {
  "Hà Nội": [
    { year: "19/12/1946", name: "Toàn quốc kháng chiến", slug: "toan-quoc-khang-chien" },
    { year: "12/1972", name: "Điện Biên Phủ trên không", slug: "dien-bien-phu-tren-khong" },
  ],
  "Hải Phòng": [
    { year: "1946 – 1954", name: "Chiến đấu bảo vệ Hải Phòng", slug: "bao-ve-hai-phong" },
    { year: "1972", name: "Chống phong tỏa cảng Hải Phòng", slug: "phong-toa-cang-hai-phong" },
  ],
  "Quảng Ninh": [
    { year: "1967 – 1972", name: "Đánh trả không quân Mỹ vùng Đông Bắc", slug: "dong-bac-chong-my" },
  ],
  "Lạng Sơn": [
    { year: "1950", name: "Chiến dịch Biên Giới - Đường 4", slug: "bien-gioi-duong-4" },
    { year: "17/2 – 16/3/1979", name: "Chiến tranh biên giới phía Bắc", slug: "chien-tranh-bien-gioi-1979" },
  ],
  "Cao Bằng": [
    { year: "16/9 – 14/10/1950", name: "Chiến dịch Biên Giới", slug: "chien-dich-bien-gioi" },
    { year: "1979", name: "Bảo vệ biên giới Cao Bằng", slug: "bien-gioi-cao-bang" },
  ],
  "Hà Giang": [
    { year: "1984 – 1989", name: "Chiến đấu bảo vệ Vị Xuyên", slug: "vi-xuyen" },
  ],
  "Lào Cai": [
    { year: "1979", name: "Chiến tranh biên giới Lào Cai", slug: "bien-gioi-lao-cai" },
  ],
  "Sơn La": [
    { year: "1952", name: "Chiến dịch Tây Bắc", slug: "chien-dich-tay-bac" },
  ],
  "Lai Châu": [
    { year: "1952 – 1953", name: "Chiến dịch Tây Bắc - Giải phóng Lai Châu", slug: "tay-bac-lai-chau" },
  ],
  "Điện Biên": [
    { year: "13/3 – 7/5/1954", name: "Chiến dịch Điện Biên Phủ", slug: "chien-dich-dien-bien-phu" },
  ],
  "Hòa Bình": [
    { year: "10/12/1951 – 25/2/1952", name: "Chiến dịch Hòa Bình", slug: "chien-dich-hoa-binh" },
  ],
  "Phú Thọ": [
    { year: "1947", name: "Chiến dịch Sông Thao", slug: "song-thao" },
  ],
  "Yên Bái": [
    { year: "1952", name: "Chiến dịch Tây Bắc - Nghĩa Lộ", slug: "tay-bac-nghia-lo" },
  ],
  "Thái Nguyên": [
    { year: "1947", name: "Bảo vệ căn cứ địa Việt Bắc", slug: "can-cu-viet-bac" },
  ],
  "Bắc Giang": [
    { year: "1947", name: "Chiến dịch Việt Bắc - Bắc Giang", slug: "viet-bac-bac-giang" },
  ],
  "Vĩnh Phúc": [
    { year: "1951", name: "Chiến dịch Trung Du", slug: "chien-dich-trung-du" },
  ],
  "Hà Nam": [
    { year: "1965 – 1972", name: "Đánh trả không quân Mỹ - Phủ Lý", slug: "phu-ly-chong-my" },
  ],
  "Nam Định": [
    { year: "1965 – 1972", name: "Bắn rơi máy bay Mỹ tại Nam Định", slug: "nam-dinh-chong-my" },
  ],
  "Thái Bình": [
    { year: "1965 – 1972", name: "Dân quân Thái Bình bắn hạ máy bay Mỹ", slug: "thai-binh-chong-my" },
  ],
  "Ninh Bình": [
    { year: "1951", name: "Chiến dịch Quang Trung - Ninh Bình", slug: "quang-trung-ninh-binh" },
  ],
  "Thanh Hóa": [
    { year: "1965 – 1972", name: "Bảo vệ cầu Hàm Rồng", slug: "ham-rong" },
  ],
  "Nghệ An": [
    { year: "1930", name: "Xô Viết Nghệ Tĩnh", slug: "xo-viet-nghe-tinh" },
  ],
  "Hà Tĩnh": [
    { year: "1930 – 1931", name: "Xô Viết Nghệ Tĩnh - Hà Tĩnh", slug: "xo-viet-ha-tinh" },
  ],
  "Quảng Bình": [
    { year: "1965 – 1972", name: "Tuyến lửa Quảng Bình", slug: "tuyen-lua-quang-binh" },
  ],
  "Quảng Trị": [
    { year: "30/3 – 16/9/1972", name: "Mùa hè đỏ lửa - Thành cổ Quảng Trị", slug: "thanh-co-quang-tri" },
  ],
  "Thừa Thiên Huế": [
    { year: "1968", name: "Tổng tiến công Tết Mậu Thân tại Huế", slug: "tet-mau-than-hue" },
    { year: "26/3/1975", name: "Giải phóng Huế", slug: "giai-phong-hue" },
  ],
  "Đà Nẵng": [
    { year: "29/3/1975", name: "Giải phóng Đà Nẵng", slug: "giai-phong-da-nang" },
  ],
  "Quảng Nam": [
    { year: "1968", name: "Tổng tiến công Mậu Thân tại Hội An", slug: "mau-than-hoi-an" },
    { year: "29/3/1975", name: "Giải phóng Quảng Nam", slug: "giai-phong-quang-nam" },
  ],
  "Quảng Ngãi": [
    { year: "1968", name: "Thảm sát Mỹ Lai", slug: "tham-sat-my-lai" },
  ],
  "Bình Định": [
    { year: "1972", name: "Chiến dịch Bắc Bình Định", slug: "chien-dich-bac-binh-dinh" },
    { year: "3/1975", name: "Giải phóng Bình Định", slug: "giai-phong-binh-duong" },
  ],
  "Phú Yên": [
    { year: "1/4/1975", name: "Giải phóng Tuy Hòa", slug: "giai-phong-tuy-hoa" },
  ],
  "Khánh Hòa": [
    { year: "1/4/1975", name: "Giải phóng Nha Trang", slug: "giai-phong-nha-trang" },
  ],
  "Ninh Thuận": [
    { year: "16/4/1975", name: "Giải phóng Phan Rang", slug: "giai-phong-phan-rang" },
  ],
  "Bình Thuận": [
    { year: "19/4/1975", name: "Giải phóng Phan Thiết", slug: "giai-phong-phan-thiet" },
  ],
  "Kon Tum": [
    { year: "1972", name: "Chiến dịch Bắc Tây Nguyên - Kon Tum", slug: "bac-tay-nguyen-kon-tum" },
    { year: "3/1975", name: "Giải phóng Kon Tum", slug: "giai-phong-kon-tum" },
  ],
  "Gia Lai": [
    { year: "10 – 24/3/1975", name: "Chiến dịch Tây Nguyên", slug: "chien-dich-tay-nguyen" },
  ],
  "Đắk Lắk": [
    { year: "10/3/1975", name: "Tấn công Buôn Ma Thuột", slug: "buon-ma-thuot" },
  ],
  "Đắk Nông": [
    { year: "3/1975", name: "Giải phóng Đắk Nông", slug: "giai-phong-dak-nong" },
  ],
  "Lâm Đồng": [
    { year: "3/1975", name: "Giải phóng Đà Lạt", slug: "giai-phong-da-lat" },
  ],
  "Bình Phước": [
    { year: "1975", name: "Chiến dịch giải phóng Phước Long", slug: "giai-phong-phuoc-long" },
  ],
  "Tây Ninh": [
    { year: "1969 – 1972", name: "Chiến khu C - Căn cứ Trung ương Cục", slug: "chien-khu-c" },
  ],
  "Bình Dương": [
    { year: "1975", name: "Chiến dịch giải phóng Bình Dương", slug: "giai-phong-binh-duong" },
  ],
  "Đồng Nai": [
    { year: "1975", name: "Chiến dịch Xuân Lộc", slug: "chien-dich-xuan-loc" },
  ],
  "TP. Hồ Chí Minh": [
    { year: "26 – 30/4/1975", name: "Chiến dịch Hồ Chí Minh", slug: "chien-dich-ho-chi-minh" },
  ],
  "Bà Rịa - Vũng Tàu": [
    { year: "23/9/1945", name: "Nam Bộ kháng chiến", slug: "nam-bo-khang-chien" },
  ],
  "Long An": [
    { year: "1960", name: "Đồng Khởi Long An", slug: "dong-khoi-long-an" },
    { year: "1975", name: "Giải phóng Long An", slug: "giai-phong-long-an" },
  ],
  "Tiền Giang": [
    { year: "1960", name: "Đồng Khởi Mỹ Tho", slug: "dong-khoi-my-tho" },
    { year: "1975", name: "Giải phóng Mỹ Tho", slug: "giai-phong-my-tho" },
  ],
  "Bến Tre": [
    { year: "17/1/1960", name: "Đồng Khởi Bến Tre", slug: "dong-khoi-ben-tre" },
  ],
  "Vĩnh Long": [
    { year: "1960", name: "Đồng Khởi Vĩnh Long", slug: "dong-khoi-vinh-long" },
  ],
  "Trà Vinh": [
    { year: "1960", name: "Đồng Khởi Trà Vinh", slug: "dong-khoi-tra-vinh" },
  ],
  "Đồng Tháp": [
    { year: "1960", name: "Đồng Khởi Đồng Tháp", slug: "dong-khoi-dong-thap" },
    { year: "1975", name: "Giải phóng Sa Đéc", slug: "giai-phong-sa-dec" },
  ],
  "An Giang": [
    { year: "1954 – 1975", name: "Chiến trường miền Tây An Giang", slug: "chien-truong-an-giang" },
  ],
  "Kiên Giang": [
    { year: "1975", name: "Giải phóng Rạch Giá", slug: "giai-phong-rach-gia" },
  ],
  "Cần Thơ": [
    { year: "1968", name: "Tổng tiến công Mậu Thân tại Cần Thơ", slug: "mau-than-can-tho" },
    { year: "1/5/1975", name: "Giải phóng Cần Thơ", slug: "giai-phong-can-tho" },
  ],
  "Hậu Giang": [
    { year: "1975", name: "Giải phóng Hậu Giang", slug: "giai-phong-hau-giang" },
  ],
  "Sóc Trăng": [
    { year: "1975", name: "Giải phóng Sóc Trăng", slug: "giai-phong-soc-trang" },
  ],
  "Bạc Liêu": [
    { year: "1975", name: "Giải phóng Bạc Liêu", slug: "giai-phong-bac-lieu" },
  ],
  "Cà Mau": [
    { year: "1975", name: "Giải phóng Cà Mau", slug: "giai-phong-ca-mau" },
  ],
  "Quần đảo Hoàng Sa": [
    { year: "19/1/1974", name: "Hải chiến Hoàng Sa", slug: "hai-chien-hoang-sa" },
  ],
  "Quần đảo Trường Sa": [
    { year: "14/3/1988", name: "Hải chiến Trường Sa", slug: "hai-chien-truong-sa" },
  ],
  "Bắc Kạn": [
    { year: "7/10/1947", name: "Chiến dịch Việt Bắc Thu Đông", slug: "viet-bac-thu-dong" },
  ],
};

export const BATTLE_DETAILS: Record<string, {
  name: string;
  period: string;
  location: string;
  commander: string;
  troops: string;
  casualty: string;
  result: string;
  description: string;
  events: { year: string; text: string }[];
}> = {
  "toan-quoc-khang-chien": {
    name: "Toàn quốc kháng chiến",
    period: "19/12/1946",
    location: "Hà Nội và toàn quốc",
    commander: "Chủ tịch Hồ Chí Minh, Tướng Vương Thừa Vũ",
    troops: "Vệ quốc quân, Tự vệ Hà Nội",
    casualty: "Kìm chân địch 60 ngày đêm",
    result: "Bảo toàn lực lượng kháng chiến",
    description: "Đêm 19/12/1946, tiếng súng nổ tại pháo đài Láng mở đầu cuộc kháng chiến toàn quốc. Quân dân Hà Nội chiến đấu 60 ngày đêm trong lòng địch.",
    events: [
      { year: "19/12/1946", text: "Chủ tịch Hồ Chí Minh ra Lời kêu gọi toàn quốc kháng chiến" },
      { year: "20/12/1946", text: "Quân dân Hà Nội xây dựng chiến lũy, chiến đấu từng ngõ phố" },
      { year: "17/2/1947", text: "Trung đoàn Thủ đô rút lui an toàn qua sông Hồng" },
    ]
  },
  "dien-bien-phu-tren-khong": {
    name: "Điện Biên Phủ trên không",
    period: "18 – 29/12/1972",
    location: "Hà Nội, Hải Phòng",
    commander: "Đại tướng Võ Nguyên Giáp",
    troops: "Bộ đội Phòng không - Không quân",
    casualty: "Bắn hạ 81 máy bay, 34 chiếc B-52",
    result: "Mỹ ký Hiệp định Paris 27/1/1973",
    description: "12 ngày đêm Mỹ dùng B-52 ném bom rải thảm Hà Nội. Quân dân ta bắn hạ 81 máy bay buộc Mỹ phải ký Hiệp định Paris.",
    events: [
      { year: "18/12/1972", text: "Mỹ mở chiến dịch Linebacker II, hàng trăm B-52 ném bom Hà Nội" },
      { year: "26/12/1972", text: "Đêm khốc liệt nhất, phố Khâm Thiên bị san phẳng" },
      { year: "29/12/1972", text: "Mỹ tuyên bố ngừng ném bom sau khi thiệt hại nặng nề" },
    ]
  },
  "chien-dich-dien-bien-phu": {
    name: "Chiến dịch Điện Biên Phủ",
    period: "13/3 – 7/5/1954",
    location: "Điện Biên Phủ, Lai Châu",
    commander: "Đại tướng Võ Nguyên Giáp",
    troops: "5 Đại đoàn chủ lực, 55.000 quân",
    casualty: "Pháp: 16.200 bị bắt, 2.293 tử trận",
    result: "Pháp đầu hàng, ký Hiệp định Genève",
    description: "Chiến dịch lịch sử đập tan tập đoàn cứ điểm mạnh nhất Đông Dương, chấm dứt chiến tranh Đông Dương lần thứ nhất.",
    events: [
      { year: "13/3/1954", text: "Quân ta tấn công Him Lam, mở màn chiến dịch" },
      { year: "30/3/1954", text: "Đợt 2: tấn công các đồi phía Đông" },
      { year: "7/5/1954", text: "Tướng De Castries đầu hàng, lá cờ Quyết chiến Quyết thắng tung bay" },
    ]
  },
  "chien-dich-ho-chi-minh": {
    name: "Chiến dịch Hồ Chí Minh",
    period: "26 – 30/4/1975",
    location: "Sài Gòn and vùng phụ cận",
    commander: "Đại tướng Văn Tiến Dũng",
    troops: "270.000 quân, 5 cánh quân",
    casualty: "Ngụy quyền tan rã hoàn toàn",
    result: "Giải phóng miền Nam, thống nhất đất nước",
    description: "Chiến dịch lịch sử kết thúc 30 năm chiến tranh, thống nhất đất nước Việt Nam.",
    events: [
      { year: "26/4/1975", text: "5 cánh quân đồng loạt tấn công bao vây Sài Gòn" },
      { year: "30/4/1975", text: "10:45 — Xe tăng 843 húc đổ cổng Dinh Độc Lập" },
      { year: "30/4/1975", text: "Dương Văn Minh tuyên bố đầu hàng vô điều kiện" },
    ]
  },
  "chien-dich-tay-nguyen": {
    name: "Chiến dịch Tây Nguyên",
    period: "10 – 24/3/1975",
    location: "Tây Nguyên, Buôn Ma Thuột",
    commander: "Tướng Hoàng Minh Thảo",
    troops: "Quân đoàn 3, 60.000 quân",
    casualty: "Ngụy: mất toàn bộ Tây Nguyên",
    result: "Toàn bộ Tây Nguyên giải phóng",
    description: "Đòn then chốt mở màn cuộc Tổng tiến công mùa Xuân 1975, tạo bước ngoặt quyết định cho chiến dịch Hồ Chí Minh.",
    events: [
      { year: "10/3/1975", text: "Tấn công bất ngờ Buôn Ma Thuột, thị xã thất thủ trong 1 ngày" },
      { year: "14/3/1975", text: "Ngụy rút bỏ Pleiku, Kon Tum theo đường 7B" },
      { year: "24/3/1975", text: "Toàn bộ Tây Nguyên giải phóng" },
    ]
  },
  "thanh-co-quang-tri": {
    name: "Mùa hè đỏ lửa - Thành cổ Quảng Trị",
    period: "30/3 – 16/9/1972",
    location: "Quảng Trị",
    commander: "Tướng Lê Trọng Tấn",
    troops: "Quân đoàn 1, ~100.000 quân",
    casualty: "Cả hai phía ~40.000 thương vong",
    result: "Giải phóng Quảng Trị 1/5/1972",
    description: "81 ngày đêm bi tráng tại thành cổ Quảng Trị, hàng nghìn chiến sĩ hy sinh bảo vệ từng tấc đất.",
    events: [
      { year: "1/5/1972", text: "Giải phóng thị xã Quảng Trị" },
      { year: "28/6/1972", text: "Mỹ-ngụy phản công tái chiếm thành cổ" },
      { year: "16/9/1972", text: "Kết thúc 81 ngày đêm giữ thành cổ" },
    ]
  },
  "giai-phong-da-nang": {
    name: "Giải phóng Đà Nẵng",
    period: "29/3/1975",
    location: "Đà Nẵng",
    commander: "Tướng Lê Trọng Tấn",
    troops: "Quân đoàn 2",
    casualty: "Ít thương vong",
    result: "Giải phóng Đà Nẵng trong 1 ngày",
    description: "Đà Nẵng giải phóng nhanh chóng, mở đường for cuộc tổng tiến công vào Sài Gòn.",
    events: [
      { year: "29/3/1975", text: "Quân ta tiến vào Đà Nẵng, địch tan rã không kháng cự" },
    ]
  },
  "chien-dich-xuan-loc": {
    name: "Chiến dịch Xuân Lộc",
    period: "9 – 21/4/1975",
    location: "Xuân Lộc, Đồng Nai",
    commander: "Tướng Trần Văn Trà",
    troops: "Quân đoàn 4",
    casualty: "Địch: 2 sư đoàn bị tiêu diệt",
    result: "Mở toang cửa ngõ Sài Gòn",
    description: "Cửa ngõ cuối cùng bảo vệ Sài Gòn bị phá vỡ, tạo điều kiện cho chiến dịch Hồ Chí Minh.",
    events: [
      { year: "9/4/1975", text: "Quân ta tấn công Xuân Lộc" },
      { year: "21/4/1975", text: "Xuân Lộc thất thủ, Nguyễn Văn Thiệu từ chức" },
    ]
  },
  "nam-bo-khang-chien": {
    name: "Nam Bộ kháng chiến",
    period: "23/9/1945",
    location: "Sài Gòn, Nam Bộ",
    commander: "Trần Văn Giàu",
    troops: "Lực lượng vũ trang Nam Bộ",
    casualty: "Nhiều chiến sĩ hy sinh",
    result: "Mở đầu kháng chiến Nam Bộ",
    description: "Ngày 23/9/1945 trở thành Ngày Nam Bộ kháng chiến, quân dân Nam Bộ đứng lên chống Pháp tái xâm lược.",
    events: [
      { year: "23/9/1945", text: "Pháp nổ súng tái chiếm Sài Gòn, Nam Bộ kháng chiến bùng nổ" },
    ]
  },
  "ham-rong": {
    name: "Bảo vệ cầu Hàm Rồng",
    period: "3 – 4/4/1965",
    location: "Thanh Hóa",
    commander: "Dân quân, bộ đội địa phương Thanh Hóa",
    troops: "Pháo phòng không, dân quân du kích",
    casualty: "Bắn hạ 47 máy bay Mỹ",
    result: "Cầu Hàm Rồng không bị phá hủy",
    description: "Cầu Hàm Rồng là huyết mạch giao thông vào Nam. Quân dân Thanh Hóa đánh lui hàng trăm trận không kích của Mỹ.",
    events: [
      { year: "3/4/1965", text: "Mỹ huy động 70 máy bay đánh phá cầu Hàm Rồng lần đầu" },
      { year: "4/4/1965", text: "Tiếp tục tấn công, ta bắn hạ tổng cộng 47 máy bay" },
      { year: "1965 – 1972", text: "Cầu Hàm Rồng đứng vững suốt cuộc chiến" },
    ]
  },
  "hai-chien-hoang-sa": {
    name: "Hải chiến Hoàng Sa",
    period: "19/1/1974",
    location: "Quần đảo Hoàng Sa",
    commander: "HQ Thiếu tá Nguyễn Thành Trí",
    troops: "Hải quân Việt Nam Cộng hòa — 4 chiến hạm",
    casualty: "74 thủy thủ hy sinh, 3 tàu bị đánh chìm",
    result: "Trung Quốc chiếm đóng Hoàng Sa",
    description: "Trận hải chiến bi hùng bảo vệ chủ quyền Hoàng Sa. Dù thất thế, các chiến sĩ đã chiến đấu đến cùng bảo vệ lãnh thổ thiêng liêng của Tổ quốc.",
    events: [
      { year: "15/1/1974", text: "Trung Quốc đưa tàu chiến xâm phạm vùng biển Hoàng Sa" },
      { year: "19/1/1974", text: "Hải chiến nổ ra, 4 chiến hạm VN đối đầu hạm đội Trung Quốc" },
      { year: "19/1/1974", text: "74 thủy thủ hy sinh, Hoàng Sa rơi vào tay Trung Quốc" },
    ]
  },
  "hai-chien-truong-sa": {
    name: "Hải chiến Trường Sa",
    period: "14/3/1988",
    location: "Đảo Gạc Ma, Trường Sa",
    commander: "Thiếu úy Trần Văn Phương",
    troops: "Hải quân Nhân dân Việt Nam",
    casualty: "64 chiến sĩ hy sinh",
    result: "Trung Quốc chiếm Gạc Ma",
    description: "64 chiến sĩ hải quân hy sinh anh dũng bảo vệ đảo Gạc Ma. Vòng tròn bất tử mãi mãi là biểu tượng của tinh thần bảo vệ chủ quyền biển đảo.",
    events: [
      { year: "14/3/1988", text: "Tàu chiến Trung Quốc tấn công, các chiến sĩ ta tay không giữ đảo" },
      { year: "14/3/1988", text: "64 chiến sĩ hy sinh, tạo thành Vòng tròn bất tử" },
    ]
  },
  "buon-ma-thuot": {
    name: "Tấn công Buôn Ma Thuột",
    period: "10/3/1975",
    location: "Buôn Ma Thuột, Đắk Lắk",
    commander: "Tướng Hoàng Minh Thảo",
    troops: "Sư đoàn 316, 320, xe tăng",
    casualty: "Địch: 2 trung đoàn bị tiêu diệt",
    result: "Thị xã thất thủ trong 1 ngày",
    description: "Đòn tấn công bất ngờ vào Buôn Ma Thuột mở đầu chiến dịch Tây Nguyên, tạo bước ngoặt quyết định của cuộc chiến.",
    events: [
      { year: "10/3/1975 2:00", text: "Quân ta đồng loạt tấn công từ nhiều hướng" },
      { year: "10/3/1975 chiều", text: "Buôn Ma Thuột hoàn toàn giải phóng" },
    ]
  },
  "vi-xuyen": {
    name: "Chiến đấu bảo vệ Vị Xuyên",
    period: "1984 – 1989",
    location: "Vị Xuyên, Hà Giang",
    commander: "Tướng Hoàng Đan",
    troops: "Quân đoàn 2, các sư đoàn bộ binh",
    casualty: "Hàng nghìn chiến sĩ hy sinh",
    result: "Bảo vệ vững chắc biên giới phía Bắc",
    description: "Cuộc chiến bảo vệ biên giới Vị Xuyên kéo dài 5 năm, được gọi là 'Lò vôi thế kỷ' vì sự khốc liệt của chiến trường.",
    events: [
      { year: "1984", text: "Trung Quốc tấn công chiếm một số điểm cao biên giới" },
      { year: "7/1984", text: "Quân ta phản công giành lại các điểm cao" },
      { year: "1989", text: "Chiến sự chấm dứt, biên giới được củng cố" },
    ]
  },
  "chien-dich-tay-bac": {
    name: "Chiến dịch Tây Bắc",
    period: "14/10 – 10/12/1952",
    location: "Sơn La, Lai Châu, Yên Bái",
    commander: "Đại tướng Võ Nguyên Giáp",
    troops: "3 Đại đoàn chủ lực",
    casualty: "Địch: 6.000 bị loại khỏi vòng chiến",
    result: "Giải phóng toàn bộ Tây Bắc",
    description: "Chiến dịch giải phóng vùng Tây Bắc rộng lớn, căn cứ địa của kháng chiến và bàn đạp tiến công Điện Biên Phủ.",
    events: [
      { year: "14/10/1952", text: "Quân ta vượt sông Thao mở màn chiến dịch" },
      { year: "11/1952", text: "Giải phóng Nghĩa Lộ và toàn bộ Sơn La" },
      { year: "10/12/1952", text: "Chiến dịch kết thúc thắng lợi" },
    ]
  },
  "dong-khoi-ben-tre": {
    name: "Đồng Khởi Bến Tre",
    period: "17/1/1960",
    location: "Bến Tre",
    commander: "Nguyễn Thị Định",
    troops: "Nhân dân Bến Tre",
    casualty: "Nhiều đồng bào hy sinh",
    result: "Phá vỡ bộ máy kìm kẹp của địch",
    description: "Phong trào Đồng Khởi bùng nổ tại Bến Tre, mở đầu cao trào cách mạng toàn miền Nam.",
    events: [
      { year: "17/1/1960", text: "Đồng Khởi nổ ra tại Mỏ Cày, Giồng Trôm, Thạnh Phú" },
    ]
  },
};