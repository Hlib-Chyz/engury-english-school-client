export interface IReview {
  readonly _id: string;
  owner: string;
  revocation: string;
  rating: number;
  courseId: string;
}
