import { Comment } from "@/interfaces/product-comment";
import RatingStars from "./rating-stars";

interface ProductCommentProps {
  comment: Comment;
}

export default function ProductComment({ comment }: ProductCommentProps) {
  return (
    <div className="bg-[#D9D9D94D] p-5 rounded-xl max-w-md">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div></div>
          <div>
            <RatingStars rating={comment.rating} />
          </div>
        </div>
        <div className="py-2">{comment.comment ?? "N/A"}</div>
        <div className="flex justify-between items-center">
          <div className="font-bold">
            {comment.user.slice(0, 10) ?? "N/A"}...
          </div>
          {/* <div>{comment.createdAt.toDateString()}</div> */}
        </div>
      </div>
    </div>
  );
}
