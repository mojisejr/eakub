export default function ProductCarousel({ images }: { images: string[] }) {
  if (images === null) {
    return (
      <>
        <div>No Image</div>
      </>
    );
  }
  if (images.length <= 0) {
    return (
      <>
        <div>No Image</div>
      </>
    );
  }
  return (
    <div>
      <div className="carousel max-w-xl">
        {images.map((image, index) => (
          <div id={`slide${index}`} className="carousel-item relative w-full">
            <img src={image} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={
                  index <= 0
                    ? `#slide${images.length - 1}`
                    : `#slide${index - 1}`
                }
                className="btn btn-circle"
              >
                ❮
              </a>
              <a
                href={
                  index >= images.length - 1
                    ? `#slide${0}`
                    : `#slide${index + 1}`
                }
                className="btn btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
