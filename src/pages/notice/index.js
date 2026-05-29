import styled from "styled-components";
import AuthInput from "../../components/common/authInput";
import { useNavigate } from "react-router-dom";
import { LogoIcon } from "../../components/icons/logoIcon";
import Menubar from "../../components/common/menubar";
import EndButton from "../../components/buttons/endButton";
import { useState, useEffect } from "react";
import { apiService } from "../../services/api";

function NoticePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [notices, setNotices] = useState([]);
  const [activeTab, setActiveTab] = useState("list");
  const navigate = useNavigate();

  useEffect(() => {
    const user = apiService.auth.getCurrentUser();
    if (!user) {
      navigate("/login");
      return;
    }
    setCurrentUser(user);

    const loadData = async () => {
      const storedNotices = await apiService.notices.getAll();
      setNotices(storedNotices);
    };
    loadData();
  }, [navigate]);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("이미지 파일만 선택할 수 있어요!");
      e.target.value = "";
      return;
    }

    setImageFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSave = async () => {
    if (!title.trim() || !content.trim()) {
      alert("제목과 세부사항을 모두 입력해 주세요.");
      return;
    }

    await apiService.notices.create({
      title,
      content,
      imageUrl: previewUrl || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=60",
    });

    alert("공지사항이 등록되었습니다!");
    const updated = await apiService.notices.getAll();
    setNotices(updated);
    setTitle("");
    setContent("");
    setImageFile(null);
    setPreviewUrl("");
    setActiveTab("list");
  };

  const handleDelete = async (id, e) => {
    e.stopPropagation();
    if (!currentUser?.isLeader) {
      alert("삭제 권한이 없습니다.");
      return;
    }
    if (window.confirm("공지사항을 삭제하시겠습니까?")) {
      await apiService.notices.delete(id);
      const updated = await apiService.notices.getAll();
      setNotices(updated);
    }
  };

  return (
    <PageContainer>
      {/* 고정 헤더 */}
      <LogoHeader>
        <LogoIcon />
      </LogoHeader>

      {/* 스크롤 콘텐츠 영역 */}
      <ScrollArea>
        <PageTitle>우리반 공지사항</PageTitle>

        {currentUser?.isLeader && (
          <TabContainer>
            <TabButton
              $active={activeTab === "list"}
              onClick={() => setActiveTab("list")}
            >
              공지 목록
            </TabButton>
            <TabButton
              $active={activeTab === "write"}
              onClick={() => setActiveTab("write")}
            >
              공지 작성
            </TabButton>
          </TabContainer>
        )}

        {(!currentUser?.isLeader || activeTab === "list") ? (
          <NoticeListContainer>
            {notices.length === 0 ? (
              <EmptyMsg>등록된 공지사항이 없습니다.</EmptyMsg>
            ) : (
              notices.map((item) => (
                <NoticeListItemCard
                  key={item.id}
                  onClick={() => navigate("/notice_detail", { state: { notice: item } })}
                >
                  <NoticeItemHeader>
                    <NoticeItemTitle>{item.title}</NoticeItemTitle>
                    <DDay>D-{item.d_day || "5"}</DDay>
                  </NoticeItemHeader>

                  {item.imageUrl && (
                    <NoticeItemImg src={item.imageUrl} alt={item.title} />
                  )}
                  <NoticeItemDesc>{item.content}</NoticeItemDesc>

                  <NoticeFooterRow>
                    {currentUser?.isLeader && (
                      <DeleteBtn onClick={(e) => handleDelete(item.id, e)}>삭제</DeleteBtn>
                    )}
                    <NoticeItemDate>{item.date}</NoticeItemDate>
                  </NoticeFooterRow>
                </NoticeListItemCard>
              ))
            )}
          </NoticeListContainer>
        ) : (
          <FormContainer>
            <AuthInput
              label={"제목"}
              placeholder={"제목을 입력해 주세요"}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <UploadSection>
              <UploadLabel>사진 선택</UploadLabel>
              <FileSelectButton as="label">
                사진 업로드
                <HiddenFileInput
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </FileSelectButton>
              {imageFile && <FileNameDisplay>{imageFile.name}</FileNameDisplay>}
            </UploadSection>

            {previewUrl && (
              <PreviewBox>
                <PreviewImg src={previewUrl} alt="미리보기" />
              </PreviewBox>
            )}

            <AuthInput
              label={"세부사항"}
              placeholder={"자세한 공지내용을 입력해주세요"}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />

            <ButtonBox onClick={handleSave}>
              <EndButton />
            </ButtonBox>
          </FormContainer>
        )}
      </ScrollArea>

      {/* 고정 푸터 */}
      <Menubar />
    </PageContainer>
  );
}
export default NoticePage;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: #f5f7fa;
  overflow: hidden;
