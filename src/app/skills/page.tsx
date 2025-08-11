import { SITE_TITLE } from "@/consts";
import MainContainer from "@/components/MainContainer";
import PageTitle from "@/components/PageTitle";
import SkillContainer from "@/components/skills/SkillContainer";

const description =
  "フロントエンド・サーバサイド・インフラの一通りをやっています。 これら以外にも Rust や FastAPI など、好きな言語やフレームワークがあります。";

export const metadata = {
  title: `Skills | ${SITE_TITLE}`,
  description: description,
};

export default function Skills() {
  return (
    <MainContainer>
      <PageTitle title="Skills" />
      <p className="text-base mb-10 text-text">{description}</p>
      <SkillContainer />
    </MainContainer>
  );
}
