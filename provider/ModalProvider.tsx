"use client";

import { useEffect, useState } from "react";

//import AuthModal from "@/components/AuthModal";
//import SubscribeModal from "@/components/SubscribeModal";
//import UploadModal from "@/components/UploadModal";

import Modal from "@/components/Modal";
import AuthModal from "@/components/AuthModal";
import UploadModal from "@/components/UploadModal";

//interface ModalProviderProps {
//  products: ProductWithPrice[];
//}

// /: React.FC<ModalProviderProps>

const ModalProvider = ({
  //products
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal />
      <UploadModal />
    </>
  );
}

export default ModalProvider;