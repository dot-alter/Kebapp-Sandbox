import { style } from "@vanilla-extract/css";

export const AlertStyle = style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#27272cff",
    color: "#cfcfcfff",
    fontSize: "16px",
    fontWeight: "400",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
});