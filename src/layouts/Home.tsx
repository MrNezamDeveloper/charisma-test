import ComentsList from "../components/comment-list/List";
import EmailsList from "../components/email-list/EmailsList";
import MyList from "../components/my-list/MyList";

const Home: React.FC<{}> = () => {
  return (
    <>
      <EmailsList />
      <ComentsList />
      <MyList />
    </>
  );
};

export default Home;
