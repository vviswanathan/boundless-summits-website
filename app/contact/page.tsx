import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Begin a Conversation",
  description: "A way to book a discovery call is coming soon.",
};

export default function ContactPage() {
  return (
    <ComingSoon
      heading="Begin a conversation."
      subline="A way to book a discovery call is coming. In the meantime, feel free to email hello@boundlesssummits.com."
    />
  );
}
