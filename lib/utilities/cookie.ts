import nookies, { parseCookies, setCookie, destroyCookie } from "nookies";

import { CookieType } from "lib/constants";

interface ICookie {
  getExpireDate: () => number;
  remove: (name: string, ctx: any) => void;
  get: (name: string, type: string, ctx: any) => any;
  set: (name: string, value: any, options: any, ctx: any) => void;
  Type: Object;
}

function getExpireDate() {
  return 60 * 60;
}

function remove(name: string, ctx: any) {
  destroyCookie(typeof window === "undefined" ? ctx : null, name, {
    path: "/",
  });
}

function get(name: string, type = CookieType.DEFAULT, context: any) {
  let cookies;
  const isServer = typeof window === "undefined";

  if (context && isServer) {
    cookies = nookies.get(context);
  } else if (!isServer) {
    cookies = parseCookies();
  } else {
    cookies = {};
  }

  if (type === CookieType.OBJECT && cookies[name]) {
    try {
      return JSON.parse(cookies[name]);
    } catch (e) {
      return {};
    }
  } else if (type === CookieType.BOOL && cookies[name]) {
    return cookies[name] === "true";
  }

  return cookies[name] || false;
}

function set(name: string, value: any, options: any, ctx: any) {
  // eslint-disable-next-line valid-typeof
  const isObject = typeof value === CookieType.OBJECT;

  const newValue = isObject ? JSON.stringify(value) : value;

  if (typeof window === "undefined" && !ctx?.res?.headersSent) {
    nookies.set(ctx, name, newValue, {
      maxAge: getExpireDate(),
      path: "/",
      ...options,
    });
  } else if (typeof window !== "undefined") {
    setCookie(null, name, newValue, {
      maxAge: getExpireDate(),
      path: "/",
      ...options,
    });
  }
}

const cookie: ICookie = {
  remove,
  getExpireDate,
  get,
  set,
  Type: CookieType,
};

export default cookie;
