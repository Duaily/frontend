import axios from "axios";

export const kakaoLogin = async (code: string) => {
  const response = await axios.get<LoginResponse>(`/auth/kakao?code=${code}`);
  return response.data.data;
};
export const reissue = async () => {
  try {
    const { data } = await axios.post<ReissueResponse>("/auth/reissue", {
      accessToken: localStorage.getItem("accessToken")?.split(" ")[1],
      refreshToken: localStorage.getItem("refreshToken")?.split(" ")[1],
    });
    return data;
  } catch (e) {}
};
export const getUser = async () => {
  try {
    const { data } = await axios.get<UserResponse>("/user");
    return data.data;
  } catch (e) {
    return null;
  }
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

interface ReissueResponse {
  status: number;
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

interface UserResponse {
  status: number;
  message: string;
  data: {
    email: string;
    nickname: string;
    contact?: string;
  };
}
