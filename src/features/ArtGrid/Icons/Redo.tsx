import { useState } from "react";

const Redo = ({ className }: { className?: string }) => {
  const [rotate, setRotate] = useState(false);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="104"
      height="104"
      viewBox="0 0 104 104"
      fill="none"
      className={className}
      style={{ transition: "all 1s ease-in-out" }}
      onClick={() => setRotate((state) => !state)}
      transform={rotate ? "rotate(720)" : undefined}
    >
      <mask
        id="path-1-outside-1_443_41"
        maskUnits="userSpaceOnUse"
        x="0.498749"
        y="0.5"
        width="104"
        height="103"
        fill="black"
      >
        <rect fill="white" x="0.498749" y="0.5" width="104" height="103" />
        <path d="M94.5625 9.4375L84.8125 19.1875C76.375 10.75 64.75 5.5 52 5.5C26.3125 5.5 5.31249 26.5 5.49999 52.1875C5.49999 77.875 26.3125 98.5 52 98.5C63.8125 98.5 74.875 94 83.125 86.6875C84.0625 85.75 84.0625 84.25 83.125 83.3125L79.375 79.5625C78.625 78.8125 77.3125 78.8125 76.375 79.5625C69.8125 85.375 61.375 88.75 52 88.75C31.5625 88.75 15.25 72.4375 15.25 52C15.25 31.75 31.5625 15.25 52 15.25C62.125 15.25 71.3125 19.375 77.875 26.125L67.75 36.25C66.25 37.75 67.375 40 69.25 40H96.25C97.375 40 98.5 39.0625 98.5 37.75V10.9375C98.5 9.0625 96.0625 7.9375 94.5625 9.4375Z" />
      </mask>
      <path
        d="M94.5625 9.4375L84.8125 19.1875C76.375 10.75 64.75 5.5 52 5.5C26.3125 5.5 5.31249 26.5 5.49999 52.1875C5.49999 77.875 26.3125 98.5 52 98.5C63.8125 98.5 74.875 94 83.125 86.6875C84.0625 85.75 84.0625 84.25 83.125 83.3125L79.375 79.5625C78.625 78.8125 77.3125 78.8125 76.375 79.5625C69.8125 85.375 61.375 88.75 52 88.75C31.5625 88.75 15.25 72.4375 15.25 52C15.25 31.75 31.5625 15.25 52 15.25C62.125 15.25 71.3125 19.375 77.875 26.125L67.75 36.25C66.25 37.75 67.375 40 69.25 40H96.25C97.375 40 98.5 39.0625 98.5 37.75V10.9375C98.5 9.0625 96.0625 7.9375 94.5625 9.4375Z"
        fill="white"
      />
      <path
        d="M84.8125 19.1875L81.277 22.723L84.8125 26.2586L88.348 22.723L84.8125 19.1875ZM5.49999 52.1875H10.5V52.1693L10.4999 52.151L5.49999 52.1875ZM83.125 86.6875L86.4415 90.4292L86.5541 90.3294L86.6605 90.223L83.125 86.6875ZM76.375 79.5625L73.2515 75.6582L73.1536 75.7365L73.0598 75.8196L76.375 79.5625ZM77.875 26.125L81.4105 29.6605L84.8966 26.1744L81.46 22.6396L77.875 26.125ZM67.75 36.25L71.2855 39.7855L71.2855 39.7855L67.75 36.25ZM91.027 5.90197L81.277 15.652L88.348 22.723L98.098 12.973L91.027 5.90197ZM88.348 15.652C79.0253 6.32923 66.1485 0.5 52 0.5V10.5C63.3515 10.5 73.7247 15.1708 81.277 22.723L88.348 15.652ZM52 0.5C23.5582 0.5 0.292212 23.7395 0.500128 52.224L10.4999 52.151C10.3328 29.2605 29.0667 10.5 52 10.5V0.5ZM0.499995 52.1875C0.499995 80.6627 23.5774 103.5 52 103.5V93.5C29.0475 93.5 10.5 75.0873 10.5 52.1875H0.499995ZM52 103.5C65.0795 103.5 77.3111 98.5221 86.4415 90.4292L79.8085 82.9458C72.4389 89.4779 62.5455 93.5 52 93.5V103.5ZM86.6605 90.223C89.5506 87.3329 89.5506 82.6671 86.6605 79.777L79.5895 86.848C78.5743 85.8329 78.5743 84.1671 79.5895 83.152L86.6605 90.223ZM86.6605 79.777L82.9105 76.027L75.8395 83.098L79.5895 86.848L86.6605 79.777ZM82.9105 76.027C80.02 73.1364 75.7802 73.6352 73.2515 75.6582L79.4985 83.4668C79.0849 83.7977 78.547 84 77.9453 84C77.342 84 76.5245 83.7831 75.8395 83.098L82.9105 76.027ZM73.0598 75.8196C67.3945 80.8374 60.1307 83.75 52 83.75V93.75C62.6193 93.75 72.2305 89.9126 79.6902 83.3054L73.0598 75.8196ZM52 83.75C34.3239 83.75 20.25 69.6761 20.25 52H10.25C10.25 75.1989 28.8011 93.75 52 93.75V83.75ZM20.25 52C20.25 34.4948 34.3405 20.25 52 20.25V10.25C28.7845 10.25 10.25 29.0052 10.25 52H20.25ZM52 20.25C60.7421 20.25 68.6461 23.8052 74.29 29.6104L81.46 22.6396C73.9789 14.9448 63.5079 10.25 52 10.25V20.25ZM74.3395 22.5895L64.2145 32.7145L71.2855 39.7855L81.4105 29.6605L74.3395 22.5895ZM64.2145 32.7145C59.3228 37.6061 63.2652 45 69.25 45V35C70.4295 35 71.4007 35.7361 71.8152 36.6834C72.2864 37.7606 72.0355 39.0355 71.2855 39.7855L64.2145 32.7145ZM69.25 45H96.25V35H69.25V45ZM96.25 45C99.8633 45 103.5 42.0893 103.5 37.75H93.5C93.5 36.9081 93.8782 36.1907 94.3637 35.7321C94.8085 35.3121 95.4536 35 96.25 35V45ZM103.5 37.75V10.9375H93.5V37.75H103.5ZM103.5 10.9375C103.5 4.57155 95.651 1.27792 91.027 5.90197L98.098 12.973C97.2776 13.7935 96.065 13.9056 95.19 13.5453C94.4166 13.2268 93.5 12.3352 93.5 10.9375H103.5Z"
        fill="#222222"
        mask="url(#path-1-outside-1_443_41)"
      />
    </svg>
  );
};

export default Redo;