`;

const LogoHeader = styled.div`
  width: 100%;
  padding: 24px 24px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  flex-shrink: 0;
  background-color: #f5f7fa;

  svg {
    width: 50px;
    height: 50px;
  }
`;

const ScrollArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px 24px 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const PageTitle = styled.h2`
  font-size: 20px;
  font-weight: 800;
  color: #2d3436;
  text-align: center;
  margin: 10px 0 20px 0;
`;

const TabContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: #e2e8f0;
  border-radius: 14px;
  padding: 4px;
  margin-bottom: 20px;
  box-sizing: border-box;
`;

const TabButton = styled.button`
  flex: 1;
  border: none;
  background-color: ${props => props.$active ? "#ffffff" : "transparent"};
  color: ${props => props.$active ? "#498349" : "#7f8c8d"};
  font-size: 13.5px;
  font-weight: 800;
  padding: 10px 0;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: ${props => props.$active ? "0 4px 10px rgba(0, 0, 0, 0.05)" : "none"};
  transition: all 0.2s ease;

  &:hover {
    color: #498349;
  }
`;

const NoticeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const NoticeListItemCard = styled.div`
  background: #ffffff;
  border: 1.5px solid #dcdde1;
  border-radius: 16px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
  box-sizing: border-box;
  text-align: left;

  &:hover {
    border-color: #498349;
    box-shadow: 0 6px 18px rgba(73, 131, 73, 0.08);
  }
`;

const NoticeItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const NoticeItemTitle = styled.h3`
  font-size: 15px;
  font-weight: 800;
  color: #2d3436;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  margin-right: 12px;
`;

const DDay = styled.div`
  font-weight: bold;
  font-size: 11px;
  color: #d63031;
  background-color: #ffebee;
  padding: 3px 8px;
  border-radius: 6px;
  flex-shrink: 0;
`;

const NoticeItemImg = styled.img`
  width: 100%;
  max-height: 140px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 12px;
  border: 1px solid #f1f2f6;
`;

const NoticeItemDesc = styled.p`
  font-size: 13.5px;
  color: #555;
  margin: 0 0 14px 0;
  line-height: 1.45;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const NoticeFooterRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1.5px solid #f1f2f6;
  padding-top: 10px;
`;

const NoticeItemDate = styled.div`
  font-size: 11px;
  color: #999;
  font-weight: 600;
`;

const DeleteBtn = styled.button`
  background: transparent;
  border: none;
  color: #e74c3c;
  font-size: 11px;
  font-weight: bold;
  cursor: pointer;
  padding: 0;
  text-decoration: underline;
`;

const FormContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 20px;
  border: 1.5px solid #dcdde1;
  box-sizing: border-box;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
`;

const UploadSection = styled.div`
  margin-bottom: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const UploadLabel = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: #498349;
  margin-bottom: 6px;
`;

const FileSelectButton = styled.div`
  width: 100%;
  height: 44px;
  border: 1.5px dashed #498349;
  border-radius: 12px;
  background-color: rgba(73, 131, 73, 0.03);
  color: #498349;
  font-size: 13.5px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
  box-sizing: border-box;

  &:hover {
    background-color: rgba(73, 131, 73, 0.08);
  }
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const FileNameDisplay = styled.div`
  font-size: 12px;
  color: #555;
  margin-top: 6px;
  font-weight: 600;
`;

const PreviewBox = styled.div`
  width: 100%;
  margin-bottom: 16px;
  border-radius: 12px;
  overflow: hidden;
  border: 1.5px solid #dcdde1;
`;

const PreviewImg = styled.img`
  width: 100%;
  max-height: 180px;
  object-fit: cover;
  display: block;
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin-top: 24px;
  
  &:hover {
    transform: translateY(-1px);
  }
`;

const EmptyMsg = styled.div`
  text-align: center;
  font-size: 13px;
  color: #a0a0a0;
  padding: 40px 0;
  border: 2px dashed #e2e8f0;
  border-radius: 16px;
  background-color: #ffffff;
`;
