const url = "https://api.spotify.com/v1";

//gets current user's profile information
export const getProfile = async () => {
  const access_token = window.localStorage.getItem("access_token");
  const data = await fetch(`${url}/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
  });
  const res = await data.json();
  console.log(res);
  return res;
};

//gets certain amount (num) of users top artists or tracks (type) for given time range
//short_term: 4-weeks, medium_term: 6 months, long_term: all-time
export const getUserTop = async (type, time_range, num) => {
  const access_token = window.localStorage.getItem("access_token");
  const data = await fetch(
    `${url}/me/top/${type}?limit=${num}&time_range=${time_range}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
    }
  );
  const res = await data.json();
  console.log(res);
  return res;
};

//get current user's playlists
export const getUserPlaylists = async () => {
  const access_token = window.localStorage.getItem("access_token");
  const data = await fetch(`${url}/me/playlists`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
  });
  const res = await data.json();
  console.log(res);
  return res;
};

//get current user's saved tracks, default limit is 20
export const getUserSaved = async () => {
  const access_token = window.localStorage.getItem("access_token");
  const data = await fetch(`${url}/me/tracks?limit=50`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
  });
  const res = await data.json();
  console.log(res);
  return res;
};

//get current user's recently played tracks
export const getRecents = async () => {
  const access_token = window.localStorage.getItem("access_token");
  const data = await fetch(`${url}/me/player/recently-played`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
  });
  const res = await data.json();
  console.log(res);
  return res;
};

export const getTopGlobal = async () => {
  const access_token = window.localStorage.getItem("access_token");
  const data = await fetch(`${url}/playlists/37i9dQZEVXbNG2KDcFcKOF/tracks`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
  });
  const res = await data.json();
  console.log(res);
  return res;
};

export const getTopUS = async () => {
  const access_token = window.localStorage.getItem("access_token");
  const data = await fetch(`${url}/playlists/37i9dQZEVXbLp5XoPON0wI/tracks`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
  });
  const res = await data.json();
  console.log(res);
  return res;
};

export const getTopViral = async () => {
  const access_token = window.localStorage.getItem("access_token");
  const data = await fetch(`${url}/playlists/37i9dQZEVXbKuaTI1Z1Afx/tracks`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
  });
  const res = await data.json();
  console.log(res);
  return res;
};

export const getSearch = async (q) => {
  const access_token = window.localStorage.getItem("access_token");
  const data = await fetch(`${url}/search?query=${q}&type=track,artist`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
  });
  const res = await data.json();
  console.log(res);
  return res;
};

export const getDiscoverWeekly = async () => {
  const access_token = window.localStorage.getItem("access_token");
  const data = await fetch(`${url}/playlists/37i9dQZEVXcLzh4M5AZxOL/tracks`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
  });
  const res = await data.json();
  console.log(res);
  return res;
};

export const getFeaturedPlaylists = async () => {
  const access_token = window.localStorage.getItem("access_token");
  const data = await fetch(`${url}/browse/featured-playlists?country=US`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
  });
  const res = await data.json();
  console.log(res);
  return res;
};

export const getPlaylistTracks = async (playlist) => {
  const access_token = window.localStorage.getItem("access_token");
  const data = await fetch(`${url}/playlists/${playlist}/tracks`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
  });
  const res = await data.json();
  console.log(res);
  return res;
};

export const getNewReleases = async () => {
  const access_token = window.localStorage.getItem("access_token");
  const data = await fetch(`${url}/browse/new-releases?country=US`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
  });
  const res = await data.json();
  console.log(res);
  return res;
};

export const getAlbumTracks = async (album) => {
  const access_token = window.localStorage.getItem("access_token");
  const data = await fetch(`${url}/albums/${album}/tracks`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
  });
  const res = await data.json();
  console.log(res);
  return res;
};
