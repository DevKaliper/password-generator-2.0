

import { SignIn } from "@clerk/nextjs";
import HeaderNavBar from "../../../components/HeaderNavBar";

;

export default function Page() {

  return (
    <>
    
      <div className="grid h-[80vh] w-full place-items-center">
        <SignIn />
        
      </div>
    </>
  );
}
