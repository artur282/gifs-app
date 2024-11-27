import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GitGrid } from "./components/GitGrid";

export const GitApp = () => {
  const [categoria, setCategoria] = useState(["One Punch", "Dragon Ball"]);
  const onAddCategoria = (onNewCategoria) => {
    if (categoria.includes(onNewCategoria)) return;
    setCategoria([onNewCategoria, ...categoria]);
  };
  return (
    <>
      <h1>Git App</h1>

      <AddCategory onNewCategoria={onAddCategoria} />
      
        {categoria.map((categorias) => (
          <GitGrid key={categorias} categorias={categorias } />
        ))
        }
    
    </>
  );
};

export default GitApp;
