import { ITutorial } from "app/types/tutorial.types";
import { axiosInstance } from "app/utils/axios";

export default async function getTutorials(): Promise<ITutorial[]> {
  const data = await axiosInstance.get(`tutorials`, {
    headers: {
      cache: "force-cache",
    },
  });
  return data.data;
}
