import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Services",
  description: "The coaching engagements I offer — coming soon.",
};

export default function ServicesPage() {
  return (
    <ComingSoon
      activePage="/services"
      heading="Services."
      subline="The coaching engagements I offer — the depth, the cadence, the investment — will live here soon."
    />
  );
}
