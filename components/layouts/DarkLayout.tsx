import { PropsWithChildren } from "react";

export const DarkLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h3>Dark-Layout</h3>
      {children}
    </div>
  );
};
