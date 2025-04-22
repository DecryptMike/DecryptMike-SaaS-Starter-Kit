import { getServerSession } from "next-auth";
import { authOptions as options } from "@/lib/authOptions";

export const auth = () => getServerSession(options);
export { options as authOptions };

