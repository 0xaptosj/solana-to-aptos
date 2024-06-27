"use client";

import { useToast } from "@/components/ui/use-toast";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import { Network } from "@aptos-labs/ts-sdk";
import { Toaster } from "@/components/ui/toaster";
import { RootHeader } from "@/components/RootHeader";

export function WalletProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { toast } = useToast();

  return (
    <AptosWalletAdapterProvider
      autoConnect={true}
      dappConfig={{ network: Network.TESTNET }}
      onError={(error) => {
        toast({
          variant: "destructive",
          title: "Error",
          description: error || "Unknown wallet error",
        });
      }}
    >
      <RootHeader />
      {children}
      <Toaster />
    </AptosWalletAdapterProvider>
  );
}
