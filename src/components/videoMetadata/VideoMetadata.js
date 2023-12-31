import React, { useEffect } from "react";
import "./_videoMetadata.scss";
import numeral from "numeral";
import moment from "moment";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ShowMoreText from "react-show-more-text";
import { useDispatch, useSelector } from "react-redux";
import {
  checkSubscriptionstatus,
  getChannelDetails,
} from "../../redux/actions/channel.action";
import HelmetCustom from "../HelmetCustom";

const VideoMetadata = ({ video: { snippet, statistics }, videoId }) => {
  const { channelId, channelTitle, description, title, publishedAt } = snippet;
  const { viewCount, likeCount, dislikeCount } = statistics;

  const dispatch = useDispatch();

  const {
    channel: { snippet: channelSnippet, statistics: channelStatistics },
    subscriptionStatus,
  } = useSelector((state) => state.channelDetails);

  useEffect(() => {
    dispatch(getChannelDetails(channelId));
    dispatch(checkSubscriptionstatus(channelId));
  }, [dispatch, channelId]);

  return (
    <div className="videoMetadata py-2">
      <HelmetCustom title={title} description={description} />
      <div className="videoMetadata__top">
        <h5>{title}</h5>
        <div className="d-flex justify-content-between align-items-center py-1">
          <span>
            {numeral(viewCount).format("0.a")} views •{" "}
            {moment(publishedAt).fromNow()}
          </span>
          <div>
            <span className="me-3">
              <MdThumbUp size={26} /> {numeral(likeCount).format("0.a")}
            </span>
            <span className="me-3">
              <MdThumbDown size={26} /> {numeral(dislikeCount).format("0.a")}
            </span>
          </div>
        </div>
      </div>
      <div className="videoMetadata__channel d-flex justify-content-between align-items-center my-2 py-3">
        <div className="d-flex">
          <img
            src={channelSnippet?.thumbnails?.default?.url}
            alt=""
            className="rounded-circle me-3"
          />
          <div className="d-flex flex-column">
            <span>{channelTitle}</span>
            <span>
              {numeral(channelStatistics?.subscriberCount).format("0.a")}{" "}
              Subscribers
            </span>
          </div>
        </div>
        <button
          className={`btn border-0 p-2 m-2 ${
            subscriptionStatus ? "btn-gray" : ""
          }`}
        >
          {subscriptionStatus ? "Subscribed" : "Subscribe"}
        </button>
      </div>
      <div className="videoMetadata__description">
        <ShowMoreText
          lines={3}
          more="SHOW MORE"
          less="SHOW LESS"
          anchorClass="showMoreText"
          expanded={false}
        >
          {description}
        </ShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetadata;
