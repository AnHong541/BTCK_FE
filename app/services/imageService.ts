import api from '@/app/utils/axios';

export interface BattleImageApi {
  id?: string;
  slug: string;
  url: string;
}

// Hàm này sẽ gọi lên MockAPI để lấy toàn bộ danh sách ảnh bạn đã cấu hình
export const fetchBattleImages = async (): Promise<Record<string, string[]>> => {
  try {
    const response = await api.get<BattleImageApi[]>('/images');
    const data = response.data;
    
    // Chuyển đổi dữ liệu từ API thành dạng { "slug-tran-chien": ["link1", "link2"] }
    const imageMap: Record<string, string[]> = {};
    
    data.forEach((item) => {
      if (!imageMap[item.slug]) {
        imageMap[item.slug] = [];
      }
      if (item.url) {
        imageMap[item.slug].push(item.url);
      }
    });
    
    return imageMap;
  } catch (error) {
    console.error("Lỗi khi gọi API lấy hình ảnh:", error);
    return {}; // Trả về object rỗng nếu lỗi để không sập web
  }
};
