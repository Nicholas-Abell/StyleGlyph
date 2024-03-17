import "./styles.scss";
import { Button } from "@/components/ui/button";
import { FaSearch } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <main>
        <div className="ml-auto mr-auto max-w-[480px] py-24">
          <h2 className="text-4xl md:text-6xl font-bold">
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
              className="col-span-2 flex gap-2 items-center text-slate-400 border-slate-500"
              variant="outline"
            >
              <FaSearch />
              Quick search...
            </Button>
          </div>
        </div>
      </main>
      <section>
      </section>
    </>
  );
}
