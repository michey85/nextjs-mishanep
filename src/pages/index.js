import { createClient } from 'contentful'

import { Hero } from '../components/Hero'
import { Features } from '../components/Features'
import { Courses } from '../components/Courses'
import { Bio } from '../components/Bio'
import { YouTubeList } from '../components/YouTubeList'
import { Reviews } from '../components/Reviews'
import { Partners } from '../components/Partners'
import { Footer } from '../components/Footer'

import {useHero, useBio, useCourses, useYouTubeList, useReview, usePartners, usePageContent} from '../helpers';

// TODO: Features хранить в БД
// TODO: экшны для био и хиро замапить на данные с сервера?
// TODO: переделать картинки на встроенные в некст

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

  const {items: homePageContent} = await client.getEntries({
      content_type: 'homePageContent'
    });

  
  const {
    youtube,
    partners,
    courses,
    review,
    bio,
    hero,
  } = usePageContent(homePageContent);
    
  return {
    props: {
      courses: useCourses(courses),
      hero: useHero(hero),
      bio: useBio(bio),
      review: useReview(review),
      partners: usePartners(partners),
      playlists: useYouTubeList(youtube),
    }
  };
}

const Index = ({
  courses,
  playlists,
  hero,
  bio,
  review,
  partners,
}) => (
  <>
    <Hero
      {...hero}
    />
    <Features />
    <Courses {...courses} />
    <Bio
      {...bio}
    />
    <YouTubeList {...playlists} />
    <Reviews {...review} />
    <Partners {...partners} />
    
    <Footer />
  </>
);

export default Index
