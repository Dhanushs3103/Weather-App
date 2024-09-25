import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

export default function NotFoundPage() {
  return (
    <div style={{backgroundColor:"#f4dfdd", height:"100vh", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://cdn.dribbble.com/users/718859/screenshots/3267029/jisunpark_404-error.gif"
          alt="404Page_not_found"
          style={{ minWidth: "350px", maxWidth: "500px", borderRadius: "50px" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <Button
          colorScheme="teal"
          size="lg"
          onClick={() => (window.location.href = "/")}
        >
          Go Back
        </Button>
      </div>
    </div>
  );
}
