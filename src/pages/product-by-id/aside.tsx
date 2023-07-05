import { Search, Star } from "@mui/icons-material";
import { IAsideProps } from "./@types";
import { Button } from "@mui/material";

export default function Aside({ product, ...props }: IAsideProps) {
  const {
    title,
    description,
    category,
    rating,
    discountPercentage,
    stock,
    price,
  } = product;

  return (
    <div {...props} className="grid gap-4">
      <div className="grid gap-4">
        <h1 className="text-xl md:text-2xl">{title}</h1>

        <div className="flex flex-wrap gap-2 items-center justify-between">
          <div className="flex gap-2">
            {discountPercentage ? (
              <div className="flex gap-2">
                <div className="flex gap-2 items-center">
                  <span className="font-bold">
                    {Math.round((price / discountPercentage) * 100)} MZN
                  </span>

                  <span className="text-muted text-sm font-normal line-through">
                    ({price} MZN)
                  </span>
                </div>
              </div>
            ) : (
              <div className="font-bold">{price}</div>
            )}
          </div>

          <p className="font-semibold flex gap-1 items-center">
            <span>rating:</span> <span>{rating}</span>{" "}
            <Star fontSize="inherit" />
          </p>

          <div className="font-semibold">
            <span>{stock}</span> <span>units available now</span>
          </div>
        </div>

        <div className="text-justify">{description}</div>
      </div>

      <div className="mt-4">
        <Button variant="contained" sx={{ gap: 1 }}>
          <Search />
          <span>{category}</span>
        </Button>
      </div>
    </div>
  );
}
