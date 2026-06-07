import { SignUp } from '@clerk/react';

function getInitialEmail(): string | undefined {
  const params = new URLSearchParams(window.location.search);
  const email = params.get('email')?.trim();
  return email || undefined;
}

export default function SignUpPage() {
  const initialEmail = getInitialEmail();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <SignUp
        routing="path"
        path="/signup"
        forceRedirectUrl="/edit-profile"
        fallbackRedirectUrl="/edit-profile"
        initialValues={initialEmail ? { emailAddress: initialEmail } : undefined}
      />
    </div>
  );
}