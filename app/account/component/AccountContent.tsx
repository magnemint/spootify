"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useUser } from "@/hooks/useUser";
import Button from "@/components/Button";
import useNameModal from "@/hooks/useNameModal";

const AccountContent = () => {
  const router = useRouter();
  const { isLoading, user } = useUser();
  const nameModal = useNameModal();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace('/');
    }
  }, [isLoading, user, router]);

  return ( 
    <div className="mb-7 px-6">
      {(
        <div className="flex flex-col gap-y-4">
        { <p>Your <b>name</b> is currently: </p> }
        <Button 
          onClick={nameModal.onOpen}
          className="w-[300px]"
        >
          Change Name
        </Button>
      </div>
      )}
    </div>
  );
}
 
export default AccountContent;