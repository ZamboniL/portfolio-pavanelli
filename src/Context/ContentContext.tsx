import { createContext } from "react";
import { HomeProps } from "../../pages/index";

export const ContentContext = createContext<HomeProps>({} as HomeProps);

export const ContentProvider: React.FC<HomeProps> = ({
  navText,
  projects,
  children,
}) => {
  return (
    <ContentContext.Provider
      value={{
        navText,
        projects,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};
