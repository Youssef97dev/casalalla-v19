import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Casa Lalla Takerkoust - Vibe Agafay Desert",
  description:
    "Discover Casalalla Takerkoust Restaurant: A Culinary Gem Near Marrakech - Casalalla is a must-visit restaurant that offers a unique dining experience. Enjoy a delightful blend of traditional Moroccan and international cuisine, meticulously prepared with fresh, local ingredients. With breathtaking views of Takerkoust Lake and the Atlas Mountains, Casalalla provides the perfect backdrop for a memorable meal.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
