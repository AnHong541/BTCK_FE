import api from "@/app/utils/axios";

export interface BattleImageApi {
  id: string;
  slug: string;
  url: string;
}

/**
 * Lấy tất cả hình ảnh chiến trận từ API
 * @returns Object với key là slug, value là mảng hình ảnh
 */
export const fetchBattleImages = async (): Promise<
  Record<string, BattleImageApi[]>
> => {
  try {
    const response = await api.get<BattleImageApi[]>("/products");
    const imageMap: Record<string, BattleImageApi[]> = {};

    response.data.forEach((item) => {
      if (!imageMap[item.slug]) {
        imageMap[item.slug] = [];
      }

      if (item.url && item.id && item.slug) {
        imageMap[item.slug].push(item);
      }
    });

    return imageMap;
  } catch (error) {
    console.error("Lỗi khi lấy hình ảnh từ API:", error);
    return {};
  }
};

/**
 * Thêm hình ảnh mới cho chiến trận
 * @param slug - Mã định danh chiến trận
 * @param url - Đường dẫn hình ảnh
 * @returns Hình ảnh vừa tạo hoặc null nếu lỗi
 */
export const addBattleImage = async (
  slug: string,
  url: string
): Promise<BattleImageApi | null> => {
  try {
    const cleanUrl = normalizeUrl(url);
    const response = await api.post<BattleImageApi>("/products", {
      slug,
      url: cleanUrl,
    });
    return response.data;
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Lỗi không xác định";
    console.error("Lỗi khi thêm ảnh:", errorMessage);
    return null;
  }
};

/**
 * Xóa hình ảnh khỏi API
 * @param id - ID của hình ảnh
 * @returns true nếu thành công, false nếu lỗi
 */
export const deleteBattleImage = async (id: string): Promise<boolean> => {
  try {
    await api.delete(`/products/${id}`);
    return true;
  } catch (error) {
    console.error("Lỗi khi xóa ảnh:", error);
    return false;
  }
};

/**
 * Chuẩn hóa URL để gửi đến API
 * @param url - URL gốc
 * @returns URL đã được chuẩn hóa
 */
const normalizeUrl = (url: string): string => {
  let cleanUrl = url.trim();

  try {
    cleanUrl = encodeURI(decodeURI(cleanUrl));
  } catch {
    console.warn("Không thể chuẩn hóa URL, giữ nguyên");
  }

  return cleanUrl;
};
