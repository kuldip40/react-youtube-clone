import {
  CHANNEL_VIDEOS_FAIL,
  CHANNEL_VIDEOS_REQUEST,
  CHANNEL_VIDEOS_SUCCESS,
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
  RELATED_VIDEO_FAIL,
  RELATED_VIDEO_REQUEST,
  RELATED_VIDEO_SUCCESS,
  SEARCH_VIDEOS_FAIL,
  SEARCH_VIDEOS_REQUEST,
  SEARCH_VIDEOS_SUCCESS,
  SELECTED_VIDEO_FAIL,
  SELECTED_VIDEO_REQUEST,
  SELECTED_VIDEO_SUCCESS,
  SUBSCRIPTIONS_CHANNEL_FAIL,
  SUBSCRIPTIONS_CHANNEL_REQUEST,
  SUBSCRIPTIONS_CHANNEL_SUCCESS,
} from "../actionType";

export const homeVideosReducer = (
  state = {
    videos: [],
    loading: false,
    nextPageToken: null,
    activeCategory: "All",
  },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case HOME_VIDEOS_REQUEST:
      return { ...state, loading: true };

    case HOME_VIDEOS_SUCCESS:
      return {
        ...state,
        videos:
          state.activeCategory === payload.category
            ? [...state.videos, ...payload.videos]
            : payload.videos,
        nextPageToken: payload.nextPageToken,
        activeCategory: payload.category,
        loading: false,
      };

    case HOME_VIDEOS_FAIL:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};

export const selectedVideoReducer = (
  state = {
    loading: true,
    video: null,
  },
  action
) => {
  const { payload, type } = action;

  switch (type) {
    case SELECTED_VIDEO_REQUEST:
      return { ...state, loading: true };

    case SELECTED_VIDEO_SUCCESS:
      return { ...state, loading: false, video: payload };

    case SELECTED_VIDEO_FAIL:
      return { ...state, loading: false, video: null, error: payload };

    default:
      return state;
  }
};
export const relatedVideoReducer = (
  state = {
    loading: true,
    videos: [],
  },
  action
) => {
  const { payload, type } = action;

  switch (type) {
    case RELATED_VIDEO_REQUEST:
      return { ...state, loading: true };

    case RELATED_VIDEO_SUCCESS:
      return { ...state, loading: false, videos: payload };

    case RELATED_VIDEO_FAIL:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};

export const searchedVideosReducer = (
  state = {
    loading: true,
    videos: [],
  },
  action
) => {
  const { payload, type } = action;

  switch (type) {
    case SEARCH_VIDEOS_REQUEST:
      return { ...state, loading: true };

    case SEARCH_VIDEOS_SUCCESS:
      return { ...state, loading: false, videos: payload };

    case SEARCH_VIDEOS_FAIL:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};

export const subscriptionsChannelReducer = (
  state = {
    loading: true,
    videos: [],
  },
  action
) => {
  const { payload, type } = action;

  switch (type) {
    case SUBSCRIPTIONS_CHANNEL_REQUEST:
      return { ...state, loading: true };

    case SUBSCRIPTIONS_CHANNEL_SUCCESS:
      return { ...state, loading: false, videos: payload };

    case SUBSCRIPTIONS_CHANNEL_FAIL:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};

export const channelVideosReducer = (
  state = {
    loading: true,
    videos: [],
  },
  action
) => {
  const { payload, type } = action;

  switch (type) {
    case CHANNEL_VIDEOS_REQUEST:
      return { ...state, loading: true };

    case CHANNEL_VIDEOS_SUCCESS:
      return { ...state, loading: false, videos: payload };

    case CHANNEL_VIDEOS_FAIL:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
