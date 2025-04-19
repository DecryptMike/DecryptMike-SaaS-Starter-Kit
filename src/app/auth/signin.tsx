// pages/auth/signin.tsx
import { getProviders, signIn } from "next-auth/react";

export default function SignIn({ providers }: any) {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
      {Object.values(providers).map((provider: any) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
