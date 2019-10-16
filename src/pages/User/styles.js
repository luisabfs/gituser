import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Header = styled.View`
  align-items: center;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: #eee;
`;

export const Name = styled.Text`
  font-size: 20px;
  color: #333;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
`;

export const Bio = styled.Text`
  font-size: 14px;
  line-height: 18px;
  color: #999;
  margin-top: 5px;
  text-align: center;
`;
