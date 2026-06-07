import { SignIn } from '@clerk/react';
import { getSignInRedirectUrl } from '@/lib/auth-redirect';

export default function SignInPage() {
  const redirectUrl = getSignInRedirectUrl();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <SignIn
        routing="path"
        path="/signin"
        forceRedirectUrl={redirectUrl}
        fallbackRedirectUrl={redirectUrl}
      />
    </div>
  );
}