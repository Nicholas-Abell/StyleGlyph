"use client";
import { FaClipboard } from "react-icons/fa";

import "./styles.scss";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import FlexBox from "./_components/showcase/FlexBox";
import BoxShadow from "./_components/showcase/BoxShadow";

export default function Home() {
  const { toast } = useToast();

  const onCopy = (content: string) => {
    toast({ description: "Copied to cliboard" });
    navigator.clipboard.writeText(content);
  };

  return (
    <>
      <main>
        <div className="ml-auto mr-auto max-w-[640px] py-24 px-8">
          <h2 className="text-6xl font-bold">
            Be 😁 building websites 🏎️ <em className="text-xs">quickly</em> with
            emojis and style
          </h2>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolorum
            similique iste nobis aperiam nostrum
          </p>
          <div className="grid grid-cols-3 w-full items-center gap-4">
            <Button variant="default" className="font-bold">
              Get Started
            </Button>
            <Button
              onClick={() => onCopy("npm i styleglyph")}
              className="col-span-2 flex gap-2 items-center text-slate-400 border-slate-500"
              variant="outline"
            >
              npm i styleglyph
              <FaClipboard />
            </Button>
          </div>
        </div>
        <FlexBox />
        <BoxShadow />
        {/* <div className="w-full flex items-center justify-center py-8 gap-4">
          <button className="border border-blue-400 rounded-full px-8 py-6">
            X
          </button>
          <button className="border border-blue-400 rounded-full px-8 py-6">
            Y
          </button>
          <button className="border border-blue-400 rounded-full px-8 py-6">
            Z
          </button>
        </div> */}
      </main>
    </>
  );
}
