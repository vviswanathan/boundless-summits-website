import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return <ComingSoon page="Services" />;
}
