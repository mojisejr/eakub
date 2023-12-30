import RatingStars from "./rating-stars";

export default function ProductComment() {
  return (
    <div className="bg-[#D9D9D94D] p-5 rounded-xl max-w-md">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div></div>
          <div>
            <RatingStars />
          </div>
        </div>
        <div className="py-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eum
          nesciunt unde soluta dolor dignissimos dolores aliquam velit in ipsum
          ad facilis aspernatur ex, error assumenda sint quidem labore dolorem.
        </div>
        <div className="flex justify-between items-center">
          <div className="font-bold">by non</div>
          <div>2 days ago</div>
        </div>
      </div>
    </div>
  );
}
