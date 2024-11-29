export const getGits = async (categorias) => {
  const url = `http://api.giphy.com/v1/gifs/search?api_key=4Zx46SWlOnOEWUE3Pv6aYUiwkaiLJ6gU&q=${categorias}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const Gits = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  console.log(Gits);
  return Gits;
};

export default getGits;