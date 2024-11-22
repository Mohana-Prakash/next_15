import toast from "react-hot-toast";
import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";

export const infoToast = (message: string): string => {
  return toast(`${message}..!`, {
    duration: 4000,
    style: { backgroundColor: "#D1D5DB", color: "black" },
    icon: <InfoIcon />,
    iconTheme: {
      primary: "#000",
      secondary: "#fff",
    },
  });
};

export const successToast = (message: string): string => {
  return toast(`${message}..!`, {
    duration: 4000,
    style: { backgroundColor: "#22c55e", color: "white" },
    icon: "👏",
    iconTheme: {
      primary: "#000",
      secondary: "#fff",
    },
  });
};

export const errorToast = (message: string): string => {
  return toast(`${message}..!`, {
    duration: 4000,
    style: { backgroundColor: "#E02424", color: "white" },
    icon: <CloseIcon />,
    iconTheme: {
      primary: "#000",
      secondary: "#fff",
    },
  });
};
