import React from "react";
import Shortcuts from "../shortcuts";

type Props = {};

const Contact = (props: Props) => {
  return (
    <footer className="flex flex-col justify-center items-center">
      <div className="border-t w-2/3 relative top-4" />
      <div className="flex flex-col items-center p-8">
        <a className="inline-block" href="mailto:tomer1up@gmail.com">
          <div className="flex flex-col rotate-6">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold hover:scale-110 transition-all">
              Contact Me 📭
            </h1>
            <div className="w-full h-2 bg-purple-950 rounded-full "></div>
            <div className="w-full h-2 bg-indigo-500 rounded-full translate-x-2"></div>
          </div>
        </a>
        <div className="mt-4">
          <Shortcuts />
        </div>
      </div>
    </footer>
  );
};

export default Contact;
