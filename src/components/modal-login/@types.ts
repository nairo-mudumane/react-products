import { IModal } from "../../@types";

export interface IModalLoginProps extends IModal {}

export type IFormProps = Partial<Pick<IModal, "onClose">>;
