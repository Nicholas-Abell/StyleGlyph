"use client";
import { FaSearch, FaClipboard } from "react-icons/fa";

import "./styles.scss";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

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
      </main>
      <section>
        <div className="flex items-center justify-center w-full">
          <div className="w-[80%] border text-center bg-slate-800 py-2">
            <h3 className="text-4xl text-slate-50 font-bold">💪 BOX</h3>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 p-4">
          <div className="border border-gray-300 rounded-lg p-4 flex gap-4 items-center">
            <div className="🟥" />
            <div className="🟦" />
            <div className="🟩" />
          </div>
          <div className="flex justify-center items-center w-full bg-slate-800 rounded-lg">
            <code className="text-sm text-slate-50 p-4">
              &lt;<span className="html-tag">div</span>{" "}
              <span className="class-name">class</span>=&quot;
              <span className="class-name">💪 gap-4</span>
              &quot;&gt;
              <br />
              <span className="hide">...</span>&lt;
              <span className="html-tag">div</span>{" "}
              <span className="class-name">class</span>=&quot;
              <span className="class-name">🟥</span>&quot;/&gt;
              <br />
              <span className="hide">...</span>
              &lt;<span className="html-tag">div</span>{" "}
              <span className="class-name">class</span>=&quot;
              <span className="class-name">🟦</span>&quot;/&gt;
              <br />
              <span className="hide">...</span>
              &lt;<span className="html-tag">div</span>{" "}
              <span className="class-name">class</span>=&quot;
              <span className="class-name">🟩</span>&quot;/&gt;
              <br />
              &lt;/
              <span className="html-tag">div</span>&gt;
            </code>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 p-4">
          <div className="💪👇 border border-gray-300 rounded-lg p-4 gap-4 items-center">
            <div className="🟥" />
            <div className="🟦" />
            <div className="🟩" />
          </div>
          <div className="flex justify-center items-center w-full bg-slate-800 rounded-lg">
            <code className="text-sm text-slate-50 p-4">
              &lt;<span className="html-tag">div</span>{" "}
              <span className="class-name">class</span>=&quot;
              <span className="class-name">💪👇 gap-4</span>
              &quot;&gt;
              <br />
              <span className="hide">...</span>&lt;
              <span className="html-tag">div</span>{" "}
              <span className="class-name">class</span>=&quot;
              <span className="class-name">🟥</span>&quot;/&gt;
              <br />
              <span className="hide">...</span>
              &lt;<span className="html-tag">div</span>{" "}
              <span className="class-name">class</span>=&quot;
              <span className="class-name">🟦</span>&quot;/&gt;
              <br />
              <span className="hide">...</span>
              &lt;<span className="html-tag">div</span>{" "}
              <span className="class-name">class</span>=&quot;
              <span className="class-name">🟩</span>&quot;/&gt;
              <br />
              &lt;/
              <span className="html-tag">div</span>&gt;
            </code>
          </div>
        </div>
      </section>
    </>
  );
}
