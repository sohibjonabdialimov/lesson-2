import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import {
  AboutChannelProvider,
  ChannelDataProvider,
  ChannelProvider,
  CommentsProvider,
  InfoProvider,
  PlaylistProvider,
  SearchProvider,
  TrendingProvider,
} from "./context/Context.jsx";
import { EachProvider, NavProvider } from "./context/NavContext.jsx";
import { TokenProvider } from "./context/Token.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AboutChannelProvider>
      <ChannelProvider>
        <CommentsProvider>
          <TrendingProvider>
            <InfoProvider>
              <PlaylistProvider>
                <SearchProvider>
                  <NavProvider>
                    <ChannelDataProvider>
                      <EachProvider>
                        <TokenProvider>
                          <App />
                        </TokenProvider>
                      </EachProvider>
                    </ChannelDataProvider>
                  </NavProvider>
                </SearchProvider>
              </PlaylistProvider>
            </InfoProvider>
          </TrendingProvider>
        </CommentsProvider>
      </ChannelProvider>
    </AboutChannelProvider>
  </BrowserRouter>
);
