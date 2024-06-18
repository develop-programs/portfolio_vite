/* eslint-disable @typescript-eslint/no-unused-vars */
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Themes from "@/components/custom/Themes";

export default function Navbar({
  position,
  data,
}: {
  position: boolean;
  data: unknown;
}) {
  return (
    <motion.div
      className={cn(
        position ? "fixed" : "absolute",
        " top-0 left-0 bg-white dark:bg-black w-full py-4 z-50"
      )}
    >
      <div className="container flex justify-between">
        <div className="text-4xl font-black first-letter:text-blue-600">SA</div>
        <div className="flex items-center gap-4">
          {["Home", "About", "Project", "Contact"].map((item: string) => (
            <div key={item} className="text-sm font-semibold">
              {item}
            </div>
          ))}
          <div className="space-x-2">
            <Button variant="ghost" size="icon">
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-4"
              >
                <path
                  d="M21.819 44.423C21.819 44.1052 21.749 43.7913 21.6142 43.5036C21.4793 43.2159 21.2828 42.9614 21.0386 42.7581C20.7944 42.5547 20.5085 42.4076 20.2011 42.3271C19.8937 42.2466 19.5724 42.2347 19.2599 42.2923C16.4235 42.8128 12.8424 42.8911 11.8902 40.2166C11.06 38.1453 9.68471 36.3372 7.91025 34.9841C7.78364 34.9152 7.66297 34.836 7.5495 34.7471C7.3942 34.3374 7.11836 33.9845 6.75836 33.7348C6.39837 33.4851 5.97115 33.3504 5.53304 33.3485H5.52247C4.9496 33.3483 4.39998 33.575 3.99391 33.9791C3.58784 34.3832 3.3584 34.9317 3.3558 35.5046C3.34733 37.2714 5.11297 38.4034 5.82927 38.7863C6.67393 39.635 7.35277 40.6339 7.8309 41.7316C8.62013 43.9491 10.9137 47.3133 17.5068 46.8796C17.509 46.9558 17.5111 47.0277 17.5121 47.0933L17.5216 47.6731C17.5216 48.2477 17.7499 48.7988 18.1562 49.2052C18.5626 49.6115 19.1137 49.8398 19.6883 49.8398C20.2629 49.8398 20.814 49.6115 21.2204 49.2052C21.6267 48.7988 21.855 48.2477 21.855 47.6731L21.8444 46.9833C21.8338 46.5727 21.819 45.9781 21.819 44.423ZM44.9308 11.65C44.9996 11.3791 45.0673 11.0787 45.1266 10.7401C45.477 8.32558 45.1715 5.86121 44.2421 3.6053C44.1249 3.3112 43.9447 3.04632 43.7142 2.82921C43.4838 2.6121 43.2086 2.44802 42.9081 2.34848C42.1367 2.08822 39.2888 1.57618 33.8426 5.05682C29.3154 3.99145 24.6027 3.99145 20.0756 5.05682C14.6515 1.62716 11.8183 2.09256 11.0544 2.338C10.7465 2.4335 10.4638 2.59671 10.2271 2.81566C9.99041 3.0346 9.8057 3.30373 9.68652 3.60333C8.73818 5.90255 8.43601 8.41718 8.81266 10.8756C8.86557 11.1528 8.92269 11.4088 8.98194 11.6437C7.18701 14.0345 6.23095 16.9506 6.26198 19.9401C6.25613 20.607 6.28685 21.2738 6.35402 21.9374C7.07768 31.9096 13.5777 34.9036 18.1067 35.9319C18.0125 36.2028 17.9269 36.4926 17.8507 36.7995C17.7149 37.3569 17.8058 37.9455 18.1033 38.4361C18.4008 38.9267 18.8808 39.2792 19.4379 39.4165C19.995 39.5537 20.5838 39.4645 21.0752 39.1682C21.5666 38.872 21.9204 38.393 22.0592 37.8362C22.197 37.1143 22.5504 36.4511 23.0727 35.934C23.3885 35.6576 23.6171 35.2953 23.7308 34.8912C23.8445 34.4872 23.8383 34.0588 23.713 33.6582C23.5877 33.2576 23.3487 32.9021 23.025 32.6348C22.7013 32.3676 22.307 32.2002 21.8899 32.153C14.406 31.2981 11.1571 28.2492 10.6683 21.5397C10.6142 21.0083 10.5898 20.4742 10.5953 19.9401C10.5605 17.8095 11.2644 15.7326 12.5874 14.0622C12.7203 13.888 12.8619 13.7206 13.0116 13.5607C13.2769 13.2639 13.4553 12.8997 13.5271 12.5081C13.599 12.1166 13.5616 11.7128 13.419 11.3411C13.2728 10.9501 13.1603 10.5473 13.0826 10.1372C12.906 8.97089 12.9639 7.78112 13.2529 6.63749C15.136 7.16934 16.9083 8.03508 18.4854 9.19346C18.7462 9.36717 19.0413 9.48277 19.3507 9.53242C19.6601 9.58207 19.9765 9.56462 20.2786 9.48124C24.6576 8.29282 29.2744 8.29357 33.6531 9.4834C33.9568 9.56669 34.2749 9.58315 34.5856 9.53165C34.8963 9.48015 35.1921 9.36191 35.4526 9.18507C37.0223 8.02187 38.7872 7.1484 40.6641 6.60581C40.9517 7.72198 41.0161 8.88396 40.8534 10.0251C40.775 10.4747 40.6524 10.9156 40.4874 11.3412C40.3448 11.7128 40.3074 12.1166 40.3792 12.5082C40.4511 12.8997 40.6294 13.2639 40.8947 13.5607C41.0619 13.749 41.229 13.9522 41.3792 14.1426C42.6929 15.7847 43.3849 17.8378 43.3333 19.9401C43.3373 20.5025 43.3101 21.0648 43.2519 21.6243C42.7748 28.2449 39.5131 31.296 31.9943 32.1529C31.5771 32.2004 31.1827 32.3681 30.8591 32.6356C30.5355 32.9031 30.2965 33.2589 30.1714 33.6597C30.0462 34.0605 30.0401 34.489 30.154 34.8931C30.2678 35.2973 30.4966 35.6596 30.8126 35.9361C31.3513 36.467 31.7054 37.1568 31.8229 37.9039C31.9693 38.4839 32.0366 39.0811 32.0229 39.6792V44.7362C32.0017 46.1389 32.0017 47.1905 32.0017 47.673C32.0017 48.2476 32.2299 48.7987 32.6363 49.205C33.0426 49.6114 33.5937 49.8396 34.1683 49.8396C34.743 49.8396 35.2941 49.6114 35.7004 49.205C36.1067 48.7987 36.335 48.2476 36.335 47.673C36.335 47.2032 36.335 46.1728 36.3562 44.77V39.6792C36.3736 38.7211 36.2608 37.7652 36.0208 36.8375C35.9522 36.533 35.8681 36.2322 35.769 35.9362C39.0651 35.3886 42.0599 33.6892 44.2203 31.1405C46.3808 28.5918 47.5668 25.3591 47.5672 22.0179C47.6386 21.3276 47.6718 20.634 47.6667 19.9401C47.7148 16.9474 46.7507 14.0262 44.9308 11.65L44.9308 11.65Z"
                  className="fill-black dark:fill-white transition-all delay-1000"
                />
              </svg>
            </Button>
            <Button variant="ghost" size="icon">
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-4"
              >
                <path
                  d="M26.0008 14.8744C23.8004 14.8744 21.6494 15.5269 19.8198 16.7494C17.9902 17.9719 16.5642 19.7095 15.7221 21.7424C14.8801 23.7754 14.6597 26.0124 15.089 28.1705C15.5183 30.3287 16.5779 32.3111 18.1339 33.867C19.6898 35.4229 21.6722 36.4826 23.8303 36.9118C25.9885 37.3411 28.2255 37.1208 30.2584 36.2787C32.2914 35.4367 34.0289 34.0107 35.2514 32.1811C36.4739 30.3515 37.1264 28.2004 37.1264 26C37.1265 24.539 36.8387 23.0922 36.2796 21.7424C35.7205 20.3926 34.901 19.1661 33.8679 18.133C32.8348 17.0999 31.6083 16.2804 30.2585 15.7212C28.9086 15.1621 27.4619 14.8744 26.0008 14.8744V14.8744ZM26.0008 33.2227C24.5723 33.2227 23.1759 32.7991 21.9881 32.0055C20.8003 31.2118 19.8745 30.0838 19.3279 28.764C18.7812 27.4442 18.6382 25.9919 18.9169 24.5908C19.1956 23.1897 19.8835 21.9028 20.8936 20.8926C21.9037 19.8825 23.1907 19.1946 24.5918 18.9159C25.9929 18.6372 27.4452 18.7803 28.765 19.327C30.0848 19.8737 31.2128 20.7994 32.0064 21.9872C32.8001 23.175 33.2237 24.5715 33.2237 26C33.2238 26.9486 33.037 27.8878 32.6741 28.7642C32.3111 29.6405 31.7791 30.4368 31.1084 31.1075C30.4377 31.7783 29.6414 32.3103 28.765 32.6732C27.8887 33.0361 26.9494 33.2229 26.0008 33.2227V33.2227Z"
                  className="fill-black dark:fill-white transition-all delay-1000"
                />
                <path
                  d="M47.5363 17.0673C47.5008 15.2699 47.1606 13.4917 46.53 11.8082C45.985 10.3628 45.1322 9.05314 44.0308 7.97003C42.9493 6.8675 41.64 6.01456 40.1944 5.47084C38.5111 4.83987 36.7327 4.49959 34.9353 4.46451C32.6251 4.35934 31.8866 4.33334 26.0026 4.33334C20.1187 4.33334 19.3795 4.35774 17.0681 4.46451C15.2707 4.50003 13.4925 4.8403 11.809 5.47084C10.3632 6.01505 9.0534 6.86792 7.97085 7.97003C6.86772 9.05171 6.01475 10.3618 5.47182 11.8082C4.84129 13.4917 4.50101 15.2699 4.46549 17.0673C4.35869 19.3774 4.33417 20.116 4.33417 26C4.33417 31.884 4.35869 32.6225 4.46545 34.9327C4.50098 36.73 4.84127 38.5083 5.47182 40.1918C6.01491 41.6382 6.86786 42.9482 7.97085 44.03C9.05393 45.1314 10.3636 45.9841 11.809 46.529C13.4925 47.1594 15.2708 47.4996 17.0681 47.5354C19.3795 47.6405 20.1169 47.6667 26.0008 47.6667C31.8848 47.6667 32.6234 47.6422 34.9336 47.5354C36.7309 47.4999 38.5092 47.1596 40.1927 46.529C41.6322 45.9725 42.9395 45.1213 44.0308 44.03C45.1222 42.9387 45.9734 41.6313 46.53 40.1918C47.1612 38.5085 47.5015 36.7301 47.5363 34.9327C47.6414 32.6208 47.6658 31.884 47.6658 26C47.6658 20.116 47.6414 19.3774 47.5363 17.0673ZM43.6385 34.7561C43.6218 36.13 43.3697 37.491 42.8932 38.7797C42.5325 39.7141 41.9803 40.5626 41.2719 41.2706C40.5636 41.9787 39.7148 42.5306 38.7803 42.8908C37.4918 43.3684 36.1307 43.6206 34.7566 43.6361C32.4728 43.7411 31.7868 43.7621 26.0007 43.7621C20.2146 43.7621 19.5305 43.7411 17.2474 43.6361C15.8733 43.6204 14.5122 43.3683 13.2237 42.8908C12.2826 42.543 11.4311 41.9893 10.7315 41.2701C10.0113 40.5721 9.45738 39.7209 9.11084 38.7797C8.63315 37.4913 8.38101 36.1302 8.36551 34.7561C8.26043 32.4722 8.23952 31.7863 8.23952 26.0002C8.23952 20.2141 8.26225 19.53 8.36551 17.2442C8.38282 15.8704 8.6349 14.5096 9.11084 13.2207C9.45862 12.2796 10.0123 11.4281 10.7315 10.7285C11.4299 10.0079 12.2817 9.45395 13.2237 9.10788C14.5122 8.63023 15.8733 8.3781 17.2474 8.36254C19.5312 8.25748 20.2172 8.23655 26.0007 8.23655C31.7842 8.23655 32.4709 8.25928 34.7566 8.36254C36.1305 8.37985 37.4913 8.63193 38.7803 9.10788C39.7151 9.46809 40.5641 10.0202 41.2725 10.7286C41.9809 11.437 42.5329 12.2859 42.8932 13.2208C43.3708 14.5092 43.6229 15.8702 43.6385 17.2443C43.7436 19.5301 43.7645 20.2142 43.7645 26.0002C43.7645 31.7862 43.7436 32.4703 43.6385 34.7561H43.6385Z"
                  className="fill-black dark:fill-white transition-all delay-1000"
                />
                <path
                  d="M37.5678 11.8344H37.5669C36.8775 11.8345 36.2164 12.1084 35.7289 12.596C35.2415 13.0835 34.9677 13.7447 34.9678 14.4341C34.9679 15.1235 35.2418 15.7847 35.7293 16.2721C36.2168 16.7596 36.8779 17.0334 37.5673 17.0334C38.2567 17.0334 38.9179 16.7596 39.4054 16.2721C39.8929 15.7847 40.1668 15.1235 40.1669 14.4341C40.167 13.7447 39.8932 13.0835 39.4058 12.596C38.9183 12.1084 38.2572 11.8345 37.5678 11.8344Z"
                  className="fill-black dark:fill-white transition-all delay-1000"
                />
              </svg>
            </Button>
            <Themes />
          </div>
        </div>
      </div>
    </motion.div>
  );
}