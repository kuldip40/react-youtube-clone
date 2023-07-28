import React, { useEffect } from "react";
import "./_subscriptionsScreen.scss";
import { useDispatch, useSelector } from "react-redux";
import { getSubscribedChannels } from "../../../redux/actions/videos.action";
import { Container } from "react-bootstrap";
import VideoHorizontal from "../../videoHorizontal/VideoHorizontal";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SubscriptionsScreen = () => {
  const dispatch = useDispatch();

  const { videos, loading } = useSelector(
    (state) => state.subscriptionsChannel
  );

  useEffect(() => {
    dispatch(getSubscribedChannels());
  }, [dispatch]);

  return (
    <Container fluid>
      {!loading ? (
        videos?.map((video) => (
          <VideoHorizontal video={video} key={video.id} subScreen />
        ))
      ) : (
        <SkeletonTheme color="#343a40" heighlightColor="#3c4147">
          <Skeleton width="100%" height="160px" count={20} />
        </SkeletonTheme>
      )}
    </Container>
  );
};

export default SubscriptionsScreen;
