const APP_ROUTES = {
  HOME: "/",
  SIGNIN: "/signin",
  SIGNUP: "/signup",
  PROFILE: "/profile",
  CONTACT: "/contact",
  CART: "/cart",
  PRODUCT: {
    INDEX: "/product",
    DETAIL: (id: string) => `/product/${id}`,
  },
  ABOUT: "/about",
};

export default APP_ROUTES;
