import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AboutChannelContext = createContext();
export const ChannelContext = createContext();
export const CommentsContext = createContext();
export const TrendingContext = createContext();
export const InfoContext = createContext();
export const PlaylistContext = createContext();
export const SearchContext = createContext();

export const AboutChannelProvider = ({ children }) => {
  const [aboutChannel, setAboutChannel] = useState({});
  useEffect(() => {
    axios
      .get("https://youtube-search-and-download.p.rapidapi.com/channel/about", {
        params: {
          id: "UCE_M8A5yxnLfW0KghEeajjw",
        },
        headers: {
          "X-RapidAPI-Key":
            "53960dcdc4msh1c55b45ae9e4e9ap1506b9jsn7a5e1ec9dbde",
          "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
        },
      })
      .then((res) => {
        setAboutChannel(res);
      });
  }, []);
  // console.log("About channel", aboutChannel.data);
  return (
    <AboutChannelContext.Provider value={aboutChannel.data}>
      {children}
    </AboutChannelContext.Provider>
  );
};

export const ChannelProvider = ({ children }) => {
  const [channel, setChannel] = useState({});
  useEffect(() => {
    axios
      .get("https://youtube-search-and-download.p.rapidapi.com/channel", {
        params: {
          id: "UCiTGKA9W0G0TL8Hm7Uf_u9A",
          next: "4qmFsgKFARIYVUNpVEdLQTlXMEcwVEw4SG03VWZfdTlBGjpFZ1oyYVdSbGIzTVlBeUFBTUFFNEFlb0RGa05uUVZORFoycHdNazVFTkRWT2VVcHNhMmR2VFdjJTNEmgIsYnJvd3NlLWZlZWRVQ2lUR0tBOVcwRzBUTDhIbTdVZl91OUF2aWRlb3MxMDI%3D",
          sort: "n",
        },
        headers: {
          "X-RapidAPI-Key":
            "53960dcdc4msh1c55b45ae9e4e9ap1506b9jsn7a5e1ec9dbde",
          "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
        },
      })
      .then((res) => {
        setChannel(res);
      });
  }, []);
  // console.log("Channel", channel.data);

  return (
    <ChannelContext.Provider value={channel.data}>
      {children}
    </ChannelContext.Provider>
  );
};

export const CommentsProvider = ({ children }) => {
  const [comments, setComments] = useState({});
  useEffect(() => {
    axios
      .get(
        "https://youtube-search-and-download.p.rapidapi.com/video/comments",
        {
          params: {
            id: "YQHsXMglC9A",
            next: "Eg0SC1lRSHNYTWdsQzlBGAYyJSIRIgtZUUhzWE1nbEM5QTAAeAJCEGNvbW1lbnRzLXNlY3Rpb24%3D",
          },
          headers: {
            "X-RapidAPI-Key":
              "53960dcdc4msh1c55b45ae9e4e9ap1506b9jsn7a5e1ec9dbde",
            "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
          },
        }
      )
      .then((res) => {
        setComments(res);
      });
  }, []);
  // console.log("Commits", comments.data);
  return (
    <CommentsContext.Provider value={comments.data}>
      {children}
    </CommentsContext.Provider>
  );
};

export const TrendingProvider = ({ children }) => {
  const [trending, setTrending] = useState({});
  useEffect(() => {
    axios
      .get("https://youtube-search-and-download.p.rapidapi.com/trending", {
        params: {
          type: "mu",
          hl: "en",
          gl: "US",
        },
        headers: {
          "X-RapidAPI-Key":
            "53960dcdc4msh1c55b45ae9e4e9ap1506b9jsn7a5e1ec9dbde",
          "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
        },
      })
      .then((res) => {
        setTrending(res);
      });
  }, []);
  // console.log("Trending", trending.data);
  return (
    <TrendingContext.Provider value={trending.data}>
      {children}
    </TrendingContext.Provider>
  );
};

