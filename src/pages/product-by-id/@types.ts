import { IProduct } from "../../@types";

export type IParams = { id: string; "*": string };

export type IErrorProps = { title: string; message: string };

export interface IAsideProps extends React.HTMLAttributes<HTMLDivElement> {
  product: IProduct;
}
