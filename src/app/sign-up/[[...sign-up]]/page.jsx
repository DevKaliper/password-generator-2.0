import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <>
        
          <div className="grid h-[80vh] w-full place-items-center">
            <SignUp />
            
          </div>
        </>
      );
}