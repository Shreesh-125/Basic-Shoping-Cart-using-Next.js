import { auth } from "@/auth";
import { redirect } from "next/navigation";

async function unAuthPage() {
  const getSession= await auth();
  if(getSession) redirect('/')

  return (
    <div className="p-20">
      <h2 className="text-6xl font-extrbold">
        You Are Not LogIn . Please LogIn
      </h2>
    </div>
  );
}

export default unAuthPage;
