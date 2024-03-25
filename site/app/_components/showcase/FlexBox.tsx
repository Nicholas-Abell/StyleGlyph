"use client";
import React from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type FlexBoxProps = {};

const FlexBox: React.FC<FlexBoxProps> = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(1);
  const [count, setCount] = React.useState(3);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <section className="p-4">
      <div className="flex items-center justify-center w-full">
        <div className="w-[80%] border text-center bg-slate-800 py-2">
          <h3 className="text-4xl text-slate-50 font-bold">💪 BOX</h3>
        </div>
      </div>
      {/* Mobile */}
      <div className="w-full grid md:hidden border items-center justify-center px-8">
        <Carousel setApi={setApi} className="py-2">
          <CarouselContent>
            <CarouselItem className="grid grid-cols-1 gap-4">
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
              <div className="border border-gray-300 rounded-lg p-4 flex gap-4 items-center justify-center">
                <div className="🟥" />
                <div className="🟦" />
                <div className="🟩" />
              </div>
            </CarouselItem>
            <CarouselItem className="grid grid-cols-1 gap-4">
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
              <div className="💪👈 border border-gray-300 rounded-lg p-4 gap-4 items-center justify-center">
                <div className="🟥" />
                <div className="🟦" />
                <div className="🟩" />
              </div>
            </CarouselItem>
            <CarouselItem className="grid grid-cols-1 gap-4">
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
              <div className="💪👇 border border-gray-300 rounded-lg p-4 gap-4 items-center justify-center">
                <div className="🟥" />
                <div className="🟦" />
                <div className="🟩" />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="py-2 text-center text-sm text-muted-foreground">
          Slide {current} of {count}
        </div>
      </div>
      {/* Desktop */}
      <div className="hidden md:block">
        <div className="grid grid-cols-3 gap-2 pt-4 ">
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
        </div>
        <div className="grid grid-cols-3 gap-2 pt-2">
          <div className="border justify-center border-gray-300 rounded-lg p-4 flex gap-4 items-center">
            <div className="🟥" />
            <div className="🟦" />
            <div className="🟩" />
          </div>
          <div className="💪👈 border justify-center border-gray-300 rounded-lg p-4 gap-4 items-center">
            <div className="🟥" />
            <div className="🟦" />
            <div className="🟩" />
          </div>
          <div className="💪👇 border justify-center border-gray-300 rounded-lg p-4 gap-4 items-center">
            <div className="🟥" />
            <div className="🟦" />
            <div className="🟩" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default FlexBox;
