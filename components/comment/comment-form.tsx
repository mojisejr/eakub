import { createComment, CanComment } from "@/services/comment.service";
import { CreateCommentDTO } from "@/interfaces/dtos/new-comment";
import FormButton from "../upload/form-button";

interface CommentFormProps {
  _id: string;
  productId: string;
  canComment: boolean;
}

export default async function CommentForm({
  _id,
  productId,
  canComment,
}: CommentFormProps) {
  async function submit(formData: FormData) {
    "use server";

    if (!canComment) return;
    const comment = formData.get("comment");
    const rating = formData.get("rating-2");

    const commentData: CreateCommentDTO = {
      productId,
      authorId: _id,
      content: comment?.toString() ?? "",
      rating: !isNaN(parseInt(rating?.toString()!))
        ? parseInt(rating?.toString()!)
        : 5,
    };

    await createComment(commentData);
  }

  return (
    <form
      action={submit}
      className="grid grid-cols-1 gap-2 bg-opacity-30 bg-white p-4 rounded-xl"
    >
      <div className="form-control">
        <textarea
          name="comment"
          className="textarea bg-gray-100 text-black"
          rows={3}
          maxLength={120}
          placeholder="รีวิวสินค้าที่นี่"
        ></textarea>
      </div>
      <div className="flex justify-between items-center">
        <div className="rating rating-md  flex items-center">
          <label className="label text-sm">Rating</label>
          <input
            type="radio"
            name="rating-2"
            value={1}
            className="mask mask-star-2 bg-yellow-500"
          />
          <input
            type="radio"
            name="rating-2"
            value={2}
            className="mask mask-star-2 bg-yellow-500"
          />
          <input
            type="radio"
            name="rating-2"
            value={3}
            className="mask mask-star-2 bg-yellow-500"
          />
          <input
            type="radio"
            name="rating-2"
            value={4}
            className="mask mask-star-2 bg-yellow-500"
          />
          <input
            type="radio"
            name="rating-2"
            value={5}
            className="mask mask-star-2 bg-yellow-500"
          />
        </div>
        <FormButton text="บันทึก" />
      </div>
    </form>
  );
}
