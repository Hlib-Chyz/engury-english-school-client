import { axiosInstance } from "app/utils/axios";

export default async function sendFeedback(
  owner: string,
  revocation: string,
  rating: number,
  courseId: string
) {
  await axiosInstance.post("mail/send-revocation-confirmation", {
    owner,
    revocation,
    rating,
    courseId,
  });
}
