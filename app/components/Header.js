import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import style from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={`${style.wrapper}`}>
      <div className="flex space-x-3 items-center justify-center">

      <div className={`${style.title}`}>WHAM Lottery</div>
      <img src="https://static.wixstatic.com/media/8f91c6_9ffe599a68e64663a01dd20fe39b8149~mv2.png/v1/fill/w_698,h_730,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/WHAM%20v2.png" alt="" className="w-10 cursor-pointer h-10"/>
      </div>

      <WalletMultiButton/>
    </div>
  );
};

export default Header;
