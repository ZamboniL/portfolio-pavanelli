import { createContext, useState } from "react";

interface ModalContextData {
  aboutModal: boolean;
  changeAboutModal: Function;
  contactModal: boolean;
  changeContactModal: Function;
}

export const ModalContext = createContext<ModalContextData>(
  {} as ModalContextData
);

export const ModalProvider: React.FC = ({ children }) => {
  const [openAboutModal, setOpenAboutModal] = useState(false);
  const [openContactModal, setOpenContactModal] = useState(false);
  return (
    <ModalContext.Provider
      value={{
        aboutModal: openAboutModal,
        changeAboutModal: () => {
          setOpenContactModal(false);
          setOpenAboutModal((current) => !current);
        },
        contactModal: openContactModal,
        changeContactModal: () => {
          setOpenAboutModal(false);
          setOpenContactModal((current) => !current);
        },
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
