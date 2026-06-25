"use client";

import { useState } from "react";

type Category = "clothing" | "shoes" | "accessories";

const categoryData: Record<
  Category,
  { label: string; sizes: string[]; note: string }
> = {
  clothing: {
    label: "Clothing",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    note: "Clothing size schema — XS through XXL",
  },
  shoes: {
    label: "Shoes",
    sizes: ["UK 3", "UK 4", "UK 5", "UK 6", "UK 7", "UK 8", "UK 9"],
    note: "Shoe size schema — UK sizing table",
  },
  accessories: {
    label: "Accessories",
    sizes: [],
    note: "No size schema — size field hidden",
  },
};

export default function CategoryDemo() {
  const [selected, setSelected] = useState<Category>("clothing");
  const d = categoryData[selected];
  const isAccessories = selected === "accessories";

  const btnClass = (cat: Category) =>
    `px-7 py-2.5 rounded-full border text-sm font-medium cursor-pointer transition-all duration-150 font-sans ${
      selected === cat
        ? "bg-[#1C1917] border-[#1C1917] text-white"
        : "bg-white border-[#DDD9D4] text-[#6B6460] hover:border-[#A09A95]"
    }`;

  return (
    <div className="bg-[#FAFAF8] rounded-2xl p-12 border border-[#EAE7E2]">
      {/* Category selector */}
      <div className="text-center mb-10">
        <div className="text-xs font-semibold tracking-[0.1em] uppercase text-[#A09A95] mb-5">
          Try it — select a category
        </div>
        <div className="flex gap-3 justify-center flex-wrap">
          <button className={btnClass("clothing")} onClick={() => setSelected("clothing")}>
            Clothing
          </button>
          <button className={btnClass("shoes")} onClick={() => setSelected("shoes")}>
            Shoes
          </button>
          <button className={btnClass("accessories")} onClick={() => setSelected("accessories")}>
            Accessories
          </button>
        </div>
      </div>

      {/* Phone wireframe */}
      <div className="max-w-[260px] mx-auto mb-11">
        <div className="bg-[#EDECE8] rounded-[36px] p-3 border border-[#DDD9D4] shadow-[0_8px_36px_rgba(28,25,23,0.09)]">
          <div className="flex justify-center py-2 pb-1">
            <div className="w-[72px] h-[5px] bg-[#D4D0CB] rounded-full" />
          </div>
          <div className="bg-white rounded-[26px] overflow-hidden min-h-[360px]">
            {/* Phone header */}
            <div className="px-3.5 py-2.5 border-b border-[#F5F2EE] flex justify-between items-center">
              <div className="w-6 h-[5px] bg-[#DDD9D4] rounded" />
              <div className="w-20 h-[7px] bg-[#D4D0CB] rounded" />
              <div className="w-6 h-[5px] bg-[#E8E4DF] rounded" />
            </div>

            <div className="p-3.5">
              {/* Category */}
              <div className="text-[9px] font-bold tracking-[0.1em] uppercase text-[#B0AAA4] mb-1.5">
                CATEGORY
              </div>
              <div className="inline-block px-3 py-1.5 bg-[#1C1917] rounded-lg text-[11px] text-white mb-4">
                {d.label}
              </div>

              {/* Size */}
              <div className="text-[9px] font-bold tracking-[0.1em] uppercase text-[#B0AAA4] mb-1.5">
                SIZE
              </div>

              {!isAccessories && d.sizes.length > 0 && (
                <div className="border border-[#4D7A5E] rounded-lg p-2 bg-[#F5FAF7] mb-2.5">
                  <div className="flex gap-1 flex-wrap">
                    {d.sizes.map((size) => (
                      <div
                        key={size}
                        className="px-1.5 py-1 bg-white border border-[#D4E8DC] rounded text-[9px] text-[#1C1917] font-medium"
                      >
                        {size}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {isAccessories && (
                <div className="border border-dashed border-[#DDD9D4] rounded-lg p-3.5 text-center mb-2.5">
                  <div className="text-[9px] text-[#A09A95] italic">
                    Size not applicable
                  </div>
                </div>
              )}

              <div className="px-2.5 py-1.5 bg-[#F0F9F4] rounded border-l-2 border-[#4D7A5E] mb-4">
                <div className="text-[9px] text-[#4D7A5E] leading-relaxed">{d.note}</div>
              </div>

              {/* Photos */}
              <div className="text-[9px] font-bold tracking-[0.1em] uppercase text-[#B0AAA4] mb-1.5">
                PHOTOS
              </div>
              <div className="border border-dashed border-[#DDD9D4] rounded-lg p-3 text-center mb-3">
                <div className="w-5 h-5 bg-[#E8E4DF] rounded mx-auto mb-1.5" />
                <div className="w-16 h-[5px] bg-[#E8E4DF] rounded mx-auto" />
              </div>
              <div className="bg-[#1C1917] rounded-lg p-2.5 text-center">
                <div className="w-20 h-[7px] bg-[#3A3733] rounded mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pseudocode */}
      <div className="max-w-[520px] mx-auto bg-white rounded-xl border border-[#E2DDD7] overflow-hidden">
        <div className="px-5 py-3 bg-[#F5F2EE] border-b border-[#E2DDD7]">
          <span className="text-xs font-semibold tracking-[0.08em] uppercase text-[#A09A95]">
            The conditional logic
          </span>
        </div>
        <div className="px-6 py-5 font-mono text-[13px] leading-loose text-[#1C1917]">
          <span className="text-[#9E9993]">if</span> category =={" "}
          <span className="text-[#4D7A5E]">&quot;shoes&quot;</span>:<br />
          &nbsp;&nbsp;size_schema ={" "}
          <span className="text-[#4D7A5E]">uk_shoe_sizes</span>
          <br />
          <span className="text-[#9E9993]">elif</span> category =={" "}
          <span className="text-[#4D7A5E]">&quot;clothing&quot;</span>:<br />
          &nbsp;&nbsp;size_schema ={" "}
          <span className="text-[#4D7A5E]">clothing_sizes</span>
          <br />
          <span className="text-[#9E9993]">else</span>:{" "}
          <span className="text-[#C8C4BC]"># accessories</span>
          <br />
          &nbsp;&nbsp;size_schema = <span className="text-[#9E9993]">None</span>{" "}
          <span className="text-[#C8C4BC]"># skip step</span>
        </div>
      </div>
    </div>
  );
}
