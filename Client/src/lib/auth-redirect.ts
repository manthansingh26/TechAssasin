const DEFAULT_REDIRECT = '/dashboard';

export function getSignInRedirectUrl(): string {
  const params = new URLSearchParams(window.location.search);
  const redirect = params.get('redirect_url');

  if (!redirect || !redirect.startsWith('/') || redirect.startsWith('//')) {
    return DEFAULT_REDIRECT;
  }

  return redirect;
}

export function buildSignInPath(returnPath?: string): string {
  const path = returnPath ?? window.location.pathname;
  return `/signin?redirect_url=${encodeURIComponent(path)}`;
}