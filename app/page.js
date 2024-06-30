import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
<section className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
      Master Your Interviews with
        <strong className="font-extrabold text-primary sm:block"> AI-Powered Practice Sessions </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
      Empower your interview preparation with cutting-edge AI technology. Practice, refine, and excel in interview scenarios with personalized feedback and insights, tailored to enhance your performance and confidence.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 :outline-none focus:ring active:bg-primary sm:w-auto"
          href="/dashboard"
        >
          Get Started
        </a>

        <a
          className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-primary focus:outline-none focus:ring active:text-primary sm:w-auto"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}
