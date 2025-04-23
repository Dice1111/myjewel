import React from "react";

interface EmailTemplateProps {
  email: string;
}

export const EmailTemplate = ({ email }: EmailTemplateProps) => {
  return (
    <div className="bg-white text-gray-800 p-6 max-w-xl mx-auto rounded-lg border border-gray-200 shadow-md font-sans">
      <h1 className="text-2xl font-semibold text-[#0D4269] mb-4">Hi!,</h1>
      <p className="text-base leading-relaxed mb-4">
        I just wanted to reach out and say hello 👋. I’m really glad we’ve
        connected! this is my email address - {email}.
      </p>
      <p className="text-base leading-relaxed mb-6">
        Looking forward to hearing more from you and seeing where this
        connection goes!
      </p>
    </div>
  );
};
