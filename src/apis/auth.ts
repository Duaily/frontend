import axios from "axios";

export const kakaoLogin = async (code: string) => {
  const response = await axios.get<LoginResponse>(`/auth/kakao?code=${code}`);
  return response.data.data;
};

interface LoginResponseData {
  grantType: string;
  accessToken: string;
  refreshToken: string;
  accessTokenExpireTime: string;
  init: boolean;
}

interface LoginResponse {
  data: LoginResponseData;
}
