import styled from '@emotion/styled';
import xw from 'xwind';

const Area = styled.div(
  xw`flex items-center justify-center min-h-screen bg-gray-200`
);
const Quote = styled.q(xw`italic text-gray-600`);
const Card = styled.div(
  xw`max-w-sm p-6 tracking-wide bg-white border-2 border-gray-300 rounded-md shadow-lg`
);
const CardHeader = styled.div(xw`flex items-center mb-4`);
const CardImage = styled.img(xw`w-20 border-2 border-gray-300 rounded-full`);
const HeaderTextArea = styled.div(xw`ml-6 leading-5`);
const Header4 = styled.h4(xw`text-xl font-semibold`);
const Subheader = styled.h5(xw`font-semibold text-green-600`);

const Home = (): JSX.Element => (
  <Area>
    <Card>
      <CardHeader>
        <CardImage alt="tower" src="https://picsum.photos/seed/nextjs/200" />
        <HeaderTextArea>
          <Header4>Next app</Header4>
          <Subheader>React Framework</Subheader>
        </HeaderTextArea>
      </CardHeader>
      <Quote>Initialized with typescript and tailwind.</Quote>
    </Card>
  </Area>
);

export default Home;