export const InfoProvider = ({ children }) => {
  const [info, setInfo] = useState({});
  useEffect(() => {
    axios
      .get("https://youtube-search-and-download.p.rapidapi.com/video", {
        params: { id: "dQw4w9WgXcQ" },
        headers: {
          "X-RapidAPI-Key":
            "53960dcdc4msh1c55b45ae9e4e9ap1506b9jsn7a5e1ec9dbde",
          "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
        },
      })
      .then((res) => {
        setInfo(res);
      });
  }, []);
  // console.log("Info", info.data);
  return (
    <InfoContext.Provider value={info.data}>{children}</InfoContext.Provider>
  );
};

export const PlaylistProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState({});
  useEffect(() => {
    axios
      .get("https://youtube-search-and-download.p.rapidapi.com/playlist", {
        params: {
          id: "PL2UMfhpwklNNI9ALzCFI-cObgnO4nQ2fu",
          next: "4qmFsgJhEiRWTFBMV3dBeXBBY0ZSZ0tBSUlGcUJyOW95LVpZWm5peGFfRmoaFENBRjZCbEJVT2tOSFZRJTNEJTNEmgIiUExXd0F5cEFjRlJnS0FJSUZxQnI5b3ktWllabml4YV9Gag%3D%3D",
        },
        headers: {
          "X-RapidAPI-Key":
            "53960dcdc4msh1c55b45ae9e4e9ap1506b9jsn7a5e1ec9dbde",
          "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
        },
      })
      .then((res) => {
        setPlaylist(res);
      });
  }, []);
  // console.log("Playlist", playlist.data);

  return (
    <PlaylistContext.Provider value={playlist.data}>
      {children}
    </PlaylistContext.Provider>
  );
};

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState({});
  useEffect(() => {
    axios
      .get("https://youtube-search-and-download.p.rapidapi.com/search", {
        params: {
          query: "rick roll",
          next: "EogDEgVoZWxsbxr-AlNCU0NBUXRaVVVoeldFMW5iRU01UVlJQkMyMUlUMDVPWTFwaWQwUlpnZ0VMWW1VeE1rSkROWEJSVEVXQ0FRdFZNMEZUYWpGTU5sOXpXWUlCQzJaaGVrMVRRMXBuTFcxM2dnRUxaV3hrWldGSlFYWmZkMFdDQVExU1JGbFJTSE5ZVFdkc1F6bEJnZ0VMT0hwRVUybHJRMmc1Tm1PQ0FRc3pOMFU1VjNORWJVUmxaNElCQzJGaFNXcHpPRXN6YjFsdmdnRUxaMmRvUkZKS1ZuaEdlRldDQVF0clN6UXlURnB4VHpCM1FZSUJDME42VHpOaFNXVXdVbkJ6Z2dFTFNVNHdUMk5WZGtkaU5qQ0NBUXRSYTJWbGFGRTRSRjlXVFlJQkMyWk9NVU41Y2pCYVN6bE5nZ0VMZEZac1kwdHdNMkpYU0RpQ0FRdGZSQzFGT1Rsa01XSk1TWUlCQzJoQlUwNVRSSFZOY2pGUmdnRUxkREEzTVZkdE5EVnhWMDAlM0QYgeDoGCILc2VhcmNoLWZlZWQ%3D",
          hl: "en",
          gl: "US",
          upload_date: "t",
          type: "v",
          duration: "s",
          features: "li;hd",
          sort: "v",
        },
        headers: {
          "X-RapidAPI-Key":
            "53960dcdc4msh1c55b45ae9e4e9ap1506b9jsn7a5e1ec9dbde",
          "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
        },
      })
      .then((res) => {
        setSearch(res);
      });
  }, []);
  // console.log("Search", search.data);

  return (
    <SearchContext.Provider value={search.data}>
      {children}
    </SearchContext.Provider>
  );
};

export const channelContext = createContext();

export const ChannelDataProvider = ({ children }) => {
  const [channelData, setChannelData] = useState([]);
  useEffect(() => {
    axios.get("/data.json")
      .then((res) => {
        setChannelData(res);
      });
  }, []);
  // console.log("ChannelData", channelData);

  return (
    <channelContext.Provider value={channelData.data}>
      {children}
    </channelContext.Provider>
  );
};
