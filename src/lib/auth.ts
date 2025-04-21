import { getServerSession } from "next-auth";
import { authOptions as options } from "@/lib/authOptions";

export const auth = () => getServerSession(options);

// ✅ Add this export so NextAuth API route can use it
export { options as authOptions };
