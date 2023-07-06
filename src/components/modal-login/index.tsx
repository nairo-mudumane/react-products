import React from "react";
import { IModalLoginProps } from "./@types";
import { Alert, AlertTitle, Button, Modal } from "@mui/material";
import Form from "./form";

export function ModalLogin({ open, onClose }: IModalLoginProps) {
  const [accepted, setAccepted] = React.useState<boolean>(false);

  const openForm = () => setAccepted(true);

  return (
    <Modal open={open}>
      <div className="w-full h-full flex items-center justify-center">
        <div className="bg-tertiary rounded-xl py-3 px-5 mx-auto w-[90%] md:w-[60%] lg:w-[70%]">
          {accepted ? (
            <Form onClose={onClose} />
          ) : (
            <div className="">
              <Alert severity="warning" className="!text-white !bg-transparent">
                <AlertTitle className="!text-pr !text-xl">
                  Login Required
                </AlertTitle>

                <p className="mt-4">
                  To carry out this action you need to login
                </p>
              </Alert>

              <div className="w-max ml-auto flex gap-4">
                <Button variant="outlined" onClick={onClose}>
                  Cancel
                </Button>

                <Button variant="contained" onClick={openForm}>
                  Login
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}
