import React from 'react'
import axios from "axios";
const Api = () => {
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
      "X-RapidAPI-Key": "53960dcdc4msh1c55b45ae9e4e9ap1506b9jsn7a5e1ec9dbde",
      "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    },
  })
  .then((res) => {
    console.log(res);
  });
  return (
    <div>Api</div>
  )
}

export default Api