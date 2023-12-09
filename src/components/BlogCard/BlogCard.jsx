import { dataFormatToNow } from 'helppers/formatDateNow';
import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardPoster,
  CardText,
  CardTitle,
  Tag,
  UserBox,
  UserInfo,
  UserName,
  Date,
} from './BlogCard.styled';

export const BlogCard = ({
  poster,
  title,
  tag,
  description,
  avatar,
  name,
  postedAt,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardPoster src={poster} alt={title} />
      </CardHeader>
      <CardBody>
        <Tag>{tag}</Tag>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
      <CardFooter>
        <UserBox>
          <Avatar src={avatar} alt={name} />
          <UserInfo>
            <UserName>{name}</UserName>
            <Date>{dataFormatToNow(postedAt)}</Date>
          </UserInfo>
        </UserBox>
      </CardFooter>
    </Card>
  );
};
