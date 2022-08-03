import { Input, InputContainer, Label, MainContainer, ProfileCreateForm, SubmitBtn, SubmitText } from "./styles";

const Profiles = () => {
  return (
    <MainContainer>
      <ProfileCreateForm>
        <InputContainer>
            <Label>Username</Label>
            <Input></Input>
        </InputContainer>
        <InputContainer>
            <Label>Email</Label>
            <Input></Input>
        </InputContainer>
        <InputContainer>
            <Label>Password</Label>
            <Input></Input>
        </InputContainer>
        <SubmitBtn>
            <SubmitText>CREATE MY PROFILE</SubmitText>
        </SubmitBtn>
      </ProfileCreateForm>
    </MainContainer>
  );
};

export default Profiles;
