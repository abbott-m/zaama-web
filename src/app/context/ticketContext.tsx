"use client";
import {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

interface IProps {
  children: React.ReactNode;
}
export interface ITicketModalContext {
  hasCountdown: boolean;
  isTicketModalOpen: boolean;
  setIsTicketModalOpen: Dispatch<SetStateAction<boolean>>;
  ticketType: number;
  setTicketType: Dispatch<SetStateAction<number>>;
  setHasCountdown: Dispatch<SetStateAction<boolean>>;
}

export const TicketContext = createContext<ITicketModalContext>({
  ticketType: 1,
  hasCountdown: false,
  isTicketModalOpen: false,
  setIsTicketModalOpen: () => {},
  setTicketType: () => {},
  setHasCountdown: () => {},
});

export const TicketProvider = ({ children }: IProps) => {
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [ticketType, setTicketType] = useState(3);
  const [hasCountdown, setHasCountdown] = useState(false);

  return (
    <TicketContext.Provider
      value={{
        isTicketModalOpen,
        setIsTicketModalOpen,
        ticketType,
        setTicketType,
        hasCountdown,
        setHasCountdown,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};

export const useTicketContext = () => {
  return useContext(TicketContext);
};
