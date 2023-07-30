const API_ROUTES = {
  AUTH: {
    LOGIN: "/auth/login",
    SOCIAL_LOGIN: "/auth/social_login",
    SIGN_UP: "/auth/signup",
    LOG_OUT: "/auth/logout",
    REFRESH_TOKEN: "/auth/refreshToken",
  },
  PRODUCT: {
    ALL: "/product/all",
    DETAIL: (id: string) => `/product/get/${id}`,
  },
  USER: {
    GET_SELF: "/user/getself",
    UPDATE_SELF: "/user/update_self",
    CART: {
      ADD: "/user/cart/add",
      REMOVE: "/user/cart/remove",
      UPDATE_QUANTITY: "/user/cart/updatequantity",
      CLEAR: "/user/cart/clear",
    },
  },
};

export default API_ROUTES;
