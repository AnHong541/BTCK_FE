import api from '@/app/utils/axios';

export interface BattleImageApi {
  id: string;
  slug: string;
  url: string;
}

export const fetchBattleImages = async (): Promise<Record<string, BattleImageApi[]>> => {
  try {
    const response = await api.get<BattleImageApi[]>('/products');
    const data = response.data;
    
    // Chuyển đổi dữ liệu từ API thành dạng { "slug": [{id, url}] }
    const imageMap: Record<string, BattleImageApi[]> = {};
    
    data.forEach((item: any) => {
      if (!imageMap[item.slug]) {
        imageMap[item.slug] = [];
      }
      const imageUrl = item.url || item.images; // Lấy url hoặc images (nếu MockAPI tự sinh)
      if (imageUrl && item.id && item.slug) {
        imageMap[item.slug].push({ ...item, url: imageUrl });
      }
    });
    
    return imageMap;
  } catch (error) {
    console.error("Lỗi khi gọi API lấy hình ảnh:", error);
    return {}; 
  }
};

export const addBattleImage = async (slug: string, url: string): Promise<BattleImageApi | null> => {
  try {
    // Làm sạch URL: Loại bỏ khoảng trắng thừa và mã hóa lại các ký tự đặc biệt đúng chuẩn
    // Điều này giúp MockAPI không bị lỗi khi nhận chuỗi có các ký tự lạ
    let cleanUrl = url.trim();
    try {
      // Decode để loại bỏ các mã % thừa, sau đó Encode lại đúng chuẩn URL web
      cleanUrl = encodeURI(decodeURI(cleanUrl));
    } catch (e) {
      // Nếu không decode được thì giữ nguyên
      console.warn("Không thể chuẩn hóa URL, giữ nguyên link gốc");
    }

    const res = await api.post<BattleImageApi>('/products', { slug, url: cleanUrl });
    return res.data;
  } catch (error: any) {
    console.error("Lỗi khi thêm ảnh mới vào API:", error.response?.data || error.message);
    return null;
  }
};

export const deleteBattleImage = async (id: string): Promise<boolean> => {
  try {
    await api.delete(`/products/${id}`);
    return true;
  } catch (error) {
    console.error("Lỗi khi xóa ảnh khỏi API:", error);
    return false;
  }
};
