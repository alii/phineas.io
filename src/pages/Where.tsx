import PageWrapper from './PageWrapper';
import Co from '../components/Co';
import styled from 'styled-components';
import HivenAppIcon from '../assets/images/hiven-app-icon.png';
import GigglAppIcon from '../assets/images/giggl-app-icon.jpg';
import HonkAppIcon from '../assets/images/honk-app-icon.jpg';
import Repo from '../components/Repo';
import { Helmet } from 'react-helmet';

const Where = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Where</title>
      </Helmet>
      <h1>Where I've Done It</h1>
      <h3>Companies</h3>
      <CoWrapper>
        <Co
          url="https://hiven.io"
          name="Hiven"
          iconReference={HivenAppIcon}
          tagline="Consumer social"
          role={'Founder & Developer'}
          what={'I founded Hiven back in 2019 to make it easy for anyone create premium groups.'}
        />
        <Co
          url="https://giggl.app"
          name="Giggl"
          iconReference={GigglAppIcon}
          tagline="Consumer social"
          role={'Co-founder & Developer'}
          what={'I co-founded Giggl back in early 2020 to re-create being together IRL, online'}
        />
        <Co
          url="https://honk.me"
          name="Honk"
          iconReference={HonkAppIcon}
          tagline="Consumer social"
          role={'Backend Engineer'}
          what={'I helped design and implement the realtime infrastructure at Honk using Elixir.'}
        />
      </CoWrapper>

      <h3>Open-source Projects</h3>
      <Repo
        name={'lanyard'}
        url={'https://github.com/phineas/lanyard'}
        primaryLanguage={'Elixir'}
        description="Expose your Discord presence to an API in <10 seconds (used on this site)"
      />
      <Repo
        name={'domain-lookup-tree'}
        url={'https://github.com/phineas/domain-lookup-tree'}
        primaryLanguage={'Rust'}
        description="A tree structure in Rust optimized for looking up domain names, with wildcard support"
      />
      <Repo
        name={'Waifusion'}
        url={'https://github.com/waifusion'}
        primaryLanguage={'Multiple'}
        description="Set of 16384 uniquely generated digital waifu NFT collectibles on the Ethereum blockchain"
      />
      <Repo
        name={'node_compass'}
        url={'https://github.com/hivenapp/node_compass'}
        primaryLanguage={'Elixir'}
        description="Automatic hash ring management for Elixir nodes"
      />
      <Repo
        name={'phineas.io'}
        url={'https://github.com/phineas/phineas.io'}
        primaryLanguage={'TypeScript'}
        description="This very website"
      />
    </PageWrapper>
  );
};

const CoWrapper = styled.div`
  display: grid;
  width: 100%;
  gap: 2rem 2rem;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export default Where;
