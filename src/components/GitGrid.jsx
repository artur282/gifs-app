export const GitGrid = ({ categorias }) => {
  const getGits = async () => {
    const url = `api.giphy.com/v1/gifs/search?api_key=4Zx46SWlOnOEWUE3Pv6aYUiwkaiLJ6gU=${categorias}`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    console.log(data);
  };
  getGits();
  return (
    <>
      <h3>{categorias}</h3>
      <p>hola mundo</p>
    </>
  );
};

export default GitGrid;
