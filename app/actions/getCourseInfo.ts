import { ICourseInfo } from "app/types/course.types";
import { axiosInstance } from "app/utils/axios";

export default async function getCourseInfo(id: string): Promise<ICourseInfo> {
  const data = await axiosInstance.get(`courses/${id}`, {
    headers: {
      cache: "force-cache",
    },
  });
  return data.data;
}
