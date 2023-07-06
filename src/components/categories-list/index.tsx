import React from "react";
import { useQuery } from "react-query";
import { Alert, AlertTitle, IconButton } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { ICategoriesListProps } from "./@types";
import Loading from "./loading";
import { ChipButton } from "../chip-button";
import services from "../../services";
import { useQueryParams } from "../../hooks";

export function CategoriesList({
  onFilterChange,
  ...props
}: ICategoriesListProps) {
  const {
    data: categories,
    isLoading,
    error,
  } = useQuery(["/categories"], services.category.getAll);

  const listRef = React.useRef<HTMLDivElement | null>(null);
  const query = useQueryParams();
  const filter = query.get("filter");

  function setFilter(filter: string) {
    if (onFilterChange) {
      onFilterChange(filter);
      return;
    } else query.set("filter", filter);
  }

  function slideRight() {
    if (listRef.current) {
      const { current: div } = listRef;
      div.scrollLeft = div.scrollLeft + 200;
    }
  }

  function slideLeft() {
    if (listRef.current) {
      const { current: div } = listRef;
      div.scrollLeft = div.scrollLeft - 200;
    }
  }

  if (isLoading) return <Loading />;

  if (error)
    return (
      <div className="mb-4">
        <Alert severity="error">
          <AlertTitle>{(error as Error).name}</AlertTitle>

          <div>{(error as Error).message}</div>
        </Alert>
      </div>
    );

  if (!categories || categories.length <= 0)
    return (
      <div className="mb-4">
        <Alert severity="error">
          <AlertTitle>Error 404</AlertTitle>

          <div>No items to show yet. Try later!</div>
        </Alert>
      </div>
    );

  return (
    <div {...props} className="relative flex gap-2 items-center">
      <IconButton
        size="small"
        onClick={slideLeft}
        className="!bg-white !text-primary !h-max !hidden md:!block"
      >
        <KeyboardArrowLeft />
      </IconButton>

      <div
        ref={listRef}
        className="py-1 flex gap-2 w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
      >
        {categories.map((category) => (
          <span
            key={category.toLowerCase()}
            className="w-max max-w-max min-w-max"
          >
            <ChipButton
              text={category.toLowerCase()}
              onClick={() => setFilter(category)}
              active={
                filter ? filter.toLowerCase() === category.toLowerCase() : false
              }
            />
          </span>
        ))}
      </div>

      <IconButton
        size="small"
        onClick={slideRight}
        className="!bg-white !text-primary !h-max !hidden md:!block"
      >
        <KeyboardArrowRight />
      </IconButton>
    </div>
  );
}
