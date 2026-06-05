import { NextRequest, NextResponse } from "next/server";

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;
const LOCALES = new Set(["zh", "en"]);

function getRedirectUrl(request: NextRequest) {
  const { nextUrl } = request;
  const requestedNext = nextUrl.searchParams.get("next");

  if (requestedNext?.startsWith("/") && !requestedNext.startsWith("//")) {
    return new URL(requestedNext, nextUrl.origin);
  }

  const referer = request.headers.get("referer");
  if (referer) {
    const refererUrl = new URL(referer);
    if (refererUrl.origin === nextUrl.origin && refererUrl.pathname !== nextUrl.pathname) {
      return refererUrl;
    }
  }

  return new URL("/", nextUrl.origin);
}

export function GET(request: NextRequest) {
  const locale = request.nextUrl.searchParams.get("locale");
  const response = NextResponse.redirect(getRedirectUrl(request));

  if (locale && LOCALES.has(locale)) {
    response.cookies.set("preferred-locale", locale, {
      maxAge: COOKIE_MAX_AGE,
      path: "/",
      sameSite: "lax",
    });
  }

  return response;
}
