"use client";

import { useState } from "react";

type Mode = "before" | "after";

export default function FormDemo() {
  const [mode, setMode] = useState<Mode>("before");

  const btnClass = (m: Mode) =>
    `px-7 py-2.5 rounded-full border text-sm font-medium cursor-pointer transition-all duration-150 font-sans ${
      mode === m
        ? "bg-[#1C1917] border-[#1C1917] text-white"
        : "bg-white border-[#DDD9D4] text-[#6B6460] hover:border-[#A09A95]"
    }`;

  return (
    <div className="bg-[#FAFAF8] rounded-2xl p-8 md:p-12 border border-[#EAE7E2]">
      <div className="text-center mb-10">
        <div className="text-xs font-semibold tracking-[0.1em] uppercase text-[#A09A95] mb-5">
          Try it — toggle the flow
        </div>
        <div className="flex gap-3 justify-center flex-wrap">
          <button className={btnClass("before")} onClick={() => setMode("before")}>
            Before — free-text chat
          </button>
          <button className={btnClass("after")} onClick={() => setMode("after")}>
            After — structured form
          </button>
        </div>
      </div>

      <div className="max-w-[280px] mx-auto">
        <div className="bg-[#EDECE8] rounded-[36px] p-3 border border-[#DDD9D4] shadow-[0_8px_36px_rgba(28,25,23,0.09)]">
          <div className="flex justify-center py-2 pb-1">
            <div className="w-[72px] h-[5px] bg-[#D4D0CB] rounded-full" />
          </div>
          <div className="bg-[#ECE5DD] rounded-[26px] overflow-hidden min-h-[380px]">
            {/* WhatsApp-style header */}
            <div className="px-3.5 py-2.5 bg-[#075E54] flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[#128C7E]" />
              <div>
                <div className="text-[11px] font-semibold text-white">fibertime™ Bot</div>
                <div className="text-[9px] text-[#A7D4CE]">online</div>
              </div>
            </div>

            <div className="p-3.5 flex flex-col gap-2">
              {mode === "before" ? (
                <>
                  <BotBubble>What is the customer&apos;s full name?</BotBubble>
                  <UserBubble>john smith</UserBubble>
                  <BotBubble>Please enter their phone number.</BotBubble>
                  <UserBubble>082 555 1234</UserBubble>
                  <BotBubble>Enter alternate contact number.</BotBubble>
                  <UserBubble>0825551234</UserBubble>
                  <BotBubble>Confirm the address.</BotBubble>
                  <UserBubble>12 main rd jhb</UserBubble>
                  <p className="text-[9px] text-[#78716C] italic text-center mt-2 px-2">
                    No validation — typos reach back-office systems
                  </p>
                </>
              ) : (
                <>
                  <BotBubble>
                    Please complete the activation form below.
                  </BotBubble>
                  <div className="bg-white rounded-lg p-3 shadow-sm border border-[#DDD9D4] mx-1">
                    <div className="text-[10px] font-bold text-[#075E54] mb-2.5">
                      Customer Details
                    </div>
                    {[
                      { label: "Full name", value: "John Smith" },
                      { label: "Phone", value: "082 555 1234" },
                      { label: "Alt. contact", value: "082 555 5678" },
                      { label: "Address", value: "12 Main Rd, JHB" },
                    ].map((field) => (
                      <div key={field.label} className="mb-2">
                        <div className="text-[8px] font-semibold uppercase tracking-wide text-[#A09A95] mb-0.5">
                          {field.label}
                        </div>
                        <div className="text-[10px] text-[#1C1917] bg-[#FAFAF8] border border-[#E2DDD7] rounded px-2 py-1.5">
                          {field.value}
                        </div>
                      </div>
                    ))}
                    <div className="mt-3 bg-[#25D366] text-white text-[10px] font-semibold text-center py-2 rounded-md">
                      Submit
                    </div>
                  </div>
                  <p className="text-[9px] text-[#78716C] italic text-center mt-2 px-2">
                    Single guided form — validated before submission
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BotBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="self-start max-w-[85%] bg-white rounded-lg rounded-tl-none px-2.5 py-1.5 text-[10px] text-[#1C1917] leading-relaxed shadow-sm">
      {children}
    </div>
  );
}

function UserBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="self-end max-w-[85%] bg-[#DCF8C6] rounded-lg rounded-tr-none px-2.5 py-1.5 text-[10px] text-[#1C1917] leading-relaxed shadow-sm">
      {children}
    </div>
  );
}
