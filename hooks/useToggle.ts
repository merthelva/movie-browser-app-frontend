import { useState } from "react";

const useToggle: (flag?: boolean) => [boolean, VoidFunction] = (
  initState: boolean = false
) => {
  const [isToggled, setIsToggled] = useState<boolean>(initState);

  const handleToggle = () => setIsToggled((prevState) => !prevState);

  return [isToggled, handleToggle];
};

export default useToggle;
