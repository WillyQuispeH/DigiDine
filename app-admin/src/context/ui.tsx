import React, { ReactNode, createContext, useState } from "react";
const UIContext = createContext<any>(null);

interface IChildren {
  children: ReactNode;
}

const UiProvider = ({ children }: IChildren) => {
  const [sidebar, setSidebar] = useState(false);
  const [value, setValue] = useState("");

  return (
    <UIContext.Provider value={{ sidebar, setSidebar, setValue, value }}>
      {children}
    </UIContext.Provider>
  );
};

export { UiProvider };
export default UIContext;
