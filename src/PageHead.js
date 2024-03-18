import Head from "next/head";
import { about } from "../Redux/selectors";
import { useSelector } from "react-redux";
const PageHead = ({ page }) => {
  const abouts=useSelector(about)

  return (
    <Head>
      <title>{abouts.name} | {page}</title>
    </Head>
  );
};

export default PageHead;
