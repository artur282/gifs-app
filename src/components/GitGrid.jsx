import getGits from "../helpers/GetGits";


export const GitGrid = ({ categorias }) => {
  getGits(categorias)
  return (
    <>
      <h3>{categorias}</h3>
      <p>hola mundo</p>
    </>
  );
};

export default GitGrid;
