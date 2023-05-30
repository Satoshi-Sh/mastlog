import { TootProps } from "../interfaces/interfaces";
import { convertHtmlToString } from "../utils/utils";
import "./TootSec.css";
const TootSec: React.FC<TootProps> = (props) => {
  const { data } = props.data;
  const { account } = data;

  return (
    <div className="toot-section">
      <img className="avatar2" src={account.avatar} />
      <div className="toot-content">
        <div className="content-header-div">
          <h4 className="content-header">
            {account.display_name}{" "}
            <span className="account-name">{account.username}</span>
          </h4>
          <span className="account-name">
            {String(data.created_at).split("T").at(0)}
          </span>
        </div>
        <p className="toot-content">{convertHtmlToString(data.content)}</p>
        <div className="img-div">
          {data.media_attachments.length > 0 ? (
            data.media_attachments.map((media, index) => (
              <div className="image-container" key={index}>
                <img
                  className="toot-img"
                  src={String(media.preview_url)}
                  alt={String(media.description)}
                />
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
        <span className="sub-time">
          Posted at {String(data.created_at).split("T").at(-1)?.slice(0, 5)}
        </span>
      </div>
    </div>
  );
};

export default TootSec;
