import { ITutorial } from "app/types/tutorial.types";
import { axiosInstance } from "app/utils/axios";

export default async function getTutorialInfo(
  id: string
): Promise<ITutorial["text"]> {
  const data = await axiosInstance.get(`tutorials/${id}`, {
    headers: {
      cache: "force-cache",
    },
  });
  return data.data;
}
