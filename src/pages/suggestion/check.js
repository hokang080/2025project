import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogoIcon } from "../../components/icons/logoIcon";
import Menubar from "../../components/common/menubar";
import { apiService } from "../../services/api";

export default function SugBlockList() {
  const [suggestions, setSuggestions] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = apiService.auth.getCurrentUser();
    if (!user) {
      navigate("/login");
      return;
    }
    setCurrentUser(user);

    const loadData = async () => {
      const data = await apiService.suggestions.getAll();
      setSuggestions(data);
    };
    loadData();
  }, [navigate]);

  const onChangeAnswer = (id, value) => {
    setSuggestions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, answer: value } : s))
    );
  };

  const onSave = async (id) => {
    if (!currentUser?.isLeader) {
      alert("답변 등록 권한이 없습니다. (학급 임원만 가능)");
      return;
    }

    const target = suggestions.find((s) => s.id === id);
    const text = (target?.answer ?? "").trim();

    await apiService.suggestions.updateAnswer(id, text);
    const updated = await apiService.suggestions.getAll();
    setSuggestions(updated);

    alert("저장 완료!");
  };

  return (
    <PageContainer>
      {/* 고정 헤더 */}
      <Link to={"/suggestion"} style={{ textDecoration: "none" }}>
        <LogoBox>
          <LogoIcon />
        </LogoBox>
      </Link>

      {/* 스크롤 콘텐츠 영역 */}
      <ScrollArea>
        <PageTitle>우리반 건의함 확인</PageTitle>
        {suggestions.length === 0 ? (
          <EmptyMsg>등록된 건의사항이 없습니다.</EmptyMsg>
        ) : (
          suggestions.map((item) => (
            <Card key={item.id}>
              <Title>{item.title}</Title>
              <Content>{item.content}</Content>

              {currentUser?.isLeader ? (
                <>
                  <Label>답변 작성</Label>
                  <AnswerArea
                    value={item.answer || ""}
                    onChange={(e) => onChangeAnswer(item.id, e.target.value)}
                    placeholder="답변을 작성해주세요"
                  />
                  <BtnRow>
                    <SaveButton onClick={() => onSave(item.id)}>저장</SaveButton>
                  </BtnRow>
                </>
              ) : (
                <AnswerDisplay>
                  <Label>답변</Label>
                  <AnswerText>
                    {item.answer ? item.answer : "아직 답변이 등록되지 않았습니다."}
                  </AnswerText>
                </AnswerDisplay>
              )}
            </Card>
          ))
        )}
      </ScrollArea>

      {/* 고정 푸터 */}
      <Menubar/>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: #f5f7fa;
  overflow: hidden;
`;

const LogoBox = styled.div`
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
  gap: 20px;

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
  margin: 10px 0 4px 0;
`;

const Card = styled.div`
  border: 1.5px solid #dcdde1;
  border-radius: 16px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  transition: all 0.25s ease;

  &:hover {
    border-color: #498349;
    box-shadow: 0 6px 18px rgba(73, 131, 73, 0.08);
  }
`;

const Title = styled.h3`
  margin: 0 0 12px 0;
  font-size: 16px;
  font-weight: 800;
  color: #2d3436;
  border-bottom: 1.5px solid #f1f2f6;
  padding-bottom: 8px;
`;

const Content = styled.p`
  margin: 0 0 16px 0;
  font-size: 14px;
  color: #555;
  line-height: 1.5;
  white-space: pre-line;
`;

const Label = styled.div`
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #498349;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const AnswerArea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  min-height: 90px;
  border: 1.5px solid #dcdde1;
  border-radius: 12px;
  padding: 12px 16px;
  font-size: 13.5px;
  font-family: inherit;
  resize: vertical;
  background-color: #fafafa;
  transition: all 0.25s ease;

  &:focus {
    outline: none;
    border-color: #498349;
    background-color: #ffffff;
    box-shadow: 0 0 0 3px rgba(73, 131, 73, 0.15);
  }
`;

const AnswerDisplay = styled.div`
  background-color: #f5fcf5;
  padding: 14px 18px;
  border-radius: 12px;
  border-left: 4px solid #498349;
`;

const AnswerText = styled.p`
  margin: 0;
  font-size: 13.5px;
  color: #2f3640;
  line-height: 1.5;
  font-weight: 500;
`;

const BtnRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 12px;
`;

const SaveButton = styled.button`
  border: none;
  background: #498349;
  color: white;
  font-weight: bold;
  font-size: 13px;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(73, 131, 73, 0.2);
  transition: all 0.2s ease;
  
  &:hover {
    background: #386338;
    transform: translateY(-1px);
    box-shadow: 0 6px 12px rgba(73, 131, 73, 0.3);
  }
  &:active {
    transform: translateY(0);
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