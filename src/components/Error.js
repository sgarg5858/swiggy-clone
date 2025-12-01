import { useRouteError } from "react-router-dom";

export const ErrorComponent = () => {
  const error = useRouteError();
  console.log("ErrorComponent called", error);
  return (
    <div>
      {error.status}: {error.statusText}
    </div>
  );
};
