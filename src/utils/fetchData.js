export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const options2 = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "812c4a4100mshcb953a13b3df9d7p1da28ajsn02d07c4f9155",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};
export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error(error);
  }
};
