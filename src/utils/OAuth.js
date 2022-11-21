const KAKAO_REDIRECT_URI =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_KAKAO_DEV_REDIRECT_URI
    : process.env.REACT_APP_KAKAO_PROD_REDIRECT_URI;

const LOGOUT_REDIRECT_URI =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_KAKAO_DEV_LOGOUT_REDIRECT_URI
    : process.env.REACT_APP_KAKAO_PROD_LOGOUT_REDIRECT_URI;

const KAKAO_API_KEY = process.env.REACT_APP_KAKAO_API_KEY;

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;
export const KAKAO_AUTH_LOGOUT_URL = `https://kauth.kakao.com/oauth/logout?client_id=${KAKAO_API_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`;
