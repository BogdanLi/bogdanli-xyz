export default function StructuredData({
  type,
  data,
}: {
  type: "Article" | "FAQPage" | "Product";
  data: any;
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": type,
          ...data,
        }),
      }}
    />
  );
}
