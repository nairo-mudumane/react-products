import { ThreeDots } from "react-loader-spinner";

export function FullScreenLoading() {
  return (
    <main className="w-screen h-screen fixed top-0 left-0 z-10 flex items-center justify-center">
      <ThreeDots color="white" wrapperClass="!w-[3rem] !h-[3rem]" />
    </main>
  );
}
