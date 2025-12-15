import "./globals.css";

export const metadata = {
  title: "Bharti Kumari - Frontend Developer",
  description: "Professional portfolio showcasing React, Angular and UI engineering",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#0a0f1d] text-white">
        
        {/* Scroll to top on load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== "undefined") {
                window.scrollTo(0, 0);
              }
            `,
          }}
        />

        {children}
      </body>
    </html>
  );
}
