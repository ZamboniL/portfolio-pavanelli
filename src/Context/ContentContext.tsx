import { createContext } from "react";
import { HomeProps } from "../../pages/index";

export const ContentContext = createContext<ContentProps>({} as ContentProps);

interface ContentProps extends HomeProps {
  firstTitle?: string;
  secondTitle?: string;
}

export const ContentProvider: React.FC<ContentProps> = ({
  titlesText,
  navText,
  projects,
  children,
}) => {
  return (
    <ContentContext.Provider
      value={{
        firstTitle: titlesText.primeiro,
        secondTitle: titlesText.segundo,
        titlesText,
        navText,
        projects,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};
