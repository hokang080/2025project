import styled from "styled-components";
import AuthInput from "../../components/common/authInput";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../components/icons/logoIcon";
import Menubar from "../../components/common/menubar";
import EndButton from "../../components/buttons/endButton";
import { useState } from "react";

function NoticePage() {

  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 이미지 파일만 허용 (선택)
    if (!file.type.startsWith("image/")) {
      alert("이미지 파일만 선택할 수 있어요!");
      e.target.value = "";
      return;
    }

    setImageFile(file);

    // 미리보기
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  };

  return (
    <>
      <Link to={"/home"}>
        <LogoBox>
          <LogoIcon />
        </LogoBox>
      </Link>
      <Wrapper>
        <AuthInput label={"제목"} placeholder={"제목을 입력해 주세요"} />
        <Label>사진선택</Label>
        <FileInput
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />

        {previewUrl && (
          <PreviewBox>
            <PreviewImg src={previewUrl} alt="미리보기" />
            <FileName>{imageFile?.name}</FileName>
          </PreviewBox>
        )}

        <AuthInput label={"세부사항"} placeholder={"자세한 공지내용을 입력해주세요"} />
        <ButtonBox>
          <EndButton/>
        </ButtonBox>

      </Wrapper>
      <Menubar />
    </>
  );
}
export default NoticePage;



const Wrapper = styled.div`
  width: 80%;
  display: block;
`;

const LogoBox = styled.div`
  margin: auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* 중앙 정렬 */

  margin: 0 auto; /* 가운데 정렬 */
`;

const ButtonBox = styled.div`
  padding: 50px 0;

  width: 100%;
  display: flex;
  justify-content: center;
`;

const Label = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-start;
`;

const FileInput = styled.input`
  width: 100%;
  margin: 10px 0 20px 0;
`;

const PreviewBox = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const PreviewImg = styled.img`
  width: 100%;
  max-height: 220px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid #ddd;
`;

const FileName = styled.div`
  margin-top: 8px;
  font-size: 12px;
  color: #666;
`;
