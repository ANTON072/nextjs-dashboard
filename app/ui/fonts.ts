import { Inter, Lusitana } from "next/font/google";

// ラテン文字のサブセットのみを利用
export const inter = Inter({ subsets: ["latin"] });

export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});
