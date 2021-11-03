import { Card } from "components";
import Button from "components/Button/Button";
import { Logo } from "icons";
import * as S from "styles/pages/Home";

const Home = () => {
  return (
    <S.Container>
      <Logo />
      <Card />
      <Button />
    </S.Container>
  );
};

export default Home;
