import CommentsList from "../components/comment-list";
import EmailsList from "../components/email-list";
import MyList from "../components/my-list";

const HomePage: React.FC<{}> = () => {
  return (
    <>
      <EmailsList />
      <CommentsList />
      <MyList />
    </>
  );
};

export default HomePage;
