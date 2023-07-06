import { Search, Star } from "@mui/icons-material";
import { IAsideProps } from "./@types";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  function searchByCategory(event: React.MouseEvent<HTMLButtonElement>) {
    const { id: category } = event.currentTarget;
    navigate(`/?filter=${category}`);
  }

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
        <Button
          id={category}
          variant="contained"
          sx={{ gap: 1 }}
          onClick={searchByCategory}
        >
          <Search />
          <span>{category}</span>
        </Button>
      </div>
    </div>
  );
}
