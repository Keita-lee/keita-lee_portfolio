"use client";

import { useState } from "react";

type SaveIntent = "keep" | "playlist" | "queue" | null;
type SaveStatus = "idle" | "saved" | "pending" | "confirmed";

const playlists = ["Discover Weekly Picks", "Running Mix", "New playlist…"];

export default function SaveIntentDemo() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [offline, setOffline] = useState(false);
  const [intent, setIntent] = useState<SaveIntent>(null);
  const [status, setStatus] = useState<SaveStatus>("idle");
  const [selectedPlaylist, setSelectedPlaylist] = useState(playlists[0]);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  const handleHeartTap = () => {
    if (status === "saved" || status === "confirmed") {
      setStatus("idle");
      setIntent(null);
      setToast(null);
      return;
    }
    setSheetOpen(true);
  };

  const handleIntent = (next: SaveIntent, playlist?: string) => {
    setIntent(next);
    setSheetOpen(false);

    if (offline) {
      setStatus("pending");
      showToast("Saved offline — will sync when connected");
      return;
    }

    setStatus("confirmed");
    if (next === "keep") showToast("Added to Liked Songs");
    if (next === "playlist") showToast(`Added to ${playlist ?? selectedPlaylist}`);
    if (next === "queue") showToast("Added to queue — playing next");
  };

  const syncNow = () => {
    setOffline(false);
    if (status === "pending") {
      setStatus("confirmed");
      showToast(
        intent === "keep"
          ? "Synced — Added to Liked Songs"
          : intent === "playlist"
            ? `Synced — Added to ${selectedPlaylist}`
            : "Synced — Added to queue"
      );
    }
  };

  const heartFilled = status === "saved" || status === "confirmed" || status === "pending";
  const heartClass =
    status === "pending"
      ? "text-[#1DB954]/50 border-[#1DB954]/40 border-dashed"
      : heartFilled
        ? "text-[#1DB954]"
        : "text-[#A09A95]";

  return (
    <div className="bg-[#FAFAF8] rounded-2xl p-12 border border-[#EAE7E2]">
      {/* Controls */}
      <div className="text-center mb-10">
        <div className="text-xs font-semibold tracking-[0.1em] uppercase text-[#A09A95] mb-5">
          Try it — tap save on a track
        </div>
        <button
          type="button"
          onClick={() => {
            setOffline((o) => !o);
            if (!offline && status === "pending") syncNow();
          }}
          className={`px-5 py-2 rounded-full border text-sm font-medium cursor-pointer transition-all duration-150 font-sans ${
            offline
              ? "bg-[#1C1917] border-[#1C1917] text-white"
              : "bg-white border-[#DDD9D4] text-[#6B6460] hover:border-[#A09A95]"
          }`}
        >
          {offline ? "Offline mode · ON" : "Offline mode · OFF"}
        </button>
      </div>

      {/* Phone wireframe */}
      <div className="max-w-[260px] mx-auto mb-11 relative">
        <div className="bg-[#EDECE8] rounded-[36px] p-3 border border-[#DDD9D4] shadow-[0_8px_36px_rgba(28,25,23,0.09)]">
          <div className="flex justify-center py-2 pb-1">
            <div className="w-[72px] h-[5px] bg-[#D4D0CB] rounded-full" />
          </div>
          <div className="bg-[#121212] rounded-[26px] overflow-hidden min-h-[400px] relative">
            {/* Phone header */}
            <div className="px-3.5 py-2.5 border-b border-[#282828] flex justify-between items-center">
              <div className="w-6 h-[5px] bg-[#535353] rounded" />
              <div className="text-[10px] text-white font-semibold tracking-wide">Discover Weekly</div>
              <div className="w-6 h-[5px] bg-[#535353] rounded" />
            </div>

            <div className="p-3.5">
              <div className="text-[9px] font-bold tracking-[0.1em] uppercase text-[#B3B3B3] mb-2">
                Made for you
              </div>

              {/* Track row */}
              <div className="flex items-center gap-2.5 mb-4 p-2 rounded-lg bg-[#282828]">
                <div className="w-10 h-10 rounded bg-gradient-to-br from-[#1DB954] to-[#191414] shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] text-white font-medium truncate">Midnight City</div>
                  <div className="text-[9px] text-[#B3B3B3] truncate">M83 · Hurry Up, We&apos;re Dreaming</div>
                </div>
                <button
                  type="button"
                  onClick={handleHeartTap}
                  aria-label="Save track"
                  className={`w-7 h-7 flex items-center justify-center text-base transition-colors ${heartClass}`}
                >
                  {heartFilled ? "♥" : "♡"}
                </button>
              </div>

              {/* Toast */}
              {toast && (
                <div className="mb-3 px-2.5 py-2 bg-[#282828] border border-[#1DB954]/30 rounded-lg">
                  <div className="text-[9px] text-[#1DB954] leading-relaxed">{toast}</div>
                </div>
              )}

              {status === "pending" && (
                <div className="mb-3 px-2.5 py-2 bg-[#282828] rounded-lg border border-dashed border-[#535353]">
                  <div className="text-[9px] text-[#B3B3B3] mb-2">Pending sync…</div>
                  <button
                    type="button"
                    onClick={syncNow}
                    className="text-[9px] text-[#1DB954] font-semibold"
                  >
                    Simulate reconnect →
                  </button>
                </div>
              )}

              {/* Mini player */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#282828] border-t border-[#121212] px-3 py-2 flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-gradient-to-br from-[#1DB954] to-[#191414] shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-[9px] text-white truncate">Midnight City</div>
                  <div className="text-[8px] text-[#B3B3B3] truncate">M83</div>
                </div>
                <div className="text-[#1DB954] text-xs">▶</div>
              </div>
            </div>

            {/* Bottom sheet */}
            {sheetOpen && (
              <div className="absolute inset-0 bg-black/60 flex flex-col justify-end rounded-[26px]">
                <div className="bg-[#282828] rounded-t-2xl p-3.5 pb-5">
                  <div className="w-8 h-1 bg-[#535353] rounded-full mx-auto mb-3" />
                  <div className="text-[10px] font-semibold text-white mb-3">Save with intent</div>

                  <button
                    type="button"
                    onClick={() => handleIntent("keep")}
                    className="w-full text-left px-3 py-2.5 rounded-lg bg-[#121212] mb-1.5 hover:bg-[#1a1a1a] transition-colors"
                  >
                    <div className="text-[10px] text-white font-medium">Keep in Library</div>
                    <div className="text-[8px] text-[#B3B3B3]">Adds to Liked Songs</div>
                  </button>

                  <div className="px-3 py-2 rounded-lg bg-[#121212] mb-1.5">
                    <div className="text-[10px] text-white font-medium mb-2">Save to playlist</div>
                    {playlists.map((pl) => (
                      <button
                        key={pl}
                        type="button"
                        onClick={() => {
                          setSelectedPlaylist(pl);
                          handleIntent("playlist", pl);
                        }}
                        className={`block w-full text-left text-[9px] py-1 ${
                          selectedPlaylist === pl ? "text-[#1DB954]" : "text-[#B3B3B3]"
                        }`}
                      >
                        {pl}
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => handleIntent("queue")}
                    className="w-full text-left px-3 py-2.5 rounded-lg bg-[#121212] hover:bg-[#1a1a1a] transition-colors"
                  >
                    <div className="text-[10px] text-white font-medium">Add to queue</div>
                    <div className="text-[8px] text-[#B3B3B3]">Play next, not saved forever</div>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Pseudocode */}
      <div className="max-w-[520px] mx-auto bg-white rounded-xl border border-[#E2DDD7] overflow-hidden">
        <div className="px-5 py-3 bg-[#F5F2EE] border-b border-[#E2DDD7]">
          <span className="text-xs font-semibold tracking-[0.08em] uppercase text-[#A09A95]">
            The intent model
          </span>
        </div>
        <div className="px-6 py-5 font-mono text-[13px] leading-loose text-[#1C1917]">
          <span className="text-[#9E9993]">on</span> save_tap():<br />
          &nbsp;&nbsp;show_sheet(intents=[<span className="text-[#1DB954]">&quot;keep&quot;</span>,{" "}
          <span className="text-[#1DB954]">&quot;playlist&quot;</span>,{" "}
          <span className="text-[#1DB954]">&quot;queue&quot;</span>])<br />
          <br />
          <span className="text-[#9E9993]">if</span> offline:<br />
          &nbsp;&nbsp;queue_op(intent) <span className="text-[#C8C4BC]"># pending UI</span>
          <br />
          <span className="text-[#9E9993]">else</span>:<br />
          &nbsp;&nbsp;confirm_toast(intent) <span className="text-[#C8C4BC]"># immediate feedback</span>
        </div>
      </div>
    </div>
  );
}
