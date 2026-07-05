import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={waLink("Hello Titus Brands! I'd like to make an enquiry.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-0 rounded-full bg-[#25D366] px-3.5 py-3.5 text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition-all hover:gap-2 hover:pr-5"
    >
      <MessageCircle className="h-6 w-6 shrink-0" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-[140px]">
        Chat with us
      </span>
      <span className="absolute right-0 top-0 h-3 w-3 animate-ping rounded-full bg-[#25D366]" />
    </a>
  );
}
