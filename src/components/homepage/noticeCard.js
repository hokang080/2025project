import styled from "styled-components";

function NoticeCard({ content, isNotice, d_day, onClick, onDelete, showDelete = true }) {
  return (
    <CardWrapper>
      <CardContent onClick={onClick} style={{ cursor: onClick ? "pointer" : "default" }}>
        <TextSection>
          <CardText title={content}>{content}</CardText>
        </TextSection>
        {isNotice && <D_Day>D-{d_day}</D_Day>}
      </CardContent>
      {showDelete && (
        <DeleteAction onClick={onDelete} title="삭제">
          <CloseIcon>✕</CloseIcon>
        </DeleteAction>
      )}
    </CardWrapper>
  );
}
export default NoticeCard;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #ffffff;
  border: 1.5px solid #dcdde1;
  border-radius: 16px;
  padding: 14px 18px;
  margin-bottom: 12px;
  box-sizing: border-box;
  transition: all 0.25s ease;

  &:hover {
    border-color: #498349;
  }
`;

const CardContent = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  overflow: hidden;
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: left;
  overflow: hidden;
  margin-right: 12px;
`;

const CardText = styled.p`
  margin: 0;
  font-size: 14.5px;
  font-weight: 700;
  color: #2d3436;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const D_Day = styled.div`
  font-weight: 800;
  font-size: 14.5px;
  color: #2d3436;
  flex-shrink: 0;
  margin-right: 4px;
`;

const DeleteAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: 1px solid #ff7675;
  border-radius: 8px;
  background-color: transparent;
  margin-left: 12px;
  transition: all 0.2s ease;
  cursor: pointer;
  flex-shrink: 0;
  
  &:hover {
    background-color: #ffebee;
  }
`;

const CloseIcon = styled.span`
  color: #d63031;
  font-size: 14px;
  font-weight: 800;
`;
