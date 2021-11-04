import * as S from "./style";

const Button = () => {
  const click = () => {
    console.log("clicked");
  };

  return (
    <S.ButtonWrapper>
      <S.StyledDislike onClick={click} />
      <S.StyledLike onClick={click} />
    </S.ButtonWrapper>
  );
};

export default Button;
