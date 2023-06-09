import "./UserHeader.css";
import React, { useEffect, useState } from "react";
import { Account, TabProps } from "../interfaces/interfaces";
import { convertHtmlToString } from "../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMastodon, faGithub } from "@fortawesome/free-brands-svg-icons";
import { API_URL } from "../utils/const";
//follow and follower count component

const Tab: React.FC<TabProps> = (props) => {
  const { name, count, baseURL } = props;
  return (
    <div className="tab-div">
      <a className="masto-link" href={`${baseURL}/${name}`}>
        <span className="count-num">{count} </span>
      </a>
      &nbsp;
      <span className="name">{name}</span>
    </div>
  );
};

const UserHeader: React.FC = () => {
  const [accountData, setAccountData] = useState<Account | null>(null);

  useEffect(() => {
    // Make an HTTP GET request
    fetch(`${API_URL}/header`)
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the received data
        setAccountData(data["data"]["account"]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="userheader-div">
      {accountData ? (
        <div
          className="background-div"
          style={{
            backgroundImage: `url(${accountData.header})`,
          }}
        >
          <div className="info-div">
            <div className="avatar-name">
              <img src={accountData.avatar} className="avatar"></img>
              <div className="avatar-div">
                <h2>
                  <FontAwesomeIcon icon={faMastodon} id="mastlogo" />
                  <a className="masto-link" href={accountData.url}>
                    {accountData.display_name}
                  </a>
                  <span id="account-name">@{accountData.username}</span>
                </h2>
              </div>
            </div>
            <div className="tabs-div">
              <Tab
                count={accountData.following_count}
                name="following"
                baseURL={accountData.url}
              />
              <Tab
                count={accountData.followers_count}
                name="followers"
                baseURL={accountData.url}
              />
            </div>
            <div className="git-div">
              <FontAwesomeIcon icon={faGithub} />

              <a className="masto-link" href="https://github.com/Satoshi-Sh">
                https://github.com/Satoshi-Sh
              </a>
            </div>
            <div className="description">
              {convertHtmlToString(accountData.note)}
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserHeader;
