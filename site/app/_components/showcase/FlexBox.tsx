import React from "react";

type FlexBoxProps = {};

const FlexBox: React.FC<FlexBoxProps> = () => {
  return (
    <section className="p-4">
      <div className="flex items-center justify-center w-full">
        <div className="w-[80%] border text-center bg-slate-800 py-2">
          <h3 className="text-4xl text-slate-50 font-bold">💪 BOX</h3>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 pt-4">
        <div className="flex justify-center items-center w-full bg-slate-800 rounded-lg">
          <code className="text-sm text-slate-50 p-4">
            <p className="underline">Flex Row</p>
            &lt;<span className="html-tag">div</span>{" "}
            <span className="class-name">class</span>=&quot;
            <span className="class-name">💪</span>
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
        <div className="flex justify-center items-center w-full bg-slate-800 rounded-lg">
          <code className="text-sm text-slate-50 p-4">
            <p className="underline">Flex Column</p>
            &lt;<span className="html-tag">div</span>{" "}
            <span className="class-name">class</span>=&quot;
            <span className="class-name">💪👇</span>
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
        <div className="flex justify-center items-center w-full bg-slate-800 rounded-lg">
          <code className="text-sm text-slate-50 p-4">
            <p className="underline">Flex Row-Reverse</p>
            &lt;<span className="html-tag">div</span>{" "}
            <span className="class-name">class</span>=&quot;
            <span className="class-name">💪👈</span>
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
      <div className="grid grid-cols-3 gap-2 pt-2">
        <div className="border border-gray-300 rounded-lg p-4 flex gap-4 items-center">
          <div className="🟥" />
          <div className="🟦" />
          <div className="🟩" />
        </div>
        <div className="💪👇 border border-gray-300 rounded-lg p-4 gap-4 items-center">
          <div className="🟥" />
          <div className="🟦" />
          <div className="🟩" />
        </div>
        <div className="💪👈 border border-gray-300 rounded-lg p-4 gap-4 items-center">
          <div className="🟥" />
          <div className="🟦" />
          <div className="🟩" />
        </div>
      </div>
    </section>
  );
};
export default FlexBox;
