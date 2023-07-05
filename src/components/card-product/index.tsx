import { Link } from "react-router-dom";
import { ICardProductProps } from "./@types";
import { StyledCardProduct } from "./styles";

export function CardProduct({
  product,
  link,
  hideTitle = false,
  clampDescription = true,
}: ICardProductProps) {
  return (
    <StyledCardProduct className="bg-secondary rounded-3xl overflow-hidden flex flex-col justify-between items-start">
      <Link to={link ?? "#"} className="w-full">
        <div
          className={`w-full z-0 ${
            clampDescription ? "h-[15rem]" : "h-[32rem]"
          }`}
        >
          <img
            src={product.thumbnail}
            srcSet={product.thumbnail}
            alt={`${product.title}'s image`}
            className="w-full h-full"
          />
        </div>
      </Link>

      {!hideTitle && (
        <header className="details py-4 px-5 mt-[-1.5rem] z-10 w-full gap-4 flex flex-col items-center justify-center rounded-3xl">
          <h2 className="line-clamp-1 font-bold">{product.title}</h2>
        </header>
      )}
    </StyledCardProduct>
  );
}
