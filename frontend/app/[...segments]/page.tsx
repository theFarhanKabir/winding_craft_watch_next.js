import { RoutePage } from "@/components/Site";
import type { Metadata } from "next";
import { products } from "@/lib/products";

export async function generateMetadata({ params }: { params: Promise<{ segments: string[] }> }): Promise<Metadata> {
  const { segments } = await params;
  const product = segments[0] === "shop" && segments[1] ? products.find((item) => item.slug === segments[1]) : undefined;
  if (product) return { title: `${product.brand} ${product.model}${product.reference ? ` · ${product.reference}` : ""}`, description: `${product.description} Sample listing for the Winding Craft frontend.` };
  const pageName = segments.join(" ").replaceAll("-", " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
  return { title: pageName || "Winding Craft", description: "Pre-owned watches, clearly presented. Winding Craft, Bangladesh." };
}

export default async function Page({ params }: { params: Promise<{ segments: string[] }> }) {
  return <RoutePage segments={(await params).segments} />;
}
