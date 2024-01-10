import { ICourseInfo } from "app/types/course.types";
import { axiosInstance } from "app/utils/axios";

export default async function getCourses(): Promise<ICourseInfo[]> {
  const data = await axiosInstance.get(`courses`, {
    headers: {
      cache: "force-cache",
    },
  });
  return data.data;
}
