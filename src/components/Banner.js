const Banner = ({ images }) => {
  return (
    <div className="relative w-full overflow-hidden h-[300px]">
      <div className="absolute flex">
        <section
          className="img-section flex"
          style={{ "--speed": `30000ms` }} 
        >
          {images.map(({ image }) => (
            <div>
              <img className="max-w-md min-h-full" src={image} alt={"img"} />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export { Banner };
