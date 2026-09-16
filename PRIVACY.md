# Privacy Policy — Stock Scanner Pro

_Last updated: 2026-09_

## Summary

Stock Scanner Pro is a single-page, client-side tool. There is no backend
server operated by this app, no user account system, and no analytics or
tracking code embedded in it.

## What is stored, and where

Everything this app stores is kept **only in your own browser**, using
`localStorage`, and is never transmitted anywhere except as described below:

- **API keys** you enter (Finnhub, Twelve Data, FMP, Polygon, Alpha
  Vantage, Tiingo, EODHD, Alpaca, etc.) — stored locally so you don't have
  to re-enter them every session.
- **Scan settings** (score mode, pass threshold, TTL, batch size,
  auto-export interval, minimum market cap / liquidity filters).
- **API usage counters**, to help you track your daily quota against each
  provider's limits.
- **An automatic local backup of scan progress** (which tickers have been
  screened and their results), so a closed or reloaded browser tab doesn't
  lose your progress. This is separate from, and does not replace, the
  manual "Export Checkpoint" feature, which lets you save a JSON file you
  control and can move to another browser or device.

None of the above is sent to any server controlled by this app's author,
because no such server exists.

## Third-party network requests

To screen and score stocks, this app makes requests directly from your
browser to third-party data providers you choose to configure (Finnhub,
Twelve Data, Financial Modeling Prep, Polygon.io, Alpha Vantage, Tiingo,
EODHD, Yahoo Finance, Stooq) and, where a provider blocks direct
browser requests, through public CORS proxy services (e.g. allorigins.win,
corsproxy.io, api.codetabs.com, thingproxy.freeboard.io) to reach them.

When a request includes an API key, that key is sent as part of the
request (as required by that provider's own API design) to that provider,
and — when a CORS proxy is used — passes through that proxy as well. This
app has no control over, and makes no representations about, the privacy
or data-retention practices of these third-party providers or proxies;
review their own privacy policies if you have concerns about a specific
one. Because some of these keys are sent as URL query parameters, they may
appear in your browser's own local history — this is inherent to how these
providers' free/public APIs are designed for direct browser use, not a
choice made by this app.

## What this app does NOT do

- It does not use cookies, analytics SDKs, or third-party trackers.
- It does not have a login or account system, so it has no email address,
  password, or personal profile to store.
- It does not sell, share, or transmit your data to any party other than
  the third-party financial data providers and CORS proxies you configure
  it to use, for the sole purpose of fetching the market data you request.

## Clearing your data

Clearing this app's data (via your browser's site data settings, or the
in-app "Reset" action for scan progress) removes everything listed above
from your device. There is no server-side copy to separately delete,
because none exists.

## Not investment advice

This tool is provided for educational and informational purposes only. It
does not constitute investment, financial, legal, or tax advice. Nothing
it displays is a recommendation to buy or sell any security.
