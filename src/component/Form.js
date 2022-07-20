import React from "react";
import AddSong from "./AddSong";
import SideBar from "./SideBar";

function Form() {
  return <SideBar addsong={<AddSong />} />;
}

export default Form;
