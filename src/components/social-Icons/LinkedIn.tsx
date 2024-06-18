import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function LinkedIn() {
  const [Hovered, setHovered] = React.useState(false);
  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn(
        "focus-visible:ring-0",
        Hovered ? "duration-300 ease-in" : "duration-300 ease-out"
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {Hovered ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="fill-blue-600 size-6"
        >
          <path d="M2.39734 4.46525H2.36918C2.06256 4.48374 1.75542 4.43882 1.46694 4.33329C1.17846 4.22776 0.914829 4.06388 0.69252 3.8519C0.470211 3.63992 0.293993 3.38438 0.174871 3.10124C0.0557492 2.8181 -0.00371909 2.51344 0.000180051 2.20628C0.00407919 1.89913 0.0712618 1.59608 0.197533 1.31606C0.323804 1.03603 0.506452 0.785047 0.73407 0.578775C0.961689 0.372504 1.22939 0.215375 1.52046 0.117201C1.81152 0.0190276 2.11971 -0.018083 2.42576 0.00818709C2.73333 -0.014088 3.04218 0.0275121 3.33289 0.130371C3.62361 0.233231 3.8899 0.395125 4.11502 0.605874C4.34014 0.816623 4.51922 1.07167 4.64101 1.35498C4.76279 1.63828 4.82465 1.94372 4.82268 2.25209C4.82072 2.56046 4.75497 2.86509 4.62958 3.14682C4.50419 3.42855 4.32187 3.68129 4.09408 3.88915C3.86629 4.09701 3.59796 4.2555 3.30596 4.35464C3.01396 4.45378 2.7046 4.49144 2.39734 4.46525Z" />
          <path d="M4.41187 7.46527H0.411865V19.4653H4.41187V7.46527Z" />
          <path d="M14.9114 7.46527C14.2373 7.46711 13.5724 7.62128 12.9663 7.91625C12.3603 8.21123 11.8287 8.63938 11.4114 9.1687V7.46527H7.41138V19.4653H11.4114V13.9653C11.4114 13.4348 11.6221 12.9261 11.9972 12.5511C12.3722 12.176 12.8809 11.9653 13.4114 11.9653C13.9418 11.9653 14.4505 12.176 14.8256 12.5511C15.2007 12.9261 15.4114 13.4348 15.4114 13.9653V19.4653H19.4114V11.9653C19.4114 11.3743 19.295 10.7892 19.0688 10.2432C18.8427 9.69723 18.5112 9.20115 18.0934 8.78329C17.6755 8.36543 17.1794 8.03396 16.6335 7.80781C16.0875 7.58167 15.5023 7.46527 14.9114 7.46527V7.46527Z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="fill-black dark:fill-white size-6"
        >
          <path d="M2.39734 4.46525H2.36918C2.06256 4.48374 1.75542 4.43882 1.46694 4.33329C1.17846 4.22776 0.914829 4.06388 0.69252 3.8519C0.470211 3.63992 0.293993 3.38438 0.174871 3.10124C0.0557492 2.8181 -0.00371909 2.51344 0.000180051 2.20628C0.00407919 1.89913 0.0712618 1.59608 0.197533 1.31606C0.323804 1.03603 0.506452 0.785047 0.73407 0.578775C0.961689 0.372504 1.22939 0.215375 1.52046 0.117201C1.81152 0.0190276 2.11971 -0.018083 2.42576 0.00818709C2.73333 -0.014088 3.04218 0.0275121 3.33289 0.130371C3.62361 0.233231 3.8899 0.395125 4.11502 0.605874C4.34014 0.816623 4.51922 1.07167 4.64101 1.35498C4.76279 1.63828 4.82465 1.94372 4.82268 2.25209C4.82072 2.56046 4.75497 2.86509 4.62958 3.14682C4.50419 3.42855 4.32187 3.68129 4.09408 3.88915C3.86629 4.09701 3.59796 4.2555 3.30596 4.35464C3.01396 4.45378 2.7046 4.49144 2.39734 4.46525Z" />
          <path d="M4.41187 7.46527H0.411865V19.4653H4.41187V7.46527Z" />
          <path d="M14.9114 7.46527C14.2373 7.46711 13.5724 7.62128 12.9663 7.91625C12.3603 8.21123 11.8287 8.63938 11.4114 9.1687V7.46527H7.41138V19.4653H11.4114V13.9653C11.4114 13.4348 11.6221 12.9261 11.9972 12.5511C12.3722 12.176 12.8809 11.9653 13.4114 11.9653C13.9418 11.9653 14.4505 12.176 14.8256 12.5511C15.2007 12.9261 15.4114 13.4348 15.4114 13.9653V19.4653H19.4114V11.9653C19.4114 11.3743 19.295 10.7892 19.0688 10.2432C18.8427 9.69723 18.5112 9.20115 18.0934 8.78329C17.6755 8.36543 17.1794 8.03396 16.6335 7.80781C16.0875 7.58167 15.5023 7.46527 14.9114 7.46527V7.46527Z" />
        </svg>
      )}
    </Button>
  );
}