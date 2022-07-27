import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';
import { css } from '@emotion/react';

interface Props {
  width: string;
  mt?: string;
  onClick?: () => void;
}

export default function Logo({ width, mt, onClick }: Props) {
  return (
    <C.Button onClick={onClick} bgColor="transparent !important">
      <SVG
        onClick={onClick}
        width={width}
        mt={mt}
        viewBox="0 0 96 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M89.9719 10.04C90.0089 10.0902 90.0458 10.1405 90.0711 10.1955L90.0689 10.191C91.5415 13.594 89.5069 17.0502 87.1169 19.4425C85.5331 20.8219 83.5029 21.4283 81.4416 21.5749C81.2964 21.5844 81.1455 21.6172 80.9934 21.6502C80.7219 21.7092 80.4466 21.769 80.1933 21.6992C80.0394 21.6566 79.8844 21.6766 79.7316 21.6964C79.5182 21.7239 79.3092 21.7509 79.1137 21.606C78.849 21.7585 78.6037 21.6697 78.3579 21.5808C78.1562 21.5079 77.9543 21.4348 77.741 21.4949C77.6877 21.5104 77.6033 21.4993 77.5633 21.466C77.0404 21.113 76.427 20.8978 75.814 20.6827C74.9923 20.3945 74.1713 20.1064 73.5695 19.4869C73.4469 19.3492 73.3227 19.2113 73.1979 19.0728C71.8892 17.6201 70.5202 16.1005 70.3621 14.0849C70.3703 13.7718 70.3519 13.4463 70.3334 13.1179C70.2921 12.3863 70.2499 11.6402 70.4998 10.984C70.7449 10.5711 70.8781 10.1092 71.0105 9.65032C71.2094 8.96121 71.4063 8.27875 71.9769 7.77876C73.0542 5.91071 74.9156 4.96224 76.8814 4.18481C77.0718 3.8915 77.0422 3.49032 77.0129 3.0945C76.9954 2.85784 76.9781 2.6231 77.008 2.41448H76.9991C76.837 0.419814 77.1902 0.164371 79.1471 0C80.4517 0.0867649 80.6046 1.17852 80.7531 2.23924C80.8137 2.67205 80.8736 3.0997 81.0107 3.4518C81.0418 3.64949 81.3327 3.77166 81.586 3.77166C83.8916 4.10262 86.3639 5.1355 87.9187 6.88805C88.0588 7.143 88.2551 7.35086 88.4508 7.55809C88.6865 7.80765 88.9213 8.05629 89.056 8.38516C89.1429 8.55568 89.2859 8.69241 89.4274 8.82763C89.6767 9.06584 89.921 9.29934 89.8445 9.70458C89.8253 9.84054 89.8985 9.94012 89.9719 10.04ZM85.6456 14.2196C85.7899 13.9242 85.935 13.6271 85.8952 13.2674C86.1839 10.1888 84.8623 8.75389 82.3212 7.18347C78.2364 4.82897 74.2714 8.24522 74.749 12.6433C74.5447 15.2355 76.2861 18.6006 79.2292 18.6695C79.4751 18.667 79.728 18.672 79.9842 18.6771C81.3529 18.7042 82.8137 18.733 83.7717 17.6366C84.5957 16.9058 85.3332 15.8085 85.4509 14.6757C85.4995 14.5188 85.5724 14.3694 85.6456 14.2196Z"
          fill="#E62E6B"
        />
        <path
          d="M60.1155 23.8761H60.1244C60.1302 24.0666 60.1223 24.2978 60.1137 24.548C60.0699 25.8266 60.0091 27.599 61.6792 26.9414C61.9909 26.7381 62.4437 26.6837 62.8975 26.6292C63.6339 26.5408 64.3728 26.452 64.5158 25.7264C64.5954 25.1983 64.5172 24.6812 64.4395 24.1676C64.3394 23.506 64.2401 22.85 64.4802 22.1835C64.6226 21.547 64.5196 20.8951 64.4164 20.2418C64.3312 19.7028 64.2459 19.1627 64.2981 18.6295C64.2963 18.3554 64.2336 18.0987 64.1717 17.845C64.0821 17.4776 63.9939 17.1164 64.0937 16.717C64.0983 16.6036 64.0947 16.4892 64.0911 16.3746C64.0807 16.0405 64.0701 15.704 64.2603 15.3799C64.3603 15.211 64.3447 14.9356 64.2426 14.7313C63.9938 14.2359 63.996 13.7495 64.2426 13.2586C64.2678 12.8979 64.1605 12.5336 64.0529 12.1682C63.971 11.89 63.8889 11.6112 63.8649 11.3328C63.8196 11.0848 63.8322 10.8308 63.8449 10.5765C63.8651 10.1704 63.8853 9.7633 63.6695 9.37808C63.6406 9.32699 63.6584 9.21593 63.6961 9.16706C64.0137 8.79863 63.9526 8.36299 63.8895 7.91227C63.8506 7.63473 63.8109 7.35147 63.8583 7.07466C63.7944 5.97118 63.0394 5.88147 62.251 5.78779C61.9429 5.75117 61.6296 5.71395 61.3505 5.61531C61.2528 5.55089 61.1306 5.562 61.0329 5.62863C60.8457 5.75553 60.6357 5.77205 60.4189 5.7891L60.3976 5.79078C59.157 5.88905 59.3705 7.21694 59.5423 8.28505C59.588 8.56897 59.6307 8.83454 59.6424 9.05378C59.8578 11.5793 59.9844 14.1826 59.9067 16.7548C60.0071 17.4728 59.2127 17.4053 58.4936 17.3442C58.1627 17.3161 57.8477 17.2894 57.6433 17.3412L57.619 17.3412C57.5158 17.3409 57.3992 17.3405 57.319 17.3878C57.0892 17.5272 56.8466 17.5048 56.6026 17.4822C56.4148 17.4648 56.2262 17.4473 56.0418 17.5034C55.9874 17.52 55.9194 17.5048 55.8449 17.4881C55.7306 17.4625 55.6007 17.4334 55.4798 17.51C54.8556 17.3456 54.2381 17.1924 53.6028 17.4678C53.2575 17.6303 52.9397 17.5369 52.619 17.4427C52.4487 17.3927 52.2777 17.3424 52.1013 17.3301C51.8774 17.3658 51.5374 17.3542 51.16 17.3413C50.152 17.3069 48.8769 17.2633 48.8316 18.0875C49.0733 18.6028 49.0194 19.1234 48.9702 19.5978C48.8856 20.4139 48.8152 21.0932 50.2888 21.3727C50.5553 21.5371 50.8241 21.5482 51.0617 21.4638C51.7525 21.2173 52.4234 21.2328 53.1053 21.4638C53.7616 21.3669 54.4403 21.3225 55.1259 21.2776C55.8068 21.2331 56.4951 21.188 57.1746 21.0907C57.331 21.0812 57.4794 21.0719 57.6201 21.063C58.9025 20.9823 59.5508 20.9415 59.8675 21.2458C60.1912 21.5568 60.1685 22.2283 60.1227 23.5863L60.1133 23.8694L60.1155 23.8761Z"
          fill="#E62E6B"
        />
        <path
          d="M77.4389 31.5127V31.526L77.4433 31.5282C77.1984 31.5526 76.9418 31.5389 76.6845 31.5251C76.2393 31.5012 75.7917 31.4773 75.3976 31.6504C75.3621 31.6793 75.2887 31.7192 75.2665 31.7037C75.0841 31.5817 74.8846 31.5936 74.6854 31.6055C74.5328 31.6146 74.3804 31.6237 74.2359 31.5726C73.9034 31.533 73.5633 31.5012 73.2214 31.4692C72.4511 31.3971 71.6715 31.3241 70.9485 31.1595C70.7774 31.0329 70.5709 31.0373 70.3887 31.1439C68.4457 31.8232 68.5124 29.7909 68.5645 28.2025V28.2013C68.5784 27.7801 68.5912 27.39 68.5651 27.0902C68.5828 25.9958 70.5319 26.4176 71.7194 26.6747C72.0165 26.739 72.266 26.793 72.4256 26.8103C73.0977 26.5957 73.8224 26.6418 74.5485 26.688C75.1974 26.7293 75.8473 26.7706 76.4616 26.626C77.3732 26.4645 78.2841 26.4668 79.1934 26.469C79.8482 26.4706 80.5022 26.4722 81.155 26.4127C81.3557 26.3573 81.5623 26.3903 81.7653 26.4227C82.0589 26.4695 82.3449 26.5151 82.5944 26.2905C82.7987 26.1351 84.1182 26.3128 84.3514 26.3727C84.5198 26.4559 84.6764 26.3813 84.8315 26.3073C85.0201 26.2174 85.2064 26.1286 85.4087 26.3261C85.5353 26.4216 85.6752 26.4594 85.7819 26.3727C86.9343 26.0044 88.17 26.0139 89.3967 26.0234C90.4113 26.0313 91.4198 26.0391 92.37 25.833C92.9283 25.818 93.4906 25.7359 94.0515 25.654C94.3252 25.614 94.5987 25.574 94.8712 25.542C94.9514 25.539 95.0273 25.5104 95.1038 25.4817C95.2537 25.4252 95.4055 25.3681 95.5953 25.502C95.9869 25.8965 95.9258 27.0955 95.8729 28.1335C95.8453 28.6735 95.82 29.1699 95.8618 29.4869C95.8809 30.1124 94.6836 30.1235 93.6494 30.1331C93.1155 30.138 92.625 30.1425 92.3678 30.231C90.633 30.4176 88.8983 30.6131 87.2368 31.0262C87.0603 31.1219 86.7984 31.0914 86.5737 31.0652L86.5437 31.0618C85.1888 30.9396 85.2976 32.701 85.5175 33.6251L85.5278 33.6554C85.6095 33.8959 85.7392 34.278 85.4709 34.5846C85.3652 35.1145 85.3822 35.6904 85.3991 36.2658C85.4118 36.6939 85.4244 37.1216 85.3865 37.53C85.3939 37.9263 85.4026 38.2886 85.4106 38.62C85.4575 40.5642 85.4787 41.4432 85.0497 41.8774C84.6958 42.2356 84.0353 42.291 82.8299 42.3921C82.2245 42.4429 81.4815 42.5052 80.5708 42.6233C80.1155 42.5611 79.92 42.3123 80.0533 41.8636C80.1955 41.5291 80.1035 41.2157 80.0111 40.9007C79.9476 40.6844 79.8838 40.4673 79.8956 40.2421C79.8911 39.8441 79.8925 39.4458 79.8939 39.0479C79.8987 37.6945 79.9035 36.3453 79.6735 35.0289C79.6735 34.8445 79.7468 34.669 79.8378 34.5202C79.726 33.771 79.726 33.1973 79.726 32.7616C79.7259 31.5698 79.7259 31.4102 77.4389 31.5127Z"
          fill="#E62E6B"
        />
        <path
          d="M25.3021 30.3909V30.4198H25.2954C24.3536 30.3754 23.3985 30.382 22.5478 30.8241C22.0656 30.7737 21.5939 30.8548 21.1236 30.9355C20.7013 31.0081 20.2801 31.0804 19.8534 31.0573C19.147 31.0195 18.8094 31.5504 18.7628 32.1568C18.8153 32.9795 18.7354 33.7739 18.6551 34.5719C18.5894 35.2239 18.5235 35.8784 18.5295 36.5526C18.5696 36.7598 18.4991 36.9343 18.4277 37.1111C18.4042 37.1694 18.3805 37.2279 18.3607 37.2879C18.4739 37.5746 18.4166 37.8531 18.359 38.1329C18.3172 38.3365 18.2751 38.5408 18.2985 38.7494C18.3103 38.9036 18.3218 39.0505 18.3328 39.1905C18.4489 40.6708 18.5043 41.3774 18.1777 41.7382C17.8793 42.0677 17.2622 42.1087 16.0813 42.187C15.4295 42.2302 14.606 42.2848 13.5695 42.4056C13.0653 42.37 12.992 42.3478 13.0275 41.8547C13.0372 41.7238 13.0314 41.5919 13.0257 41.4597C13.0129 41.1657 13.0001 40.8707 13.1564 40.5842C12.96 38.8475 12.9928 37.0263 13.0255 35.2104C13.0442 34.1721 13.0629 33.1349 13.0386 32.1168C13.1223 31.3099 12.6122 31.3039 12.0531 31.2974C11.7212 31.2935 11.3719 31.2894 11.1195 31.1173C11.0751 31.0817 10.9551 31.0862 10.9085 31.1217C10.6602 31.3088 10.3798 31.2977 10.1028 31.2868C10.0378 31.2842 9.97306 31.2816 9.90893 31.2816C9.61193 31.2845 9.314 31.2889 9.01553 31.2934L9.01261 31.2934C6.74508 31.3272 4.44667 31.3614 2.29231 30.7041C2.25455 30.6664 2.16126 30.6264 2.12572 30.6464C1.93263 30.7386 1.7328 30.7221 1.53349 30.7056C1.32011 30.6879 1.10733 30.6703 0.904043 30.7863C0.515327 30.7441 0.075522 29.9 0.266548 29.5513C0.271708 29.5422 0.277283 29.5329 0.282909 29.5236C0.31846 29.4644 0.356088 29.4019 0.304309 29.3558C0.162855 29.2313 0.198862 29.0898 0.231052 28.9632C0.249409 28.891 0.266526 28.8237 0.248778 28.7672C0.206298 28.6229 0.186385 28.4716 0.166561 28.321C0.136629 28.0936 0.106899 27.8677 0 27.6699C0.174127 27.4317 0.154312 27.1717 0.134503 26.9117C0.122726 26.7571 0.11095 26.6026 0.139938 26.4527C0.171035 26.0462 1.03065 25.7219 1.40382 25.9596C1.50155 26.0262 1.67037 26.0151 1.80142 26.0018C2.21624 25.9172 2.60325 26.055 2.98358 26.1905C3.33235 26.3147 3.6755 26.4369 4.02932 26.3838C4.41626 26.1102 4.79007 26.2245 5.1658 26.3395C5.44576 26.4251 5.72679 26.5111 6.0151 26.4371C6.34463 26.4221 6.67506 26.4118 7.0059 26.4016L7.00701 26.4016C8.04262 26.3695 9.08295 26.3373 10.1111 26.1573C10.5237 26.0535 10.8786 26.1538 11.2253 26.2518C11.4945 26.328 11.7588 26.4027 12.0413 26.3794C12.4856 26.1262 12.9254 26.1595 13.3674 26.386C13.656 26.3868 13.9436 26.339 14.2314 26.2911C14.8074 26.1953 15.3841 26.0994 15.9707 26.3927C16.1286 26.4476 16.2531 26.3844 16.3726 26.3237C16.5288 26.2444 16.6765 26.1694 16.8792 26.3683C17.0881 26.508 17.2824 26.4185 17.4822 26.3265C17.6476 26.2503 17.8167 26.1724 18.0009 26.2217C18.7873 26.2506 19.5853 26.2285 20.3791 26.2065C21.289 26.1812 22.1944 26.1561 23.0697 26.2083C23.2082 26.2987 23.3749 26.1877 23.5066 26.1C23.5269 26.0865 23.5467 26.0733 23.5651 26.0617C23.8697 26.1782 24.1668 26.1115 24.4643 26.0448C24.7288 25.9855 24.9936 25.9261 25.2643 25.9951C25.5442 26.0657 25.8019 25.9816 26.0618 25.8969C26.2682 25.8296 26.4759 25.7619 26.697 25.7708C27.3878 25.7996 27.5366 25.9973 27.3056 26.6704L27.3267 26.7817C27.4373 27.365 27.5547 27.9839 27.3856 28.5517C27.3396 28.8782 27.3103 29.1483 27.2861 29.3716C27.2296 29.8915 27.2008 30.1575 27.0526 30.2898C26.8975 30.4284 26.6117 30.4206 26.0267 30.4047C25.8237 30.3991 25.5843 30.3926 25.3021 30.3909Z"
          fill="#E62E6B"
        />
        <path
          d="M35.1777 66.2594H35.1688L35.1666 66.255L35.1749 66.0047C35.2218 64.6044 35.2455 63.8977 34.9051 63.5755C34.5582 63.2473 33.8332 63.3185 32.3694 63.4623L32.2279 63.4762C31.804 63.5176 31.4414 63.5933 31.0914 63.6664C30.3886 63.8132 29.7362 63.9495 28.7383 63.7761C28.445 63.7245 28.4674 63.2565 28.4933 62.7167C28.5031 62.5126 28.5134 62.2983 28.5073 62.0924C28.5014 61.8777 28.4847 61.6498 28.4682 61.4244C28.4165 60.717 28.3664 60.0331 28.6561 59.8511C29.1815 59.5228 29.7711 59.6848 30.3371 59.8402C30.4028 59.8583 30.4682 59.8763 30.5331 59.8934C30.654 59.8167 30.7839 59.8458 30.8982 59.8714C30.9727 59.8881 31.0407 59.9034 31.0951 59.8867C31.2795 59.8307 31.4681 59.8481 31.6558 59.8655C31.8999 59.8881 32.1425 59.9105 32.3723 59.7712C32.4525 59.7238 32.569 59.7242 32.6723 59.7245L32.6966 59.7245C32.901 59.6727 33.216 59.6995 33.5469 59.7276C34.266 59.7886 35.0604 59.8561 34.96 59.1381C35.0377 56.5659 34.9111 53.9627 34.6957 51.4371C34.684 51.2179 34.6413 50.9523 34.5956 50.6684C34.4238 49.6003 34.2103 48.2724 35.4509 48.1741L35.4723 48.1724C35.689 48.1554 35.8991 48.1389 36.0862 48.012C36.1839 47.9453 36.3061 47.9342 36.4038 47.9986C36.6829 48.0973 36.9962 48.1345 37.3044 48.1711C38.0927 48.2648 38.8477 48.3545 38.9116 49.458C38.8642 49.7348 38.9039 50.018 38.9428 50.2956C39.0059 50.7463 39.067 51.182 38.7494 51.5504C38.7117 51.5993 38.6939 51.7103 38.7228 51.7614C38.9386 52.1466 38.9184 52.5537 38.8982 52.9599C38.8855 53.2142 38.8729 53.4681 38.9182 53.7161C38.9422 53.9945 39.0243 54.2733 39.1062 54.5515C39.2138 54.9169 39.3211 55.2812 39.2959 55.6419C39.0493 56.1328 39.0471 56.6192 39.2959 57.1146C39.398 57.3189 39.4136 57.5944 39.3136 57.7632C39.1234 58.0873 39.134 58.4238 39.1444 58.7579C39.148 58.8724 39.1516 58.987 39.147 59.1004C39.0472 59.4997 39.1354 59.861 39.225 60.2283C39.2869 60.4821 39.3496 60.7388 39.3514 61.0129C39.2992 61.5461 39.3845 62.0861 39.4697 62.6251C39.5729 63.2785 39.6759 63.9303 39.5335 64.5668C39.285 65.2567 39.4 67.1417 39.5032 68.834C39.5772 70.0461 39.6451 71.1594 39.5691 71.6637C39.4261 72.3893 38.6872 72.4781 37.9508 72.5665C37.497 72.621 37.0442 72.6754 36.7326 72.8787C35.0322 73.5483 35.126 69.1219 35.1694 67.0741C35.1769 66.717 35.183 66.4322 35.1777 66.2594Z"
          fill="#E62E6B"
        />
        <path
          d="M80.3265 48.0742C80.4096 49.8521 80.4653 51.6128 80.5208 53.3703C80.6005 55.8899 80.68 58.403 80.8396 60.9507C81.1017 61.9014 80.8996 66.797 79.6291 66.1795C79.1971 65.9205 78.6243 65.9892 78.0781 66.0547C77.411 66.1347 76.7837 66.21 76.5016 65.6775C76.3131 65.1526 76.4958 64.5077 76.67 63.8928C76.7833 63.4929 76.893 63.1056 76.8947 62.7721C76.8992 61.599 76.7263 60.797 76.5858 60.1449C76.4485 59.5079 76.3419 59.0138 76.4616 58.4562C76.6179 57.727 76.4714 57.214 76.3384 56.7485C76.1993 56.2612 76.075 55.8259 76.3283 55.2488C76.2846 54.3864 76.1644 53.3066 76.0461 52.244C75.8277 50.2823 75.6159 48.3794 75.9041 48.012C75.9041 47.0591 76.124 46.1017 76.3216 45.7019C76.8036 45.2843 77.7632 45.0044 78.685 45.151C79.5269 45.231 79.8889 45.4487 80.0889 45.6886C80.2783 46.0609 80.2547 46.3492 80.226 46.7002C80.1974 47.0487 80.1639 47.4589 80.3288 48.0742H80.3265Z"
          fill="#E62E6B"
        />
        <path
          d="M41.8559 65.2947C41.9463 67.5117 42.0368 69.7315 42.068 71.9702V71.9746C41.8147 72.3611 42.0702 74.4447 42.2523 75.1421L42.2927 75.2392L42.3225 75.3114L42.3232 75.3129C42.4875 75.7104 42.567 75.9028 42.7107 76.0034C42.8455 76.0977 43.0367 76.1113 43.4072 76.1378C43.5004 76.1444 43.6049 76.1519 43.7228 76.1617L43.7722 76.1658C44.8872 76.2584 45.2886 76.2918 46.1861 75.1621C46.5104 74.7537 46.4241 74.2981 46.3319 73.8114C46.2756 73.5146 46.2172 73.2062 46.2483 72.8898C46.3088 72.2922 46.3987 71.789 46.4878 71.2907C46.5851 70.7461 46.6813 70.2075 46.737 69.5579C46.6338 68.6854 46.5704 67.8729 46.5071 67.0614C46.4411 66.2141 46.3751 65.368 46.2639 64.4558C46.064 62.8143 46.0973 62.4011 46.3261 61.1261C46.4394 60.4931 46.3705 59.5713 46.2728 58.936C46.1884 58.3892 46.2288 58.0595 46.2696 57.7267C46.3094 57.4025 46.3495 57.0753 46.275 56.5415C46.0323 55.637 46.002 54.7569 45.9749 53.968C45.9628 53.6158 45.9513 53.2818 45.9218 52.972C45.903 52.7697 45.8367 52.6592 45.7762 52.5586C45.6794 52.3973 45.5976 52.2611 45.7508 51.8125C45.7903 51.6392 45.8802 51.5193 45.9732 51.3953C46.0423 51.3031 46.1131 51.2087 46.1661 51.0884C46.3973 50.5678 46.4125 50.398 46.4426 50.0601C46.4551 49.9208 46.4701 49.753 46.5038 49.5202C46.8541 47.0913 46.6342 47.0064 45.3416 46.507C45.2819 46.484 45.2198 46.46 45.1555 46.4349C42.6744 45.4664 42.3456 46.3483 42.008 48.7139C41.6753 51.0507 41.6609 53.0591 41.6452 55.27C41.6429 55.5978 41.6405 55.9299 41.637 56.2683C41.6115 59.2981 41.7336 62.2942 41.8559 65.2947Z"
          fill="#E62E6B"
        />
        <path
          d="M55.6841 13.0765C56.9016 13.3511 56.9352 12.0216 56.9595 11.0596C56.9629 10.9248 56.9662 10.7969 56.9725 10.682C57.1901 10.0689 57.3701 9.53358 56.486 9.57134C55.8217 9.59539 55.1505 9.64538 54.4768 9.69556C52.7856 9.82154 51.079 9.94866 49.4269 9.66908C49.0338 9.42696 48.7916 9.56024 48.7694 10.0111C48.8326 10.4106 48.7512 10.7839 48.6703 11.1549C48.5861 11.541 48.5024 11.9245 48.5829 12.3323C48.5416 13.0288 49.0717 13.0447 49.572 13.0597C49.745 13.0649 49.9145 13.07 50.0555 13.1031C50.32 13.2873 50.6166 13.2875 50.9109 13.2878C51.1951 13.288 51.4771 13.2882 51.7259 13.4541C51.7548 13.4741 51.8303 13.4541 51.8614 13.4296C52.0129 13.2698 52.158 13.3463 52.3025 13.4225C52.4271 13.4883 52.5513 13.5538 52.6788 13.4674C52.9929 13.2297 53.3746 13.2665 53.7523 13.303C54.0558 13.3322 54.3567 13.3613 54.6179 13.2475C54.9237 13.0822 55.223 13.0794 55.5297 13.0765C55.5817 13.076 55.6339 13.0755 55.6864 13.0742L55.6841 13.0765Z"
          fill="#E62E6B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M69.9364 53.1053C69.863 53.0055 69.7898 52.9059 69.809 52.7699C69.8855 52.3647 69.6411 52.1312 69.3919 51.893C69.2504 51.7578 69.1073 51.621 69.0204 51.4505C68.8857 51.1216 68.6509 50.873 68.4152 50.6234C68.2195 50.4162 68.0232 50.2084 67.8832 49.9534C66.3283 48.2009 63.8561 47.168 61.5504 46.837C61.2972 46.837 61.0062 46.7148 60.9751 46.5172C60.838 46.1651 60.7781 45.7374 60.7175 45.3046C60.569 44.2439 60.4161 43.1521 59.1115 43.0654C57.1546 43.2297 56.8014 43.4852 56.9636 45.4798H56.9725C56.9425 45.6885 56.9599 45.9232 56.9774 46.1599C57.0066 46.5557 57.0363 46.9569 56.8458 47.2502C54.8801 48.0276 53.0187 48.9761 51.9414 50.8441C51.3707 51.3441 51.1738 52.0266 50.975 52.7157C50.8426 53.1746 50.7093 53.6365 50.4642 54.0494C50.2143 54.7055 50.2565 55.4516 50.2978 56.1832C50.3164 56.5116 50.3348 56.8372 50.3265 57.1502C50.4847 59.1659 51.8536 60.6854 53.1623 62.1381C53.2871 62.2767 53.4114 62.4146 53.534 62.5523C54.1357 63.1718 54.9567 63.4598 55.7784 63.7481C56.3914 63.9631 57.0048 64.1783 57.5278 64.5314C57.5677 64.5647 57.6522 64.5758 57.7055 64.5602C57.9187 64.5002 58.1207 64.5732 58.3224 64.6462C58.5681 64.7351 58.8134 64.8238 59.0782 64.6713C59.2736 64.8163 59.4826 64.7893 59.696 64.7617C59.8488 64.742 60.0038 64.722 60.1577 64.7646C60.4111 64.8344 60.6864 64.7746 60.9578 64.7156C61.1099 64.6826 61.2609 64.6498 61.406 64.6402C63.4673 64.4936 65.4976 63.8872 67.0813 62.5078C69.4713 60.1156 71.506 56.6593 70.0333 53.2564L70.0355 53.2608C70.0103 53.2058 69.9733 53.1555 69.9364 53.1053ZM65.61 57.285C65.5369 57.4348 65.4639 57.5841 65.4154 57.7411C65.2976 58.8739 64.5602 59.9712 63.7361 60.702C62.7781 61.7984 61.3174 61.7695 59.9486 61.7425C59.6925 61.7374 59.4395 61.7324 59.1937 61.7348C56.2505 61.666 54.5091 58.3008 54.7135 55.7086C54.2359 51.3106 58.2008 47.8943 62.2856 50.2488C64.8267 51.8192 66.1484 53.2542 65.8596 56.3328C65.8994 56.6924 65.7543 56.9895 65.61 57.285Z"
          fill="#E62E6B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.0538 5.12443C22.4367 6.68818 23.6761 9.20706 24.2514 12.7033L24.2559 12.7055C24.3336 12.7944 24.3447 12.9343 24.2603 13.0143C24.0687 13.2477 24.0775 13.5231 24.0863 13.8019C24.0953 14.0855 24.1043 14.3726 23.9027 14.6224C23.4762 16.4283 22.2301 17.7499 20.7996 18.885C17.5478 21.6282 12.7521 22.4012 8.79387 21.0507C8.57661 20.8505 8.29979 20.7675 8.02421 20.685C7.68839 20.5844 7.35443 20.4844 7.13238 20.1733C6.27054 19.7579 5.94846 19.3181 5.44646 18.554C3.30964 16.2839 3.41626 13.0187 4.38694 10.1977C4.43779 10.071 4.55556 10.0045 4.66831 9.94085C4.84609 9.84046 5.0114 9.74711 4.88227 9.43585C5.13239 9.15998 5.37813 8.87596 5.62484 8.59083C6.63356 7.42498 7.65849 6.24041 9.06486 5.51759C10.5198 4.66686 12.1746 4.28925 13.7939 4.01159C14.2363 4.01064 14.2649 3.66502 14.3021 3.21547C14.3516 2.61783 14.4162 1.8365 15.4887 1.43718C15.5309 1.42163 15.5953 1.40609 15.6242 1.42608C15.8559 1.58684 16.1099 1.57314 16.3617 1.55956C16.4648 1.554 16.5675 1.54846 16.6681 1.55491C18.7397 1.91884 18.5759 2.73682 18.4159 3.53612C18.2936 4.1467 18.1736 4.74638 19.0538 5.12443ZM18.2166 16.8467C19.0738 15.9251 19.9572 14.9753 19.9067 13.6229H19.9023C20.4265 7.99871 14.8867 4.05824 10.6286 8.64065C8.69391 10.3665 7.42336 12.2457 8.13416 14.949C9.42025 17.6011 12.2634 19.9823 15.2843 18.6695C15.6646 18.7138 15.9142 18.5079 16.1729 18.2945C16.3161 18.1763 16.4622 18.0558 16.6348 17.9743C16.7579 17.9026 16.8953 17.8617 17.0323 17.8209C17.2564 17.7541 17.4795 17.6877 17.6366 17.4878C17.8205 17.2725 18.0179 17.0604 18.2166 16.8467Z"
          fill="#E62E6B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M47.3721 16.9699C47.2036 16.6105 47.1883 16.226 47.1732 15.845C47.1533 15.3429 47.1337 14.8468 46.7637 14.4225C46.5111 13.6437 45.9594 13.1289 45.4013 12.6081C45.0712 12.3 44.7388 11.9897 44.4647 11.6215C44.2766 11.2822 43.9453 11.1501 43.6109 11.0166C43.3804 10.9247 43.1485 10.8321 42.9609 10.6708L42.9405 10.653C42.8226 10.5495 42.6651 10.4115 42.47 10.4576C42.0509 10.5543 41.6669 10.4074 41.298 10.2663C41.1839 10.2226 41.0713 10.1795 40.9596 10.1444C40.6093 10.0349 40.2477 10.0325 39.8891 10.0302C39.4041 10.027 38.9244 10.0239 38.4851 9.75569C38.2654 9.6772 38.0902 9.77333 37.9162 9.86885C37.7701 9.94903 37.6248 10.0288 37.4545 10.0045C36.9192 9.92895 36.4505 10.1133 35.9907 10.3754C35.7743 10.5728 35.512 10.615 35.2483 10.6575C35.0817 10.6843 34.9144 10.7112 34.7579 10.7775C33.6251 11.3927 32.5989 12.148 31.7059 13.0298C31.6218 13.1631 31.5394 13.2931 31.4586 13.4202C30.1917 15.4167 29.3624 16.7234 29.709 19.3337C29.8512 19.5958 29.94 19.829 29.8934 20.1311C29.9602 20.8414 30.4718 21.3896 30.9679 21.9212C31.1808 22.1493 31.3908 22.3743 31.5615 22.6078C32.2564 23.5739 33.2908 23.9707 34.3574 24.3797C34.5046 24.4362 34.6525 24.4929 34.8001 24.5513C35.3021 24.9201 35.8774 25.0667 36.5038 25.0711C36.612 25.0711 36.7192 25.0406 36.8263 25.0101C37.0291 24.9524 37.2318 24.8947 37.4411 25.0444C37.4656 25.0622 37.5522 25.04 37.5766 25.0111C37.7107 24.8395 37.8866 24.8463 38.0636 24.8532C38.1065 24.8548 38.1495 24.8565 38.1919 24.8556C38.3041 24.8533 38.4185 24.8666 38.5329 24.88C38.8536 24.9173 39.174 24.9546 39.4425 24.6468C39.4765 24.6093 39.5623 24.6121 39.6397 24.6146C39.6584 24.6152 39.6767 24.6158 39.6935 24.6158C39.9116 24.6379 40.0955 24.5281 40.2769 24.4199C40.4593 24.311 40.6391 24.2036 40.8485 24.2337C41.3385 24.3822 41.707 24.1412 42.0808 23.8967C42.4002 23.6878 42.7235 23.4763 43.1297 23.5029C43.2164 23.5074 43.3052 23.4963 43.3696 23.4274C43.6545 23.1468 43.9534 22.8881 44.2503 22.6312C44.8699 22.0949 45.4809 21.5662 45.9374 20.8619C46.8388 19.8073 47.2364 18.2822 47.3721 16.9699ZM43.554 17.5589C43.2475 20.8108 41.7592 22.9365 38.3074 23.1186C36.2928 23.1653 34.6224 21.2639 34.3225 19.4558C34.3133 19.256 34.2538 19.0557 34.1943 18.8559C34.0814 18.476 33.969 18.0982 34.2048 17.7299C34.2315 17.7033 34.2514 17.6211 34.2315 17.5989C33.9501 17.2059 34.1873 16.7847 34.4347 16.3457C34.6207 16.0154 34.8125 15.6749 34.7934 15.3288C34.8152 14.9411 35.0716 14.6598 35.328 14.3785C35.5416 14.1441 35.7552 13.9098 35.833 13.614C36.2265 12.8126 37.0665 12.5126 37.867 12.2266C38.0606 12.1574 38.2519 12.0891 38.434 12.0147C39.5935 11.9858 41.8192 12.2901 42.1635 13.6162C43.112 14.6446 44.0582 16.0884 43.5518 17.5567L43.554 17.5589Z"
          fill="#E62E6B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M59.7276 29.7398C59.7466 29.7645 59.7658 29.7894 59.7823 29.8156V29.8112C59.8647 29.941 59.9532 30.0701 60.0421 30.1999C60.4611 30.8112 60.8891 31.4358 60.7352 32.2146C60.6663 32.5446 60.6363 32.8898 60.6063 33.2348C60.5298 34.1135 60.4534 34.991 59.7357 35.613C59.2809 37.0378 57.8564 37.6378 56.5643 38.1821L56.5629 38.1827C56.4796 38.2177 56.3968 38.2526 56.315 38.2874L56.1439 38.3681C55.2536 38.7886 54.2437 39.2656 53.2652 39.2781C51.3305 39.2425 49.669 37.972 48.7828 36.3771C48.5384 35.8729 48.2808 35.3465 47.932 34.9111C47.9294 34.6144 47.8586 34.3198 47.788 34.0265C47.6791 33.5733 47.5709 33.1234 47.7166 32.6744C48.1408 30.2554 49.6313 27.9831 51.8525 26.8791C52.741 26.3216 54.0049 26.2283 54.9023 26.7148C55.2083 26.8093 55.514 26.8779 55.818 26.9461C56.3856 27.0733 56.9469 27.1992 57.4922 27.49C58.1253 27.9498 58.7405 28.3985 59.3403 28.9005C59.3681 28.9366 59.3978 28.9711 59.4273 29.0054C59.5484 29.1463 59.6656 29.2827 59.6335 29.5024C59.6186 29.5982 59.6725 29.6682 59.7276 29.7398ZM53.8287 36.7527C54.618 36.6443 55.3994 36.5369 56.0706 36.0151C60.3287 33.4096 56.3061 26.3549 52.088 29.6646C50.6197 30.6819 49.8912 33.2008 50.5486 34.86C51.0173 35.8929 51.9947 36.5993 53.0631 36.8725C53.3168 36.8231 53.5732 36.7878 53.8287 36.7527Z"
          fill="#E62E6B"
        />
        <path
          d="M19.2914 67.9498C18.4229 67.9498 17.0213 66.7792 16.8814 66.5282C16.7622 66.2534 16.9051 66.1627 17.0599 66.0645C17.2255 65.9594 17.4048 65.8456 17.2923 65.4886C17.7987 64.82 18.3652 64.0559 18.9804 63.2119C19.6846 62.2434 20.3576 61.2572 20.9796 60.2798C21.6459 59.3025 22.2301 58.3807 22.7166 57.5388C23.2741 56.6104 23.645 55.8418 23.8405 55.2065L24.0804 54.4247L23.2808 54.247C22.4833 54.0693 21.586 53.8893 20.6131 53.7139C19.6402 53.5295 18.8605 53.4384 18.2341 53.4384H17.048C16.5282 53.4384 15.9573 53.3762 15.3487 53.2541C14.7468 53.1341 13.9893 52.9742 13.0897 52.7787C12.9764 52.6765 12.8654 52.6077 12.7565 52.5588C12.7366 52.3656 12.7188 51.9835 12.7232 51.2305C12.7254 50.9506 12.7832 50.6996 12.8965 50.462C13.1386 50.0399 13.0386 49.6223 12.9698 49.378C13.1408 49.1848 13.2541 49.0737 13.3963 48.9804L13.4163 48.9671C13.5651 48.9116 13.9849 48.8649 14.147 48.8471L14.2338 48.8371C14.3064 48.8288 14.3669 48.8219 14.4202 48.8138C15.8974 48.8138 17.1124 48.8582 18.0342 48.9427H18.0697C18.996 48.9871 19.8023 49.0715 20.4709 49.1959C21.2106 49.3269 21.8636 49.4558 22.4189 49.5846C23.0009 49.7179 23.6806 49.8556 24.4358 49.9889L24.5002 50H25.0289C25.7552 50 26.4727 50.1554 27.1635 50.462C27.821 50.753 28.4696 51.0972 29.0959 51.486C29.1781 51.9702 29.2203 52.4122 29.2203 52.8054C29.2203 53.6628 28.976 54.6468 28.494 55.7307C27.9942 56.8125 27.4433 57.7676 26.8614 58.5584L26.8036 58.6361L26.7681 58.725C26.5171 59.3536 26.1306 60.1488 25.6197 61.0839L25.6064 61.1084C25.1488 62.0213 24.4691 63.0408 23.5828 64.1381L23.4918 64.2514L23.4496 64.3913C23.3074 64.8556 22.9409 65.4242 22.3589 66.0839C21.777 66.7059 21.2861 67.2701 20.8996 67.7654C20.815 67.8739 20.7559 67.9847 20.7014 68.0871C20.5713 68.3313 20.4669 68.5273 20.1022 68.5273L19.2914 67.9498Z"
          fill="#E62E6B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M75.8263 67.048C76.0018 67.5012 76.124 67.9876 76.1928 68.5096L76.1973 68.514C76.3017 69.036 76.355 69.698 76.355 70.4976V71.0196C76.3194 71.6127 76.2661 72.2901 76.1973 73.0565C76.1284 73.7872 76.0573 74.4492 75.9885 75.04V75.6153C75.9885 76.1373 75.9352 76.7126 75.8308 77.339C75.7264 78.0009 75.5176 78.6273 75.2044 79.2182C74.3336 79.3914 73.7583 79.4781 73.4807 79.4781H72.9587C72.7144 79.4781 72.4012 79.4936 72.0191 79.5291C71.828 79.5636 71.6364 79.5986 71.4447 79.6336C71.2532 79.6685 71.0617 79.7035 70.8707 79.7379C70.4887 79.809 70.1399 79.8601 69.8268 79.8956C69.5136 79.9645 69.287 80 69.1471 80C68.9716 80 68.7805 79.9823 68.5718 79.9467H67.2146C66.8659 79.9823 66.4993 80 66.1173 80C65.2466 80 64.498 79.9467 63.8716 79.8423C63.594 79.3892 63.3141 78.8139 63.0364 78.1187C62.7921 77.4212 62.6699 76.7437 62.6699 76.0818C62.6699 74.7935 62.5655 73.6962 62.3567 72.7921C62.1479 71.8526 62.0435 70.8952 62.0435 69.9201C62.0435 69.3981 62.0791 68.8583 62.1479 68.3008C62.219 67.7099 62.3412 67.2568 62.5145 66.9436C62.6877 66.7704 63.0364 66.6304 63.5584 66.526C64.116 66.3861 64.7246 66.2817 65.3865 66.2128C66.0817 66.1084 66.7792 66.0396 67.4745 66.004C68.1697 65.9352 68.7628 65.8996 69.2492 65.8996C70.0156 65.8996 70.6419 65.9863 71.1284 66.1595C71.7192 66.2306 72.4167 66.3172 73.2164 66.4216C74.0515 66.4905 74.9223 66.6993 75.8263 67.048ZM73.1297 73.1986C73.2563 72.5056 73.3519 71.8748 73.4141 71.3061L73.4118 71.3039C73.5384 70.7353 73.6006 70.1689 73.6006 69.6002C72.6544 69.4114 71.7081 69.2848 70.7619 69.2226C69.8157 69.1582 68.5229 69.1271 66.8814 69.1271C66.566 69.1271 66.2195 69.1604 65.8396 69.2226H64.8934C64.8934 69.6646 64.9267 70.231 64.9889 70.9263C65.0511 71.6193 65.1155 72.3457 65.1777 73.1031C65.3043 73.8605 65.3998 74.618 65.462 75.3754C65.5242 76.0685 65.5886 76.6371 65.6508 77.0791C66.0929 77.0791 66.6304 77.0458 67.2612 76.9836C67.9543 76.857 68.9338 76.7948 70.1955 76.7948H71.6149C72.4367 76.7948 72.8787 76.5127 72.9409 75.9441C73.0675 75.3132 73.1297 74.6491 73.1297 73.9561V73.1986Z"
          fill="#E62E6B"
        />
      </SVG>
    </C.Button>
  );
}

const SVG = styled.svg<{ width: string; mt?: string }>`
  width: ${(p) => p.width};
  ${(p) =>
    p.mt &&
    css`
      margin-top: ${p.mt};
    `}
  height: auto;
`;
