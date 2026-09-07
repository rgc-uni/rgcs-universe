import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex flex-col items-start mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        RGC's Universe
      </h1>
      <h4 className="text-left text-lg mt-5">
        Most reliable Middleman Service for Roblox.
        <br />
        <a href="https://discord.gg/rgcs" target="_blank" className="inline-block mt-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
          Join Our Discord
        </a>
      </h4>
    </section>
  );
}
