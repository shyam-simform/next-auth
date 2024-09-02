import { auth, signOut } from "@/auth";

const SettingsPage = async () => {
  const session = await auth();
  console.log(session, ">>>>>> sessions loaded");
  return (
    <>
      <div>{JSON.stringify(session)}</div>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button>Sign Out</button>
      </form>
    </>
  );
};

export default SettingsPage;
