// import { useState } from "react";

import "./App.css";
import Toast from "../src/components/Toast/Toast";
import Input from "../src/components/Input/Input";
import SidebarMenu from "./components/SidebarMenu/SidebarMenu";

function App() {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quo
        aperiam nisi quia optio officia! Alias distinctio doloremque fugit quae
        odio suscipit, repellendus ab. Eos repudiandae ab non vitae ipsa.
      </p>
      <Input type="text" clearable={true} passwordVisibility={false} />
      <Input type="password" clearable={true} passwordVisibility={false} />
      <Input type="password" clearable={true} passwordVisibility={true} />
      <Toast
        type="error"
        text="dhsjdhj dgdygy"
        duration={2000}
        closing={true}
      />
      <SidebarMenu
        list={[
          { id: "ddd", name: "ff", itemChildren: ["1", "2", "3", "4"] },
          { id: "add", name: "aaaff", itemChildren: ["1", "2", "3", "4"] },
        ]}
        expandedId="none"
        isShowMenu={false}
      />
    </>
  );
}

export default App;
