'use client';

interface ProductCardProps {
  name: string;
  price: number;
  currency: string;
}
const ProductCard = ({ name, price, currency }: ProductCardProps) => {
  return (
    <li>
      <a href="#" className="group block overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt=""
          className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
        />

        <div className="mt-5 flex gap-1">
          <form>
            <fieldset>
              <legend className="sr-only">Color</legend>
            </fieldset>
            <div className="flex flex-wrap justify-center gap-1 [&:hover_label]:opacity-75">
              <div>
                <input type="checkbox" id="ColorSg" className="sr-only" />
                <label
                  htmlFor="ColorSg"
                  className="block size-4 cursor-pointer rounded-full bg-[#595759] transition hover:!opacity-100"
                >
                  <span className="sr-only"> Space Gray </span>
                </label>
              </div>
              <div>
                <input type="checkbox" id="ColorS" className="sr-only" />
                <label
                  htmlFor="ColorS"
                  className="block size-4 cursor-pointer rounded-full bg-[#d2d3d4] transition hover:!opacity-100"
                >
                  <span className="sr-only"> Silver </span>
                </label>
              </div>
              <div>
                <input type="checkbox" id="ColorP" className="sr-only" />
                <label
                  htmlFor="ColorP"
                  className="block size-4 cursor-pointer rounded-full bg-[#d89f97] transition hover:!opacity-100"
                >
                  <span className="sr-only"> Pink </span>
                </label>
              </div>
              <div>
                <input type="checkbox" id="ColorG" className="sr-only" />
                <label
                  htmlFor="ColorG"
                  className="block size-4 cursor-pointer rounded-full bg-[#afbfab] transition hover:!opacity-100"
                >
                  <span className="sr-only"> Pink </span>
                </label>
              </div>
              <div>
                <input type="checkbox" id="ColorSb" className="sr-only" />
                <label
                  htmlFor="ColorSb"
                  className="block size-4 cursor-pointer rounded-full bg-[#91a5bb] transition hover:!opacity-100"
                >
                  <span className="sr-only"> Pink </span>
                </label>
              </div>
            </div>
          </form>
        </div>

        <div className="relative bg-white pt-3">
          <h3 className="text-md font-LuckiestGuy text-gray-700 group-hover:underline group-hover:underline-offset-4 group-hover:text-valar3">
            {name}
          </h3>
          <p className="mt-2">
            <span className="sr-only"> Regular Price </span>
            <span className="tracking-wider text-gray-900 font-BlackOps text-md">
              {`${price} ${currency}`}
            </span>
          </p>
          <span className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium font-IBMPlex uppercase tracking-wide text-white">
            Shop Now
          </span>
        </div>
      </a>
    </li>
  );
};

export default ProductCard;
