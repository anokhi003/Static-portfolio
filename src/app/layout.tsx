import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./layout.scss";
import BackToTop from "../componenets/BackToTop/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Siddharth Bhalsod | Portfolio",
  description: "Personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* <Hero /> */}
        <div className="other-sections relative">
          <div className="w-full absolute top-[-40px] hidden md:block z-10">
            <div className="container flex justify-between max-sm:px-2">
              <div
                className="md:visible transform flex flex-col items-center space-y-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <span className="-rotate-90 uppercase">scroll</span>
                <div className="h-20 w-[2px] bg-line-blue-gradient"></div>
              </div>
              <div
                className="md:visible transform flex flex-col items-center space-y-6 w-[60px]"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <a
                  className="hover:opacity-75"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/siddharth-1001/"
                >
                  <span className="sr-only"> Linkdin </span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_412_1864)">
                      <g clipPath="url(#clip1_412_1864)">
                        <path
                          d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z"
                          fill="#41EAD4"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_412_1864">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                      <clipPath id="clip1_412_1864">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a
                  className="hover:opacity-75"
                  target="_blank"
                  rel="noreferrer"
                  href="https://x.com/bsiddharth147"
                >
                  <span className="sr-only"> X </span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_412_1868)">
                      <path
                        d="M19.3263 1.90381H22.6998L15.3297 10.3273L24 21.7898H17.2112L11.894 14.8378L5.80995 21.7898H2.43443L10.3174 12.7799L2 1.90381H8.96111L13.7674 8.25814L19.3263 1.90381ZM18.1423 19.7706H20.0116L7.94539 3.81694H5.93946L18.1423 19.7706Z"
                        fill="#41EAD4"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_412_1868">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a
                  className="hover:opacity-75"
                  target="_blank"
                  rel="noreferrer"
                  href="https://dev.to/siddharthbhalsod"
                >
                  <span className="sr-only"> Dev </span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_412_1870)">
                      <path
                        d="M-2 3V21H26V3H-2ZM0 5H24V19H0V5ZM2 7V17H5C6.654 17 8 15.654 8 14V10C8 8.346 6.654 7 5 7H2ZM12 7C10.897 7 10 7.897 10 9V15C10 16.103 10.897 17 12 17H14V15H12V13H14V11H12V9H14V7H12ZM15.6914 7L17.7754 16.0254C17.9074 16.5954 18.415 17 19 17C19.585 17 20.0926 16.5954 20.2246 16.0254L22.3086 7H20.2559L19 12.4395L17.7441 7H15.6914ZM4 9H5C5.552 9 6 9.448 6 10V14C6 14.552 5.552 15 5 15H4V9Z"
                        fill="#41EAD4"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_412_1870)">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a
                  className="hover:opacity-75"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Siddharth-1001"
                >
                  <span className="sr-only"> Github </span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_417_3077)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.0099 0C5.36875 0 0 5.40833 0 12.0992C0 17.4475 3.43994 21.9748 8.21205 23.5771C8.80869 23.6976 9.02724 23.3168 9.02724 22.9965C9.02724 22.716 9.00757 21.7545 9.00757 20.7527C5.6667 21.474 4.97099 19.3104 4.97099 19.3104C4.43409 17.9082 3.63858 17.5478 3.63858 17.5478C2.54511 16.8066 3.71823 16.8066 3.71823 16.8066C4.93117 16.8868 5.56763 18.0486 5.56763 18.0486C6.64118 19.8913 8.37111 19.3707 9.06706 19.0501C9.16638 18.2688 9.48473 17.728 9.82275 17.4276C7.15817 17.1471 4.35469 16.1055 4.35469 11.458C4.35469 10.1359 4.8316 9.05428 5.58729 8.21304C5.46807 7.91263 5.0504 6.67043 5.70677 5.00787C5.70677 5.00787 6.72083 4.6873 9.00732 6.24981C9.98625 5.98497 10.9958 5.85024 12.0099 5.84911C13.024 5.84911 14.0577 5.98948 15.0123 6.24981C17.299 4.6873 18.3131 5.00787 18.3131 5.00787C18.9695 6.67043 18.5515 7.91263 18.4323 8.21304C19.2079 9.05428 19.6652 10.1359 19.6652 11.458C19.6652 16.1055 16.8617 17.1269 14.1772 17.4276C14.6148 17.8081 14.9924 18.5292 14.9924 19.6711C14.9924 21.2936 14.9727 22.5957 14.9727 22.9962C14.9727 23.3168 15.1915 23.6976 15.7879 23.5774C20.56 21.9745 23.9999 17.4475 23.9999 12.0992C24.0196 5.40833 18.6312 0 12.0099 0Z"
                        fill="#41EAD4"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_417_3077">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="relative z-20">{children}</div>
          <BackToTop />
        </div>
      </body>
    </html>
  );
}
