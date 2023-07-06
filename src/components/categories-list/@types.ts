export interface ICategoriesListProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  onFilterChange?: (category: string) => void;
}
