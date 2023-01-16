import { useStore } from 'store';
import theme from 'styles/theme';

import { TypeStyle } from './style';

interface TapeProps {
  title: string;
  date: string;
  sec?: string;
  width?: string;
  height?: string;
}

const Tape = ({ title, date, sec, width, height = '170px' }: TapeProps) => {
  const { tapeColor } = useStore();

  return (
    <TypeStyle>
      <svg
        width={width}
        height={height}
        viewBox="0 0 260 170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_170_1587)">
          <path
            d="M92.3693 77.4967C92.3693 86.326 85.2098 93.4763 76.3693 93.4763C67.5287 93.4763 60.3693 86.326 60.3693 77.4967C60.3693 68.6674 67.5287 61.5171 76.3693 61.5171C85.2098 61.5171 92.3693 68.6674 92.3693 77.4967Z"
            fill="#BDAC8B"
          />
          <path
            d="M198.386 77.4967C198.386 86.326 191.236 93.4763 182.407 93.4763C173.577 93.4763 166.427 86.326 166.427 77.4967C166.427 68.6674 173.577 61.5171 182.407 61.5171C191.236 61.5171 198.386 68.6674 198.386 77.4967Z"
            fill="#BDAC8B"
          />
          <path
            d="M246.663 5.521H13.3275C9.01413 5.521 5.521 9.04307 5.521 13.3757V156.459C5.521 160.801 9.01413 164.314 13.3275 164.314H246.663C250.976 164.314 254.469 160.792 254.469 156.459V13.3757C254.469 9.04307 250.976 5.521 246.663 5.521ZM30.8414 152.985C29.6255 152.985 28.6316 152.001 28.6316 150.775C28.6316 149.55 29.6159 148.566 30.8414 148.566C32.0668 148.566 33.0511 149.56 33.0511 150.775C33.0511 151.991 32.0572 152.985 30.8414 152.985ZM68.2622 159.73C66.6315 159.73 65.3095 158.408 65.3095 156.777C65.3095 155.147 66.6315 153.825 68.2622 153.825C69.893 153.825 71.215 155.147 71.215 156.777C71.215 158.408 69.893 159.73 68.2622 159.73ZM76.3678 93.2063C67.6929 93.2063 60.6584 86.1717 60.6584 77.4968C60.6584 68.8219 67.6929 61.7874 76.3678 61.7874C85.0428 61.7874 92.0773 68.8219 92.0773 77.4968C92.0773 86.1717 85.0428 93.2063 76.3678 93.2063ZM95.7055 154.712C95.7055 155.6 94.9818 156.324 94.1037 156.324H91.2571C90.3693 156.324 89.6552 155.6 89.6552 154.712V151.866C89.6552 150.978 90.379 150.264 91.2571 150.264H94.1037C94.9818 150.264 95.7055 150.978 95.7055 151.866V154.712ZM96.7766 60.5233H161.612V94.48H96.7669V60.5233H96.7766ZM165.423 155.571C165.423 156.459 164.7 157.173 163.822 157.173H160.975C160.087 157.173 159.363 156.459 159.363 155.571V152.725C159.363 151.837 160.087 151.113 160.975 151.113H163.822C164.709 151.113 165.423 151.837 165.423 152.725V155.571ZM186.807 160.608C185.166 160.608 183.835 159.277 183.835 157.636C183.835 155.996 185.166 154.664 186.807 154.664C188.447 154.664 189.779 155.996 189.779 157.636C189.779 159.277 188.447 160.608 186.807 160.608ZM182.407 93.2063C173.732 93.2063 166.697 86.1717 166.697 77.4968C166.697 68.8219 173.732 61.7874 182.407 61.7874C191.081 61.7874 198.116 68.8219 198.116 77.4968C198.116 86.1717 191.081 93.2063 182.407 93.2063ZM230.345 152.985C229.12 152.985 228.136 152.001 228.136 150.775C228.136 149.55 229.12 148.566 230.345 148.566C231.571 148.566 232.555 149.56 232.555 150.775C232.555 151.991 231.561 152.985 230.345 152.985Z"
            fill="#D7D7C0"
          />
          <path
            d="M246.663 164.835H13.3275C8.73437 164.835 5 161.081 5 156.459V13.3758C5 8.76332 8.73437 5 13.3275 5H246.663C251.256 5 254.99 8.76332 254.99 13.3758V156.459C254.99 161.081 251.256 164.835 246.663 164.835ZM13.3275 6.0518C9.31334 6.0518 6.04215 9.34229 6.04215 13.3758V156.459C6.04215 160.502 9.31334 163.793 13.3275 163.793H246.663C250.677 163.793 253.948 160.502 253.948 156.459V13.3758C253.948 9.33264 250.677 6.0518 246.663 6.0518H13.3275ZM162.123 95.0011H96.2459V59.9926H162.123V95.0011ZM97.2881 93.959H161.081V61.0444H97.2977V93.959H97.2881ZM182.397 93.7274C173.452 93.7274 166.166 86.4516 166.166 77.4969C166.166 68.5421 173.442 61.2664 182.397 61.2664C191.352 61.2664 198.627 68.5421 198.627 77.4969C198.627 86.4516 191.352 93.7274 182.397 93.7274ZM182.397 62.3182C174.021 62.3182 167.218 69.1307 167.218 77.4969C167.218 85.863 174.031 92.6852 182.397 92.6852C190.763 92.6852 197.585 85.8727 197.585 77.4969C197.585 69.1211 190.773 62.3182 182.397 62.3182ZM76.3486 93.7274C67.3938 93.7274 60.1181 86.4516 60.1181 77.4969C60.1181 68.5421 67.3938 61.2664 76.3486 61.2664C85.3033 61.2664 92.5791 68.5421 92.5791 77.4969C92.5791 86.4516 85.3033 93.7274 76.3486 93.7274ZM76.3486 62.3182C67.9728 62.3182 61.1602 69.1307 61.1602 77.4969C61.1602 85.863 67.9728 92.6852 76.3486 92.6852C84.7244 92.6852 91.5273 85.8727 91.5273 77.4969C91.5273 69.1211 84.7147 62.3182 76.3486 62.3182Z"
            fill="#9F9F8D"
          />
          <path
            opacity="0.7"
            d="M151.441 163.793H104.207V149.714H151.441V163.793ZM105.259 163.793H150.399V152.956H105.259V163.793Z"
            fill="#CCCCB4"
          />
          <path
            d="M76.3584 24.5C41.3499 24.5 20 42.4885 20 77.4873C20 112.486 41.3596 111 76.3584 111C111.357 111 139.833 112.496 139.833 77.4969C139.833 42.4981 111.357 24.5 76.3584 24.5ZM76.3584 93.1967C67.6835 93.1967 60.649 86.1622 60.649 77.4873C60.649 68.8124 67.6835 61.7779 76.3584 61.7779C85.0333 61.7779 92.0678 68.8124 92.0678 77.4873C92.0678 86.1622 85.0333 93.1967 76.3584 93.1967Z"
            fill="#4D393D"
          />
          <path
            d="M182.407 48.0562C166.176 48.0562 152.966 61.2663 152.966 77.5065C152.966 93.7466 166.176 106.947 182.407 106.947C198.637 106.947 211.847 93.737 211.847 77.5065C211.847 61.276 198.647 48.0562 182.407 48.0562ZM182.407 93.2063C173.732 93.2063 166.697 86.1718 166.697 77.4968C166.697 68.8219 173.732 61.7874 182.407 61.7874C191.082 61.7874 198.116 68.8219 198.116 77.4968C198.116 86.1718 191.082 93.2063 182.407 93.2063Z"
            fill="#291317"
          />
          <path
            d="M76.3582 93.7276C67.4131 93.7276 60.1277 86.4519 60.1277 77.4971C60.1277 68.5423 67.4034 61.2666 76.3582 61.2666C85.313 61.2666 92.5887 68.5423 92.5887 77.4971C92.5887 86.4519 85.313 93.7276 76.3582 93.7276ZM76.3582 62.3184C67.9824 62.3184 61.1795 69.131 61.1795 77.4971C61.1795 85.8632 67.992 92.6855 76.3582 92.6855C84.7243 92.6855 91.5466 85.8729 91.5466 77.4971C91.5466 69.1213 84.734 62.3184 76.3582 62.3184Z"
            fill="white"
          />
          <path
            d="M76.3581 63.5537C68.6674 63.5537 62.4146 69.8066 62.4146 77.4973C62.4146 85.1879 68.6771 91.4505 76.3581 91.4505C84.0391 91.4505 90.3113 85.1879 90.3113 77.4973C90.3113 69.8066 84.0488 63.5537 76.3581 63.5537ZM87.706 83.0071L84.676 81.1062L82.1671 85.1107L84.869 86.8091C82.7847 88.7197 80.0732 89.9259 77.0722 90.0995L77.2748 86.4617L72.5562 86.2011L72.3729 89.482C69.5649 88.546 67.2007 86.645 65.6568 84.1844L69.0052 82.5633L66.9402 78.3078L63.9392 79.7649C63.8041 79.0219 63.7269 78.2692 63.7269 77.4973C63.7269 75.2489 64.3252 73.1357 65.3673 71.2926L68.4069 73.4445L71.1377 69.5847L68.4359 67.6741C70.3079 66.1591 72.6045 65.1748 75.123 64.9239V68.5908H79.8513V65.3678C82.6689 66.1784 85.0909 67.9442 86.7314 70.2987L83.5953 72.0356L85.8822 76.1753L88.6516 74.641C88.8639 75.5674 88.9894 76.513 88.9894 77.4973C88.9894 79.4754 88.5165 81.3378 87.706 83.0071Z"
            fill="#E2DBCE"
          />
          <path
            d="M182.407 93.7276C173.462 93.7276 166.176 86.4519 166.176 77.4971C166.176 68.5423 173.452 61.2666 182.407 61.2666C191.362 61.2666 198.637 68.5423 198.637 77.4971C198.637 86.4519 191.362 93.7276 182.407 93.7276ZM182.407 62.3184C174.031 62.3184 167.228 69.131 167.228 77.4971C167.228 85.8632 174.041 92.6855 182.407 92.6855C190.773 92.6855 197.595 85.8729 197.595 77.4971C197.595 69.1213 190.783 62.3184 182.407 62.3184Z"
            fill="white"
          />
          <path
            d="M182.407 63.5537C174.716 63.5537 168.453 69.8066 168.453 77.4973C168.453 85.1879 174.706 91.4505 182.407 91.4505C190.107 91.4505 196.35 85.1879 196.35 77.4973C196.35 69.8066 190.097 63.5537 182.407 63.5537ZM193.755 83.0071L190.725 81.1062L188.216 85.1107L190.918 86.8091C188.833 88.7197 186.122 89.9259 183.121 90.0995L183.323 86.4617L178.605 86.2011L178.421 89.482C175.613 88.546 173.249 86.645 171.705 84.1844L175.044 82.5633L172.989 78.3078L169.978 79.7649C169.843 79.0219 169.766 78.2692 169.766 77.4973C169.766 75.2489 170.364 73.1357 171.406 71.2926L174.456 73.4445L177.186 69.5847L174.484 67.6741C176.347 66.1591 178.653 65.1748 181.162 64.9239V68.5908H185.89V65.3678C188.708 66.1784 191.12 67.9442 192.761 70.2987L189.625 72.0356L191.911 76.1753L194.681 74.641C194.893 75.5674 195.019 76.513 195.019 77.4973C195.019 79.4754 194.546 81.3378 193.735 83.0071H193.755Z"
            fill="#E2DBCE"
          />
          <path
            d="M185.572 96.8443H73.8782C68.3684 96.8443 56.9916 92.2318 56.9916 77.9891C57.4644 63.8525 69.1017 58.1689 73.8782 58.1689H185.572C189.016 58.1689 201.358 62.8683 201.927 77.7864C201.927 92.0967 189.036 96.8443 185.572 96.8443ZM73.8782 60.2532C69.7 60.2532 59.5005 65.3675 59.0855 78.018C59.0855 90.6493 69.0535 94.7503 73.8782 94.7503H185.572C188.592 94.7503 199.834 90.5238 199.834 77.825C199.341 64.6631 188.447 60.2532 185.572 60.2532H73.8782Z"
            fill="white"
          />
          <path
            opacity="0.7"
            d="M230.336 158.186C226.245 158.186 222.916 154.857 222.916 150.775C222.916 146.694 226.245 143.355 230.336 143.355C234.427 143.355 237.747 146.684 237.747 150.775C237.747 154.867 234.427 158.186 230.336 158.186ZM230.336 144.146C226.679 144.146 223.707 147.118 223.707 150.775C223.707 154.433 226.679 157.405 230.336 157.405C233.993 157.405 236.965 154.433 236.965 150.775C236.965 147.118 233.993 144.146 230.336 144.146Z"
            fill="#C5C5B0"
          />
          <path
            opacity="0.7"
            d="M230.336 153.96C228.58 153.96 227.152 152.532 227.152 150.776C227.152 149.019 228.58 147.591 230.336 147.591C232.092 147.591 233.52 149.019 233.52 150.776C233.52 152.532 232.092 153.96 230.336 153.96ZM230.336 148.556C229.111 148.556 228.107 149.55 228.107 150.776C228.107 152.001 229.111 153.005 230.336 153.005C231.562 153.005 232.555 152.001 232.555 150.776C232.555 149.55 231.562 148.556 230.336 148.556Z"
            fill="#C5C5B0"
          />
          <path
            opacity="0.7"
            d="M30.8415 158.186C26.7501 158.186 23.4307 154.857 23.4307 150.775C23.4307 146.694 26.7501 143.355 30.8415 143.355C34.9329 143.355 38.2523 146.684 38.2523 150.775C38.2523 154.867 34.9233 158.186 30.8415 158.186ZM30.8415 144.146C27.1843 144.146 24.2123 147.118 24.2123 150.775C24.2123 154.433 27.1843 157.405 30.8415 157.405C34.4987 157.405 37.4707 154.433 37.4707 150.775C37.4707 147.118 34.4987 144.146 30.8415 144.146Z"
            fill="#C5C5B0"
          />
          <path
            opacity="0.7"
            d="M30.8415 153.97C29.0852 153.97 27.6475 152.532 27.6475 150.776C27.6475 149.019 29.0756 147.582 30.8415 147.582C32.6073 147.582 34.0354 149.019 34.0354 150.776C34.0354 152.532 32.6073 153.97 30.8415 153.97ZM30.8415 148.546C29.6063 148.546 28.6124 149.54 28.6124 150.776C28.6124 152.011 29.6063 153.005 30.8415 153.005C32.0766 153.005 33.0705 152.001 33.0705 150.776C33.0705 149.55 32.0766 148.546 30.8415 148.546Z"
            fill="#C5C5B0"
          />
          <path
            d="M249.461 156.739C249.461 158.611 247.936 160.136 246.064 160.136C244.192 160.136 242.668 158.621 242.668 156.739C242.668 154.857 244.183 153.342 246.064 153.342C247.946 153.342 249.461 154.857 249.461 156.739Z"
            fill="#CCCCB4"
          />
          <path
            d="M246.065 160.396C244.048 160.396 242.407 158.755 242.407 156.739C242.407 154.722 244.048 153.082 246.065 153.082C248.081 153.082 249.722 154.722 249.722 156.739C249.722 158.755 248.081 160.396 246.065 160.396ZM246.065 153.603C244.337 153.603 242.929 155.011 242.929 156.739C242.929 158.466 244.337 159.875 246.065 159.875C247.792 159.875 249.201 158.466 249.201 156.739C249.201 155.011 247.792 153.603 246.065 153.603Z"
            fill="#AFAF86"
          />
          <path
            d="M248.062 156.478H246.412V154.857H245.891V156.478H244.202V156.999H245.891V158.62H246.412V156.999H248.062V156.478Z"
            fill="#AFAF86"
          />
          <path
            d="M133.445 138.289C133.445 140.17 131.93 141.685 130.048 141.685C128.166 141.685 126.651 140.17 126.651 138.289C126.651 136.407 128.176 134.892 130.048 134.892C131.92 134.892 133.445 136.407 133.445 138.289Z"
            fill="#CCCCB4"
          />
          <path
            d="M130.048 141.946C128.031 141.946 126.391 140.305 126.391 138.289C126.391 136.272 128.031 134.631 130.048 134.631C132.065 134.631 133.705 136.272 133.705 138.289C133.705 140.305 132.065 141.946 130.048 141.946ZM130.048 135.152C128.321 135.152 126.912 136.552 126.912 138.289C126.912 140.025 128.321 141.425 130.048 141.425C131.775 141.425 133.184 140.025 133.184 138.289C133.184 136.552 131.775 135.152 130.048 135.152Z"
            fill="#AFAF86"
          />
          <path
            d="M132.045 138.028H130.405V136.407H129.874V138.028H128.186V138.549H129.874V140.17H130.405V138.549H132.045V138.028Z"
            fill="#AFAF86"
          />
          <path
            d="M17.3129 156.739C17.3129 158.611 15.7979 160.136 13.9163 160.136C12.0346 160.136 10.5197 158.621 10.5197 156.739C10.5197 154.857 12.0443 153.342 13.9163 153.342C15.7883 153.342 17.3129 154.857 17.3129 156.739Z"
            fill="#CCCCB4"
          />
          <path
            d="M13.9162 160.396C11.8995 160.396 10.259 158.755 10.259 156.739C10.259 154.722 11.8995 153.082 13.9162 153.082C15.933 153.082 17.5734 154.722 17.5734 156.739C17.5734 158.755 15.933 160.396 13.9162 160.396ZM13.9162 153.603C12.1889 153.603 10.7801 155.011 10.7801 156.739C10.7801 158.466 12.1889 159.875 13.9162 159.875C15.6435 159.875 17.0523 158.466 17.0523 156.739C17.0523 155.011 15.6531 153.603 13.9162 153.603Z"
            fill="#AFAF86"
          />
          <path
            d="M15.9233 156.478H14.2732V154.857H13.7425V156.478H12.0538V156.999H13.7425V158.62H14.2732V156.999H15.9233V156.478Z"
            fill="#AFAF86"
          />
          <path
            d="M248.882 11.7257C248.882 13.5977 247.367 15.1224 245.486 15.1224C243.604 15.1224 242.079 13.5977 242.079 11.7257C242.079 9.85373 243.604 8.3291 245.486 8.3291C247.367 8.3291 248.882 9.85373 248.882 11.7257Z"
            fill="#CCCCB4"
          />
          <path
            d="M245.486 15.3827C243.469 15.3827 241.828 13.7423 241.828 11.7255C241.828 9.70878 243.469 8.06836 245.486 8.06836C247.502 8.06836 249.143 9.70878 249.143 11.7255C249.143 13.7423 247.502 15.3827 245.486 15.3827ZM245.486 8.58943C243.758 8.58943 242.35 9.99826 242.35 11.7255C242.35 13.4528 243.758 14.8616 245.486 14.8616C247.213 14.8616 248.622 13.4528 248.622 11.7255C248.622 9.99826 247.213 8.58943 245.486 8.58943Z"
            fill="#AFAF86"
          />
          <path
            d="M247.483 11.4649H245.843V9.84375H245.312V11.4649H243.624V11.9859H245.312V13.6071H245.843V11.9859H247.483V11.4649Z"
            fill="#AFAF86"
          />
          <path
            d="M16.7338 11.7257C16.7338 13.5977 15.2092 15.1224 13.3372 15.1224C11.4652 15.1224 9.94055 13.5977 9.94055 11.7257C9.94055 9.85373 11.4652 8.3291 13.3372 8.3291C15.2092 8.3291 16.7338 9.85373 16.7338 11.7257Z"
            fill="#CCCCB4"
          />
          <path
            d="M13.3372 15.3827C11.3205 15.3827 9.68005 13.7423 9.68005 11.7255C9.68005 9.70878 11.3205 8.06836 13.3372 8.06836C15.354 8.06836 16.9944 9.70878 16.9944 11.7255C16.9944 13.7423 15.354 15.3827 13.3372 15.3827ZM13.3372 8.58943C11.61 8.58943 10.2011 9.99826 10.2011 11.7255C10.2011 13.4528 11.61 14.8616 13.3372 14.8616C15.0645 14.8616 16.4733 13.4528 16.4733 11.7255C16.4733 9.99826 15.0645 8.58943 13.3372 8.58943Z"
            fill="#AFAF86"
          />
          <path
            d="M15.3442 11.4649H13.6941V9.84375H13.173V11.4649H11.4844V11.9859H13.173V13.6071H13.6941V11.9859H15.3442V11.4649Z"
            fill="#AFAF86"
          />
          <path
            d="M217.27 161.359C217.547 162.608 216.597 163.793 215.317 163.793H44.6459C43.3751 163.793 42.4265 162.623 42.689 161.38L50.1723 125.923C50.3675 124.998 51.1838 124.336 52.1292 124.336H207.435C208.372 124.336 209.184 124.987 209.387 125.902L217.27 161.359ZM42.9806 163.793H214.385C215.702 163.793 216.66 162.541 216.315 161.269L207.636 129.305C207.399 128.434 206.608 127.829 205.705 127.829H53.1293C52.2031 127.829 51.398 128.465 51.1836 129.366L42.9925 163.783C42.9912 163.789 42.9863 163.793 42.9806 163.793Z"
            fill="#CCCCB4"
          />
          <path
            d="M241.413 29.8284L231.185 18.606H30.2816L17.4188 30.8223V42.6719H241.413V29.8284Z"
            fill="#FCFCEE"
          />
          <path
            d="M241.413 111.318H17.4188V121.537H241.413V111.318Z"
            fill="#FCFCEE"
          />
          <path
            d="M17.4188 42.6719V111.319H241.413V42.6719H17.4188ZM76.3582 93.2064C67.6832 93.2064 60.6487 86.1719 60.6487 77.497C60.6487 68.8221 67.6832 61.7876 76.3582 61.7876C85.0331 61.7876 92.0676 68.8221 92.0676 77.497C92.0676 86.1719 85.0331 93.2064 76.3582 93.2064ZM161.612 94.4802H96.7669V60.5235H161.602V94.4802H161.612ZM182.407 93.2064C173.732 93.2064 166.697 86.1719 166.697 77.497C166.697 68.8221 173.732 61.7876 182.407 61.7876C191.081 61.7876 198.116 68.8221 198.116 77.497C198.116 86.1719 191.081 93.2064 182.407 93.2064Z"
            fill={theme.colors[tapeColor]}
          />
          <path
            opacity="0.7"
            d="M186.797 161.554C184.636 161.554 182.88 159.788 182.88 157.626C182.88 155.465 184.636 153.708 186.797 153.708C188.959 153.708 190.715 155.465 190.715 157.626C190.715 159.788 188.959 161.554 186.797 161.554ZM186.797 154.76C185.215 154.76 183.922 156.044 183.922 157.626C183.922 159.209 185.205 160.492 186.797 160.492C188.389 160.492 189.673 159.209 189.673 157.626C189.673 156.044 188.38 154.76 186.797 154.76Z"
            fill="#B4B49F"
          />
          <path
            opacity="0.7"
            d="M163.812 158.225H160.965C159.499 158.225 158.312 157.038 158.312 155.571V152.724C158.312 151.258 159.499 150.071 160.965 150.071H163.812C165.279 150.071 166.465 151.258 166.465 152.724V155.571C166.465 157.038 165.279 158.225 163.812 158.225ZM160.965 151.113C160.078 151.113 159.354 151.837 159.354 152.724V155.571C159.354 156.459 160.078 157.183 160.965 157.183H163.812C164.7 157.183 165.423 156.459 165.423 155.571V152.724C165.423 151.837 164.7 151.113 163.812 151.113H160.965Z"
            fill="#B4B49F"
          />
          <path
            opacity="0.7"
            d="M68.2525 160.695C66.0911 160.695 64.3348 158.929 64.3348 156.777C64.3348 154.625 66.0911 152.859 68.2525 152.859C70.414 152.859 72.1703 154.616 72.1703 156.777C72.1703 158.939 70.414 160.695 68.2525 160.695ZM68.2525 153.902C66.67 153.902 65.377 155.185 65.377 156.777C65.377 158.369 66.6604 159.653 68.2525 159.653C69.8447 159.653 71.1281 158.36 71.1281 156.777C71.1281 155.195 69.8447 153.902 68.2525 153.902Z"
            fill="#B4B49F"
          />
          <path
            opacity="0.7"
            d="M94.094 157.366H91.2474C89.7806 157.366 88.5938 156.179 88.5938 154.712V151.866C88.5938 150.399 89.7806 149.212 91.2474 149.212H94.094C95.5607 149.212 96.7476 150.399 96.7476 151.866V154.712C96.7476 156.179 95.5511 157.366 94.094 157.366ZM91.2474 150.254C90.3596 150.254 89.6359 150.978 89.6359 151.866V154.712C89.6359 155.6 90.3596 156.324 91.2474 156.324H94.094C94.9817 156.324 95.7054 155.6 95.7054 154.712V151.866C95.7054 150.978 94.9817 150.254 94.094 150.254H91.2474Z"
            fill="#B4B49F"
          />
          <path
            opacity="0.6"
            d="M161.602 60.5234H96.7668V94.4801H161.602V60.5234Z"
            fill="#8C6F49"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M65.7454 54.1802C52.5678 54.1802 41.8853 64.8627 41.8853 78.0403C41.8853 91.2179 52.5678 101.9 65.7454 101.9H192.682C205.859 101.9 216.542 91.2179 216.542 78.0403C216.542 64.8627 205.859 54.1802 192.682 54.1802H65.7454ZM161.186 61.8154H97.2408V94.2652H161.186V61.8154ZM92.5832 77.6204C92.5832 86.3532 85.5111 93.4254 76.7783 93.4254C68.0454 93.4254 60.9733 86.3532 60.9733 77.6204C60.9733 68.8875 68.0454 61.8154 76.7783 61.8154C85.5111 61.8154 92.5832 68.8875 92.5832 77.6204ZM182.718 93.4254C191.45 93.4254 198.523 86.3532 198.523 77.6204C198.523 68.8875 191.45 61.8154 182.718 61.8154C173.985 61.8154 166.913 68.8875 166.913 77.6204C166.913 86.3532 173.985 93.4254 182.718 93.4254Z"
            fill="#3A3A3A"
          />
          <text
            x="50%"
            y="18.8%"
            fill="black"
            textAnchor="middle"
            alignmentBaseline="middle"
            fontSize="12"
          >
            {title}
          </text>
          <text
            x="8.8%"
            y="30.05%"
            fill="white"
            textAnchor="start"
            fontSize="6.05"
          >
            {date}
          </text>
          <text
            x="90.7%"
            y="62.9%"
            fill="white"
            textAnchor="end"
            fontSize="6.05"
          >
            {sec} sec
          </text>
        </g>
        <defs>
          <clipPath id="clip0_170_1587">
            <rect
              width="250"
              height="159.835"
              fill="white"
              transform="translate(5 5)"
            />
          </clipPath>
        </defs>
      </svg>
    </TypeStyle>
  );
};

export default Tape;
