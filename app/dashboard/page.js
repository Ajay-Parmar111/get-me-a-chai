"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";
import DashBoard from "@/get-me-a-chai/components/Dashboard";
const Dashboard = () => {
  const { data: session } = useSession();
  if (!session) {
    const router = useRouter();
    router.push("/login");
  }
  return (
    <>
      <DashBoard />
    </>
  );
};

export default Dashboard;
