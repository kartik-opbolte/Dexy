import { useRouter } from 'next/router';

export default function invite() {
  const router = useRouter();

  return null;
}

export async function getServerSideProps({ res }) {
  res.writeHead(302, { Location: 'https://discord.com/api/oauth2/authorize?client_id=1041326801860964364&permissions=8&scope=bot%20applications.commands' });
  res.end();

  return {
    props: {},
  };
}
